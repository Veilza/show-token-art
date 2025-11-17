import { MediaPopoutApplication } from '../applications/media-popout-application.js'
import { checkDuplicates } from './check-duplicates.js'

export class ShowTokenArt {
  // Displays an image popup with the image and title from the
  // selected or targeted actor
  static async handleShowTokenArt(altImage, showToEveryone) {
    const targetedObject = game.user.targets
    const selectedObject = game.canvas.activeLayer.controlled

    const results = await checkDuplicates(targetedObject, selectedObject, altImage)

    results.forEach((object) => {
      this.createImagePopup(object.actorImage, object.actorTitle, showToEveryone)
    })
  }

  // Creates and renders a custom image popout
  static async createImagePopup(src, title, showToEveryone) {
    const popup = await new MediaPopoutApplication({
      src,
      shareable: true,
      window: {
        title
      }
    }).render(true)

    if (game.user.isGM && showToEveryone) {
      popup.shareImage()
    } else {
      return popup
    }
  }
}
