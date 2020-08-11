import React from 'react';
import Cake from './Cake';
import Cake1 from './Cake1';
import Page1 from './Page1';
import './App.css';
function App() {
  return (
<div>
  <Cake />
  <Cake1 />
  <Page1 />
  
  <b>welcome</b>
  <input type="button" value="Click Me"/>
  <option type="radio" value="radio test"/>
  <br></br>
  <i>wintech computer center</i>
  <br></br>
  <u>tiruvarur dt</u>
  <br></br>
  <p>
  <h1>benefits of course's</h1>
  <h2>1.easy to learn</h2>
  <h2>2.more flexible schedule</h2>
  <h3>3.lower costs and debts</h3>
  <h4>4.self discipline and responsibility</h4>
  <h5>5.more choice of course topics</h5>
  </p>
  <b>list of course's</b>
  <ol>
    <li>dca</li>
    <li>pgdca</li>
    <li>basics of c</li>
    <li>tally</li>
    <li>python</li>
    <li>java</li>
  </ol>
  <form>
    <b>your details</b>
    <ol></ol>
    name
    <input type='address box' name='name'></input>
    <br></br>
    mother name
    <input type='address box' name='mothername'></input>
    <br></br>
    father name
    <input type='address box' name='father name'></input>
    <br></br>
    date of birth
    <input type='address box' name='date of birth'></input>
    <br></br>
    gender
    <input type='address box' name='gender'></input>
    phone no
  <input type='address box' name='phone no'></input>
  </form>
 <form>
   <b>course selection</b>
   <ol></ol>
   <li>[].dca</li>
   <li>[].pgdca</li>
   <li>[].python</li>
   <li>[].basics of c</li>
   <li>[].java</li>
   <li>[].tally</li>   
   <br></br>
 </form>
 <b>THANKYOU</b>
    </div>
  );
}
export default App;
