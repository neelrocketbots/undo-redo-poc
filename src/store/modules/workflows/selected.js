import {
    scaffoldState,
    scaffoldActions,
    scaffoldMutations,
} from "undo-redo-vuex";

const state = {
    all: [],
};

const mutations = {
    // NB: payload parameters as object literal props
    ADD_ITEM: (state, { item }) => {
        // adds the item to the list
        state.all.push(item)
    },
    REMOVE_ITEM: (state, { item }) => {
        // removes the item from the list
        state.all.pop();
    },
    emptyState: state => {
        state.all = [...(state.resetAll || [])];
    },
    resetState: state => {
        // Sets the 'reset placeholder' (see state.resetList) prop to the current state
        state.resetAll = [...state.all];
    },
};

const actions = {};

const getters = {
    all: (state) =>  {
        return state.all;
    },
};

export default {
    state: scaffoldState(state),
    actions: scaffoldActions(actions),
    mutations: scaffoldMutations(mutations),
    getters,
    namespaced: true
}
