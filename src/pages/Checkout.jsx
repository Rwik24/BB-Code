import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import timeline4 from "../assets/images/t4.png";
import "../styles/checkout.css";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 0, // Set your initial latitude
  lng: 0, // Set your initial longitude
};

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [searchArea, setSearchArea] = useState("");
  const [manualAddress, setManualAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [showManualAddressForm, setShowManualAddressForm] = useState(false);

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
      location: selectedLocation,
      ...manualAddress, // Include manual address if provided
    };
  
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };
  const mapClickHandler = (event) => {
    const { latLng } = event;
    setSelectedLocation({
      lat: latLng.lat(),
      lng: latLng.lng(),
    });
    setShowMap(true);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setSelectedLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setShowMap(true);
        },
        (error) => {
          console.error("Error getting current location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <Helmet title="Checkout">
      <div className="mhead">
        <h2>Checkout</h2>
      </div>
      <section>
      <div className="ts">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2></h2>
              </Col>
            </Row>
            <Row>
              <Col lg="12" className="t">
              <a href="/home" className="tm"></a>
        <a href="/burgers" className="tm"></a>
        <a href="/checkout" className="tm"></a>
        <a href="/page4" className="tm"></a>
                
              </Col>
            </Row>
          </Container>
          </div></section>

          <section>
        <div className="picture-text-section">
          <Container>
            <Row>
              <Col lg="6">
                <img
                  src={timeline4}
                  style={{ width: "100%" }}
                  alt="Your Alt Text"
                  className="picture-on-left"
                />
              </Col>
              <Col lg="6">
                <div className="text-on-right">
                  <h2>The Burger Story</h2>
                  <p> 1900: Louis Lassen serves the first American hamburger at his lunch wagon in New Haven, Connecticut.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Container>
        <Row>
          <Col lg="8" md="6">
            <h6 className="mb-4">Select Location</h6>
            <form className="checkout__form" onSubmit={submitHandler}>
              
              <div className="form__group area-search">
                <div className="search-container">
                  <i className="fas fa-search search-icon"></i>
                  <input
                    type="text"
                    placeholder="Search for area"
                    required
                    onChange={(e) => setSearchArea(e.target.value)}
                  />
                </div>
                <div className="area-options">
                  <button type="button" onClick={getCurrentLocation}>
                    <i className="fas fa-map-marker-alt"></i> Use Current Location
                  </button>
                  <button type="button" onClick={() => setShowManualAddressForm(true)}>
                    <i className="fas fa-plus"></i> Add Address
                  </button>
                </div>
              </div>

              <div className="saved-addresses">
  <h6 className="mb-4">Saved Addresses</h6>
  {/* Add your saved addresses here as buttons or a list */}
  <div className="saved-address">
    <button type="button" onClick={() => console.log("Select Saved Address 1")}>
      29, Dhakuria, Kolkata - 700078
    </button>
    <span className="arrow-button" onClick={() => console.log("Edit Saved Address 1")}>
      <i className="fas fa-pencil-alt"></i>
    </span>
    </div>
  <div className="saved-address">
    <button type="button" onClick={() => console.log("Select Saved Address 2")}>
      31, Southern Avenue, Kolkata - 700029
    </button>
    <span className="arrow-button" onClick={() => console.log("Edit Saved Address 2")}>
      <i className="fas fa-pencil-alt"></i>
    </span>
    </div>
  {/* Add more saved addresses as needed */}
</div>
              {showManualAddressForm && (
  <div className="manual-address-form">
    <h6 className="mb-4">Enter Address Manually</h6>
    <form>
      {/* Add form inputs for street, city, state, and zip */}
      <div className="form-group">
        <label>Street</label>
        <input
          type="text"
          value={manualAddress.street}
          onChange={(e) =>
            setManualAddress({ ...manualAddress, street: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          value={manualAddress.city}
          onChange={(e) =>
            setManualAddress({ ...manualAddress, city: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label>State</label>
        <input
          type="text"
          value={manualAddress.state}
          onChange={(e) =>
            setManualAddress({ ...manualAddress, state: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label>ZIP Code</label>
        <input
          type="text"
          value={manualAddress.zip}
          onChange={(e) =>
            setManualAddress({ ...manualAddress, zip: e.target.value })
          }
        />
      </div>
      {/* Add more form inputs if needed */}
    </form>
  </div>
)}
              {showMap && (
          <Row>
            <Col lg="12">
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={selectedLocation}
                  zoom={14}
                  onClick={mapClickHandler}
                >
                  {selectedLocation && <Marker position={selectedLocation} />}
                </GoogleMap>
              </LoadScript>
            </Col>
          </Row>
        )}
              <button type="submit" className="addTOCart__btn">
                Payment
              </button>
            </form>
          </Col>

          <Col lg="4" md="6">
            <div className="checkout__bill">
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Subtotal: <span>Rs{cartTotalAmount}</span>
              </h6>
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Shipping: <span>Rs{shippingCost}</span>
              </h6>
              <div className="checkout__total">
                <h5 className="d-flex align-items-center justify-content-between">
                  Total: <span>Rs{totalAmount}</span>
                </h5>
              </div>
            </div>
          </Col>
        </Row>

        
      </Container>
    </Helmet>
  );
};

export default Checkout;
