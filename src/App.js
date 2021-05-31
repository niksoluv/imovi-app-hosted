//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Body from './components/body/Body';
import { BrowserRouter, Route } from 'react-router-dom';
import Details from './components/details/Details';

function App() {
	return (

		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<div>
				<Route path='/' component={()=><Body/>} />
				<Route exact path='/details' component={Details} />
				</div>
				<footer className='footer'>footer</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
