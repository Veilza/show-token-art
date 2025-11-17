import { getTokenData } from './get-token-data.js'

/**
 * Function to check all selected and targeted tokens and ensure we won't
 * display any duplicates
 */
export async function checkDuplicates(targetedObject, selectedObject, altImage) {
  const allImages = []

  // Process target objects
  for (const object of targetedObject) {
    // Grab object data for 'targeted' objects
    const { image, title } = await getObjectData(object, altImage)

    // No need for the below object if there's no image
    if (!image) return

    const isDuplicate = allImages.some((actor) => actor.actorImage === image)
    if (!isDuplicate) {
      allImages.push({ actorImage: image, actorTitle: title })
    }
  }

  // Process selected objects
  for (const object of selectedObject) {
    // Grab object data for 'selected' objects
    const { image, title } = await getObjectData(object, altImage)

    // No need for the below object if there's no image
    if (!image) return

    const isDuplicate = allImages.some((actor) => actor.actorImage === image)
    if (!isDuplicate) {
      allImages.push({ actorImage: image, actorTitle: title })
    }
  }

  return allImages
}

// Return the apprpriate image and title for the token
async function getObjectData(object, altImage) {
  // Make sure it's a token, or things get a bit messy
  if (object.document.documentName === 'Token') {
    return await getTokenData(object, altImage)
  }

  // If it's not a token, return null
  return { image: null, title: '' }
}
