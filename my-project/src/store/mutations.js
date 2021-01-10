import { RECEIVE_LIST, MOVIES_DATA } from './mutation-type.js'



export default {
    [RECEIVE_LIST](state, { list_data }) {
        state.listTmp = list_data
    },

    [MOVIES_DATA](state, { movies_data }) {
        state.movicesArr = movies_data[0].subjects
    }

}