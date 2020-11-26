import React from "react";
import Produk from "../Kelas/Produk";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Produk nama="Macbooks Pro 1999" stock="10" harga="23 Juta" />
      <Produk nama="Macbooks Pro 1998" stock="100" harga="23 Juta" />
      <Produk nama="Macbooks Pro 2002" stock="100" harga="23 Juta" />
      <Produk nama="Macbooks Pro 2003" stock="15" harga="23 Juta" />
      <Produk nama="Macbooks Pro 2005" stock="25" harga="23 Juta" />
    </div>
  );
};

export default Home;
