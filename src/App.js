import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import Products from './components/products/Products';
import Routing from './Routing/Routing';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routing/>
    </div>
  );
}

export default App;
