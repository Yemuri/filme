import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../Imagens/Img1'
import Img2 from '../Imagens/Img2'
import Img3 from '../Imagens/Img3'
import './bootstrap.css'

function BootUm() {
  return (
    <div className='carousel'>
      '<Carousel >
        <Carousel.Item>
          <div className='imgcarousel'>
            <Img1 />
            <Carousel.Caption>
              <h3>Primeira imagem</h3>
              <p>Parágrafo primeira imagem.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <Img2 />
          <Carousel.Caption>
            <h3>Segunda imagem</h3>
            <p>Segundo parágrafo</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img3 />
          <Carousel.Caption>
            <h3>Terceira imagem</h3>
            <p>Terceiro parágrafo</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>'
    </div >
  );
}

export default BootUm;