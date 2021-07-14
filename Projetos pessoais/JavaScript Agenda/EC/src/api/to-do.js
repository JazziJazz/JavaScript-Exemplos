import axios from '../utils/axios'

export default class Todo {
    async getAllTasks() {
        const { data } = await axios.get('/to-do');

        return data;
    };

    async newTask({text, done}) {
        const { data } = await axios.post('/to-do', { text, done });

        return data;
    };

    async updateTask({ id, text, done}) {
        const { data } = await axios.put(`/to-do/${id}`, { text, done });

        return data;
    };

    async deleteTask({ id }) {
        await axios.delete(`/to-do/${id}`);
    };
}
