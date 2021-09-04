export const dough = [
  {
    name: "Тонкое",
    image: "/public/img/dough-light.svg",
    description: "Из твердых сортов пшеницы",
    price: 300,
    type: "light",
  },
  {
    name: "Толстое",
    image: "/public/img/dough-large.svg",
    description: "Из твердых сортов пшеницы",
    price: 300,
    type: "large",
  },
];

export const sauces = [
  {
    name: "Томатный",
    price: 50,
    type: "tomato",
  },
  {
    name: "Сливочный",
    price: 50,
    type: "creamy",
  },
];

export const sizes = [
  {
    name: "23 см",
    image: "/public/img/diameter.svg",
    multiplier: 1,
    type: "small",
  },
  {
    name: "32 см",
    image: "/public/img/diameter.svg",
    multiplier: 2,
    type: "normal",
  },
  {
    name: "45 см",
    image: "/public/img/diameter.svg",
    multiplier: 3,
    type: "big",
  },
];

export const ingredients = [
  {
    name: "Грибы",
    image: "/public/img/filling/mushrooms.svg",
    price: 33,
    type: "mushrooms",
  },
  {
    name: "Чеддер",
    image: "/public/img/filling/cheddar.svg",
    price: 42,
    type: "cheddar",
  },
  {
    name: "Салями",
    image: "/public/img/filling/salami.svg",
    price: 42,
    type: "salami",
  },
  {
    name: "Ветчина",
    image: "/public/img/filling/ham.svg",
    price: 42,
    type: "ham",
  },
  {
    name: "Ананас",
    image: "/public/img/filling/ananas.svg",
    price: 25,
    type: "ananas",
  },
  {
    name: "Бекон",
    image: "/public/img/filling/bacon.svg",
    price: 42,
    type: "bacon",
  },
  {
    name: "Лук",
    image: "/public/img/filling/onion.svg",
    price: 21,
    type: "onion",
  },
  {
    name: "Чили",
    image: "/public/img/filling/chile.svg",
    price: 21,
    type: "chile",
  },
  {
    name: "Халапеньо",
    image: "/public/img/filling/jalapeno.svg",
    price: 25,
    type: "jalapeno",
  },
  {
    name: "Маслины",
    image: "/public/img/filling/olives.svg",
    price: 25,
    type: "olives",
  },
  {
    name: "Томаты",
    image: "/public/img/filling/tomatoes.svg",
    price: 35,
    type: "tomatoes",
  },
  {
    name: "Лосось",
    image: "/public/img/filling/salmon.svg",
    price: 50,
    type: "salmon",
  },
  {
    name: "Моцарелла",
    image: "/public/img/filling/mozzarella.svg",
    price: 35,
    type: "mozzarella",
  },
  {
    name: "Пармезан",
    image: "/public/img/filling/parmesan.svg",
    price: 35,
    type: "parmesan",
  },
  {
    name: "Блю чиз",
    image: "/public/img/filling/blue_cheese.svg",
    price: 50,
    type: "blue_cheese",
  },
];

export const pizza = {
  name: "Test pizza",
  dough: { ...dough[0] },
  ingredients: [],
  sauce: { ...sauces[0] },
  size: { ...sizes[0] },
};
