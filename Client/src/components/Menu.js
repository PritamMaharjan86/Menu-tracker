const Menu = {
  A: (pax) => ({
    name: "Menu A",

    items: {
      scone: Math.ceil(pax * 1.8),
      cream: Math.ceil(pax * 1),
      biscuit: Math.ceil(pax * 2),
      savouryMuffin: Math.ceil(pax * 1),
    },
  }),

  B: (pax) => ({
    name: "Menu B",

    items: {
      slice: Math.ceil(pax * 2),
      savouryPlatter: Math.ceil(pax / 10),
    },
  }),

  C: (pax) => ({
    name: "Menu C",

    items: {
      club: Math.ceil(pax * 3),
      savouryPlatter: Math.ceil(pax / 10),
      macaron: Math.ceil(pax * 1),
    },
  }),

  D: (pax) => ({
    name: "Menu D",

    items: {
      club: Math.ceil(pax * 3),
      ribbon: Math.ceil(pax * 3),
      meatball: Math.ceil(pax * 3),
      savouryPlatter: Math.ceil(pax / 10),
      fruit: Math.ceil(pax * 3),
      macaron: Math.ceil(pax * 2),
    },
  }),

  E: (pax) => ({
    name: "Menu E",

    items: {
      slice: Math.ceil(pax * 3),
      club: Math.ceil(pax / 10),
      ribbon: Math.ceil(pax * 2),
    },
  }),
  ITALIAN: (pax) => ({
    name: "ITALIAN",

    items: {
      slice: Math.ceil(pax * 3),
      club: Math.ceil(pax / 10),
      ribbon: Math.ceil(pax * 2),
    },
  }),
  DELUXE: (pax) => ({
    name: "GREEK DELUXE",

    items: {
      slice: Math.ceil(pax * 3),
      club: Math.ceil(pax / 10),
      ribbon: Math.ceil(pax * 2),
    },
  }),
  LIGHT: (pax) => ({
    name: "GREEK LIGHT",

    items: {
      slice: Math.ceil(pax * 3),
      club: Math.ceil(pax / 10),
      ribbon: Math.ceil(pax * 2),
    },
  }),
  ASIAN: (pax) => ({
    name: "ASIAN",

    items: {
      satay: Math.ceil(pax * 1),
      prawn: Math.ceil(pax * 1),
      ribbon: Math.ceil(pax / 10),
      gyoza: Math.ceil(pax * 1),
      dimsim: Math.ceil(pax * 1),
      fish: Math.ceil(pax * 1),
      springroll: Math.ceil(pax * 2),
      macaron: Math.ceil(pax * 1),
      fruit: Math.ceil(pax / 10),
    },
  }),
};

export default Menu;
