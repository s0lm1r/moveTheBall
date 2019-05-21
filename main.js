'use strict';

let field = document.querySelector('.field');
let ball = document.querySelector('.ball');

field.onclick =(event)=> {

  let fieldCoords = field.getBoundingClientRect();
  
      let top = event.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight / 2;
      let left = event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2;
      
      top = Math.max(0, top);
      top = Math.min(field.clientHeight - ball.offsetHeight, top);
      left = Math.max(0, left);
      left = Math.min(field.clientWidth - ball.offsetWidth, left);
      ball.style.top = `${top}px`;
      ball.style.left = `${left}px`; 
    }
