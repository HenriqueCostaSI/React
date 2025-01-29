import React from 'react';
import './Button.css';

const Button = ({ label, click, operation, double, triple }) => {
    const classes = `
        button 
        ${operation ? 'operation' : ''} 
        ${double ? 'double' : ''} 
        ${triple ? 'triple' : ''}
    `.trim();

    return (
        <button 
            onClick={e => click && click(label)}
            className={classes}>
            {label}
        </button>
    );
};

export default Button;