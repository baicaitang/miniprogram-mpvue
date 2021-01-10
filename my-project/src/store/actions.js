import { RECEIVE_LIST, MOVIES_DATA } from './mutation-type.js'
import list_data from '../datas/list-data.js'
import movies_data from "../datas/movies.js";

export default {
    getList({ commit }) {
        // commit()触发对应的mutations
        commit(RECEIVE_LIST, list_data)
    },
    getMovies({ commit }) {
        commit(MOVIES_DATA, movies_data)
    }
}