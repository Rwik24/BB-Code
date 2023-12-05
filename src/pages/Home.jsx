import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import offpic from "../assets/images/offer.jpg";
import OfferPopup from "../components/Offer"; // Adjust the path as needed


import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";
 

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import offer1 from "../assets/images/5.png";
import timeline1 from "../assets/images/t1.png";
import timeline2 from "../assets/images/t2.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  const [showOfferPopup, setShowOfferPopup] = useState(true);

  const closeOfferPopup = () => {
    setShowOfferPopup(false);
  };
  return (
    <Helmet title="Home">
      <section>
        <div className="hero__content  ">
                
                <h1 className="mb-4 hero__title">
                  <span>BERLIN BURGERS,</span> Best <br /> Burgers
                  <span> in Town</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-6 ">
                 

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>

              {showOfferPopup && (
        <div className="offer-popup">
          <div className="offer-popup-content">
            <span className="close-offer" onClick={closeOfferPopup}>
              &times;
            </span>
            <h2>Special Offer!</h2>
            <p>Get a burger, fries, and a drink at a special price!</p>
            <button className="offer-popup-button">Order Now</button>
          </div>
        </div>
      )}
      </section>

      <section className="offer__section">
      <div className="offer__background">
        <Container>
          <Row>
            <Col lg="12" className="text">
              <h1>Special Offers</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" className="mt-4">
              <div className="offer__item">
              <img src={offer1} alt="Offer 1" />
                <h3>Special Offer 1</h3>
                <button className="offer__btn">Order Now</button>
              </div>
            </Col>
            <Col lg="3" className="mt-4">
              <div className="offer__item">
              <img src={offer1} alt="Offer 1" />
                <h3>Special Offer 2</h3>
                <button className="offer__btn">Order Now</button>
              </div>
            </Col>
            <Col lg="3" className="mt-4">
              <div className="offer__item">
              <img src={offer1} alt="Offer 1" />
                <h3>Special Offer 3</h3>
                <button className="offer__btn">Order Now</button>
              </div>
            </Col>
            <Col lg="3" className="mt-4">
              <div className="offer__item">
              <img src={offer1} alt="Offer 1" />
                <h3>Special Offer 4</h3>
                <button className="offer__btn">Order Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>

      <section className="pt-0">
        {/* <Category /> */}
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              
              {/* <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p> */}
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                {/* <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div> */}
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <div className="timeline-section">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2></h2>
              </Col>
            </Row>
            <Row>
              <Col lg="12" className="timeline">
              <a href="/home" className="timeline-marker"></a>
        <a href="/burgers" className="timeline-marker"></a>
        <a href="/checkout" className="timeline-marker"></a>
        <a href="/page4" className="timeline-marker"></a>
                {/* Add more markers as needed */}
              </Col>
            </Row>
          </Container>
          </div>

          <section>
  <div className="picture-text-section">
    <Container>
      <Row>
        <Col lg="6" md="12"> {/* Added md="12" to make it full width on medium and smaller screens */}
          <img
            src={timeline1}
            
            alt="Your Alt Text"
            className="picture-on-left"
          />
        </Col>
        <Col lg="6" md="12">
          <div className="text-on-right">
            <h2>The Burger Story</h2>
            <p>Hamburg, Germany, 18th century: Hungry dockworkers create "Hamburg steaks" for a quick and hearty meal.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</section>
<section>
  <div className="picture-text-section">
    <Container>
      <Row>
        <Col lg="6" md="12">
          <div className="text-on-left">
            <p>19th century: German immigrants bring Hamburg steaks to the United States.</p>
          </div>
        </Col>
        <Col lg="6" md="12">
          <img
            src={timeline2}
            alt="Your Alt Text"
            className="picture-on-right" 
          />
        </Col>
      </Row>
    </Container>
  </div>
</section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Burgers</h2>
            </Col>

            {/*<Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>*/}

{allProducts.slice(0, 3).map((item) => (
  <Col lg="4" md="4" key={item.id} className="mt-5">
    <ProductCard item={item} />
  </Col>
))}
          </Row>
        </Container>
      </section>

      {/* <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Berlin Burgers?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      Burgers
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/*<section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
            </section>*/}

      <section>
        <Container>
          <Row>
            <Col lg="12" md="12">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
