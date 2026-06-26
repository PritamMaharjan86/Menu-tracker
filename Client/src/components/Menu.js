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
      "traditional cured meat (mortadella, prosciutto di parma & calabrese salami)":
        Math.ceil(pax * 1),
      "foccacia,": Math.ceil(pax * 1),
      "grissini,": Math.ceil(pax / 10),
      "pork chipolata with salsa rossa,": Math.ceil(pax * 1),
      "calamari,": Math.ceil(pax * 1),
      "pastizzi,": Math.ceil(pax * 1),
      "mushroom arancini,": Math.ceil(pax * 1),
      "pumpkin arancini,": Math.ceil(pax * 2),
      "meatball with nap sauce,": Math.ceil(pax * 1),
      "fish,": Math.ceil(pax / 10),
      "cannoli,": Math.ceil(pax * 2),
      "tartare,": Math.ceil(pax * 1),
      "olive oil,": Math.ceil(pax / 10),
      "balsamic vinegar,": Math.ceil(pax * 2),
    },
  }),

  DELUXE: (pax) => ({
    name: "GREEK DELUXE",

    items: {
      "mezze platter (kasseri, kefalograveria, fetta cheese, dolmades, kalamata olives)":
        Math.ceil(pax * 1),
      "olive bread,": Math.ceil(pax * 1),
      "pita bread,": Math.ceil(pax / 10),
      "fish,": Math.ceil(pax * 1),
      "spanokipita,": Math.ceil(pax * 1),
      "tiropita,": Math.ceil(pax * 1),
      "calamari,": Math.ceil(pax * 1),
      "large ramekin taramasalata,": Math.ceil(pax * 2),
      "large ramekin tartare,": Math.ceil(pax * 1),
      "large ramekin tzatziki,": Math.ceil(pax / 10),
      "olive oil,": Math.ceil(pax * 2),
      "vinegar,": Math.ceil(pax * 1),
      " paximathia,": Math.ceil(pax / 10),
      "koulouria,": Math.ceil(pax * 2),
      "octopus,": Math.ceil(pax * 2),
      "long greek salad with dressing on side,": Math.ceil(pax * 1),
      "deep fried potatoes": Math.ceil(pax / 10),
    },
  }),

  LIGHT: (pax) => ({
    name: "GREEK LIGHT",

    items: {
      "mezze platter (fetta cheese, dolmades, kalamata olives)": Math.ceil(
        pax * 1,
      ),
      "olive bread,": Math.ceil(pax * 1),
      "pita bread,": Math.ceil(pax / 10),
      "fish,": Math.ceil(pax * 1),
      "spanokipita,": Math.ceil(pax * 1),
      "tiropita,": Math.ceil(pax * 1),
      "large ramekin taramasalata,": Math.ceil(pax * 2),
      "large ramekin tartare,": Math.ceil(pax * 1),
      "large ramekin tzatziki,": Math.ceil(pax / 10),
      "olive oil,": Math.ceil(pax * 2),
      "vinegar,": Math.ceil(pax * 1),
      " paximathia,": Math.ceil(pax / 10),
      "koulouria,": Math.ceil(pax * 2),
      "long greek salad with dressing on side,": Math.ceil(pax * 1),
      "deep fried potatoes": Math.ceil(pax / 10),
    },
  }),

  ASIAN: (pax) => ({
    name: "ASIAN",

    items: {
      satay: Math.ceil(pax * 1),
      prawn: Math.ceil(pax * 1),
      ribbon: Math.ceil(pax / 20),
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
