<template>
    <div id="app" data-app>
        <navbar-top></navbar-top>
        <router-view />
    </div>
</template>

<script>
import NavbarTop from '@/components/NavbarTop.vue';

export default {
    name: 'App',
    components: {
        NavbarTop,
    },
};
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
}

.pageTitle {
    margin: 20px 0px;
}
</style>
