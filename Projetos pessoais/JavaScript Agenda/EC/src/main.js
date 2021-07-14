/* Importando o CSS via JavaScript:
O principal motivo de importar o CSS via JavaScript é porquê o webpack tenta dar GET em qualquer link que está dentro do HTML, acaba falhando. Caso queira importar imagens ou arquívos utilizamos um webpack loader, ele é configurado dentro do próprio arquívo de webpack. */
import { createApp } from 'vue';
import Todo from "./api/to-do";
import "./assets/styles/style.css";

const apiTodo = new Todo();

const app = createApp({
    data() {
        return {
            todos: [],
            form: {
                text: '',
                done: false
            }
        }
    },

    created() {
        this.fetchTodos()
    },

    methods: {
        async fetchTodos() {
            this.todos = await apiTodo.getAllTasks();
        },

        async createTask() {
            const data = await apiTodo.newTask(this.form);
            this.todos.push(data);

            this.form = new Object();
        },

        async changeStatusTodo(todo) {
            const data = await apiTodo.updateTask({
                ...todo,
                done: !todo.done
            });

            const index = this.todos.findIndex((todo) => todo.id === data.id);
    
            this.todos[index] = data
        },

        async deleteTask(id) {
            await apiTodo.deleteTask({ id });

            const index = this.todos.findIndex((todo) => todo.id == id);
            this.todos.splice(index, 1);
        }
    }
});

app.mount('body')
