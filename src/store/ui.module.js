import { SHOW_ERROR_SNACKBAR, TOGGLE_LOADING } from './actions.type';
import { ERROR_SNACKBAR, HIDE_ERROR_SNACKBAR } from './mutations.type';

const initialState = {
    loading: false,
    snackbar: {
        show: false,
        message: '',
    },
};

export const state = { ...initialState };

const actions = {
    [SHOW_ERROR_SNACKBAR](context, message) {
        context.commit(ERROR_SNACKBAR, message)
    },
    [HIDE_ERROR_SNACKBAR](context) {
        context.commit(HIDE_ERROR_SNACKBAR);
    },
    [TOGGLE_LOADING](context) {
        context.commit(TOGGLE_LOADING);
    }
}

const mutations = {
    [ERROR_SNACKBAR](state, message) {
        state.snackbar = {
            show: true,
            message,
        }
    },
    [HIDE_ERROR_SNACKBAR](state) {
        state.snackbar = {
            show: false,
            message: '',
        }
    },
    [TOGGLE_LOADING](state) {
        const newValue = !state.loading;
        state.loading = newValue;
    }
};

const getters = {
    snackbar(state) {
        return state.snackbar;
    },
    isLoading(state) {
        return state.loading;
    },
};

export default {
    state,
    actions,
    getters,
    mutations
};