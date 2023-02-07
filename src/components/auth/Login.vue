<script setup lang="ts">
import { ref } from 'vue';

const username = ref('')
const password = ref('')

const loginUser = () => {
    console.log('Username: ', username)
    console.log('Password: ', password)
}
</script>

<template>
    <div>
        <form @submit.prevent="loginUser">
            <div>
                <label for="user-name">Username</label>
                <input type="text" id="user-name" v-model="username">
            </div>
            <div>
                <label for="user-password">Password</label>
                <input type="password" id="user-password" v-model="password">
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    </div>
</template>