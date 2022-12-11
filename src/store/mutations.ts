import { IToDoItem, IToDoState, TODO_STATUS } from "@/typings";
import { DEL_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODOLIST } from "./actionTypes";

export default {
    [SET_TODO](state: IToDoState, todo: IToDoItem): void {
        // 使用unshift  watch监听不到 list变化
        // state.list.unshift(todo)
        state.list = [todo, ...state.list]
    },
    [SET_TODOLIST](state: IToDoState, list: IToDoItem[] ):void {
        console.log(list)
        state.list = list
    },
    [DEL_TODO](state: IToDoState, id: number):void {
        state.list = state.list.filter((item) => item.id != id)
    },
    [SET_DOING](state: IToDoState, id: number):void {
        state.list = state.list.map((item: IToDoItem) => {
            if (item.status == TODO_STATUS.DOING && item.id != id) {
                item.status = TODO_STATUS.WILLDO
            }
            if (item.id == id) {
                item.status = (item.status == TODO_STATUS.DOING ? TODO_STATUS.WILLDO : TODO_STATUS.DOING)                    
            }
            return item
        })
    },
    [SET_STATUS](state: IToDoState, id: number): void {
        state.list = state.list.map((item: IToDoItem)=> {
            if (item.id == id) {
                switch(item.status) {
                    case TODO_STATUS.FINISHED:
                        item.status = TODO_STATUS.WILLDO
                        break;
                    case TODO_STATUS.WILLDO:
                    case TODO_STATUS.DOING:
                        item.status = TODO_STATUS.FINISHED 
                        break;
                    default:
                        break;
                }
            }
            return item
        })
    }
}