import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: string;
}

export function Button(props: ButtonProps) {
  const { 
    children, 
    ...rest 
  } = props;

  return (
    <Container
      {...rest}
    >
      {children}
    </Container>
  );
}