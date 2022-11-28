import {useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

const [UserName, setusername] = useState('');
const [PassWord, setpassword] = useState('');

const LoginPress = () => {
  Axios.post("http://localhost:3001/api/insert",{ 
    UserName:UserName,
    PassWord:PassWord
  }).then(()=>{
     alert("Successful Insert");
  });
}



  return (
    <div className="App">
     <h1>Login</h1>
     <div className='form'>
      <label>Username</label>
     <input type="text" name="username" onChange={(e)=>{setusername(e.target.value)}}/>
     <label>Password</label>
     <input type="password" name="password" onChange={(e)=>{setpassword(e.target.value)}}/>
     <button onClick = {LoginPress} >Login</button>
     </div>
    </div>
  );
}

export default App;
