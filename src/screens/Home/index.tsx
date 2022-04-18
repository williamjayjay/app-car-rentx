import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, Image, Platform, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import * as Animatable from "react-native-animatable";

/* ============ NATIVES E LIBS ============ */

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  MyCarsButton,
  Spacer,
  ContentProfileIcon,
} from "./styles";
import Logo from "../../assets/logo.svg";
import LogoWhiteSvg from "../../assets/svgLIFE/logo_white_full.svg";
import { Car } from "../../components/Car";
import { CarList } from "../../components/Car/styles";
import { CarDetails } from "../CarDetails";
import { api } from "../../services/api";
import { JobsDTO } from "../../dtos/JobsDTO";
import { Load } from "../../components/Load";
/* ============ COMPONENTS E OTHERS CREATED ============ */

export function Home() {
  const [jobs, setJobs] = useState<JobsDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [userButton, setUserButton] = useState("ocupado");

  const [profilePhoto, setProfilePhoto] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [statusUser, setStatusUser] = useState(false);

  const navigation = useNavigation();
  const theme = useTheme();

  // const isFocused = useIsFocused();

  // const handleFirstConnectivityChange = (isConnected) => {
  //   NetInfo.isConnected.removeEventListener(
  //     "connectionChange"
  //     // handleFirstConnectivityChange
  //   );

  //   if (isConnected === false) {
  //     Alert.alert("You are offline!");
  //   } else {
  //     Alert.alert("You are online!");
  //   }
  // };

  // const CheckConnectivity = () => {
  //   // For Android devices
  //   if (Platform.OS === "android") {
  //     NetInfo.isConnected.fetch().then((isConnected) => {
  //       if (isConnected) {
  //         Alert.alert("You are online!");
  //       } else {
  //         Alert.alert("You are offline!");
  //       }
  //     });
  //   } else {
  //     // For iOS devices
  //     NetInfo.isConnected.addEventListener(
  //       "connectionChange"
  //       // handleFirstConnectivityChange
  //     );
  //   }
  // };

  function handleNavCarDetails(dataJobs: JobsDTO) {
    navigation.navigate("CarDetails", { dataJobs });
    console.log("handleNavCarDetails.log");
  }

  function OpenProfile() {
    setStatusUser(!statusUser);
  }

  function handleOpenMyCars() {
    console.log(jobs[0]);
    navigation.navigate("MyCars", { theCar: jobs[0] });
    console.log("handleOpenMyCars.log");
  }

  async function fetchJobsStart() {
    try {
      const response = await api.get("/jobs");
      setJobs(response.data.data);
      console.log(response.data);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function fetchJobsRefresh() {
    setRefreshing(true);
    try {
      const response = await api.get("/jobs");
      setJobs(response.data.data);
    } catch (error) {
      setRefreshing(false);
      setLoading(false);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  async function fetchDataUsers() {
    setRefreshing(true);
    try {
      // const response = await api.get("/jobs");
      const response = await api.get(`/profile_user?id_user=${12345678}`);

      // console.log(response?.data[0]);
      setUserButton(response?.data[0]?.service_status);
      // setJobs(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      // setRefreshing(false);
      // setLoading(false);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
    // fetchJobsStart();
  }

  useEffect(() => {
    fetchJobsStart();
  }, []);

  // useEffect(() => {
  //   fetchJobsStart();
  //   fetchJobsRefresh();
  //   fetchDataUsers();
  // }, [isFocused]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <HeaderContent>
          <Spacer />
          {/* <Logo width={RFValue(108)} height={RFValue(12)} /> */}
          <LogoWhiteSvg width={RFValue(108)} height={RFValue(60)} />
          <ContentProfileIcon onPress={() => OpenProfile()}>
            {profilePhoto ? (
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: 30,
                }}
                resizeMode="cover"
                source={{
                  uri: "https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg",
                }}
              />
            ) : (
              <Feather name="user" size={32} color={theme.colors.shape} />
            )}
          </ContentProfileIcon>

          {/* <TotalCars>Total de 12 carros</TotalCars> */}
        </HeaderContent>
        {/* <MyCarsButton onPress={() => fetchJobsStart()}>
          <Ionicons size={34} name="home" color={theme.colors.shape} />
        </MyCarsButton> */}
      </Header>

      {/* <CarDetails /> */}

      {loading ? (
        <Load />
      ) : (
        <CarList
          refreshing={refreshing}
          onRefresh={() => fetchJobsRefresh()}
          data={jobs}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleNavCarDetails(item)} />
          )}
        />
      )}

      <MyCarsButton onPress={handleOpenMyCars}>
        {userButton == "ocupado" ? (
          <Animatable.View
            animation="bounceIn"
            easing="ease-in-quad"
            iterationCount="infinite"
          >
            <Feather
              name="check-square"
              size={34}
              color={theme.colors.background_secondary}
            />
          </Animatable.View>
        ) : (
          <Feather
            name="check-square"
            size={34}
            color={theme.colors.text_details}
          />
        )}
      </MyCarsButton>
    </Container>
  );
}
