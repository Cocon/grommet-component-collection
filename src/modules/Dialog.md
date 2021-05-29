# grommet-component-collection
## Dialog
### Props
- children: React.Children
	- <Dialog>の小要素として指定してください。
	- これをクリックするとダイアログが開きます。
- content: React.ReactElement
	- ダイアログ内に表示する要素を指定します。
- onDialogOpened: Function
	- (Optional)
	- ダイアログが開いたときに任意の関数を実行することができます。


### Usage
```javascript
import { Dialog } from "grommet-component-collection";

const DialogContent = () => {
	return (
		<div>
			<h1>About Us</h1>
			<p>We are commiting a lot of OSS projects for better world. Could you join us?</p>
		</div>
	)
}
const onDialogOpened = () => {
	console.log("Dialog was opened.");
}
const TrigerElement = () => {
	return (
		<div>
			<p>Click me!</p>
		</div>
	)
}

const App = () => {
	return (
		<Dialog content={DialogContent} onDialogOpened={onDialogOpened}>
			<TrigerElement/>
		</Dialog>
	)
}
```

## Author
YUUKIToriyama