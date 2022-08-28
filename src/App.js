import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Greeting from './components/Greeting';
import Wish from './components/Wish';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
        {/* <Display/>
        <Greeting/>
        <Wish/> */}
        <Hello name = "chinmay" number ="one"/>
        <Hello name = "ram" number = "two"/>
        {/* <Wish name = "chinmay" number ="one"/>
        <Wish name = "ram" number = "two"/> */}
    </div>
  );
}

export default App;
