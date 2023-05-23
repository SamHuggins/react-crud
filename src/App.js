import {useState, useEffect} from 'react'
import { Form } from './components/Form';
import './App.css';


function App() {
  const [parties, setParties] = useState([])

  const fetchParties = async () => {
    const res = await fetch('https://6441f8e733997d3ef905d6ee.mockapi.io/Full_Crud_API/PARTIES');
    const data = await res.json();
    setParties(data)
    
  }

  useEffect(() => {
    fetchParties()
  },[])


  return (
    <div>
      <Form />
      {parties.map(party => <p key={party.id}>{party.partyName}</p>)}
    </div>
  );
}

export default App;
