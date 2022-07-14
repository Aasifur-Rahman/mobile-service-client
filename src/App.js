import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header></Header>
      <Home></Home>
    </Router>
  );
}

export default App;
