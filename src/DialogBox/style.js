import Styled from "styled-components/native";
import { Button } from 'react-native-elements';
import { vw, vh } from 'react-native-viewport-units';

export const Overlay = Styled.Pressable`
  background-color: rgba(0,0,0,1);
  opacity: .7;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = Styled.View`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 50%;
`;

export const Header = Styled.View`
  display: flex;
  justify-content: center;
  align-items:center; 
  background-color: red;
  width: 100%;
  height: 15%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const H1 = Styled.Text`
  font-size: ${5*vw};
  font-weight: bold;
  color: white;
`;

export const Footer = Styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
`;

export const CustomButton = Styled(Button).attrs(props => ({
    containerStyle:{
        width: props.isMultiple ? "33.333%" : "50%",
        height: "100%",
    },
    titleStyle: {
        color: "black",
        fontSize: 4*vw,
        fontWeight: 'bold',
    }
}))``;
export const CancelButton = Styled(CustomButton).attrs({
    buttonStyle:{
        backgroundColor: "grey",
        height: "100%",
    },
})``;

export const ConfirmButton = Styled(CustomButton).attrs({
    buttonStyle:{
        backgroundColor: "yellow",
        height: "100%",
    },
})``;

export const CloseAllButton = Styled(CustomButton).attrs({
    buttonStyle:{
        backgroundColor: "red",
        height: "100%",
    },
})``;


export const Main = Styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 16%;
  text-align: justify;
  height: 70%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const MainRow1 = Styled.View`
  padding: 0 2% 4%;
  border-bottom-width: 1px;
  border-bottom-color: black;
`;

export const CustomText = Styled.Text`
  font-size: ${2*vw};
`;

export const MainRow2 = Styled(MainRow1)`
  padding-top: 4%;
  display: flex;
  flex-direction: column;
`;

export const MainRow3 = Styled(MainRow2)`
  border-bottom-width: 0;
  border-bottom-color: white;
`;

export const SubRowHeading = Styled.Text`
  color: black;
  font-weight: bold;
  font-size: ${2*vw};
`;

export const SubRow = Styled.View`
  display: flex;
  margin-top: 1%;
  flex-direction: row;
  justify-content: space-between;
`;
