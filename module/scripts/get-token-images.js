export async function getTokenImages(token, actor) {
  const mysteryDefaults = [
    'icons/svg/mystery-man.svg', // Foundry default icon
    'systems/pf2e/icons/default-icons/character.svg', // PF2e default icon
    'systems/pf2e/icons/default-icons/npc.svg', // PF2e default icon for NPCs
    'systems/pf2e/icons/default-icons/familiar.svg', // PF2e default icon for familiars
    'systems/pf2e/icons/default-icons/hazard.svg', // PF2e default icon for hazards
    'systems/pf2e/icons/default-icons/vehicle.svg' // PF2e default icon for vehicles
  ]

  // Set the actor image and token image
  let actorImg = token.actor.img || actor.img
  let tokenImg = token.texture.src

  // Check if either actorImg or tokenImg are set to a default icon
  const avatarMystery = mysteryDefaults.includes(actorImg)
  const tokenMystery = mysteryDefaults.includes(tokenImg)

  // If either of the actorImg or tokenImg are set to default
  // then replace the default with the opposing image path
  if (avatarMystery) {
    actorImg = avatarMystery ? tokenImg : actorImg
  } else if (tokenMystery) {
    tokenImg = tokenMystery ? actorImg : tokenImg
  }

  // Return the resulting actor and token images after all data manipulation is done
  return { actor: actorImg, token: tokenImg }
}
