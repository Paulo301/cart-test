import { ChangeEvent, useState } from "react";

import { Button } from "../../components/Button";
import CartModal from "../../components/CartModal";
import { Container } from "./styles";

export function Home() {
  const [cartMode, setCartMode] = useState('without-fee');
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  function onChangeCartMode(event: ChangeEvent<HTMLInputElement>) {
    setCartMode(event.target.value);
  }

  function handleOpenCartModal() {
    setIsCartModalOpen(true);
  }

  function handleCloseCartModal() {
    setIsCartModalOpen(false);
  }

  return (
    <Container>
      <section>
        <p>Escolha o modo do carrinho:</p>

        <div>
          <div>
            <input 
              type="radio" 
              id="without-fee" 
              name="cart-mode" 
              value="without-fee"
              checked={cartMode === 'without-fee'}
              onChange={onChangeCartMode}
            />
            <label htmlFor="without-fee">Sem frete</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="with-fee" 
              name="cart-mode" 
              value="with-fee"
              checked={cartMode === 'with-fee'}
              onChange={onChangeCartMode}
            />
            <label htmlFor="with-fee">Com frete</label>
          </div>
        </div>
        
        <Button onClick={handleOpenCartModal}>Abrir carrinho</Button>
      </section>

      <CartModal 
        isOpen={isCartModalOpen} 
        onRequestClose={handleCloseCartModal}
        isWithFee={cartMode === 'with-fee'}
      />
    </Container>
  );
}