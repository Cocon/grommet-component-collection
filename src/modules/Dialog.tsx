import React from "react";
import {
	Button,
	Grommet,
	Layer,
} from "grommet";
import {
	FormClose,
} from "grommet-icons";


export interface DialogProps {
	content: React.ReactElement,
	children: React.ReactChild,
	onDialogOpened?: Function
}
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
	const [open, setOpen] = React.useState(false);
	const onOpen = () => {
		new Promise((resolve, reject) => {
			setOpen(true);
			resolve("");
		}).then(() => {
			(props.onDialogOpened != undefined) && props.onDialogOpened();
		});
	}
	const onClose = () => setOpen(false);
	return (
		<Grommet>
			<div onClick={onOpen}>
				{props.children}
			</div>
			{open && (
				<Layer
					full={false}
					position="center"
					onClickOutside={onClose}
					onEsc={onClose}
				>
					<Button icon={<FormClose />} onClick={onClose} />
					{props.content}
				</Layer>
			)}
		</Grommet>
	)
}
export default Dialog;