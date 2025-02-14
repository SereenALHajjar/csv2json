import { useState } from 'react'
import InputCSV from './InputCSV';
import OutputJSON from './OutputJSON'
import './App.css'
import Converter from './Converter';

function App() {
  const [csvText , setCsvText] = useState("") ;
  const [jsonText , setJSONText] = useState("") ;
  return (
    <>
      <InputCSV csvText={csvText}  onChangeText={setCsvText}/>
      <Converter csvText={csvText} jsonText={jsonText} onChangeOutput={setJSONText}/>
      <OutputJSON jsonText={jsonText}/>
    </>
  )
}

export default App
