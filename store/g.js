export const types = {
  SET_ROUTER_ANIMATE_TYPE: 'SET_ROUTER_ANIMATE_TYPE',
  TOGGLE_PAGE_LOADING: 'TOGGLE_PAGE_LOADING',
}

// state
const defaultState = {
  routerAnimate: 'none', // ‘in’ 下一页   ‘out’ 返回 ’
  pageLoading: false,
}

// getters
const getters = {
  routerAnimate: state => state.routerAnimate,
  pageLoading: state => state.pageLoading,
}

// actions
const actions = {
  setRouterAnimateType: ({ commit }, type = 'in') => {
    console.log('actions: ', type)
    commit(types.SET_ROUTER_ANIMATE_TYPE, type)
  },
  togglePageLoading: ({ commit }, loading = false) => {
    commit(types.TOGGLE_PAGE_LOADING, loading)
  },
}

// mutations
const mutations = {
  [types.SET_ROUTER_ANIMATE_TYPE](state, type) {
    state.routerAnimate = type
  },
  [types.TOGGLE_PAGE_LOADING](state, loading) {
    state.pageLoading = loading
  }
}

export default {
  state: defaultState,
  getters,
  actions,
  mutations
};
