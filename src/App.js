import './App.css';
import app from './Firebase/firebase.init';
import { getAuth } from 'firebase/auth';
import Register from './Components/Register/Register';
import RegisterReactBootstrap from './Components/RegisterReactBootstrap/RegisterReactBootstrap';

const auth = getAuth(app);

function App() {
  return (
    <div>
      {/* <Register></Register> */}
      <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}

export default App;
