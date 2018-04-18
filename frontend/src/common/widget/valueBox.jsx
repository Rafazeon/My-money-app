import React from 'react'
import Grid from '../layout/grid'

// Os props vem de quando declara o valueBox em algum componente

export default props => (
    <Grid cols={props.cols}>
        <div className={`small-box bg-${props.color}`}>
            <div className='inner'>
                <h3>{props.value}</h3>
                <p>{props.text}</p>
            </div>
            <div className='icon'>
                <i className={`fa fa-${props.icon}`}></i>
            </div>
        </div>
    </Grid>
)

