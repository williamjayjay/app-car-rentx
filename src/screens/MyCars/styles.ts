import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  /* height: 280px ; */
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 18}px;

  /* align-items:flex-start ; */
  /* flex-direction: row ;

position:absolute;
margin-top:${getStatusBarHeight() + 18}px ;
margin-left: 24px; */
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  /* padding-left: 8px; */
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(16)}px;
  /* padding-left: 8px; */
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px;
`;

// export const Content = styled.ScrollView.attrs({
//   contentContainerStyle: {
//     padding: 16,
//     width: "100%",
//     // alignItems: "center",
//   },

//   showsVerticalScrollIndicator: false,
// })``;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: 24px 0; */
`;

export const AppointmentsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
`;

export const AppointmentsQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(16)}px;
`;

export const CarWrapper = styled.View`
  width: 100%;
  margin: 16px 0;
`;

export const CarFooter = styled.View`
  padding: 8px 0;

  margin-top: -10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.text_details};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_details};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(12)}px;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
`;

export const Footer = styled.View`
  width: 100%;
  color: ${({ theme }) => theme.colors.background_primary};

  padding: 8px 16px ${getBottomSpace() + 24}px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  padding-bottom: 12px;
`;

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.main};
  justify-content: center;
  align-items: center;
`;

export const DateInfo = styled.View`
  align-items: center;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
  text-transform: uppercase;
`;

export const ContentStausAlign = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* width: 80%; */
`;

export const ContentFlatList = styled.View``;

export const ContentWithLoader = styled.View`
  flex: 1;
`;

export const ClicableCotentJobs = styled.TouchableOpacity``;
