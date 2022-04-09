import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


// export const Container = styled.TouchableOpacity`
export const Container = styled(RectButton)`
width: 80px;
height:60px;
background-color: ${({ theme }) => theme.colors.shape_dark} ;

align-items:center ;
justify-content:center ;

`;

export const Title = styled.Text`
font-size:${RFValue(16)}px ;
color: ${({ theme }) => theme.colors.shape} ;
font-family: ${({ theme }) => theme.fonts.primary_500} ;
`