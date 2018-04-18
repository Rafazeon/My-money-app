import React from 'react'
// Espalha as propriedades dentro do input ...props.input

export default props => (
    <input {...props.input}
        className='form-control'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
)