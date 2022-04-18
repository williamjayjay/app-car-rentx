import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StatusBar, FlatList, Alert } from "react-native";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import {
  Feather,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

/* ============ NATIVES E LIBS ============ */

import { BackButton } from "../../components/BackButton";
import { Car } from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import {
  Container,
  Header,
  Footer,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
  RentalPeriod,
  CalendarIcon,
  DateTitle,
  DateInfo,
  DateValue,
  ContentStausAlign,
  ContentFlatList,
  ContentWithLoader,
  ClicableCotentJobs,
} from "./styles";
import { Load } from "../../components/Load";
import { Button } from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import { Works } from "../../components/Works";
/* ============ COMPONENTS E OTHERS CREATED ============ */

import { parseISO, format } from "date-fns";

interface CarProps {
  car: CarDTO;
  id: string;
  user_id: string;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const theme = useTheme();
  const route = useRoute();

  const navigation = useNavigation();
  // const { theCar } = route.params as any;
  // const { car } = route.params as Params;

  // const [cars, setCars] = useState<CarProps[]>([]);
  const [cars, setCars] = useState();
  const [valueIdWorking, setValueIdWorking] = useState();
  const [valueStatusWorking, setValueStatusWorking] = useState();

  const [loading, setLoading] = useState(true);
  const [jobsFound, setJobsFound] = useState();

  const [userDataStatus, setUserDataStatus] = useState();
  const [statusRefresh, setStatusRefresh] = useState(false);

  //newww
  const [workingLength, setWorkingLength] = useState();
  const [workingData, setWorkingData] = useState();

  //newww

  const [thisStatus, setThisStatus] = useState({
    numberStatus: 1,
    labelStatus: "Você confirma que o serviço está em andamento?",
  });

  async function fetchDataUsers() {
    setStatusRefresh(true);
    try {
      // const response = await api.get("/cars");
      const response = await api.get(`/profile_user?id_user=${12345678}`);

      // console.log(response?.data[0]);
      setUserDataStatus(response?.data[0]);
      // setCars(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      // setRefreshing(false);
      // setLoading(false);
    } finally {
      setLoading(false);
      setStatusRefresh(false);
    }
    // fetchCars();
  }

  async function refreshStatus() {
    if (userDataStatus?.service_status == "em_servico") {
      await api
        .put(`/profile_user/${userData?.id}`, {
          status_way: "servico_finalizado",
        })
        .then((response) => navigation.navigate("SchedulingComplete"))
        .catch(() => {
          setLoading(false),
            Alert.alert("Não foi possível confirmar o agendamento.");
        });
    } else if (userDataStatus?.service_status == "servico_finalizado") {
    }

    try {
      // const response = await api.get("/cars");
      const response = await api.get(`/profile_user?id_user=${12345678}`);

      // console.log(response?.data[0]);
      setUserDataStatus(response?.data[0]?.status_way);
      console.log(response?.data[0]?.status_way);
      // setCars(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      // setRefreshing(false);
      // setLoading(false);
    } finally {
      setLoading(false);
      setStatusRefresh(false);
    }
    // fetchCars();
  }

  // const updateStatus = () => {
  //   if (thisStatus.numberStatus === 1) {
  //     setThisStatus({
  //       labelStatus: "Você completou o serviço?",
  //       numberStatus: 2,
  //     });
  //     setStatusRefresh(false);
  //   } else if (thisStatus.numberStatus === 2) {
  //     setThisStatus({
  //       ...thisStatus,
  //       numberStatus: 3,
  //     });

  //     setTimeout(() => {
  //       setThisStatus({
  //         labelStatus: "Você confirma que o serviço está em andamento?",
  //         numberStatus: 0,
  //       });
  //     }, 6000);

  //     setStatusRefresh(false);
  //   }
  //   // else if (thisStatus.numberStatus === 0) {
  //   //   setThisStatus({
  //   //     labelStatus: "Você ja chegou ao local do serviço?",
  //   //     numberStatus: 1,
  //   //   });
  //   //   setStatusRefresh(false);
  //   // }
  // };

  const finishJob = () => {
    alert("Serviço concluido com sucesso!");

    if (valueIdWorking) {
      updateJobsById(valueIdWorking);
    } else {
      alert("Nao foi possivel, tente novamente.");
    }
  };

  const openButton = () => {
    Alert.alert(
      "Olá Marcia!",
      "Você deseja confirmar que terminou o serviço? ",
      [
        {
          text: "Sim",
          onPress: () => {
            finishJob();
          },
        },
        {
          text: "Não",

          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  // const openButtonAlert = () => {
  //   if (userDataStatus === 'ocupado') {
  //     Alert.alert(
  //       "Olá Marcia!",
  //       "Iniciar Serviço",
  //       [
  //         {
  //           text: "Sim",
  //           onPress: () => {
  //             setThisStatus({
  //               ...thisStatus,
  //               numberStatus: 1,
  //             });
  //             setStatusRefresh(false);
  //           },
  //         },
  //         {
  //           text: "Não",
  //           onPress: () => {
  //             setStatusRefresh(false), console.log("No button clicked");
  //           },
  //           style: "cancel",
  //         },
  //       ],
  //       {
  //         cancelable: true,
  //       }
  //     );
  //   } else {
  //     Alert.alert(
  //       "Olá Marcia!",
  //       thisStatus.labelStatus,
  //       [
  //         { text: "Sim", onPress: () => updateStatus() },
  //         {
  //           text: "Não",
  //           onPress: () => {
  //             setStatusRefresh(false), console.log("No button clicked");
  //           },
  //           style: "cancel",
  //         },
  //       ],
  //       {
  //         cancelable: true,
  //       }
  //     );
  //   }
  // };

  function handleNavBack() {
    navigation.goBack();
  }

  async function updateJobsById(jobsId: any) {
    try {
      const response = await api.put(`/working/${jobsId}`, {
        statusWorking: "finalizado",
      });
      // setJobs(response.data.data);
      console.log(response?.data?.data);
      setCars(response?.data?.data);
      setValueIdWorking(response?.data?.data.statusWorking);
      // setJobsFound(response?.data?.data);
      fetchWorking();
    } catch (error) {
      console.log(error);

      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function fetchJobsByIdWorking(jobsId: any) {
    try {
      const response = await api.get(`/jobs/${jobsId}`);
      // setJobs(response.data.data);
      // console.log(response?.data?.data);
      setCars(response?.data?.data);
      // setJobsFound(response?.data?.data);
      alert(response?.data?.data?.typeJobs + response?.data?.data?.id);
    } catch (error) {
      console.log(error);

      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function fetchWorking() {
    const valueId = "42b548f3-ce5b-4df1-8c88-4f6fa63be375";
    // const valueId = "2b352722e0e80745a6";
    try {
      const response = await api.get(`/working/user/${valueId}`);

      setValueIdWorking(response?.data?.data?.id);
      setValueStatusWorking(response?.data?.data?.statusWorking);

      if (response?.data?.data?.idJobs) {
        console.log("SIM TEM ID");
        fetchJobsById(response?.data?.data?.idJobs);
      }
    } catch (error) {
      console.log(error);

      setLoading(false);
    } finally {
    }
  }

  async function fetchWorkingByIdUser() {
    const valueId = "42b548f3-ce5b-4df1-8c88-4f6fa63be375";
    try {
      const response = await api.get(`/working_by_user`); //VALUE BY JSONSERVER
      // const response = await api.get(`/working/user/${valueId}`);

      console.log(response?.data?.data.length);

      setWorkingData(response?.data?.data);
      setWorkingLength(response?.data?.data.length);
    } catch (error) {
      console.log(error);

      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // fetchWorking();

    fetchWorkingByIdUser();
  }, []);

  // useEffect(() => {
  //   // alert(cars);
  //   // console.log(cars);
  //   setLoading(false);

  //   async function fetchMyService() {
  //     setLoading(true);

  //     try {
  //       const response = await api.get(
  //         `/services_byuser?service_status=ocupado&user_id${12345678}`
  //       );
  //       console.log({ valation: response.data[0] });
  //       setCars(response.data[0]);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   // fetchMyService();
  //   // fetchDataUsers();
  //   // refreshStatus();
  // }, []);

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <BackButton color={theme.colors.shape} onPress={handleNavBack} />

        <Title>
          Seus agendamentos,{"\n"}
          estão aqui.
        </Title>

        <SubTitle>Organização e controle de tarefas.</SubTitle>
      </Header>

      {/* {loading && !cars ? ( */}
      {loading ? (
        <ContentWithLoader>
          <Load />
        </ContentWithLoader>
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Histórico de Agendamentos:</AppointmentsTitle>
            <AppointmentsQuantity>
              {workingLength ? workingLength : "0"}
            </AppointmentsQuantity>
          </Appointments>

          <ContentFlatList>
            <FlatList
              // refreshing={refreshing}
              // onRefresh={() => fetchJobsRefresh()}
              data={workingData}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <ClicableCotentJobs
                  onPress={() => fetchJobsByIdWorking(item.idJobs)}
                >
                  <RentalPeriod>
                    <CalendarIcon>
                      <MaterialCommunityIcons
                        name="text-box-check-outline"
                        size={RFValue(32)}
                        color={theme.colors.shape}
                      />
                    </CalendarIcon>
                    <ContentStausAlign>
                      <DateInfo>
                        <DateTitle>data:</DateTitle>

                        <DateValue>
                          {format(parseISO(item?.dtAlter), "dd/MM/yyyy")}
                        </DateValue>
                      </DateInfo>
                    </ContentStausAlign>

                    <DateInfo>
                      <DateTitle>status</DateTitle>

                      {item?.statusWorking == "livre" ? (
                        <Animatable.View
                          animation="bounceIn"
                          easing="ease-in-quad"
                          iterationCount={3}
                        >
                          <MaterialCommunityIcons
                            name="progress-check"
                            size={RFValue(26)}
                            color={theme.colors.success}
                          />
                        </Animatable.View>
                      ) : (
                        <MaterialCommunityIcons
                          name="progress-check"
                          size={RFValue(26)}
                          color={theme.colors.text_details}
                        />
                      )}
                    </DateInfo>
                  </RentalPeriod>
                </ClicableCotentJobs>
              )}
            />
          </ContentFlatList>
        </Content>
      )}

      {cars && valueStatusWorking != "finalizado" && (
        <Footer>
          <Button
            loading={statusRefresh}
            enabled={!statusRefresh}
            onPress={() => {
              openButton();
            }}
            title="Serviço Concluido!"
          />
        </Footer>
      )}
    </Container>
  );
}

// return (
//   <Container>
//     <Header>
//       <StatusBar
//         barStyle="light-content"
//         translucent
//         backgroundColor="transparent"
//       />

//       <BackButton color={theme.colors.shape} onPress={handleNavBack} />

//       <Title>
//         Seus agendamentos,{"\n"}
//         estão aqui.
//       </Title>

//       <SubTitle>Organização e controle de tarefas.</SubTitle>
//     </Header>

//     {/* {loading && !cars ? ( */}
//     {loading ? (
//       <Load />
//     ) : valueStatusWorking == "finalizado" ? (
//       <Content>
//         <Appointments>
//           <AppointmentsTitle>Nenhum agendamento</AppointmentsTitle>
//         </Appointments>
//       </Content>
//     ) : (
//       <Content>
//         <Appointments>
//           <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
//           <AppointmentsQuantity>
//             {workingLength ? workingLength : "001"}
//           </AppointmentsQuantity>
//         </Appointments>

//         <CarWrapper>
//           <Car
//             text=""
//             disabled={false}
//             data={{ ...cars, statusJobs: valueStatusWorking }}
//             onPress={() => alert("asdsa")}
//           />
//           <CarFooter></CarFooter>
//         </CarWrapper>

//         <RentalPeriod>
//           <CalendarIcon>
//             <MaterialCommunityIcons
//               style={{ marginLeft: 4 }}
//               name="bus-clock"
//               size={RFValue(32)}
//               color={theme.colors.shape}
//             />
//           </CalendarIcon>
//           <ContentStausAlign>
//             <DateInfo style={{ width: "60%" }}>
//               <DateTitle>status</DateTitle>
//               <DateValue>Á caminho</DateValue>
//             </DateInfo>

//             {valueStatusWorking == "ocupado" ? (
//               <Animatable.View
//                 animation="bounceIn"
//                 easing="ease-in-quad"
//                 iterationCount={3}
//               >
//                 <MaterialCommunityIcons
//                   name="progress-check"
//                   size={RFValue(26)}
//                   color={theme.colors.success}
//                 />
//               </Animatable.View>
//             ) : (
//               <MaterialCommunityIcons
//                 name="progress-check"
//                 size={RFValue(26)}
//                 color={theme.colors.text_details}
//               />
//             )}
//           </ContentStausAlign>
//         </RentalPeriod>

//         {/* **************************** */}

//         <RentalPeriod>
//           <CalendarIcon>
//             <MaterialIcons
//               name="cleaning-services"
//               size={RFValue(32)}
//               color={theme.colors.shape}
//             />
//           </CalendarIcon>
//           <ContentStausAlign>
//             <DateInfo style={{ width: "60%" }}>
//               <DateTitle>status</DateTitle>
//               <DateValue>Em serviço</DateValue>
//             </DateInfo>

//             {valueStatusWorking == "ocupado" ? (
//               <Animatable.View
//                 animation="bounceIn"
//                 easing="ease-in-quad"
//                 iterationCount={3}
//               >
//                 <MaterialCommunityIcons
//                   name="progress-check"
//                   size={RFValue(26)}
//                   color={theme.colors.success}
//                 />
//               </Animatable.View>
//             ) : (
//               <MaterialCommunityIcons
//                 name="progress-check"
//                 size={RFValue(26)}
//                 color={theme.colors.text_details}
//               />
//             )}
//           </ContentStausAlign>
//         </RentalPeriod>
//         {/* **************************** */}

//         {/* **************************** */}

//         <RentalPeriod>
//           <CalendarIcon>
//             <MaterialCommunityIcons
//               name="text-box-check-outline"
//               size={RFValue(32)}
//               color={theme.colors.shape}
//             />
//           </CalendarIcon>
//           <ContentStausAlign>
//             <DateInfo style={{}}>
//               <DateTitle>status</DateTitle>
//               <DateValue>serviço finalizado</DateValue>
//             </DateInfo>

//             {valueStatusWorking == "ocupado" ? (
//               <Animatable.View
//                 animation="bounceIn"
//                 easing="ease-in-quad"
//                 iterationCount={3}
//               >
//                 <MaterialCommunityIcons
//                   name="progress-check"
//                   size={RFValue(26)}
//                   color={theme.colors.success}
//                 />
//               </Animatable.View>
//             ) : (
//               <MaterialCommunityIcons
//                 name="progress-check"
//                 size={RFValue(26)}
//                 color={theme.colors.text_details}
//               />
//             )}
//           </ContentStausAlign>
//         </RentalPeriod>
//         {/* **************************** */}
//       </Content>
//     )}

//     {cars && valueStatusWorking != "finalizado" && (
//       <Footer>
//         <Button
//           loading={statusRefresh}
//           enabled={!statusRefresh}
//           onPress={() => {
//             openButton();
//           }}
//           title="Serviço Concluido!"
//         />
//       </Footer>
//     )}
//   </Container>
// );
