import './App.css';
import app from './Firebase/firebase.init';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);

function App() {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
  };

  const handleNameBlur = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input
          onBlur={handleNameBlur}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id=""
          placeholder=" Your email"
        />
        <br />
        <input
          onChange={handlePasswordChange}
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
