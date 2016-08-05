
export const GLOBALS = {
    playerLevelIncrement:  5,
    skillLevelBaseCost: 10,
    timestep_ms: 3000,

    // TODO: Probably need compatibility versions at some point. Bleh.
    localStorageToken: 'joat',
    backgroundSaveFrequency_ms: 1000 * 60,

    // The default minimum delay of actions across zones in ms
    defaultBaseZoneDelay: 500,

    // Disabling this for now. Stuff is changing too fast and the serialization
    // code is therefore pretty prone to breaking out of version compat issues
    loadSaves: false,

    actionBarUpdateInterval: 50,

    // Every 5 levels of difference leads to a doubling of time.
    inexperiencePenaltyBase: 1.0, //1487,
    
    inventoryCapacity: 5,

    dropRate: .1
}