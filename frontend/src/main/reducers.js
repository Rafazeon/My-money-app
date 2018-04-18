import { combineReducers } from 'redux' // Reducer: Função Pura
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import sessionReducer from '../reducers/sessionReducer'
import userReducer from '../reducers/userReducer'

const rootReducer = combineReducers({ // State, Action
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    sessionState: sessionReducer,
    userState: userReducer

})

export default rootReducer