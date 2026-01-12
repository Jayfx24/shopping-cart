export default function homeProductSort(data) {
  const wears = [
    ...data.men["mens-shirts"],
    data.women["womens-dresses"],
    data.others["tops"],
  ].flat();
  const menEssentials = Object.values(data.men).flat();
  const womenEssentials = Object.values(data.women).flat();
  const homeEssentials = [
    ...data.others["home-decoration"],
    ...data.others["furniture"],
    ...data.others["kitchen-accessories"],
  ];

  return {
    beauty: { text: { title: "", subtitle: "" }, products: [] },
    wears: { text: { title: "Everyday Wears, Elevated", subtitle: "Everyday apparel built to keep up with your lifestyle while maintaining a clean, confident, and polished look" }, products: shuffle(wears) },
    men: {
      text: { title: "Men's Essential", subtitle: "Reliable men’s essentials designed to fit seamlessly into your daily routine while keeping your style clean and confident." },
      products: shuffle(menEssentials),
    },
    women: {
      text: { title: "Women's Essential", subtitle: "Effortless fashion staples created to support confidence, movement, and personal expression throughout your day." },
      products: shuffle(womenEssentials),
    },
    home: {
      text: { title: "Home Essentials", subtitle: "Carefully selected home pieces that help create a calm, organized, and comfortable living environment" },
      products: shuffle(homeEssentials),
    },
  };
}

const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const a = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[a]] = [arr[a], arr[i]];
  }
  return arr;
};
