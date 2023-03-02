import { createRoot } from 'react-dom/client';

import App from './App';

import './styles.css';

import { Provider } from 'react-redux';
import { store } from './store/configStore';

const root = createRoot(document.querySelector('#root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
