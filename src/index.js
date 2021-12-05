import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'

import Header from './components/header';

const App = () => (
    <>
        <Header />
        The dat is {Date.now()}
    </>
)

ReactDOM.render(<App />, document.getElementById('root'))


