import React from "react";
import {
    Header,
    Container,
    Footer,
    Main,
    MainRow1,
    MainRow2,
    MainRow3,
    SubRowHeading,
    SubRow,
    Overlay,
    ConfirmButton,
    CancelButton,
    CloseAllButton,
    H1,
    CustomText
  } from "./style";
import withDialogService from "../useWithDialogService";
import PropTypes from "prop-types";
  
  const DialogBox = (props) => {
    const {
        isOpen,
        onCancel,
        onConfirm,
        isMultiple=false,
        onCloseAll,
     } = props;

    if (!isOpen) {
      return <></>;
    }
    return (
      <Overlay>
        <Container>
          <Header><H1>CONFIRM JOINING</H1></Header>
          <Main>
            <MainRow1>
             <CustomText allowFontScaling> 
                You are about to join a Contest make sure that you are online while
              the match starts otherwise you will loose the match by default.
              </CustomText>
            </MainRow1>
            <MainRow2>
              <SubRowHeading>FEE BREAKDOWN</SubRowHeading>
              <SubRow>
                <CustomText>Entry Fee</CustomText>
                <CustomText>Rs 5</CustomText>
              </SubRow>
              <SubRow>
                <CustomText>Your are paying</CustomText>
                <CustomText>Rs 5</CustomText>
              </SubRow>
            </MainRow2>
            <MainRow3>
              <SubRow>
                <CustomText>From Bonus Cash</CustomText>
                <CustomText>Rs 0</CustomText>
              </SubRow>
              <SubRow>
                <CustomText>From Deposited Cash</CustomText>
                <CustomText>Rs 2.5</CustomText>
              </SubRow>
              <SubRow>
                <CustomText>From Winnig Cash</CustomText>
                <CustomText>Rs 2.5</CustomText>
              </SubRow>
            </MainRow3>
          </Main>
          <Footer>
            <CancelButton isMultiple={isMultiple} onPress={onCancel} title="CANCEL"/>
            <ConfirmButton isMultiple={isMultiple} onPress={onConfirm} title="CONFIRM"/>
            {isMultiple ? <CloseAllButton isMultiple onPress={onCloseAll} title="CLOSE ALL"/> : null}
          </Footer>
        </Container>
      </Overlay>
    );
  };
  
  DialogBox.propTypes = {
    isOpen: PropTypes.bool,
    isMultiple: PropTypes.bool,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    onCloseAll:  PropTypes.func,
  };
  
  export default withDialogService(DialogBox);
  