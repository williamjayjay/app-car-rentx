import React from "react";
import { SvgProps } from "react-native-svg";
/* ============ NATIVES E LIBS ============ */

import { Container, Name } from "./styles";
/* ============ COMPONENTS E OTHERS CREATED ============ */

interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

export function MiniAccessory({ name, icon: Icon }: Props) {
  return (
    <Container>
      <Icon width={18} height={18} />
      <Name numberOfLines={1}>{name}</Name>
    </Container>
  );
}
