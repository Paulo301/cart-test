import { useState } from 'react';

import TextTruncate from 'react-text-truncate';

import { handlePrice } from "../../../utils/handlePrice";
import { toPascalCase } from '../../../utils/toPascalCase';

import defaultImage from '../../../assets/no-image.png';

import { Container } from "./styles";

interface ICartItem {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  sellingPrice: number;
}

interface CartItemProps {
  item: ICartItem;
}

export function CartItem({ item }: CartItemProps) {
  const [srcImg, setSrcImg] = useState(item.imageUrl);

  return (
    <Container>
      <img 
        src={srcImg} 
        alt={item.name} 
        onError={() => setSrcImg(defaultImage)}
      />

      <section>
        <h3 title={toPascalCase(item.name)}>
          <TextTruncate
            line={1}
            element="span"
            truncateText="…"
            text={toPascalCase(item.name)}
          />
        </h3>

        {
          item.sellingPrice < item.price && (
            <span>{handlePrice(item.price)}</span>
          )
        }

        <p>{handlePrice(item.sellingPrice < item.price ? item.sellingPrice : item.price )}</p>
      </section>
    </Container>
  );
}