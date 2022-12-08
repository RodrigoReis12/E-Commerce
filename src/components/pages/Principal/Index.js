import React from 'react';

import Header from "../../home/Header";
import ShopPeople from "../../home/ShopPeople";
import Explore from "../../home/Explore";
import Shop from "../../home/Shop";
import Footer from "../../home/Footer";

function Index() {
  return (
    <div>
        <Header />
        <ShopPeople />
        <Explore />
        <Shop />
        <Footer />
    </div>
  )
};

export default Index;