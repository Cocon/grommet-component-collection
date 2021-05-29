import React from "react";
export interface DialogProps {
    content: React.ReactElement;
    children: React.ReactChild;
    onDialogOpened?: Function;
}
declare const Dialog: React.FunctionComponent<DialogProps>;
export default Dialog;
