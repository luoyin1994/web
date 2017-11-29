export default {
    namespaced: true,
    state     : {
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
    getters   : {
        doneTodos     : state => {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length;
        },
        todosCount    : (state) => {
            return state.todos.length;
        },
        getTodoById   : (state, getters) => id => {
            return state.todos.find(todo => todo.id === id);
        },
    },
    mutations : {
        increment(state) {
            state.count++;
        },
        pushTodo(state, toDoData) {
            state.todos.push(toDoData);
        },
        logTodosCount(state) {
            console.log(state.todosCount);
        },
    },
    actions   : {
        getTodoData() {
            return new Promise((reject) => {
                setTimeout(() => {
                    reject({
                        id  : 3,
                        text: '...',
                        done: false,
                    });
                }, 1000);
            });
        },
        async addTodosAsync({dispatch, commit}) {
            let data = await dispatch('getTodoData');
            commit('pushTodo', data);
            commit('logTodosCount');
        },
        incrementAsync({commit}) {
            return new Promise((reject) => {
                setTimeout(() => {
                    commit('increment');
                    reject();
                }, 1000);
            });
        },
    },
};