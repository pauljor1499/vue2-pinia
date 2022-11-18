import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [
            {
                id: 1,
                title: "Title 1",
                isFav: true,
            },

            {
                id: 2,
                title: "Title 2",
                isFav: false,
            },
        ],
        name: "Yoshi",
    }),

    getters: {
        // favs() {
        //     //this. refers to the state's object
        //     return this.tasks.filter((t) => t.isFav == true);
        // },

        favs: (state) => {
            //this. refers to the state's object
            return state.tasks.filter((t) => t.isFav == true);
        },
    },

    actions: {
        addNewTask(new_task) {
            this.tasks.push(new_task);
        },
    },
});
