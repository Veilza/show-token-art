import { registerKeybindings } from './scripts/register-keybindings.js'

Hooks.once('init', async function () {
  registerKeybindings()
})
