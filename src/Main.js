import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import books from './pics/books.jpg';
import './styles.css';

function App() {
  return (
    <div>
      <Container
        className='c1-bg'
      >
        <Row
          className='overlay-text'
        >
          <h1>10 UNCOMMONLY USED FILIPINO WORDS</h1>
          <p>Discover the Hidden Gems of Filipino Vocabulary</p>
        </Row>
      </Container>
      <Row className='row-posts'>
        <Col md={6}>
          <h2>1. Hudhod</h2>
          <p>Scrubbing dirt from off the skin, used in Filipino meaning paghudhod or ihaplos. Example: Hudhuran mo ng kalamansi ang iyong balat.</p>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
      <Row className='row-posts'>
        <Col md={6}>
          <h2>2. Napangilakan</h2>
          <p>Used in Filipino meaning nakolekta, the English term is collected or collection. Example: Marami akong napangilakan na medalya mula sa mga nakaraang kompetisyon.</p>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
      <Row className='row-posts'>
        <Col md={6}>
          <h2>3. Salakat</h2>
          <p>Used in Filipino meaning pag-krus ng mga binti, the English term is crossing of legs. Example: Naka-salakat siya habang nakaupo sa kanyang silya.</p>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
      <Row className='row-posts'>
        <Col md={6}>
          <h2>4. Irog</h2>
          <p>Means sinta or darling, it is a term used for a relationship between a couple. Example: Ako ay makikipagkita sa aking irog.</p>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
      <Row className='row-posts'>
        <Col md={6}>
          <h2>5. Salipawpaw</h2>
          <p>Means eroplano or airplane, it is a vehicle used for traveling to other countries or within the Philippines. Example: Kami ay sasakay ng salipawpaw papuntang Singapore.</p>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
      <Row className='row-posts'>
        <Col md={6}>
          <h2>6. Durungawan</h2>
          <p>The Tagalog Filipino word for window, an opening in a wall that usually contains a sheet of glass. Example: Palaging nakadungaw si Julia sa kanilang durungawan tuwing gabi.</p>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
      <Row className='row-posts'>
        <Col md={6}>
          <h2>7. Naka-salakat</h2>
          <p>Means crossing of the legs while sitting in a chair.</p>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
      <Row className='row-posts'>
        <Col md={6}>
          <h2>8. Irog</h2>
          <p>Means darling or sweetheart, used to refer to one's significant other.</p>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
      <Row className='row-posts'>
        <Col md={6}>
          <h2>9. Salipawpaw</h2>
          <p> Means airplane, the vehicle used for air travel.</p>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
    </div>
  );
}

export default App;
