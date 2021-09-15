># Dependencies used

- **react-native-elements** :
   To use native components like Button, etc.
- **styled-components**:
   To style components.
- **react-native-viewport-units**:
   To make use of CSS units lile VW, VH

># Components

## 1. useWithDialogService -:
   - This is the higher order component wrapping the dialog box.
   - It allows the parent component to pass params to the dialog box and making the dialog box functional according to the parent controller.
   - It provides the **Child Component** with following props -:
        1. **isOpen**: State of the dialog. `(boolean)`
        2. **isMultiple**: Mulitple dialog box or not. `(boolean)`
        3. **onConfirm** -: Callback to be called on press of confirm button. For demo purpose it simply closes the dialog box. `(Function)`
        4. **onCancel** -: Callback to be called on closing of the dialog box. It provides the closing functionality to the dialog box. `(Function)`.
        5. **onCloseAll** -: It closes all the dialog box currenlty open on the screen. `(Function)`
   
## 2. DialogBox -:
   * This is the main dialog box component.
   * It enchanced by wrapping with **useWithDialogServive**.
   * It recieves following props -:
        1. **isOpen**: To render or not to render the dialog box. `(boolean)`
        2. **isMultiple**: To render the close all button functionality. `(boolean)`
        3. **onConfirm** -: callback to be called on press of confirm button. For demo purpose it simply closes the dialog box. `(Function)`
        4. **onCancel** -: callback to be called on closing of the dialog box. It provides the closing functionality to the dialog box. `(Function)`
        5. **onCloseAll** -: It closes all the dialog box currenlty open on the screen. `(Function)`
   
## 3. TestComponent-:
   * This component is used to demo the use case of presence of single dialog box on the screen.
   
## 4. TestComponent2-:
   * This component is used to demo the use case of presence of two dialog boxes on the screen.
   