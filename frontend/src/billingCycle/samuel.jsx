import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'

class Samuel extends Component {

    componentWillMount() {
        this.props.getList()
    }

    mostrarNome(name) {
        alert(name)
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
            </tr>
        ))
    }

    

    render() {
        return (
        <div>
        <ul>         
            <li>{this.renderRows()}</li>
        </ul>
            <button onClick={() => this.mostrarNome('Samuel')} type='submit' className='btn btn-primary'>Teste</button>
        </div>
        )
    }
    
}



const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Samuel)