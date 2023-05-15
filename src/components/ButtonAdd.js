import React from 'react';

const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            style={{
                backgroundColor: 'gray',
                border: 'none',
                color: 'black',
                padding: '12px 24px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '10px',
                cursor: 'pointer'
            }}
        >
            {props.children}
        </button>
    );
}

export default Button;
