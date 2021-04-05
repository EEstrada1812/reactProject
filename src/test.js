const initialData = {
    tasks: {
        'task-1' : { id: 'task-1', content: 'images/albert_lamb.jpg', info: 'Albert and his pet lamb Sticks.'},
        'task-2' : { id: 'task-2', content: 'images/amy_hamster.jpg', info: 'Amy and her hamster Penny.' },
        'task-3' : { id: 'task-3', content: 'images/emily_dog.jpg', info: 'Emily and her dog Rover.'},
        'task-4' : { id: 'task-4', content: 'images/fred_iguana.jpg', info: 'Fred and his iguana Tex.'},
        'task-5' : { id: 'task-5', content: 'images/jackie_dog.jpg', info: 'Jackie and her dog Smuckers.'},
        'task-6' : { id: 'task-6', content: 'images/alex_cat.jpg', info: 'Alex and his cat Tiger.'},
        'task-7' : { id: 'task-7', content: 'images/nick_rabbit.jpg', info: 'Nick and his rabbit Bugsy.'},
        'task-8' : { id: 'task-8', content: 'images/sara_dog.jpg', info: 'Sara and her dog Ralph.'},
        'task-9' : { id: 'task-9', content: 'images/scott_dog.jpg', info: 'Scott and his dog Gus.'},
        'task-10' : { id: 'task-10', content: 'images/stacy_cat.jpg', info: 'Stacy and her cat Buddy.'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Customers',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7', 'task-8', 'task-9', 'task-10']
        },

        'column-2': {
            id: 'column-2',
            title: 'Monday',
            taskIds: []
        },

        'column-3': {
            id: 'column-3',
            title: 'Tuesday',
            taskIds: []
        },

        'column-4': {
            id: 'column-4',
            title: 'Wednesday',
            taskIds: []
        },

        'column-5': {
            id: 'column-5',
            title: 'Thursday',
            taskIds: []
        },

        'column-6': {
            id: 'column-6',
            title: 'Friday',
            taskIds: []
        },

        'column-7': {
            id: 'column-7',
            title: 'Saturday',
            taskIds: []
        },

        'column-8': {
            id: 'column-8',
            title: 'Sunday',
            taskIds: []
        },
    },
    //facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6','column-7', 'column-8'],

};

export default initialData;