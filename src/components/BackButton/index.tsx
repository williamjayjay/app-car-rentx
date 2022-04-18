import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { BorderlessButtonProps, RectButtonProps } from 'react-native-gesture-handler';
/* ============ NATIVES E LIBS ============ */

import { Container } from './styles';
import { useTheme } from 'styled-components';
/* ============ COMPONENTS E OTHERS CREATED ============ */

interface Props extends RectButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme()
  return (
    <Container  {...rest} >
      <MaterialIcons
        name="chevron-left"
        size={36}
        color={color ? color : theme.colors.text}
      />

    </Container>
  )
}