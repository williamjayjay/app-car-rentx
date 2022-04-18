import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  BorderlessButtonProps,
  RectButtonProps,
} from "react-native-gesture-handler";
/* ============ NATIVES E LIBS ============ */

import { Container } from "./styles";
import { useTheme } from "styled-components";
/* ============ COMPONENTS E OTHERS CREATED ============ */

interface Props extends RectButtonProps {
  color?: string;
  type?: string;
}

export function ConvertIcons({ color, type, ...rest }: Props) {
  const theme = useTheme();
  switch (type) {
    case "place_apartment":
      return (
        <Container {...rest}>
          <MaterialIcons
            name="apartment"
            size={38}
            color={color ? color : theme.colors.text}
          />
        </Container>
      );

    case "place_house":
      return (
        <Container {...rest}>
          <MaterialIcons
            name="house"
            size={38}
            color={color ? color : theme.colors.text}
          />
        </Container>
      );

    default:
      return (
        <Container {...rest}>
          <MaterialIcons
            name="chevron-left"
            size={38}
            color={color ? color : theme.colors.text}
          />
        </Container>
      );
  }
}
