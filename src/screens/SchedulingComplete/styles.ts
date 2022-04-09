import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
background-color: ${({ theme }) => theme.colors.header} ;
padding-top:22px ;

`;

export const Content = styled.View`
flex:1;
justify-content:center ;
align-items:center ;
`;

export const Title = styled.Text`
font-size:${RFValue(30)}px ;
color: ${({ theme }) => theme.colors.shape} ;
font-family: ${({ theme }) => theme.fonts.secondary_600} ;
margin-top:16px ;
`;

export const Message = styled.Text`
font-size:${RFValue(16)}px ;
color: ${({ theme }) => theme.colors.text_details} ;
font-family: ${({ theme }) => theme.fonts.primary_400} ;
margin-top:16px ;
text-align:center ;
line-height:22px ;

`;

export const Footer = styled.View`
width:100% ;
align-items:center ;
margin: 80px 0px;
`

// export const S_Container = styled.View`
// align-items:center ;
// flex:1;
// background-color: ${({ theme }) => theme.colors.header} ;
// `;

// export const S_WrapperLogo = styled.View`
//   position: absolute;
//   top: 2%;
//   height:35% ;
//   width:100% ;

// `;

// export const S_Content = styled.View`
//   position: absolute;
//   top: 40%;
//   justify-content:center ;
// align-items:center ;
// `;

// export const S_Footer = styled.View`
//   bottom:10%;
//   position: absolute;
// width:100% ;
// align-items:center ;

// `;

//3 option8**********************************
export const S_Container = styled.View`
align-items:center ;
flex:1;
background-color: ${({ theme }) => theme.colors.header} ;
justify-content: space-between ;
`;

export const S_WrapperLogo = styled.View`
  top: 2%;
  height:30% ;
  width:100% ;

`;

export const S_Content = styled.View`
  justify-content:center ;
align-items:center ;
`;

export const S_Footer = styled.View`
width:100% ;
align-items:center ;
/* margin-top:16px ; */

`;

export const S_Spacer = styled.View`
height: 8px ;
`
//3 option8**********************************

