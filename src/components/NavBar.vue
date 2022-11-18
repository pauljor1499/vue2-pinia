<template>
    <div class="main-content">
        <header>
            <div class="logo">
                <router-link to="/">
                    <h3>VUE</h3>
                </router-link>
            </div>
            <div class="nav-links">
                <router-link to="/login">Login</router-link>
                <router-link to="/register">Sign Up</router-link>
            </div>
        </header>
    </div>
</template>

<style scoped>
header {
    max-width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    border: 1px solid gray;
}

.nav-links {
    max-width: 100%;
    display: flex;
    gap: 25px;
    justify-content: space-between;
}
</style>
