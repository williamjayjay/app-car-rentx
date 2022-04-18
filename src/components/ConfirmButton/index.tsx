import React from 'react';
// import { RectButtonProps } from 'react-native-gesture-handler';
/* ============ NATIVES E LIBS ============ */

import { Container, Title } from './styles';
/* ============ COMPONENTS E OTHERS CREATED ============ */

interface Props {
  title: string;
  onPress: () => void;
}

export function ConfirmButton({ title, onPress, ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest} >
      <Title>{title}</Title>
    </Container>
  )
}