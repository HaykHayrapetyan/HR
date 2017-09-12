import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from './components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/style.sass';

const App = () => {
	injectTapEventPlugin();
	return (
		<MuiThemeProvider>
			<Layout />	
		</MuiThemeProvider>
	);
}

render(<App />, document.getElementById("app"));
