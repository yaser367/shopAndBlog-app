import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { instance } from "../../config/axios";
import Footer from "../../components/Footer/Footer";

import "./Shop.scss";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("pureBeautyToken");
  const headers = { authorization: `Bearer ${token}` };

  /** fetching api data */
  const fetchData = async () => {
    try {
      const response = await instance.get("wp/v2/posts?_embed", { headers });
      console.log("blogs-", response);
      setProducts(response.data);
    } catch (error) {
      console.log("fetch blog error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Header text="Shop" />
      <div className="app__shop-container">
        {/* render before getting the data */}
        {products.length < 1 ? (
          <p>data loading, please wait..</p>
        ) : (
          /* render after getting the data */
          products.map((item: any) => {
            return (
              <div className="app__shop-products">
                <img
                  src={item._embedded["wp:featuredmedia"][0].source_url}
                  alt="Shop image"
                />
                <div className="app__shop-imgText ">
                  <span className="shopTitle">MIST</span>
                  <span className="shopTitle">Hydrating Mist</span>
                  <span className="shopTitle">$28</span>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
