const MenuData = {
  A: {
    scone: {
      ratio: 1 / 2.5,
      serving: "each",
    },
    cream: {
      ratio: 1 / 30,
      serving: "tub",
    },
    biscuit: {
      ratio: 1.5,
      serving: "pcs",
    },
    muffin: {
      ratio: 1.5,
      serving: "each",
    },
  },

  B: {
    slice: {
      ratio: 1 / 25,
      serving: "large",
    },
    savoury: {
      ratio: 1 / 10,
      serving: "platter",
    },
  },

  C: {
    club: {
      ratio: 1 / 10,
      serving: "platter",
    },
    macaron: {
      ratio: 1,
      serving: "pcs",
    },
    savoury: {
      ratio: 1 / 10,
      serving: "platter",
    },
  },

  D: {
    ribbon: {
      ratio: 1 / 20,
      serving: "platter",
    },
    club: {
      ratio: 1 / 20,
      serving: "platter",
    },
    meatball: {
      ratio: 1 / 30,
      serving: "bags",
    },
    macaron: {
      ratio: 1,
      serving: "pcs",
    },
    fruit: {
      ratio: 1 / 25,
      serving: "platter",
    },
  },

  E: {
    slice: {
      ratio: 1 / 20,
      serving: "platter",
    },
    club: {
      ratio: 1 / 20,
      serving: "platter",
    },
    ribbon: {
      ratio: 1 / 20,
      serving: "platter",
    },
  },

  ITALIAN: {
    antipasto: {
      ratio: 1 / 50,
      serving: "platter",
    },
    foccacia: {
      ratio: 1 / 50,
      serving: "basket",
    },
    grissini: {
      ratio: 1 / 50,
      serving: "packet",
    },
    "pork chipolata": {
      ratio: 1,
      serving: "pcs",
    },
    calamari: {
      ratio: 2,
      serving: "pcs",
    },
    pastizzi: {
      ratio: 1,
      serving: "pcs",
    },
    "mushroom arancini": {
      ratio: 1,
      serving: "pcs",
    },
    "pumpkin arancini": {
      ratio: 1,
      serving: "pcs",
    },
    meatball: {
      ratio: 1 / 25,
      serving: "bag",
    },
    fish: {
      ratio: 2,
      serving: "pcs",
    },
    cannoli: {
      ratio: 1,
      serving: "pcs",
    },
    tartare: {
      ratio: 1 / 50,
      serving: "ramekin",
    },
  },
  LIGHT: {
    mezze: {
      ratio: 1 / 50,
      serving: "platter",
    },
    "olive bread": {
      ratio: 1 / 15,
      serving: "pcs",
    },
    "pita bread": {
      ratio: 1 / 50,
      serving: "platter",
    },
    fish: {
      ratio: 1,
      serving: "pcs",
    },
    spanokopita: {
      ratio: 1,
      serving: "pcs",
    },
    tiropita: {
      ratio: 1,
      serving: "pcs",
    },
    taramasalata: {
      ratio: 1 / 50,
      serving: "platter",
    },
    tzatziki: {
      ratio: 1 / 50,
      serving: "ramekin",
    },
    tartare: {
      ratio: 1 / 50,
      serving: "ramekin",
    },
    paximathia: {
      ratio: 1 / 2,
      serving: "pcs",
    },
    koulouria: {
      ratio: 1 / 2,
      serving: "pcs",
    },
    "greek salad": {
      ratio: 1 / 25,
      serving: "tub",
    },
    potatoes: {
      ratio: 1,
      serving: "pcs",
    },
  },

  DELUXE: {
    mezze: {
      ratio: 1 / 50,
      serving: "platter",
    },
    "olive bread": {
      ratio: 1 / 15,
      serving: "pcs",
    },
    "pita bread": {
      ratio: 1 / 50,
      serving: "platter",
    },
    fish: {
      ratio: 3,
      serving: "pcs",
    },
    calamari: {
      ratio: 3,
      serving: "pcs",
    },
    spanokopita: {
      ratio: 1,
      serving: "pcs",
    },
    tiropita: {
      ratio: 1,
      serving: "pcs",
    },
    taramasalata: {
      ratio: 1 / 50,
      serving: "platter",
    },
    tzatziki: {
      ratio: 1 / 50,
      serving: "ramekin",
    },
    tartare: {
      ratio: 1 / 50,
      serving: "ramekin",
    },
    paximathia: {
      ratio: 1 / 2,
      serving: "pcs",
    },
    koulouria: {
      ratio: 1 / 2,
      serving: "pcs",
    },
    octopus: {
      ratio: 1,
      serving: "pcs",
    },
    "greek salad": {
      ratio: 1 / 25,
      serving: "long salad tub",
    },
    potatoes: {
      ratio: 1,
      serving: "pcs",
    },
  },

  ASIAN: {
    fish: {
      ratio: 1,
      serving: "pcs",
    },
    "satay chicken": {
      ratio: 1,
      serving: "pcs",
    },
    gyoza: {
      ratio: 1,
      serving: "pcs",
    },
    "spring roll": {
      ratio: 2,
      serving: "pcs",
    },
    dimsim: {
      ratio: 1,
      serving: "pcs",
    },
    "prawn cutlet": {
      ratio: 1,
      serving: "pcs",
    },
    fruit: {
      ratio: 1 / 50,
      serving: "large",
    },
    macaron: {
      ratio: 1,
      serving: "pcs",
    },
    ribbon: {
      ratio: 1 / 15,
      serving: "platter",
    },
  },
};

const Menu = (menuName, pax) => {
  const selectedMenu = MenuData[menuName];

  if (!selectedMenu) return [];

  const paxNumber = Number(pax);

  return Object.entries(selectedMenu).map(([name, item]) => ({
    name,
    serving: item.serving,
    qty: Math.ceil(paxNumber * item.ratio),
  }));
};

export default Menu;
