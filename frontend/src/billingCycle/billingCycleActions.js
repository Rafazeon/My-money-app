import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]} // Para garantir que tenha um objeto inicializado

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) { // Passa os valores ao salvar o formulário exemplo, name, month, year
    return submit(values, 'post')
        
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : '' // Se tiver ID ele seta para usar o Método Put e Delete senão não seta para fazer o POST sem ID
        axios[method](`${BASE_URL}/billingCycles/${id}`, values) // Chama o Método por [] que seria o mesmo que o .
            .then(rest => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error)) // Errors vem do Backend tratado
        })     
    }
}

export function showButton(billingCycle, tab) { // billingCycle: Ciclo de pagamento correspondente a linha
    return [
        showTabs(tab),
        selectTab(tab),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() { // Limpa o Formulário
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}