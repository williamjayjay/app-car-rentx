import { RectButton } from 'react-native-gesture-handler';
import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarDTO } from '../../dtos/CarDTO';

// export const Container = styled.TouchableOpacity`
export const Container = styled(RectButton)`

width:100%;
height: 126px ;
background-color: ${({ theme }) => theme.colors.background_secondary} ;
flex-direction: row ;
justify-content: space-between;
align-items: center ;
padding:18px;
margin-bottom:16px ;
`;


export const Details = styled.View``
  ;

export const Brand = styled.Text`
color: ${({ theme }) => theme.colors.text_details} ;
font-family: ${({ theme }) => theme.fonts.secondary_500} ;
font-size: ${RFValue(12)}px;
text-transform: uppercase ;

`
  ;

export const Name = styled.Text`
color: ${({ theme }) => theme.colors.title} ;
font-family: ${({ theme }) => theme.fonts.secondary_500} ;
font-size: ${RFValue(16)}px;`
  ;

export const About = styled.View`
flex-direction: row ;
align-items: center ;
margin-top: 16px ;


`
  ;

export const Rent = styled.View`
margin-right:20px ;
`
  ;

export const Period = styled.Text`
color: ${({ theme }) => theme.colors.text_details} ;
font-family: ${({ theme }) => theme.fonts.secondary_500} ;
font-size: ${RFValue(12)}px;
text-transform: uppercase ;

`
  ;

export const Price = styled.Text`
color: ${({ theme }) => theme.colors.main} ;
font-family: ${({ theme }) => theme.fonts.secondary_500} ;
font-size: ${RFValue(16)}px;

`
  ;

export const Type = styled.View``
  ;

export const CarImage = styled.Image`
width: 167px;
height: 92px;
`
  ;

export const CarList = styled(FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 18
  },
  showsVerticalScrollIndicator: false
})``;





