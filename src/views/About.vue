<template>
    <v-container>
        <v-layout column>
            <v-flex>
                <h2 class="pageTitle">О нас</h2>
                <span v-html="page.text"></span>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'About',
    components: {},
    data() {
        return {
            page: null,
            apiPage: 'https://demo-api.vsdev.space/api/elonus/about_page',
        };
    },
    beforeMount() {
        this.loadPage();
    },
    methods: {
        loadPage() {
            axios
                .get(this.apiPage)
                .then((response) => {
                    this.page = response.data;
                })
                .catch((error) => {
                    console.log('-----error-------', error);
                });
        },
    },
};
</script>
