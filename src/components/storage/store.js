import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            CloudServiceAccountList: JSON.parse(sessionStorage.getItem("CloudServiceAccountList"))||[]
        }
    },
    mutations: {
        addAccount(state, account) {
            state.CloudServiceAccountList.push(account)
            sessionStorage.setItem("CloudServiceAccountList", JSON.stringify(state.CloudServiceAccountList))
        }
    }
})

export default store