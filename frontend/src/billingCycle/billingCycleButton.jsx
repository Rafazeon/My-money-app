import React from 'react'

export default props => (
    <button className={`btn btn-${props.btn}`} onClick={props.action} type={props.type}>
            <i className={`fa fa-${props.icon}`}></i>
    </button>
)