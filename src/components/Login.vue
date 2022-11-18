<template>
    <div class="main-content">
        <v-card width="400">
            <v-card-title> Login </v-card-title>
            <v-card-text>
                <v-row dense>
                    <v-col cols="12">
                        <v-text-field outlined dense solo flat label="E-mail" />
                        <v-text-field
                            outlined
                            dense
                            solo
                            flat
                            label="Password"
                        />
                        <v-btn color="primary">LOG IN</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
    components: { NavBar },
};
</script>

<style scoped>
.main-content {
    padding: 100px;
}

.v-card {
    margin: auto;
}
</style>
