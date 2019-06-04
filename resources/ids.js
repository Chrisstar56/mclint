var resources = {
  entity: {}
};
//TODO: entity search and such
resources.entity.list = [
"area_effect_cloud", "armor_stand", "arrow", "bat", "blaze", "boat", "cat", "cave_spider", "chest_minecart", "chicken", "cod", "command_block_minecart",
"cow", "creeper", "dolphin", "donkey", "dragon_fireball", "drowned", "egg", "elder_guardian", "end_crystal", "ender_dragon", "ender_pearl", "enderman",
"endermite", "evoker", "evoker_fangs", "experience_bottle", "experience_orb", "eye_of_ender", "falling_block", "fireball", "firework_rocket", "fox",
"furnace_minecart", "ghast", "giant", "guardian", "hopper_minecart", "horse", "husk", "illusioner", "iron_golem", "item", "item_frame", "leash_know",
"lightning_bolt", "llama", "llama_spit", "magma_cube", "minecart", "mooshroom", "mule", "ocelot", "painting", "panda", "parrot", "phantom", "pig",
"pillager", "polar_bear", "potion", "pufferfish", "rabbit", "ravager", "salmon", "sheep", "shulker", "shulker_bullet", "silverfish", "skeleton",
"skeleton_horse", "slime", "small_fireball", "snow_golem", "snowball", "spawner_minecart", "spectral_arrow", "spider", "squid", "stray", "tnt", "tnt_minecart",
"trader_llama", "trident", "tropical_fish", "turtle", "vex", "villager", "vindicator", "wandering_trader", "witch", "wither", "wither_skeleton", "wither_skull",
"wolf", "zombie", "zombie_horse", "zombie_pigman", "zombie_villager"
];

resources.entity.isValid = function(name){
  if(name.startsWith("minecraft:")){
    name = name.substr(10);
  }
  if(resources.entity.list.includes(name)){
    return true;
  }
  return false;
};
module.exports = resources;