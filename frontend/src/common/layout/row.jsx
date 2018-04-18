import React from 'react'

export default props => (
    <div className='row'>{props.children}</div>
)

// O {props.children} recebe os componentes dentro da chamada do componente Pai exemplo o Row