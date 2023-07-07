import blogMain from "../../assets/Images/blog-mian.png";
import CommentBox from "../../components/CommentBox/CommentBox";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

import "./Blog.scss";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Header text="hey" />
      <div className="app__blog-container">
        <div className="app__blog-top">
          <img src={blogMain} className="app__blog-img" alt="Blog Image" />
        </div>
        <div className="app__blog-textContainer">
          <span className="app__blog-text">
            By admin Posted January 7, 2022 In Face, Skin
          </span>
          <span className="app__blog-text">
            I’m sharing a few tips and basics around how I use our range. We’ve
            been getting a few questions lately – which is great because it
            means people are switching to more natural products like the Facial
            Oil Cleanser and wanting to know exactly how to use it.
          </span>
          <span className="app__blog-text">
            So I’m going to share a little about my daily and weekly skincare
            routine about how I use our products, along with a little info or
            helpful tips of the product and what it’s good for etc.
          </span>
          <span className="app__blog-text">
            It’s important to remember that everyone’s skin is so individual.
            What works for you may not work for others and vice versa. There are
            also so many things which can affect our skin health – stress,
            hormones, hydration, diet, environmental factors, products etc the
            list goes on. So this is my guide to using our range, but if you
            like to use it another way or have any tips of your own, please
            share – I love hearing new ways of how you our beautiful customers
            use their products.
          </span>
          <span className="app__blog-text">
            Starting at the beginning and some say the most crucial to good
            skin.
          </span>
          <span className="app__blog-text">
            This is the first thing I notice is slacking in my routine if my
            skin is looking a little dull or having breakouts (along with diet
            and hormones). While I’ve been wearing less and less makeup the past
            year, cleansing at night can become a bit of a missed or lazy step.
            Now especially with summer and the festive season upon us, family
            gatherings, parties etc. it normally means more makeup and sunscreen
            so ensuring all makeup is removed at night helps your skin breathe,
            absorb product and regenerate during sleep.
          </span>
          <h3>CLEANSING</h3>
          <span className="app__blog-text">
            AM – most mornings in the shower I will use our Gentle Foaming
            Cleanser. Other mornings (if I’ve showered at night) or running out
            the door for a walk or swim, it’s a once over with a few spritzes of
            our face mist and a wipe over with a warm damp face cloth.{" "}
          </span>
          <span className="app__blog-text">
            {" "}
            PM – Time to double cleanse. This helps with taking off
            makeup/sunscreen, the ocean/sun/day with our Facial Cleansing Oil.
            Around 3-5 pumps. Being quite liberal with this to give skin a good
            facial massage and help the oil bind to all makeup and dirt. When
            you’re ready to remove, wet a flannel/face cloth with warm/hot water
            and wipe off. I like to then use the Gentle Foaming Cleanser as the
            second cleanse to remove any residual oil and dirt.{" "}
          </span>
          <span className="app__blog-text">
            After cleansing it’s onto our face mist & toner. Our Rose and
            Geranium Face Mist adds hydration, balances and prepares the skin
            for our moisturising products – especially oils. (It’s also amazing
            for a ton of other things too – helps to set makeup, great for after
            sun or in the esky at the beach, around 3pm or heading out after
            work, in aircon etc. for more info read here.)
          </span>
        </div>
        <CommentBox />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
