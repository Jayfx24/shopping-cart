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
    wears: { text: { title: "", subtitle: "" }, products: shuffle(wears) },
    men: {
      text: { title: "", subtitle: "" },
      products: shuffle(menEssentials),
    },
    women: {
      text: { title: "", subtitle: "" },
      products: shuffle(womenEssentials),
    },
    home: {
      text: { title: "", subtitle: "" },
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
