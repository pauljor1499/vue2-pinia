<template>
    <div class="main-content">
        <body>
            <v-card>
                <v-card-title>
                    <h5>Task</h5>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="new_id"
                        outlined
                        dense
                        placeholder="ID"
                    />
                    <v-text-field
                        v-model="new_title"
                        outlined
                        dense
                        placeholder="Title"
                    />
                    <v-btn @click="handleSubmit()"> Add New Task </v-btn>
                </v-card-text>
            </v-card>

            <div class="body-message">
                <v-card v-for="(item, index) in store.tasks" :key="index + 'a'">
                    <v-card-text>
                        {{ item.id }}
                        {{ item.title }}
                    </v-card-text>
                </v-card>
                <v-card v-for="(item, index) in store.favs" :key="index + 'b'">
                    <v-card-text>
                        {{ item.id }}
                        {{ item.title }}
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

            new_id: "",
            new_title: "",
        };
    },

    methods: {
        handleSubmit() {
            var task = {
                id: this.new_id,
                title: this.new_title,
                isFav: false,
            };
            this.store.addNewTask(task);
        },
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
</style>
