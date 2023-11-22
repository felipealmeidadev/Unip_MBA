import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return(
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
    <label htmlFor='nome' style={{display: 'block', marginBottom: 4}}>Nome:</label>
    <input type='text' id='nome' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden',width: '100%', borderRadius: 8, outline: 'none', boxSizing: 'border-box'}}/>
    
    <label htmlFor='sobrenome' style={{display: 'block', marginBottom: 4, marginTop: 12}}>Sobrenome:</label>
    <input type='text' id='sobrenome' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden',width: '100%', borderRadius: 8, outline: 'none', boxSizing: 'border-box'}}/>
    
    <label htmlFor='dataNascimento' style={{display: 'block', marginBottom: 4, marginTop: 12}}>Data de nascimento:</label>
    <input type='date' id='dataNascimento' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden',width: '100%', borderRadius: 8, outline: 'none', boxSizing: 'border-box'}}/>
    
    <button style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}}>Enviar</button>
  </div>
  )
 }

ReactDOM.render(
 <App />,
 document.querySelector("#root")
)