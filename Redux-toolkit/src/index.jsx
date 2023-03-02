import { createRoot } from 'react-dom/client';

import App from './App';

import { Provider } from 'react-redux';
import store from './store/configStore';

import './styles.css'

const root = createRoot(document.querySelector('#root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
