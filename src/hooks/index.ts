import { DEL_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODOLIST } from "@/store/actionTypes";
import { IToDoItem, TODO_STATUS } from "@/typings"
import { Store, useStore } from "vuex";
import { watch } from "vue";
export interface IUseToDo {
    setToDo: (value: string) => void;
    setToDoList: () => void;
    delToDo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void
}


export function useToDo(): IUseToDo {

    const { setLocalToDoList, getLocalToDoList } = useLocalStorage()
    const store: Store<any> = useStore()
    const list: IToDoItem[] = getLocalToDoList()

    watch(() => {
        return store.state.list
    },(list) => {
        console.log('监听todolist变化')
        setLocalToDoList(list)
    })

    function setToDo(value: string) {
        const toDoItem: IToDoItem = {
            content: value,
            id: Date.now(),
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO, toDoItem)
    }

    function setStatus(id: number) {
        store.dispatch(SET_STATUS, id)
        console.log('set status')
    }

    function setToDoList() {
        console.log(list)
        store.dispatch(SET_TODOLIST, list)
    }

    function delToDo(id: number) {
        store.dispatch(DEL_TODO, id)
        console.log('del to do ')
        // setLocalToDoList(store.state.list)
    }

    function setDoing(id: number) {
        store.dispatch(SET_DOING, id)
        console.log('set doing')
    }

    return {
        setToDo,
        setToDoList,
        delToDo,
        setStatus,
        setDoing
    }
}

export interface useLocalStorage {
    setLocalToDoList: (list: IToDoItem[]) => void;
    getLocalToDoList: () => IToDoItem[]
}

// 在localstorage里存储
export function useLocalStorage(): useLocalStorage {
    function setLocalToDoList(list: IToDoItem[]) {
        localStorage.setItem('todoList', JSON.stringify(list))
    }

    function getLocalToDoList(): IToDoItem[] {
        return JSON.parse(localStorage.getItem('todoList') || '[]')
    }

    return {
        setLocalToDoList,
        getLocalToDoList
    }

}