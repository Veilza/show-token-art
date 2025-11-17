const { HandlebarsApplicationMixin } = foundry.applications.api

export class MediaPopoutApplication extends HandlebarsApplicationMixin(
  foundry.applications.apps.ImagePopout
) {
  static DEFAULT_OPTIONS = {
    classes: ['show-token-art']
  }

  _getHeaderControls() {
    const controls = this.options.window.controls

    return controls
  }

  // Localize the title here instead of the DEFAULT_OPTIONS because i18n doesn't
  // initiate before this application is registered
  get title() {
    return game.i18n.localize('STA.ModuleName')
  }

  // Set up the template part(s), of which there's only one for now
  static PARTS = {
    form: {
      template: 'modules/show-token-art/templates/art-popout.hbs'
    }
  }

  // Pass the data into the application window
  async _prepareContext() {
    const data = await super._prepareContext({
      isFirstRender: false
    })

    data.isVideo = this.video

    return data
  }
}
