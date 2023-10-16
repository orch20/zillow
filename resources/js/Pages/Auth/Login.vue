<template>
    <div  class="w-1/2 mx-auto">
    <form @submit.prevent="login">
            <div>
                <label for="email" class="label">Email (username)</label>
                <input type="email" name="email" id="email" class="input" v-model="form.email" />
                <div class="input-error">Potential errors</div>
            </div>
            <div class="mt-4">
                    <label for="password" class="label">Password</label>
                    <input type="password" name="password" id="password" class="input" v-model="form.password" />
                </div>
                <div class="mt-4">
                    <button class="btn-primary w-full" type="submit">Login</button>
                </div>
        </form>
    </div>
    
</template>

<script setup>
import { useForm } from '@inertiajs/inertia-vue3';

    const form = useForm({
        email: '',
        password: '',
    });

const login = () => form.post(route('login.store'));
</script>
