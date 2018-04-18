import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndinput'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    // O map converte para um array numérico e retorna um valor só usando o reduce

    calculateSummary() {
        const sum = (t, v) => t + v // t: Acumulador os números, v: Valor Atual
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum), // + Converte o Valor String para um Valor Numérico
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum) // + Converte o Valor String para um Valor Numérico
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props // Para enviar o Formulário, readOnly somente leitura no Campo
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o Nome:' />
                    <Field name='month' component={labelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o Mês:' />
                    <Field name='year' component={labelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o Ano:' />

                    <Summary credit={sumOfCredits} debt={sumOfDebts} />

                    <ItemList cols='12 6' list={credits} readOnly={readOnly} 
                        field='credits' legend='Créditos'
                    />
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} showStatus={true} 
                        field='debts' legend='Débitos'
                    />
                </div>

                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm') // Pega o ID do Formulário

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
}) // Armazena os valores do array dentro do estado do Credits
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm) 

// destroyOnUnmount: Para caso houver 2 formulário instanciado e chamar a função initialized ele não destrua os dados e recrie outro formulário novo, e sim 
// que ja possa vir com os dados