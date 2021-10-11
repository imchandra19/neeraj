import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header';
import Nasa_photo from "./components/Nasa_photo";
import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Navbar />
        <Route component={Home} path="/" exact />
        <Route component={Nasa_photo} path="/nasaphoto" />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;