<template>
    <div class="main-content">
        <div class="text-center">
            <v-dialog
                v-if="store.loading ? (dialog = true) : ''"
                persistent
                v-model="dialog"
                width="500"
            >
                <v-card>
                    <v-card-title></v-card-title>
                    <v-card-text class="justify-center">
                        <v-progress-circular indeterminate color="primary" />
                        <span class="text-h7"> Please wait... </span>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>

        <body>
            <v-card>
                <v-card-title>
                    <h5>Task</h5>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="new_task.title"
                        outlined
                        dense
                        placeholder="Title"
                    />
                    <v-row dense>
                        <v-col cols="12">
                            <v-btn @click="handleSubmit()">
                                Add New Task
                            </v-btn>
                        </v-col>
                        <v-col cols="12">
                            <v-btn @click="store.$reset()"> Reset State</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

            <div class="body-message">
                <v-card>
                    <v-card-title>
                        <h5>All Tasks</h5>
                    </v-card-title>
                    <v-card-text>
                        <table>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Title</td>
                                    <td>Favoirte</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(item, index) in store.tasks"
                                    :key="index + 'a'"
                                >
                                    <td>
                                        {{ item.id }}
                                    </td>
                                    <td>
                                        {{ item.title }}
                                    </td>
                                    <td>
                                        {{ item.isFav }}
                                    </td>
                                    <td>
                                        <v-btn
                                            icon
                                            color="gray"
                                            @click="removeTask(item.id)"
                                        >
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                        <v-btn
                                            icon
                                            color="gray"
                                            v-if="item.isFav == false"
                                            @click="toggleFav(item.id)"
                                        >
                                            <v-icon>mdi-heart</v-icon>
                                        </v-btn>
                                        <v-btn
                                            icon
                                            color="red"
                                            v-else
                                            @click="toggleFav(item.id)"
                                        >
                                            <v-icon>mdi-heart</v-icon>
                                        </v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-card-title>
                        <h5>All Favorites</h5>
                    </v-card-title>
                    <v-card-text>
                        <table>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Title</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(item, index) in store.favs"
                                    :key="index + 'b'"
                                >
                                    <td>
                                        {{ item.id }}
                                    </td>
                                    <td>
                                        {{ item.title }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </v-card-text>
                </v-card>
            </div>
        </body>
    </div>
</template>

<script>
import { useTaskStore } from "@/store/TaskStore";

export default {
    data() {
        return {
            store: useTaskStore(),

            new_task: {
                title: "",
            },

            dialog: false,
        };
    },

    methods: {
        handleSubmit() {
            var task = {
                id: Math.floor(Math.random() * 1000),
                title: this.new_task.title,
                isFav: false,
            };

            this.store.addNewTask(task);
        },

        removeTask(task_id) {
            this.store.removeTask(task_id);
        },

        toggleFav(task_id) {
            this.store.toggleFav(task_id);
        },
    },

    mounted() {
        this.store.getAllTasks();
    },
};
</script>

<style scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
}

.body-message {
    margin: auto;
    display: flex;
    gap: 10px;
}

table {
    border-collapse: collapse;
}

td {
    padding: 10px 18px 10px 18px;
    border: 1px solid black;
}
</style>
