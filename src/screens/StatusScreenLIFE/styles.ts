import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
  align-self: center;
  width: 100%;
  justify-content: space-between;
`;

export const TitleH1 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors_life.title};
`;

export const TitleH2 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(26)}px;
  color: ${({ theme }) => theme.colors_life.title};
`;

export const TitleH3 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors_life.title};
`;

export const TitleP = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors_life.titleP};
  text-align: justify;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 8}px;
`;

export const HeaderContent = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Spacer = styled.View`
  height: ${RFValue(8)}px;
  width: ${RFValue(8)}px;
`;

export const TitleContent = styled.View`
  align-items: center;
  flex-direction: row;
  align-self: center;
`;

export const SearchContent = styled.View`
  width: 90%;
  align-self: center;
  align-items: center;

  border-width: 1px;

  padding: 20px;

  border-radius: 4px;
  margin-bottom: 32px;
`;

export const MainHeaderContent = styled.View`
  width: 90%;
  align-self: center;
`;

export const BackIcon = styled.TouchableOpacity`
  border-radius: 8px;
  border-width: 1px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const ContainerStatus = styled.View`
  border-width: 1px;
  border-radius: 4px;
`;

export const RowStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 8px;
`;

export const FooterRectangle = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors_life.success};
  border-top-width: 1px;
  padding: 4px;
`;

export const ButtonContent = styled.View`
  width: 90%;
  align-self: center;
  margin-bottom: 18px;
`;

export const IconLoadingContent = styled.View`
  align-self: center;
`;

export const Footer = styled.View`
  width: 100%;
  color: ${({ theme }) => theme.colors.background_primary};

  padding: 12px 0px ${getBottomSpace() + 24}px;
`;
