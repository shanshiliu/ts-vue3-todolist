import { IToDoItem, IToDoState } from "@/typings";
import { Commit } from "vuex";
import { DEL_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODOLIST } from "./actionTypes";

interface ICtx {
    commit: Commit,
    state: IToDoState
}
export default {
    [SET_TODO]({commit, state} : ICtx, todo : IToDoItem) {
        commit(SET_TODO, todo)
    },
    [SET_TODOLIST]({commit, state} : ICtx, list : IToDoItem[]) {
        commit(SET_TODOLIST, list)
    },
    [DEL_TODO]({ commit, state}: ICtx, id: number) {
        commit(DEL_TODO, id)
    },
    [SET_DOING]({ commit, state }: ICtx, id: number) {
        commit(SET_DOING, id)
    },
    [SET_STATUS]({ commit, state}: ICtx, id: number) {
        commit(SET_STATUS, id)
    }
}