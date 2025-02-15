import React, { useState } from 'react'
import Papa from 'papaparse';
function Converter({csvText , jsonText , onChangeOutput}) {
    const [c , setC] = useState("");
    const parseCSVString = () => {
        Papa.parse(csvText, {
          header: true, 
          dynamicTyping: true, 
          complete: (result) => {
            const jsonString = JSON.stringify(result.data, null, 2); // Convert to string
        setC(jsonString); // Set the stringified JSON data
            console.log('Parsed CSV data:', result.data);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          },
        });
      };
    return (
        <>
    <button onClick={parseCSVString}>Convert</button>
    {c}
        </>
  )
}

export default Converter