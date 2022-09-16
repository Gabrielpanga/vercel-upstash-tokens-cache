import got, { HTTPError } from 'got'

const {
  AUTH0_DOMAIN: auth0Domain = '',
  AUTH0_CLIENT_ID: auth0ClientId = '',
  AUTH0_CLIENT_SECRET: auth0ClientSecret = '',
} = process.env

export async function getAuth0M2MToken(audience: string): Promise<string> {
  const auth0TokenUrl = `https://${auth0Domain}/oauth/token`
  try {
    const {
      body: { access_token: accessToken },
    } = await got<{ access_token: string }>(auth0TokenUrl, {
      method: 'post',
      responseType: 'json',
      json: {
        client_id: auth0ClientId,
        client_secret: auth0ClientSecret,
        audience,
        grant_type: 'client_credentials',
      },
    })
    return accessToken
  } catch (error) {
    if (error instanceof HTTPError) {
      const message = `Could not get Auth0 M2M api key for AuthApi (auth0 clientId: ${auth0ClientId}) - ${error.message}`
      console.error(message, error.response?.body)
    }
    throw error
  }
}
