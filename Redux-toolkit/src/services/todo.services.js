import axios from 'axios';

const todoServices = {
	getTodo: () => axios.get('https://jsonplaceholder.typicode.com/todos')
};

export default todoServices;
