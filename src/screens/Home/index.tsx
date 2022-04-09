import React, { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

/* ============ NATIVES E LIBS ============ */

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  MyCarsButton,
} from "./styles";
import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { CarList } from "../../components/Car/styles";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { Load } from "../../components/Load";
/* ============ COMPONENTS E OTHERS CREATED ============ */

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();

  function handleNavCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
    console.log("handleNavCarDetails.log");
  }

  function handleOpenMyCars() {
    navigation.navigate("MyCars");
    console.log("handleOpenMyCars.log");
  }

  async function fetchCars() {
    console.log("fetchCars");
    try {
      const response = await api.get("/cars");
      setCars(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de X carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleNavCarDetails(item)} />
          )}
        />
      )}

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons size={34} name="ios-car-sport" color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
}
