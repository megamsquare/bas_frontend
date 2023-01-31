<template>
    <form>
        <div>
            <label for="username">Username:</label>
            <!-- <input type="text" id="username" v-model="username"> -->
        </div>
        <div>
            <label for="password">Password:</label>
            <!-- <input type="text" id="password" v-model="password"> -->
        </div>
        <!-- <button @click.prevent="submitLogin">Login</button> -->
    </form>
</template>

<script setup lang="ts">

// export default Login {
//     username: String = '';
//     password: String = '';

//     submitLogin() {
//         // Perform Login request with API here
//     }

//     // methods: {
//     //     submitLogin() {
//     //         // Perform Login request with API here
//     //         console.log('Username:', this.username);
//     //         console.log('Password:', this.password);
//     //     },
//     // },
// };
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
}

label,
input {
    width: 100%;
    margin-bottom: 8px;
    padding: 8px;
}

button {
    width: 100%;
    padding: 8px;
}

</style>