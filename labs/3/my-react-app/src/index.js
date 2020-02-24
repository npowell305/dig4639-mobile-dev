import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Card extends React.Component{
    constructor(props){
        this.props = props;
        this.element = document.createElement("div");
        this.element.innerHTML = this.props.content;
        Let Span = document.createElement("span");
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = "card";
    }
render()

}

export default Card;
