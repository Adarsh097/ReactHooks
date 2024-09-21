import logo from './logo.svg';
import './App.css';
import One from './components/One';
import Two from './components/Two';

function App() {
  return (
   <div style={{textAlign:'center'}}>
    <One/>
    <hr style={{margin:"10px"}}/>
    <hr/>
    <h1>useEffect Hook</h1>
    <Two/>
   </div>
  );
}

export default App;
