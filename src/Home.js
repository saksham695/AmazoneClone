import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div class="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home"
        />
      </div>
      <div className="home-row">
        <Product
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
          price="19.90"
          img="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={4}
        />
        <Product
          title="Kenwood kMix Stand Mixer for Baking , Stylish Kitchen Mixer with K-beater , Dough Hook and Whisk , 5 Litre Glass Bowl"
          price="19.90"
          img="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={4}
        />{" "}
      </div>
      <div className="home-row">
        <Product
          title="The lean startup"
          price="19.90"
          img="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={4}
        />
        <Product
          title="The lean startup"
          price="19.90"
          img="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={2}
        />
        <Product
          title="The lean startup"
          price="19.90"
          img="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={1}
        />{" "}
      </div>
      <div className="home-row">
        <Product
          title="The lean startup"
          price="19.90"
          img="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />{" "}
      </div>
    </div>
  );
}

export default Home;
