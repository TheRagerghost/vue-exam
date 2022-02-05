<template>
    <v-container>
        <v-layout column>
            <v-flex>
                <h2 class="pageTitle">О нас</h2>
                <p class="subheading mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras pulvinar risus quis mauris interdum, in euismod nibh
                    pretium. Etiam pulvinar tincidunt dapibus. Quisque
                    sollicitudin, mauris a consequat consectetur, turpis nisl
                    sollicitudin enim, id consectetur neque neque nec metus.
                    Pellentesque dolor nisi, vulputate quis lobortis ac,
                    tincidunt et quam. Mauris pulvinar blandit nisi nec mattis.
                    Aliquam accumsan ut sem eget efficitur. Vivamus in tortor
                    gravida eros laoreet condimentum nec vel dui. Nullam quam
                    massa, ultrices eget tincidunt a, pulvinar ac libero.
                </p>
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
