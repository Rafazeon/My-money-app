const INITIAL_STATE = { summary: {credit: 0, debt: 0} }

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data } // Se o data não chegar é porque falta um middleware pos ele vai direto para o return do action
        default:
            return state
    }
}