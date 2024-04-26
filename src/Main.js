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
import { FaFacebook, FaTwitter, FaInstagramSquare, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './styles.css';
import ReactPlayer from 'react-player';


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
          <p style={{ fontSize: '17px' }}>Discover the Hidden Gems of Filipino Vocabulary</p>
        </Row>
      </Container>

      <Row className='intro'>
        <p>Welcome to 10 UNCOMMONLY USED FILIPINO WORDS, your ultimate destination for exploring the rich tapestry of Filipino culture, language, and heritage.
          Immerse yourself in a world of vibrant traditions, fascinating history, and unique experiences as we take you on a journey through the Philippines like never before.
          Whether you're a seasoned enthusiast or a curious newcomer, our platform offers a treasure trove of resources, stories, and insights to ignite your passion for all things Filipino.
          Join us as we celebrate the beauty and diversity of the Philippines, one discovery at a time.
        </p>
      </Row>

      <Row className='row-posts'>
        <Col>
          <h2>1. Kanlungan</h2>
          <p> Means shelter or refuge, often used metaphorically. </p>
          <p>          Example: "Ang kanlungan ng paaralan ay nagsilbing proteksyon sa mga mag-aaral mula sa init ng araw."</p>
          <img src={kanlungan} alt="My Image" className='img-posts' />
        </Col>
      </Row>
      <Row className='row-posts'>
        <h2>2. Hudhod</h2>
        <p>Scrubbing dirt from off the skin, used in Filipino meaning paghudhod or ihaplos.</p>
        <p>Example: "Hudhuran mo ng kalamansi ang iyong balat."</p>
        <img src={hudhod} alt="My Image" className='img-posts' />
      </Row>
      <Row className='row-posts'>
        <h2>3. Durungawan</h2>
        <p>The Tagalog Filipino word for window, an opening in a wall that usually contains a sheet of glass.</p>
        <p>Example: "Palaging nakadungaw si Julia sa kanilang durungawan tuwing gabi."</p>
        <img src={durungawan} alt="My Image" className='img-posts' />
      </Row>
      <Row className='row-posts'>
        <h2>4. Napangilakan</h2>
        <p>Used in Filipino meaning nakolekta, the English term is collected or collection. </p>
        <p>Example: "Marami akong napangilakan na medalya mula sa mga nakaraang kompetisyon."</p>
        <img src={medals} alt="My Image" className='img-posts' />
      </Row>
      <Row className='row-posts'>
        <h2>5. Salakat</h2>
        <p>Used in Filipino meaning pag-krus ng mga binti, the English term is crossing of legs. </p>
        <p>Example: "Naka-salakat siya habang nakaupo sa kanyang silya."</p>
        <img src={crosslegs} alt="My Image" className='img-posts' />
      </Row>
      <Row className='row-posts'>
        <h2>6. Irog</h2>
        <p>Means sinta or darling, it is a term used for a relationship between a couple.</p>
        <p>Example: "Ako ay makikipagkita sa aking irog."</p>
        <img src={irog} alt="My Image" className='img-posts' />
      </Row>
      <Row className='row-posts'>
        <h2>7. Salipawpaw</h2>
        <p>Means eroplano or airplane, it is a vehicle used for traveling to other countries or within the Philippines.</p>
        <p>Example: "Kami ay sasakay ng salipawpaw papuntang Singapore."</p>
        <img src={salipawpaw} alt="My Image" className='img-posts' />
      </Row>
      <Row className='row-posts'>
        <h2>8. Himutok</h2>
        <p>Means whisper or murmur, typically describing soft or gentle sounds.</p>
        <p>Example: "Narinig ko ang himutok ng hangin sa gabi habang naglalakad sa ilalim ng mga puno."</p>
        <img src={himutok} alt="My Image" className='img-posts' />
      </Row>
      <Row className='row-posts'>
        <h2>9. Hiraya</h2>
        <p> Means imagination or the power of creative visualization.</p>
        <p>Example: "Sa hiraya ng isip ko, ako'y naglakbay sa mga mundong di pa nararanasan ng kahit sino."</p>
        <img src={hiraya} alt="My Image" className='img-posts' />
      </Row>
      <Row className='row-posts'>
        <h2>10. Salumpuwit</h2>
        <p> It refers to a chair or seat, often used informally or in colloquial contexts.</p>
        <p>Example: "Tumabi ka sa salumpuwit at magpahinga ka sandali."</p>
        <img src={salampuwit} alt="My Image" className='img-posts' />
      </Row>

      <Row className='b4-vid'>
        <p>As you've discovered these 10 uncommonly used Filipino words, remember that language is a gateway to culture, history, and identity.
          Embracing and celebrating the richness of Filipino vocabulary not only enhances our linguistic skills but also deepens our connection to our heritage.
          Keep exploring the diverse linguistic landscape of the Philippines, and let each word you encounter be a stepping stone to a deeper understanding of our vibrant culture.
        </p>
      </Row>

      <Container
        className='player'>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=o0mdfu94yt4"
          controls
          width="300px"
          height="530px"
        />
      </Container>


      <Row className='row-footer'>
        <h2>Contact Us</h2>
        <p className='flex-center'><FaEnvelope style={{ marginRight: '5px' }} />
          Email: ryanespenida.no-reply@gmail.com</p>
        <p className='flex-center'><FaPhoneAlt style={{ marginRight: '5px' }} /> Mobile number: 09123456789</p>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Button className='btn-footer' ><FaInstagramSquare />  Instagram</Button>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Button className='btn-footer'><FaFacebook />  Facebook</Button>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Button className='btn-footer'><FaTwitter />  Twitter</Button>
        </a>
        <p className='p-copy'>&copy; 2024 RyanE. All rights reserved.</p>
      </Row>
    </div>
  );
}

export default App;
