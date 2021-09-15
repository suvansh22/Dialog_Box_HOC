import DialogBox from "./DialogBox";
import React, { useState } from "react";
import { View } from 'react-native';
import { Button } from 'react-native-elements';

const TestComponent = () => {
  const [open, setOpen] = useState(false);
  const onCancel = () => {
    setOpen(false);
  };
  const onConfirm = () => {
    //confirm callback
    setOpen(false);
  };

  return (
    <View
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"}}>
      <Button contianerStyle={{zIndex:-1}} onPress={() => setOpen(true)} title="Open Dialog"/>
      <DialogBox isOpen={open} onCancel={onCancel} onConfirm={onConfirm} />
    </View>
  );
};

export default TestComponent;
