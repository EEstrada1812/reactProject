const initialData = {
    friends: {
        'friend-1' : { id: 'friend-1', content: 'images/albert_lamb.jpg', info: 'Albert and his pet lamb Sticks.'},
        'friend-2' : { id: 'friend-2', content: 'images/amy_hamster.jpg', info: 'Amy and her hamster Penny.' },
        'friend-3' : { id: 'friend-3', content: 'images/emily_dog.jpg', info: 'Emily and her dog Rover.'},
        'friend-4' : { id: 'friend-4', content: 'images/fred_iguana.jpg', info: 'Fred and his iguana Tex.'},
        'friend-5' : { id: 'friend-5', content: 'images/jackie_dog.jpg', info: 'Jackie and her dog Smuckers.'},
        'friend-6' : { id: 'friend-6', content: 'images/alex_cat.jpg', info: 'Alex and his cat Tiger.'},
        'friend-7' : { id: 'friend-7', content: 'images/nick_rabbit.jpg', info: 'Nick and his rabbit Bugsy.'},
        'friend-8' : { id: 'friend-8', content: 'images/sara_dog.jpg', info: 'Sara and her dog Ralph.'},
        'friend-9' : { id: 'friend-9', content: 'images/laura_dog.jpg', info: 'Laura and her dog Gus.'},
        'friend-10' : { id: 'friend-10', content: 'images/stacy_cat.jpg', info: 'Stacy and her cat Buddy.'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Friends',
            friendIds: ['friend-1', 'friend-2', 'friend-3', 'friend-4', 'friend-5', 'friend-6', 'friend-7', 'friend-8', 'friend-9', 'friend-10']
        },

        'column-2': {
            id: 'column-2',
            title: 'Monday',
            friendIds: []
        },

        'column-3': {
            id: 'column-3',
            title: 'Tuesday',
            friendIds: []
        },

        'column-4': {
            id: 'column-4',
            title: 'Wednesday',
            friendIds: []
        },

        'column-5': {
            id: 'column-5',
            title: 'Thursday',
            friendIds: []
        },

        'column-6': {
            id: 'column-6',
            title: 'Friday',
            friendIds: []
        },

        'column-7': {
            id: 'column-7',
            title: 'Saturday',
            friendIds: []
        },

        'column-8': {
            id: 'column-8',
            title: 'Sunday',
            friendIds: []
        },
    },
    //facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6','column-7', 'column-8'],

};

export default initialData;