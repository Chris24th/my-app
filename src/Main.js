import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import hudhod from './pics/hudhod.jpg';
import medals from './pics/medals.jpg';
import crosslegs from './pics/crosslegs.jpg';
import irog from './pics/irog.jpg';
import salipawpaw from './pics/salipawpaw.jpg';
import durungawan from './pics/durungawan.jpg';
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
        <h2>1. Hudhod</h2>
        <p>Scrubbing dirt from off the skin, used in Filipino meaning paghudhod or ihaplos. Example: Hudhuran mo ng kalamansi ang iyong balat.</p>
        <img src={hudhod} alt="My Image" style={{ maxHeight: '300px', width: 'auto' }} />
      </Row>
      <Row className='row-posts'>
          <h2>2. Napangilakan</h2>
          <p>Used in Filipino meaning nakolekta, the English term is collected or collection. Example: Marami akong napangilakan na medalya mula sa mga nakaraang kompetisyon.</p>
          <img src={medals} alt="My Image" style={{ maxHeight: '300px', width: 'auto' }} />
      </Row>
      <Row className='row-posts'>
          <h2>3. Salakat</h2>
          <p>Used in Filipino meaning pag-krus ng mga binti, the English term is crossing of legs. Example: Naka-salakat siya habang nakaupo sa kanyang silya.</p>
          <img src={crosslegs} alt="My Image" style={{ maxHeight: '300px', width: 'auto' }} />
      </Row>
      <Row className='row-posts'>
          <h2>4. Irog</h2>
          <p>Means sinta or darling, it is a term used for a relationship between a couple. Example: Ako ay makikipagkita sa aking irog.</p>
          <img src={irog} alt="My Image" style={{ maxHeight: '300px', width: 'auto' }} />

      </Row>
      <Row className='row-posts'>
          <h2>5. Salipawpaw</h2>
          <p>Means eroplano or airplane, it is a vehicle used for traveling to other countries or within the Philippines. Example: Kami ay sasakay ng salipawpaw papuntang Singapore.</p>
          <img src={salipawpaw} alt="My Image" style={{ maxHeight: '300px', width: 'auto' }} />

      </Row>
      <Row className='row-posts'>
          <h2>6. Durungawan</h2>
          <p>The Tagalog Filipino word for window, an opening in a wall that usually contains a sheet of glass. Example: Palaging nakadungaw si Julia sa kanilang durungawan tuwing gabi.</p>
          <img src={durungawan} alt="My Image" style={{ maxHeight: '300px', width: 'auto' }} />

      </Row>
      <Row className='row-posts'>
          <h2>7. Naka-salakat</h2>
          <p>Means crossing of the legs while sitting in a chair.</p>
       
      </Row>
      <Row className='row-posts'>
          <h2>8. Irog</h2>
          <p>Means darling or sweetheart, used to refer to one's significant other.</p>
      
      </Row>
      <Row className='row-posts'>
          <h2>9. Salipawpaw</h2>
          <p> Means airplane, the vehicle used for air travel.</p>
     
      </Row>
    </div>
  );
}

export default App;
