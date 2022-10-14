import './App.css';
import app from './Firebase/firebase.init';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <form>
        <input type="email" name="" id="" placeholder=" Your email" />
        <br />
        <input type="password" name="" id="" placeholder=" Your password" />
      </form>
    </div>
  );
}

export default App;
