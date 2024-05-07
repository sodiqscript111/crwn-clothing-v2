import DirectoryMenu from "../../components/directory/directory.components";

function Home() {
  const categories = [
    {
      id: 1,
      tittle: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      tittle: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      tittle: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      tittle: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      tittle: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return <DirectoryMenu categories={categories} />;
}

export default Home;
