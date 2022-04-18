import React, { Component } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
  SpaceWidth,
  StatusValue,
  TextStatus,
} from "./styles";
import { View } from "react-native";
import { ConvertIcons } from "../ConvertIcons";
import { JobsDTO } from "../../dtos/JobsDTO";

interface Props extends RectButtonProps {
  data: JobsDTO;
}

export function Car({ data, ...rest }: Props) {
  // const MotorIcon = getAccessoryIcon(data?.fuel_type);
  const theme = useTheme();

  return (
    <Container
      disabled={data?.statusJobs == "ocupado" ? true : false}
      text={data?.statusJobs}
      {...rest}
    >
      <Details>
        <Rent>
          <Brand numberOfLines={1}>{data?.typeJobs}</Brand>
          <Name numberOfLines={1}>{data?.name}</Name>
        </Rent>

        <About>
          <Rent>
            <Period>{data?.periodJobs}</Period>
            <Price numberOfLines={1}>{`R$ ${data?.priceJobs} `}</Price>
          </Rent>
          {/* <SpaceWidth /> */}

          <Type>
            <ConvertIcons type={data?.houseType} />
          </Type>
        </About>
        <StatusValue>
          <Feather name="target" size={18} color="black" />
          <TextStatus text={data?.statusJobs}>{data?.statusJobs}</TextStatus>
        </StatusValue>
      </Details>

      <CarImage resizeMode="contain" source={{ uri: data?.thumbnail }} />
    </Container>
  );
}
