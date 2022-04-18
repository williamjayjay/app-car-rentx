import React from "react";
import { SvgProps } from "react-native-svg";
/* ============ NATIVES E LIBS ============ */

import { Container, Name } from "./styles";
/* ============ COMPONENTS E OTHERS CREATED ============ */

interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({ name, icon: Icon }: Props) {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name numberOfLines={1}>{name}</Name>
    </Container>
  );
}
