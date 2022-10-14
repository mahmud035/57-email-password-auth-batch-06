import './App.css';
import app from './Firebase/firebase.init';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);

function App() {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input type="email" name="email" id="" placeholder=" Your email" />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder=" Your password"
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
