import DialogBox from "./DialogBox";
import React, { useState } from "react";
import { View } from 'react-native';
import { Button } from 'react-native-elements';

const TestComponent = () => {
  const [open, setOpen] = useState({first: false, second: false});
  const onCancel = (dialogBoxNo) => {
      if(dialogBoxNo === 1){
          setOpen({...open,first: false});
          return;
      }
      setOpen({...open,second: false});
  };
  const onConfirm  = (dialogBoxNo) => {
      //confirm CB
    if(dialogBoxNo === 1){
        setOpen({...open,first: false});
        return;
    }
    setOpen({...open,second: false});
  };
  const onCloseAll = () =>{
      setOpen({first: false, second: false})
  }

  return (
      <>
    <View
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"}}>
      <Button contianerStyle={{zIndex:-1}} onPress={() => setOpen({...open, first: true})} title="Open Dialog"/>
      <Button contianerStyle={{zIndex:-1}} onPress={() => setOpen({...open, second: true})} title="Open Dialog"/>
    </View>
    <View style={{width:"100%",height:"50%",position:"absolute"}}>
      <DialogBox isMultiple onCloseAll={onCloseAll} isOpen={open.first} onCancel={()=>onCancel(1)} onConfirm={()=>onConfirm(1)} />
    </View>
    <View style={{width:"100%",height:"50%",position:"absolute",bottom:0}}>
      <DialogBox isOpen={open.second} onCancel={()=>onCancel(2)} onConfirm={()=>onConfirm(2)} />
    </View>
      </>
  );
};

export default TestComponent;
