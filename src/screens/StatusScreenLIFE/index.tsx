import React, { useState } from "react";
import { Alert, StatusBar, View } from "react-native";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

/* ============ NATIVES E LIBS ============ */

import {
  Container,
  Header,
  HeaderContent,
  Spacer,
  BackIcon,
  TitleH1,
  TitleH2,
  MainHeaderContent,
  TitleContent,
  RowStatus,
  ContainerStatus,
  Footer,
  TitleH3,
  ButtonContent,
  IconLoadingContent,
  FooterRectangle,
} from "./styles";
// import Logo from "../../assets/svgLIFE/Logo-black.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";

import moment from "moment";
/* ============ COMPONENTS E OTHERS CREATED ============ */

export function StatusScreenLIFE() {
  const theme = useTheme();
  const [thisStatus, setThisStatus] = useState(
    {
      numberStatus: 1,
      labelStatus: "A caminho",
    }
    // {
    //   numberStatus: 2,
    //   labelStatus: 'Limpeza em andamento'
    // },

    // {
    //   numberStatus: 3,
    //   labelStatus: 'Limpeza finalizada'
    // }
  );

  const [loading, setLoading] = useState(false);
  const [minutosDiferentes, setMinutosDiferentes] = useState(0);

  const [horaOLD, setHoraOLD] = useState();
  const [horaNEW, setHoraNEW] = useState();

  const [horaInicialClicada, setHoraInicialClicada] = useState();
  const [horaFinalAtual, setHoraFinalAtual] = useState();
  const [valueCalculadoJa, setValueCalculadoJa] = useState();

  const updateStatus = () => {
    if (thisStatus.numberStatus === 1) {
      setThisStatus({ labelStatus: "Limpeza em andamento", numberStatus: 2 });
      setLoading(false);
    } else if (thisStatus.numberStatus === 2) {
      setThisStatus({ labelStatus: "Limpeza finalizada", numberStatus: 3 });
      setLoading(false);
    } else if (thisStatus.numberStatus === 3) {
      setThisStatus({ labelStatus: "A caminho", numberStatus: 1 });
      setLoading(false);
    }
  };

  const openButtonAlert = () => {
    Alert.alert(
      "Olá Marcia!",
      "Você quer marcar o serviço como completo?",
      [
        { text: "Sim", onPress: () => updateStatus() },
        {
          text: "Não",
          onPress: () => {
            setLoading(false), console.log("No button clicked");
          },
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const time1 = new Date("2020-07-10");
  const time2 = new Date("2020-07-11");

  const addHoraOLD = () => {
    // var end = moment("2022-03-20T15:48:30.605Z"); //todays date
    // var startTime = moment(new Date()); // another date

    // console.log('MINUTE OLD', startTime.minutes())
    // console.log('MINUTE END', end.minutes())
    // var duration = moment.duration(end.diff(startTime));
    // var minu = duration.asMinutes();

    // var durationCERTO = startTime.diff(end, 'minutes')
    console.log("sem convert", horaInicialClicada);
    var durationCERTO = horaInicialClicada.diff(moment(new Date()), "minutes");
    const calcMath = Math.abs(durationCERTO);
    setValueCalculadoJa(calcMath);
    console.log(calcMath);

    if (calcMath > 5) {
      console.log(
        "@@@@@@@@@@@@@@@@@@@@ AEEEEE PASOSOU 5 MIN@@@@" + "total: " + calcMath
      );
    } else {
      console.log(".... apenas " + calcMath + " minutes");
    }
  };

  const addHoraNEW = () => {
    setHoraNEW(moment(new Date()));
  };

  // function verifyHours() {

  //   //11h > 11h  ou 11h === 11h
  //   if (horaNEW?.hours > horaOLD?.hours || horaNEW?.hours == horaOLD?.hours) {

  //     //57min  >  52min
  //     if (horaNEW?.minutes > horaOLD?.minutes) {
  //       setMinutosDiferentes(horaNEW?.minutes - horaOLD?.minutes)
  //       return minutosDiferentes
  //     } else {

  //     }

  //   } else {
  //     console.log('########## A HORA ATUAL É MENOR QUE A HORA ANTIGA  #############3')
  //   }
  // }

  const compareTimezone = () => {
    alert("Teste comparation");

    let dateOne = moment().toObject();
    let dateTwo = {
      date: 20,
      hours: 11,
      milliseconds: 577,
      minutes: 54,
      months: 2,
      seconds: 11,
      years: 2022,
    };

    // console.log(dateOne)

    if (dateTwo.hours > dateOne.hours) {
      console.log(
        "Sim, a hora " + dateTwo.hours + "é maior que " + dateOne.hours
      );

      if (dateTwo.minutes > dateOne.minutes) {
        console.log(
          "Sim, o minuto " + dateTwo.minutes + "é maior que " + dateOne.minutes
        );
      } else if (dateOne.minutes > dateTwo.minutes) {
        console.log(
          "Sim, o minuto " + dateOne.minutes + "é maior que " + dateTwo.minutes
        );
      } else if (dateOne.minutes == dateTwo.minutes) {
        console.log(
          "Sim, o minuto " + dateOne.minutes + "é igual a " + dateTwo.minutes
        );
      }
    }

    // let msDifference = dateTwo - dateOne;

    // let minutes = Math.floor(msDifference / 1000 / 60);
    // console.log("Minutes between two dates =", minutes);

    // if (time1 > time2) {
    //   console.log('time1 e maior, valor:')
    //   console.log(time1)
    // }
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <MainHeaderContent>
        {/* COMPONENTIZAR */}
        <Header>
          <HeaderContent>
            <BackIcon>
              <Feather
                name="arrow-left"
                size={28}
                color={theme.colors_life.title}
              />
            </BackIcon>

            {/* <Logo width={RFValue(58)} height={RFValue(58)} /> */}

            <View style={{ width: 40 }} />
          </HeaderContent>
        </Header>
        {/* COMPONENTIZAR */}
        <Spacer />
        <TitleContent>
          <Feather
            style={{ marginRight: 4 }}
            name="target"
            size={28}
            color={theme.colors_life.title}
          />
          <TitleH2>Status</TitleH2>
        </TitleContent>

        <Spacer />

        <ContainerStatus>
          <RowStatus>
            <TitleH1 style={{ width: "60%" }}>{thisStatus.labelStatus}</TitleH1>
            <TitleH1>04/18/2022</TitleH1>
          </RowStatus>

          <FooterRectangle>
            <TitleH3>{thisStatus.numberStatus}/3</TitleH3>
          </FooterRectangle>
        </ContainerStatus>
      </MainHeaderContent>

      <Animatable.View
        animation="bounceIn"
        easing="ease-in-quad"
        iterationCount="infinite"
      >
        <IconLoadingContent>
          {thisStatus.numberStatus === 1 && (
            <MaterialIcons
              name="directions-transit"
              size={RFValue(100)}
              color={theme.colors_life.title}
            />
          )}
          {thisStatus.numberStatus === 2 && (
            <MaterialIcons
              name="cleaning-services"
              size={RFValue(100)}
              color={theme.colors_life.title}
            />
          )}
          {thisStatus.numberStatus === 3 && (
            <MaterialCommunityIcons
              name="text-box-check-outline"
              size={RFValue(100)}
              color={theme.colors_life.title}
            />
          )}
        </IconLoadingContent>
      </Animatable.View>

      <ButtonContent>
        <Footer>
          <Button
            onPress={() => {
              setLoading(true), openButtonAlert();
            }}
            // color={theme.colors.main}
            title="Atualizar Status"
            loading={loading}
            enabled={!loading}
          />
        </Footer>
      </ButtonContent>

      {/* <ButtonContent>
        <Button onPress={() => {
          setHoraInicialClicada(moment(new Date()))

        }} color={theme.colors_life.main} title="add hora OLD" />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Button onPress={() => addHoraOLD()} color={theme.colors_life.main} title="CALCULAR 5 MIN" />
      </ButtonContent> */}
    </Container>
  );
}
