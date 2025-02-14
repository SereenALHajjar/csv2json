import React, { useState } from 'react'

function Converter({csvText , jsonText , onChangeOutput}) {
    const [c , setC] = useState("") ;
   const converter = ()=>{
    var output="" ;
    const properties = csvText.split('\n')[0].split(',');
    // setC(properties[3]) ;
    const data = csvText.split('\n') ;
    data.forEach((line , index)=>{
        var fields = line.split(',') ; 
        output+='{';
        properties.forEach((prop , index)=>{
            output+='"' + prop + '"' + ':' ; 
            output+=fields[index]  ;
            output+='\n' ;
        })
        output+='}';
        output+='\n' ;

    })
    setC(output) ;
   }
    return (
        <>
    <button onClick={converter}>Convert</button>
    {c}
        </>
  )
}

export default Converter