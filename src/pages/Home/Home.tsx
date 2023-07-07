import { useState, useEffect } from "react";
import { instance } from "../../config/axios";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import ImagePair from "../../components/Blog/ImagePair";
import TextPair from "../../components/Blog/TextPair";
import blogImage from "../../assets/Images/blogImage.png";
import Footer from "../../components/Footer/Footer";

import "./Home.scss";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  /** get token from localstorage */
  const token = localStorage.getItem("pureBeautyToken");
  const headers = { authorization: `Bearer ${token}` };

  /** fetching api data */
  const fetchData = async () => {
    try {
      const res = await instance.get("wp/v2/posts?_embed", { headers });
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Header text="Blogs" />
      <div className="app__home-container">
          {/* render before getting the data */}
          {blogs.length < 1 && <p>data loading, please wait..</p>}
          {/* render after getting the data */}
          {blogs
            .filter((_item: any, index) => index < 2)
            .map((item: any) => {
              return (
                <>
                  <ImagePair
                    key={item.id}
                    id={item.id}
                    text={item.title.rendered}
                    imgUrl={item._embedded["wp:featuredmedia"][0].source_url}
                  />
                </>
              );
            })}
          {blogs
            .filter((_item: any, index) => index < 4 && index > 1)
            .map((item: any) => {
              return (
                <>
                  <TextPair
                    key={item.id}
                    id={item.id}
                    text={item.title.rendered}
                    imgUrl={item._embedded["wp:featuredmedia"][0].source_url}
                  />
                </>
              );
            })}
          {blogs
            .filter((_item: any, index) => index < 6 && index > 3)
            .map((item: any) => {
              return (
                <>
                  <ImagePair
                    key={item.id}
                    id={item.id}
                    text={item.title.rendered}
                    imgUrl={item._embedded["wp:featuredmedia"][0].source_url}
                  />
                </>
              );
            })}
      </div>
      <div className="app_blog-img">
        <img src={blogImage} className="blogImage" alt="Blog image" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
