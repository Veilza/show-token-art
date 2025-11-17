import { ShowTokenArt } from './show-token-art-logic.js'

export const registerKeybindings = async function () {
  // Keybinding for opening the token art
  game.keybindings.register('show-token-art', 'token-art-open', {
    name: 'STA.keybind.tokenImage.name',
    hint: 'STA.keybind.tokenImage.hint',
    editable: [
      {
        key: 'KeyI',
        modifiers: ['Shift']
      }
    ],
    onDown: () => ShowTokenArt.handleShowTokenArt(false)
  })

  // Keybinding for opening the avatar art
  game.keybindings.register('show-token-art', 'avatar-art-open', {
    name: 'STA.keybind.actorImage.name',
    hint: 'STA.keybind.actorImage.hint',
    editable: [
      {
        key: 'KeyO',
        modifiers: ['Shift']
      }
    ],
    onDown: () => ShowTokenArt.handleShowTokenArt(true)
  })
}
