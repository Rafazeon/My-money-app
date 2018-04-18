import React from 'react'

export default props => (
    <li className='treeview'>
        <a href>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
            <i className={`fa fa-angle-left pull-right`}></i>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)

// <a href> Está chamando o Cadastro da aplicação e passando ao lado a flecha como ícone</a>
// O <ul> Está passando os filhos que seria nesse caso os menuItem que estão sendo instanciados no menu.jsx</ul>
// O {props.children} referencia caso o componente tiver filhos dentro dele