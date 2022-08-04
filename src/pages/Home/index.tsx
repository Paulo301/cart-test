import { ChangeEvent, useState } from "react";

import { Button } from "../../components/Button";
import { Container } from "./styles";

export function Home() {
  const [cartMode, setCartMode] = useState('without-fee');

  function onChangeCartMode(event: ChangeEvent<HTMLInputElement>) {
    setCartMode(event.target.value);
  }

  return (
    <Container>
      <section>
        <p>Escolha o modo do carrinho:</p>

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
        
        <Button onClick={() => console.log(cartMode)}>Abrir carrinho</Button>
      </section>
    </Container>
  );
}