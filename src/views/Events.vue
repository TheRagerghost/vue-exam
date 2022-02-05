<template>
    <v-container>
        <v-layout column>
            <h2 class="pageTitle">События</h2>
            <v-flex class="cardsFlex">
                <v-card elevation="6" class="eventCard" style="padding: 1%">
                    <form action="" method="post">
                        <v-select
                            :items="items"
                            v-model="eventType"
                            label="Событие"
                            solo
                        >
                            <option>Кислотный дождь</option>
                            <option>Ураган</option>
                            <option>Землетрясение</option>
                        </v-select>

                        <v-slider
                            v-if="this.eventType == 'acid_rain'"
                            min="0"
                            max="100"
                            v-model="acid_power"
                            label="Сила события"
                        >
                        </v-slider>
                        <v-slider
                            v-if="this.eventType == 'hurricane'"
                            min="0"
                            max="100"
                            v-model="hurr_power"
                            label="Сила события"
                        >
                        </v-slider>
                        <v-slider
                            v-if="this.eventType == 'earthquake'"
                            min="0"
                            max="100"
                            v-model="quake_power"
                            label="Сила события"
                        >
                        </v-slider>

                        <v-text-field
                            label="Дата события"
                            placeholder="01.01.22"
                            v-model="eventDate"
                            type="date"
                            solo
                        ></v-text-field>

                        <v-text-field
                            v-model="victims"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            solo
                            min="0"
                            type="number"
                            style="width: 60px"
                            label="Количество жертв: "
                        ></v-text-field>

                        <v-btn
                            class="mr-4"
                            @click="postEvent"
                            style="margin-top: 10px"
                        >
                            Добавить
                        </v-btn>
                    </form>
                </v-card>

                <v-card
                    elevation="4"
                    class="eventCard"
                    color="green accent-1"
                    v-for="(event, index) in this.$store.state.events"
                    :key="index"
                >
                    <v-img
                        v-if="event.type == 'acid_rain'"
                        src="@/assets/rain_img.jpg"
                        contain
                    ></v-img>
                    <v-img
                        v-if="event.type == 'hurricane'"
                        src="@/assets/hurricane_img.jpg"
                        contain
                    ></v-img>
                    <v-img
                        v-if="event.type == 'earthquake'"
                        src="@/assets/earthquake_img.jpg"
                        contain
                    ></v-img>

                    <v-card-title v-if="event.type == 'acid_rain'"
                        >Кислотный дождь с силой
                        {{ event.acid_power }}</v-card-title
                    >
                    <v-card-title v-if="event.type == 'hurricane'"
                        >Ураган с силой ветра
                        {{ event.wind_speed }}</v-card-title
                    >
                    <v-card-title v-if="event.type == 'earthquake'"
                        >Землетрясение с силой
                        {{ event.earthquake_power }}</v-card-title
                    >
                    <v-card-subtitle>{{ event.date }}</v-card-subtitle>
                    <v-card-text
                        >В результате пострадало
                        {{ event.victims }} марсиан.</v-card-text
                    >
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Events',
    components: {},
    data() {
        return {
            form: null,
            apiForm: 'https://demo-api.vsdev.space/api/elonus/events/form',
            apiPost: 'https://demo-api.vsdev.space/api/elonus/events',

            items: ['acid_rain', 'hurricane', 'earthquake'],
            eventType: null,
            acid_power: 0,
            hurr_power: 0,
            quake_power: 0,
            eventDate: null,
            victims: 0,
        };
    },
    beforeMount() {
        this.loadEvents();
        this.loadForm();
    },
    methods: {
        loadEvents() {
            this.$store.dispatch('getEvents');
        },

        loadForm() {
            axios
                .get(this.apiForm)
                .then((response) => {
                    this.form = response.data;
                })
                .catch((error) => {
                    console.log('-----error-------', error);
                });
        },
        postEvent() {
            console.log(
                this.eventType +
                    ' ' +
                    this.acid_power +
                    ' ' +
                    this.hurr_power +
                    ' ' +
                    this.quake_power +
                    ' ' +
                    this.eventDate +
                    ' ' +
                    this.victims
            );

            var formData = new FormData();

            formData.append('type', this.eventType);
            formData.append('acid_power', this.acid_power);
            formData.append('wind_speed', this.hurr_power);
            formData.append('earthquake_power', this.quake_power);
            formData.append('date', this.eventDate);
            formData.append('victims', this.victims);

            axios({
                method: 'post',
                url: this.apiPost,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });

            setTimeout(() => {
                this.loadEvents();
            }, 2000);
        },
    },
};
</script>

<style scoped>
.cardsFlex {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 20%;
}

.eventCard {
    width: 30%;
    margin: 15px;
}
</style>
