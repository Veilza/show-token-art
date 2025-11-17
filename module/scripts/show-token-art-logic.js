import { MediaPopoutApplication } from '../applications/media-popout-application.js'
import { checkDuplicates } from './check-duplicates.js'

export class ShowTokenArt {
  // Displays an image popup with the image and title from the
  // selected or targeted actor
  static async handleShowTokenArt(altImage) {
    const targetedObject = game.user.targets
    const selectedObject = game.canvas.activeLayer.controlled

    const results = await checkDuplicates(targetedObject, selectedObject, altImage)

    results.forEach((object) => {
      this.createImagePopup(object.actorImage, object.actorTitle)
    })
  }

  // Creates and renders a custom image popout
  static async createImagePopup(src, title) {
    return new MediaPopoutApplication({
      src,
      shareable: true,
      window: {
        title
      }
    }).render(true)
  }
}
