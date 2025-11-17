export async function getTokenTitles(token) {
  const displayModes = CONST.TOKEN_DISPLAY_MODES
  const displayName = token.displayName

  // If the "displayName" setting is set to "Always"
  // or "On Hover," then show the name on the token
  // Using the name on the token is most accurate,
  // and prevents accidental spoilers of a character's
  // "true name" if the one on the actor sheet is different
  // from the one on the token.
  if (displayName === displayModes.ALWAYS || displayName === displayModes.HOVER) {
    return {
      actor: token.name,
      token: token.name
    }
  }

  // If "displayName" is anything else, just show
  // "Actor Image" or "Token Image"
  return {
    actor: game.i18n.localize('STA.ActorImg'),
    token: game.i18n.localize('STA.TokenImg')
  }
}
