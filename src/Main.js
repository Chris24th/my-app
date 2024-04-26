import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import hudhod from './pics/hudhod.jpg';
import medals from './pics/medals.jpg';
import crosslegs from './pics/crosslegs.jpg';
import irog from './pics/irog.jpg';
import salipawpaw from './pics/salipawpaw.jpg';
import durungawan from './pics/durungawan.jpg';
import himutok from './pics/himutok.jpg';
import kanlungan from './pics/kanlungan.jpg';
import hiraya from './pics/hiraya.jpg';
import salampuwit from './pics/salampuwit.jpg';
import { FaFacebook, FaTwitter, FaInstagramSquare, FaEnvelope } from 'react-icons/fa';
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
        <p>Scrubbing dirt from off the skin, used in Filipino meaning paghudhod or ihaplos. <br /> Example: "Hudhuran mo ng kalamansi ang iyong balat."</p>
        <img src={hudhod} alt="My Image" style={{ maxHeight: '300px', maxWidth: '100%' }} />
        <p>Example video:</p>
      </Row>
      <Row className='row-posts'>
        <h2>2. Napangilakan</h2>
        <p>Used in Filipino meaning nakolekta, the English term is collected or collection. <br /> Example: "Marami akong napangilakan na medalya mula sa mga nakaraang kompetisyon."</p>
        <img src={medals} alt="My Image" style={{ maxHeight: '300px', maxWidth: '100%' }} />
        <p>Example video:</p>
      </Row>
      <Row className='row-posts'>
        <h2>3. Salakat</h2>
        <p>Used in Filipino meaning pag-krus ng mga binti, the English term is crossing of legs. <br /> Example: "Naka-salakat siya habang nakaupo sa kanyang silya."</p>
        <img src={crosslegs} alt="My Image" style={{ maxHeight: '300px', maxWidth: '100%' }} />
        <p>Example video:</p>
      </Row>
      <Row className='row-posts'>
        <h2>4. Irog</h2>
        <p>Means sinta or darling, it is a term used for a relationship between a couple. <br /> Example: "Ako ay makikipagkita sa aking irog."</p>
        <img src={irog} alt="My Image" style={{ maxHeight: '300px', maxWidth: '100%' }} />
        <p>Example video:</p>
      </Row>
      <Row className='row-posts'>
        <h2>5. Salipawpaw</h2>
        <p>Means eroplano or airplane, it is a vehicle used for traveling to other countries or within the Philippines. <br /> Example: "Kami ay sasakay ng salipawpaw papuntang Singapore."</p>
        <img src={salipawpaw} alt="My Image" style={{ maxHeight: '300px', maxWidth: '100%' }} />
        <p>Example video:</p>
      </Row>
      <Row className='row-posts'>
        <h2>6. Durungawan</h2>
        <p>The Tagalog Filipino word for window, an opening in a wall that usually contains a sheet of glass. Example: "Palaging nakadungaw si Julia sa kanilang durungawan tuwing gabi."</p>
        <img src={durungawan} alt="My Image" style={{ maxHeight: '300px', maxWidth: '100%' }} />
      </Row>
      <Row className='row-posts'>
        <h2>7. Kanlungan</h2>
        <p> Means shelter or refuge, often used metaphorically. <br /> Example: "Ang kanlungan ng paaralan ay nagsilbing proteksyon sa mga mag-aaral mula sa init ng araw."</p>
        <img src={kanlungan} alt="My Image" style={{ maxHeight: '300px', maxWidth: '100%' }} />
      </Row>
      <Row className='row-posts'>
        <h2>8. Himutok</h2>
        <p>Means whisper or murmur, typically describing soft or gentle sounds. <br /> Example: "Narinig ko ang himutok ng hangin sa gabi habang naglalakad sa ilalim ng mga puno."</p>
        <img src={himutok} alt="My Image" style={{ maxHeight: '300px', maxWidth: '100%' }} />
      </Row>
      <Row className='row-posts'>
        <h2>9. Hiraya</h2>
        <p> Means imagination or the power of creative visualization. <br /> Example: "Sa hiraya ng isip ko, ako'y naglakbay sa mga mundong di pa nararanasan ng kahit sino."</p>
        <img src={hiraya} alt="My Image" style={{ maxHeight: '300px', maxWidth: '100%' }} />
      </Row>
      <Row className='row-posts'>
        <h2>10. Salumpuwit</h2>
        <p> It refers to a chair or seat, often used informally or in colloquial contexts.<br /> Example: "Tumabi ka sa salumpuwit at magpahinga ka sandali."</p>
        <img src={salampuwit} alt="My Image" style={{ maxHeight: '300px', maxWidth: '100%' }} />
      </Row>
      <Row className='row-footer'>
        <h2>Contact Us</h2>
        <p className='flex-center'><FaEnvelope style={{ marginRight: '5px' }} />
          Email: ryanespenida.no-reply@gmail.com</p>
        <p>Mobile number: 09123456789</p>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Button className='btn-footer' ><FaInstagramSquare />  Instagram</Button>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Button className='btn-footer'><FaFacebook />  Facebook</Button>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Button className='btn-footer'><FaTwitter />  Twitter</Button>
        </a>
      </Row>
    </div>
  );
}

export default App;
