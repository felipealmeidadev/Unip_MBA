import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    //Expressão JSX
    return <div> Meu primeiro componente ReactJSX </div>
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
