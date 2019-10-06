import { SET_ERROR_SNACKBAR } from './actions.type';
import { ERROR_SNACKBAR, HIDE_ERROR_SNACKBARD } from './mutations.type';

const initialState = {
    snackbar: {
        show: false,
        message: '',
    },
};

export const state = { ...initialState };

const actions = {
    [SET_ERROR_SNACKBAR](context, message) {
        context.commit(ERROR_SNACKBAR, message)
    },
    [HIDE_ERROR_SNACKBARD](context) {
        context.commit(HIDE_ERROR_SNACKBARD);
    }
}

const mutations = {
    [ERROR_SNACKBAR](state, message) {
        state.snackbar = {
            show: true,
            message,
        }
    },
    [HIDE_ERROR_SNACKBARD](state) {
        state.snackbar = {
            show: false,
            message:'',
        }

    }
};

const getters = {
    snackbar(state) {
        return state.snackbar;
    }
};

export default {
    state,
    actions,
    getters,
    mutations
};