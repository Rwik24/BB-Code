import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ProductListCard from "../components/UI/product-card/ProductListCard";
import ReactPaginate from "react-paginate";
import timeline3 from "../assets/images/t3.png";
import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // Default view mode is "grid"

  const searchedProduct = products.filter((item) => {
    if (searchTerm === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return null;
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const switchToGridView = () => {
    setViewMode("grid");
  };

  const switchToListView = () => {
    setViewMode("list");
  };

  return (
    <Helmet title="All-Foods">
      <div className="mhead">
        <h2>MENU</h2>
      </div>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Best Seller</option>
                  <option value="ascending">Veg</option>
                  <option value="descending">Non Veg</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            <div className="timeline-section2">
              <Container>
                <Row>
                  <Col lg="12" className="text-center">
                    <h2></h2>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" className="timeline2">
                    <a href="/home" className="timeline-marker2"></a>
                    <a href="/burgers" className="timeline-marker2"></a>
                    <a href="/checkout" className="timeline-marker2"></a>
                    <a href="/page4" className="timeline-marker2"></a>
                    {/* Add more markers as needed */}
                  </Col>
                </Row>
              </Container>
            </div>

            <section>
              <div className="picture-text-section">
                <Container>
                  <Row>
                    <Col lg="6">
                      <img
                        src={timeline3}
                        style={{ width: "100%" }}
                        alt="Your Alt Text"
                        className="picture-on-left"
                      />
                    </Col>
                    <Col lg="6">
                      <div className="text-on-right">
                        <h2>The Burger Story</h2>
                        <p> Late 19th century: Americans start adding toppings and serve Hamburg steak between slices of bread, creating the "Hamburger sandwich.</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </section>

            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <div className="view-mode-buttons">
                  <button
                    className={`view-mode-button ${viewMode === "grid" ? "active" : ""}`}
                    onClick={switchToGridView}
                  >
                    Grid View
                  </button>
                  <button
                    className={`view-mode-button ${viewMode === "list" ? "active" : ""}`}
                    onClick={switchToListView}
                  >
                    List View
                  </button>
                </div>
              </div>
            </Col>

            {viewMode === "grid" ? (
              <Row>
                {displayPage.map((item, index) => (
                  <Col lg="3" md="3" sm="6" xs="12" key={item.id} className="mb-4">
                    <ProductCard item={item} />
                    {index % 4 === 3 && <div className="w-100"></div>}
                  </Col>
                ))}
              </Row>
            ) : (
              <Row>
                {displayPage.map((item) => (
                  <Col lg="12" key={item.id} className="mb-4">
                    <ProductListCard item={item} />
                  </Col>
                ))}
              </Row>
            )}
          </Row>
        </Container>
      </section>
      <div>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          containerClassName="paginationBttns"
        />
      </div>
    </Helmet>
  );
};

export default AllFoods;
