var filters = {
  x_rotation: {
    name: 'x_rotation',
    type: 'range',
    multiple: false,
    disallow_negative: true,
  },
  y_rotation: {
    name: 'y_rotation',
    type: 'range',
    multiple: false,
    disallow_negative: true,
  },
  z_rotation: {
    name: 'z_rotation',
    type: 'range',
    multiple: false,
    disallow_negative: true,
  },
  x: {
    name: 'x',
    type: 'number',
    multiple: false,
    disallow_negative: true,
  },
  y: {
    name: 'y',
    type: 'number',
    multiple: false,
    disallow_negative: true,
  },
  z: {
    name: 'z',
    type: 'number',
    multiple: false,
    disallow_negative: true,
  },
  dx: {
    name: 'dx',
    type: 'number',
    multiple: false,
    disallow_negative: true,
  },
  dy: {
    name: 'dy',
    type: 'number',
    multiple: false,
    disallow_negative: true,
  },
  dz: {
    name: 'dz',
    type: 'number',
    multiple: false,
    disallow_negative: true,
  },
  distance: {
    name: 'distance',
    type: 'range_positive',
    multiple: false,
    disallow_negative: true,
  },
  gamemode: {
    name: 'gamemode',
    type: 'list',
    values: ['creative', 'spectator', 'survival', 'adventure'],
    multiple: 'negative',
  },
  sort: {
    name: 'sort',
    type: 'list',
    values: ['nearest', 'furthest', 'random', 'arbitrary'],
    multiple: false,
    disallow_negative: true,
  },
  limit: {
    name: 'limit',
    type: 'positive_integer',
    multiple: false,
    disallow_negative: true,
    //Negative`?
  },
  scores: {
    name: 'scores',
    type: 'scores',
    multiple: false,
    disallow_negative: true,
  },
  team: {
    name: 'team',
    type: 'string', //Limited
    multiple: 'negative'
  },
  type: {
    name: 'type',
    type: 'entity',
    multiple: 'negative',
  },
  tag: {
    name: 'tag',
    type: 'tag', //Or Array
    multiple: 'all'
  },
  nbt: {
    name: 'nbt',
    type: 'nbt',
    multiple: 'all'
  },
  advancements: {
    name: 'advancements',
    type: 'advancements',
    multiple: false,
    disallow_negative: true,
  }
};


module.exports = filters;