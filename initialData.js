const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: '' },
        'task-2': { id: 'task-2', content: '' },
        'task-3': { id: 'task-3', content: '' },
        'task-4': { id: 'task-4', content: '' }
    },

    columns: {
        'column-1': {
            id: 'column-1',
            title: 'to-do',
            taskIds: ["task-1", 'task-2']
        },
        'column-2': {
            id: 'column-2',
            title: 'done',
            taskIds: ["task-3"]
        },
        'column-3': {
            id: 'column-3',
            title: 'review',
            taskIds: ["task-4"]
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
}

export default initialData;