import React, { useRef, useEffect, useState } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/bblogo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Burgers",
    path: "/burgers",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const toggleCart = () => dispatch({ type: "cartUi/toggle" });
  const toggleSidePanel = () => setIsSidePanelOpen(!isSidePanelOpen);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className={`header ${isSidePanelOpen ? "side-panel-open" : ""}`} ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) => (navClass.isActive ? "active__menu" : "")}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>

            {/* Side Panel Icon */}
            <span className="side-panel-icon" onClick={toggleSidePanel}>
              <i className="ri-menu-line"></i>
            </span>

            {isSidePanelOpen && (
              <div className="side-panel">
                <button className="close-panel-button" onClick={toggleSidePanel}>
                  <i className="ri-close-line"></i>
                </button>
                <ul>
                  <li>
                    <b>USER</b>
                  </li>

                  <li>
                    <Link to="/order-history">Order History</Link>
                  </li>
                  <li>
                    <Link to="/order-history">Change Address</Link>
                  </li>
                  <li>Change Phone Number</li>
                  <li>Logout</li>
                  {/* Add other options here */}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
