import React from "react";
interface DialogProps {
    content: React.ReactElement;
    children: React.ReactElement;
    onClicked?: Function;
}
declare const Dialog: React.FunctionComponent<DialogProps>;
export default Dialog;
