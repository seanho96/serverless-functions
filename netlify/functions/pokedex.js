
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config();

const handler = async function (event) {
  const eventBody = JSON.parse(event.body)
  const POKE_API = `https://pokeapi.co/api/v2/pokemon/${eventBody.pokemon}`

  try {
      const response = await fetch(POKE_API)
      const data = await response.json()
      
      return {
        statusCode: 200,
        body: JSON.stringify({
          pokemon: data
        })
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: error.toString()
        }
    }
}

export { handler };
