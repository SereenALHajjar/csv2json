import React from 'react'

function InputCSV({ csvText, onChangeText}) {
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader(); 
            reader.onload = (event) => {
                const content = event.target.result; 
                onChangeText(content); 
            };
            reader.readAsText(selectedFile); 
        }
    };
    return (
        <>
            <div>
                <textarea
                    value={csvText}
                    onChange={(e) => { onChangeText(e.target.value) }}
                > Enter CSV Text</textarea>
                <input type='file'
                    accept='.csv'
                    onChange={handleFileChange}></input>
            </div>
        </>
    )
}

export default InputCSV