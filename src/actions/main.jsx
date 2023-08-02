export const getInitialTask = () =>{
    return {
        type : 'GET_TASKS'
    }
}

export const AddTask = (task) => {
    return {
        type : 'ADD_TASK',
        task
    }
}

