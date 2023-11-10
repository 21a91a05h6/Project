import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
import Modal from "./Model";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            {/* <button className="btn become__driver-btn mt-4">
              Become a Driver
            </button> */}
            <button onClick={openModal} className="btn become__driver-btn mt-4">Become a Driver</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
            {/* <h2>This is a Modal</h2>
            <p>Click the &times; to close.</p> */}
           </Modal>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
