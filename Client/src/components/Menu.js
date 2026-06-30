function buildMenu(name, pax, rules) {
  const items = Object.fromEntries(
    Object.entries(rules).map(([key, ratio]) => {
      const value = pax * ratio;

      const finalValue = value < 1 ? 0 : Math.ceil(value);

      return [key, finalValue];
    }),
  );

  return {
    name,
    items,
  };
}

const Menu = {
  A: (pax) =>
    buildMenu("Menu A", pax, {
      scone: 1.8,
      cream: 1,
      biscuit: 2,
      savouryMuffin: 1,
    }),

  B: (pax) =>
    buildMenu("Menu B", pax, {
      slice: 2,
      savouryPlatter: 1 / 10,
    }),

  C: (pax) =>
    buildMenu("Menu C", pax, {
      club: 3,
      savouryPlatter: 1 / 10,
      macaron: 1,
    }),

  D: (pax) =>
    buildMenu("Menu D", pax, {
      club: 1,
      ribbon: 3,
      meatball: 3,
      savouryPlatter: 1 / 10,
      fruit: 1 / 10,
      macaron: 1,
    }),

  E: (pax) =>
    buildMenu("Menu E", pax, {
      slice: 3,
      club: 1 / 10,
      ribbon: 2,
    }),

  ITALIAN: (pax) =>
    buildMenu("ITALIAN", pax, {
      mortadella: 1,
      focaccia: 1,
      grissini: 1 / 10,
      calamari: 1,
      cannoli: 2,
    }),

  DELUXE: (pax) =>
    buildMenu("GREEK DELUXE", pax, {
      mezze: 1,
      oliveBread: 1,
      pita: 1 / 10,
      fish: 1,
      octopus: 2,
    }),

  LIGHT: (pax) =>
    buildMenu("GREEK LIGHT", pax, {
      mezze: 1,
      pita: 1 / 10,
      fish: 1,
    }),

  ASIAN: (pax) =>
    buildMenu("ASIAN", pax, {
      satay: 1,
      prawn: 1,
      ribbon: 1 / 40,
      gyoza: 1,
      dimsim: 1,
      fish: 1,
      springroll: 2,
      macaron: 1,
      fruit: 1 / 5,
    }),
};

export default Menu;
