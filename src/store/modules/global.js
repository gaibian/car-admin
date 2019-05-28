

const state = {
    pageLoading:false,
}

const mutations = {
    SET_PAGE_LOADING(state,data) {
        state.pageLoading = data
    }
}

const actions = {
    setPageLoading({ commit },data) {
        commit('SET_PAGE_LOADING', data)
    }
}

export default {
    state,
    mutations,
    actions
}