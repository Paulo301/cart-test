import { useEffect, useState } from 'react';

import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import dataBelowTen from "../../assets/abaixo-10-reais.json";
import dataAboveTen from "../../assets/acima-10-reais.json";

import { Divider } from '../Divider';
import { Button } from '../Button';

import { Container, Content, Items, Total, FreeDeliveryFee } from './styles';
import { handlePrice } from '../../utils/handlePrice';
import { CartItem } from './CartItem';

interface CartModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  isWithFee: boolean;
}

export default function CartModal(props: CartModalProps) {
  const {
    isOpen, 
    onRequestClose,
    isWithFee
  } = props;

  const [cartData, setCartData] = useState(isWithFee ? dataBelowTen : dataAboveTen);

  useEffect(() => {
    const tempData = isWithFee ? dataBelowTen : dataAboveTen;
    setCartData(tempData);
  }, [isWithFee]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'  
      >
        <img src={closeImg} alt='Fechar modal' />
      </button>

      <Container>
        <header>
          <h2>Meu carrinho</h2>
        </header>

        <Divider />

        <Content>
          <Items>
            {
              cartData.items.map((item) => (
                <CartItem 
                  key={item.id}
                  item={item}
                />
              ))
            }
          </Items>

          <Divider />

          <Total>
            <strong>Total</strong>
            <strong>
              {handlePrice(cartData.value)}
            </strong>
          </Total>

          {
            cartData.value > 1000 && (
              <FreeDeliveryFee>
                <p>Parabéns, sua compra tem frete grátis !</p>
              </FreeDeliveryFee>
            )
          }
        </Content>

        <Divider />

        <footer>
          <Button
            onClick={onRequestClose}
          >
            Finalizar compra
          </Button>
        </footer>
      </Container>
    </Modal>
  );
}