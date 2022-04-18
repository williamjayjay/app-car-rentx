import { RectButton } from "react-native-gesture-handler";
import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CarDTO } from "../../dtos/CarDTO";

import styled, { css } from "styled-components/native";

interface TextStatusProps {
  text: string;
}

interface ContainerStatusProps {
  text: string;
}

// export const Container = styled.TouchableOpacity`
export const Container = styled.TouchableOpacity<ContainerStatusProps>`
  width: 100%;
  height: 142px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 16px;

  ${({ text, theme }) =>
    text == "ocupado" &&
    css`
      opacity: 0.5;
    `}
`;

export const Details = styled.View`
  /* background-color: green; */
  flex: 1;
  height: 100%;
`;

export const Brand = styled.Text`
  color: ${({ theme }) => theme.colors.text_details};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(16)}px;
`;

export const About = styled.View`
  /* background-color: yellow; */
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  /* justify-content: space-between; */
`;

export const Rent = styled.View`
  /* flex: 3; */
  max-width: 75%;
  /* padding-right: 66px; */
  /* width: 80%; */
  /* padding-right: 30px; */
`;

export const Period = styled.Text`
  color: ${({ theme }) => theme.colors.text_details};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(16)}px;
`;

export const Type = styled.View`
  margin-left: 4px;
  /* flex: 1; */
  /* margin-right: 92px; */
  /* position: absolute; */
  /* right: 8px; */
`;

export const CarImage = styled.Image`
  /* background-color: red; */
  /* flex: 2; */
  width: 130px;
  height: 100%;
  /* background-color: red;
  */
`;

export const CarList = styled(
  FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>
).attrs({
  contentContainerStyle: {
    padding: 18,
  },
  showsVerticalScrollIndicator: false,
})``;

export const SpaceWidth = styled.View`
  width: 8px;
`;

export const StatusValue = styled.View`
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TextStatus = styled.Text<TextStatusProps>`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(14)}px;
  text-transform: uppercase;
  margin-left: 4px;

  ${({ text, theme }) =>
    text == "ocupado" &&
    css`
      color: ${({ theme }) => theme.colors.main};
    `}

  ${({ text, theme }) =>
    text == "livre" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}
`;
