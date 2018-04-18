import React from 'react'
import Grid from '../layout/grid'
// htmlFor = para passar o ID do campo no caso
// props.input = passa espalha os props para dentro do input

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input} className='form-control' 
                placeholder={props.placeholder}
                readOnly={props.readOnly} type={props.type} />
        </div>
    </Grid>
)