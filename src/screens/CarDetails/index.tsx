import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
/* ============ NATIVES E LIBS ============ */
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Feather } from "@expo/vector-icons";

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
} from "./styles";
import { Button } from "../../components/Button";
import { JobsDTO } from "../../dtos/JobsDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { RFValue } from "react-native-responsive-fontsize";
import { api } from "../../services/api";
/* ============ COMPONENTS E OTHERS CREATED ============ */

interface Params {
  dataJobs: JobsDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const [accessoriesJobs, setAccessoriesJobs] = useState([]);

  const { dataJobs } = route.params as Params;

  function handleNavAcceptService() {
    navigation.navigate("AcceptService", {
      dataJobs,
      dataAccessories: accessoriesJobs,
    });
    console.log("handleNavAcceptService.log");
  }

  function handleNavBack() {
    navigation.goBack();
  }

  async function fetchAccessoriesByIdJob() {
    // setRefreshing(true);
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

  useEffect(() => {
    console.log("screen");
    fetchAccessoriesByIdJob();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={handleNavBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={dataJobs?.thumbnail} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            {/* <Brand numberOfLines={8}>{dataJobs?.brand}</Brand> */}
            <Brand numberOfLines={8}>{dataJobs?.typeJobs}</Brand>
            <Name numberOfLines={8}>{dataJobs?.name}</Name>
          </Description>

          <Rent>
            {/* <Period numberOfLines={5}>{dataJobs?.rent?.period}</Period> */}
            <Period numberOfLines={5}>
              {dataJobs?.periodJobs}
              {"\n"}você recebe{" "}
            </Period>
            <Price numberOfLines={5}>R$ {dataJobs?.priceJobs}</Price>
          </Rent>
        </Details>

        {accessoriesJobs.length > 0 ? (
          <Accessories>
            {accessoriesJobs?.map((accessory) => (
              <Accessory
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

          // <Accessories>
          //   <Accessory key={1} name="2" icon={getAccessoryIcon("")} />

          //   <Accessory key={2} name="2" icon={getAccessoryIcon("")} />

          //   <Accessory key={3} name="2" icon={getAccessoryIcon("")} />

          //   <Accessory key={4} name="2" icon={getAccessoryIcon("")} />

          //   <Accessory key={5} name="2" icon={getAccessoryIcon("")} />

          //   <Accessory key={6} name="2" icon={getAccessoryIcon("")} />
          // </Accessories>
        )}

        <About>{dataJobs.aboutJobs}</About>
      </Content>

      <Footer>
        <Button onPress={handleNavAcceptService} title="Seguinte" />
      </Footer>
    </Container>
  );
}
