import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import CheckBoxComponent from './CheckBoxComponent';

const App = () =>(
    <div>
        Hello world New Change!!!!!!!!!!!!!!!!!!
        <CheckBoxComponent labelOn="On" labelOff="Off"/>
    </div>
)


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)