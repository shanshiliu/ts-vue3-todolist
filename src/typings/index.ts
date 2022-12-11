interface IToDoItem {
    id: number,
    content: string,
    status: TODO_STATUS
}

interface IToDoState {
    list: IToDoItem[]
}

enum TODO_STATUS {
    FINISHED = 'finished',
    WILLDO = 'willdo',
    DOING = 'doing'
}

export {
    IToDoItem,
    IToDoState,
    TODO_STATUS
}