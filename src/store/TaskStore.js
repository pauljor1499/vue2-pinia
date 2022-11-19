import { defineStore } from "pinia";
import axios from "axios";

var BASE_URL = "http://localhost:3000/tasks/";

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
            // await this.sleep(3000); //test
            const response = await fetch(BASE_URL);
            const data = await response.json();
            this.tasks = data;
            this.loading = false;
        },

        async addNewTask(new_task) {
            //this is for the current state
            this.tasks.push(new_task);

            //this is for the json file
            axios
                .post(BASE_URL, new_task)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            //Fetch API
            // const response = await fetch(BASE_URL, {
            //     method: "POST",
            //     body: JSON.stringify(new_task),
            //     headers: { "Content-Type": "application/json" },
            // });
            // if (response.error) console.log(response.error);
        },

        async removeTask(task_id) {
            var index = this.tasks.findIndex((item) => item.id === task_id);
            this.tasks.splice(index, 1);

            axios
                .delete(BASE_URL + task_id)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            // const response = await fetch(BASE_URL + task_id, {
            //     method: "DELETE",
            // });
            // if (response.error) console.log(response.error);
        },

        async toggleFav(task_id) {
            var index = this.tasks.findIndex((item) => item.id === task_id);
            this.tasks[index].isFav = !this.tasks[index].isFav;

            axios
                .patch(BASE_URL + task_id, {
                    isFav: this.tasks[index].isFav,
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            // const response = await fetch(BASE_URL + task_id, {
            //     method: "PATCH",
            //     body: JSON.stringify({
            //         isFav: this.tasks[index].isFav,
            //     }),
            //     headers: { "Content-Type": "application/json" },
            // });
            // if (response.error) console.log(response.error);
        },

        sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        },

        // addNewTask(new_task) {
        //     this.tasks.push(new_task);
        // },

        // removeTask(task_id) {
        //     var index = this.tasks.findIndex((item) => item. id === task_id);
        //     this.tasks.splice(index, 1);
        // },

        // toggleFav(task_id) {
        //     var index = this.tasks.findIndex((item) => item.id === task_id);
        //     this.tasks[index].isFav = !this.tasks[index].isFav;
        // },
    },
});
