import React, { useEffect, useState } from "react";
import { Alert, StatusBar, View, BackHandler } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
/* ============ NATIVES E LIBS ============ */
import { Accessory } from "../../components/Accessory";
import { MiniAccessory } from "../../components/MiniAccessory";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Feather, MaterialIcons, Entypo } from "@expo/vector-icons";
import User from "../../assets/svgLIFE/user.svg";
import { parseISO, format } from "date-fns";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateTitle,
  DateInfo,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import { Button } from "../../components/Button";
import { JobsDTO } from "../../dtos/JobsDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { api } from "../../services/api";
/* ============ COMPONENTS E OTHERS CREATED ============ */

interface Params {
  dataJobs: JobsDTO;
  dataAccessories: any;
}

export function AcceptService() {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const { dataJobs, dataAccessories } = route.params as Params;

  const [loading, setLoading] = useState(false);
  const [loadingAfterButtonAccept, setLoadingAfterButtonAccept] =
    useState(false);

  const [accessoriesJobs, setAccessoriesJobs] = useState(
    dataAccessories ? dataAccessories : []
  );

  function handleNavSchedulingComplete() {
    setLoadingAfterButtonAccept(true);
    setLoading(true);
    console.log("handleNavSchedulingComplete.log");
    setTimeout(() => {
      // fetchStatusProfile();
      navigation.navigate("SchedulingComplete");
      // createWorking();
    }, 500);
  }

  async function fetchAccessoriesByIdJob() {
    // setRefreshing(true);

    if (!dataAccessories) {
      try {
        const response = await api.get(`/accessories/jobs/${dataJobs?.id}`);
        setAccessoriesJobs(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
        // setRefreshing(false);
        // setLoading(false);
      } finally {
        // setLoading(false);
        // setRefreshing(false);
      }
    }
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    fetchAccessoriesByIdJob();
  }, []);

  async function fetchStatusProfile() {
    try {
      const response = await api.get(`/profile_user?id_user=${12345678}`);
      console.log({ THEVALOR2222: response?.data[0] });

      const userData = response?.data[0];

      if (userData?.service_status == "ocupado") {
        alert("Voce ja possui um serviço ativo.");
      } else {
        alert("Voce está livre.");

        await api.post("services_byuser", {
          ...dataJobs,
          id_user: userData?.id_user,
          id_service: userData?.id_service,
          name: "JOSEFINA andrade",
          email: "email@email.com",
          service_status: "ocupado",
        });

        await api.put(`/cars/${dataJobs?.id}`, {
          ...dataJobs,
          service_status: "ocupado",
        });

        await api
          .put(`/profile_user/${userData?.id}`, {
            id_user: userData.id_user,
            id_service: userData.id_service,
            name: "JOSEFINA andrade",
            email: "email@email.com",
            service_status: "ocupado",
          })
          .then((response) => navigation.navigate("SchedulingComplete"))
          .catch(() => {
            setLoading(false),
              Alert.alert("Não foi possível confirmar o agendamento.");
          });
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  async function createWorking() {
    if (!dataJobs?.id) {
      alert("Problema, tente novamente.");
      setLoading(false);
    }

    try {
      const response = await api.post(`/working`, {
        idJobs: dataJobs?.id,
        idUser: dataJobs?.id,
        statusWorking: "iniciando",
      });
      // setJobs(response.data.data);
      console.log(response?.data?.data);
      navigation.navigate("SchedulingComplete");
    } catch (error) {
      console.log(error);
      alert(error);
      setLoadingAfterButtonAccept(false);

      setLoading(false);
      setLoading(false);
    } finally {
    }
  }

  async function fetchIdService() {
    try {
      const response = await api.get(`/cars?id=${dataJobs?.id}`);
      console.log(response.data[0].id);

      if (response?.data[0]?.id == dataJobs?.id) {
        // alert("SIM E IGUAL");

        if (response?.data[0]?.service_status == "ocupado") {
          alert("Serviço ja foi aceito.");
          navigation.navigate("Home");
        } else {
          alert("Serviço aceito com sucesso.");
          // navigation.navigate("SchedulingComplete");
        }
      } else {
        alert("Serviço ja foi aceito.");
        navigation.navigate("Home");
      }

      // await api.post("service_accept_by_user", {
      //   user_id: 123456789,
      //   dataJobs,
      //   startDate: format(parseISO(dates[0]), "dd/MM/yyyy"),
      //   endDate: format(parseISO(dates[dates?.length - 1]), "dd/MM/yyyy"),
      // });
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  function handleNavBack() {
    if (!loadingAfterButtonAccept) {
      navigation.goBack();
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton enabled={!loading} onPress={handleNavBack} />
      </Header>

      <CarImages>
        <RentalPeriod>
          <CalendarIcon>
            <MaterialIcons
              name="person-pin"
              size={32}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo style={{ width: "60%" }}>
            <DateTitle>contratante</DateTitle>
            <DateValue>JOSEFINA ANDRADE</DateValue>
          </DateInfo>

          <Feather name="info" size={RFValue(26)} color={theme.colors.text} />
        </RentalPeriod>
      </CarImages>
      <Content>
        {/* <Details>
          <Description>
            <Brand numberOfLines={8}>{dataJobs?.typeJobs}</Brand>
            <Name numberOfLines={8}>{dataJobs?.name}</Name>
          </Description>

          <Rent>
            <Period numberOfLines={5}>{dataJobs?.periodJobs}</Period>
            <Price numberOfLines={5}>R$ {dataJobs?.priceJobs}</Price>
          </Rent>
        </Details> */}

        {/* <Accessories>
          {dataJobs.accessories.map((accessory) => (
            <Accessory
              key={accessory?.type}
              name={accessory?.name}
              icon={getAccessoryIcon(accessory?.type)}
            />
          ))}
        </Accessories> */}

        {accessoriesJobs.length > 0 ? (
          <Accessories>
            {accessoriesJobs?.map((accessory) => (
              <MiniAccessory
                key={accessory?.id}
                name={accessory?.name}
                icon={getAccessoryIcon(accessory?.type)}
              />
            ))}
          </Accessories>
        ) : (
          <Brand style={{ marginVertical: 16 }}>
            Sem registro de informações...
          </Brand>
        )}

        <About>Descrição: {dataJobs.aboutJobs}</About>

        <RentalPeriod>
          <CalendarIcon>
            <Entypo name="address" size={24} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo style={{ width: "60%" }}>
            <DateTitle>endereço</DateTitle>
            <DateValue numberOfLines={1}>{dataJobs?.addressJobs}</DateValue>
          </DateInfo>
          <Feather name="info" size={RFValue(26)} color={theme.colors.text} />
        </RentalPeriod>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(28)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>
              {format(parseISO(dataJobs?.dtStartJobs), "dd/MM/yyyy")}
            </DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(18)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>
              {" "}
              {format(parseISO(dataJobs?.dtEndJobs), "dd/MM/yyyy")}
            </DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>

          <RentalPriceDetails>
            <RentalPriceQuota
              numberOfLines={5}
            >{`R$ ${dataJobs?.priceJobs} x${dataJobs?.dailyJobs} diárias`}</RentalPriceQuota>
            <RentalPriceTotal numberOfLines={5}>
              R$ {dataJobs?.priceJobs * dataJobs?.dailyJobs}
            </RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          onPress={() => {
            handleNavSchedulingComplete();
          }}
          color={theme.colors.success}
          title="Aceitar Serviço"
          loading={loading}
          enabled={!loading}
        />
      </Footer>
    </Container>
  );
}
