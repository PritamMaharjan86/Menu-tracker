const MenuData = {
  A: {
    scone: {
      ratio: 1 / 2.5,
      serving: "Platter",
    },
    cream: {
      ratio: 1 / 30,
      serving: "tub",
    },
    biscuit: {
      ratio: 1,
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
};

const Menu = (menuName, pax) => {
  const selectedMenu = MenuData[menuName];

  if (!selectedMenu) return [];

  return Object.entries(selectedMenu).map(([name, item]) => ({
    name,
    serving: item.serving,
    qty: Math.ceil(pax * item.ratio),
  }));
};

export default Menu;
