import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Users from './Components/Users';

let student: string = 'John';  //string type
let age: number = 26;  //number type
let isPunctual: boolean = true; //boolian type

let students: string[] = ['Harry', 'Potter', 'Boldemor', 'Emma', 'Watson'];

interface Person {
  name: string,
  job: string,
  age?: number | string
}
const person: Person = {
  name: 'Harry',
  job: 'Student',
  age: 17
}

const handleAddUser = (firstName: string, job: string, age: number): void => {
  const total: number = 50;
  console.log(firstName, job, age)
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
