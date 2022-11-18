import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [],
        loading: false,
    }),

    getters: {
        favs() {
            //this. refers to the state's object
            //this serves like a computed property
            return this.tasks.filter((t) => t.isFav == true);
        },
    },

    actions: {
        async getAllTasks() {
            this.loading = true;
            const response = await fetch("http://localhost:3000/tasks");
            const data = await response.json();
            this.tasks = data;
            this.loading = false;
        },

        addNewTask(new_task) {
            this.tasks.push(new_task);
        },

        removeTask(task_id) {
            var index = this.tasks.findIndex((item) => item.id === task_id);
            this.tasks.splice(index, 1);
        },

        toggleFav(task_id) {
            var index = this.tasks.findIndex((item) => item.id === task_id);
            this.tasks[index].isFav = !this.tasks[index].isFav;
        },
    },
});
