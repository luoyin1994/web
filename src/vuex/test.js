module.exports = {
    state    : {
        count: 0,
        name : 'admin',
        todos: [
            {
                id  : 1,
                text: '...',
                done: true,
            },
            {
                id  : 2,
                text: '...',
                done: false,
            },
        ],
    },
    getters  : {
        doneTodos     : state => {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length;
        },
        getTodoById   : (state, getters) => id => {
            return state.todos.find(todo => todo.id === id);
        },
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
    actions  : {
        increment({commit}) {
            commit('increment');
        },
        async incrementAsync({commit}) {
            await setTimeout(() => {
                commit('increment');
            }, 1000);
        },
    },
};