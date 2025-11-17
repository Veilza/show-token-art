const { HandlebarsApplicationMixin } = foundry.applications.api

export class MediaPopoutApplication extends HandlebarsApplicationMixin(
  foundry.applications.apps.ImagePopout
) {
  static DEFAULT_OPTIONS = {
    classes: ['show-token-art']
    // Use this when we implement the image gallery
    //id: 'show-token-art-popout',
  }

  _getHeaderControls() {
    const controls = super._getHeaderControls()

    return controls
  }

  // Set up the template part(s), of which there's only one for now
  static PARTS = {
    popout: {
      template: 'templates/apps/image-popout.hbs'
    }
  }

  // Pass the data into the application window
  async _prepareContext() {
    const data = await super._prepareContext({
      isFirstRender: false
      isFirstRender: true
    })

    data.isVideo = this.video

    return data
  }
}
