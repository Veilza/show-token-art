import { getTokenImages } from './get-token-images.js'
import { getTokenTitles } from './get-token-titles.js'

export async function getTokenData(token, avatarImage) {
  // Token to get the data for
  const actor = await game.actors.get(token.document.id)
  // Grab token images
  const images = await getTokenImages(token.document, actor)
  // Grab token titles
  const titles = await getTokenTitles(token.document, actor)

  // Return the image and title;
  // If avatarImage is true, show the avatar
  // If not, show the token image and token name
  return {
    image: avatarImage ? images.actor : images.token,
    title: avatarImage ? titles.actor : titles.token
  }
}
