<template>
    <v-toolbar class="navbar" app color="white">
        <h2>Илонус</h2>
        <p>Регистрация погодных событий на Марсе</p>
        <v-btn text color="deep-orange darken-1" to="/">Главная</v-btn>
        <v-btn text color="deep-orange darken-1" to="/events">События</v-btn>
        <v-btn text color="deep-orange darken-1" to="/about">О нас</v-btn>
        <v-spacer></v-spacer>
        <p>Зафиксировано {{ widget.events }} событий!</p>
        <v-spacer></v-spacer>
        <p>Вишняков Андрей 201-327</p>
    </v-toolbar>
</template>

<script>
import axios from 'axios';
export default {
    name: 'NavbarTop',
    data() {
        return {
            widget: null,
            apiWidget: 'https://demo-api.vsdev.space/api/elonus/left_widget',
        };
    },
    beforeMount() {
        this.loadWidget();
    },
    methods: {
        loadWidget() {
            axios
                .get(this.apiWidget)
                .then((response) => {
                    this.widget = response.data;
                })
                .catch((error) => {
                    console.log('-----error-------', error);
                });
        },
    },
};
</script>

<style scoped>
navbar {
    max-height: -moz-fit-content;
    max-height: fit-content;
}

.v-btn,
p {
    margin: 0px 10px;
}
</style>
