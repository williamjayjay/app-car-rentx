import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
/* ============ NATIVES E LIBS ============ */

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { ConfirmButton } from "../../components/ConfirmButton";

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
  S_Container,
  S_WrapperLogo,
  S_Content,
  S_Footer,
  S_Spacer,
} from "./styles";
/* ============ COMPONENTS E OTHERS CREATED ============ */

export function SchedulingComplete() {
  const { width, height } = useWindowDimensions();

  const navigation = useNavigation();

  function handleNavHome() {
    console.log("handleNavHome.log");
    navigation.navigate("Home");
  }

  return (
    <S_Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <S_WrapperLogo>
        <LogoSvg height="100%" width={width} />
      </S_WrapperLogo>

      <S_Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisar ir {"\n"}
          até a concessionária da EmpresaX {"\n"}
          pegar o seu automóvel.
        </Message>
      </S_Content>

      <S_Footer>
        <ConfirmButton onPress={handleNavHome} title="OK" />
      </S_Footer>

      <S_Spacer />
    </S_Container>
  );
}
