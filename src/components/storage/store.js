import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            CloudServiceAccountList: JSON.parse(sessionStorage.getItem("CloudServiceAccountList")) || [],
            CurAccountFunctionList: JSON.parse(sessionStorage.getItem("CurAccountFunctionList")) || []
        }
    },
    mutations: {
        addAccount(state, account) {
            state.CloudServiceAccountList.push(account)
            sessionStorage.setItem("CloudServiceAccountList", JSON.stringify(state.CloudServiceAccountList))
        },
        deleteFunction(state, index) {
            state.CurAccountFunctionList.splice(index, 1)
            sessionStorage.setItem("CurAccountFunctionList", JSON.stringify(state.CurAccountFunctionList))
        },
        initFunctionList(state, functionList) {
            state.CurAccountFunctionList = functionList
            sessionStorage.setItem("CurAccountFunctionList", JSON.stringify(state.CurAccountFunctionList))
        }
    }
})

export default store