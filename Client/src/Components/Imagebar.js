import React from 'react';
import Image from 'react-bootstrap/Image';
import './Imagebar.css'; // Import your CSS file
import { Container, Row, Col } from 'react-bootstrap';
function FluidExample() {
  return (
    <div className="image-container">
      <div className="text-container">
        <p className="image-title">Product Details</p>
      </div>
      <Image
        src='https://img.freepik.com/premium-photo/red-apples-isolated-white-background-ripe-fresh-apples-clipping-path-apple-with-leaf_299651-595.jpg' fluid
        className="fluid-image"
      />
      <p className="image-title"></p>
      <Container>
      <Row>
        <Col>
          <h1 className="display-4">APPLE</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="lead">
            Apple is synonymous with freshness, a brand that has built its reputation on delivering the crispest and most succulent fruit.
            {/* Rest of your content */}
          </p>
        </Col>
      </Row>
    </Container>  </div>
  );
}

export default FluidExample;
