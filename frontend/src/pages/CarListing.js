import React from "react";
import { Container, Row} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const CarListing = () => {
  return (
    <>
    <Header/>
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <section>
        <Container>
          <Row> 
            <CarItem/>
          </Row>
        </Container>
      </section>
    </Helmet>
    <Footer/>
    </>
  );
};

export default CarListing;
