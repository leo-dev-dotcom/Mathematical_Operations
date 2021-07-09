
import './App.css';
import Add from './components/Add';
import Divide from './components/Divide';
import Minus from './components/Minus';
import Multi from './components/Multi';

function App() {
  return (
    <div className='container mt-5 text-center'>
      <h1 className='text-primary'>Mathematical Operations</h1>
      <div class="row m-5">
        <div className="col">
          <Add num1={25} num2={30} />
        </div>
        <div className="col">
          <Multi num1={5} num2={6} />
        </div>
      </div>
      <div className="row pt-5">
        <div className="col">
          <Divide num1={100} num2={25} />
        </div>
        <div className="col">
          <Minus num1={36} num2={25} />
        </div>
      </div>
    </div>
  );
}

export default App;
