import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        events: [],
        apiBase: 'https://demo-api.vsdev.space',
        apiEvents: '/api/elonus/events',
    },
    mutations: {
        setEvents(state, payload) {
            state.events = payload;
            console.log(payload);
        },
    },
    actions: {
        async getEvents({ state, commit }) {
            try {
                let response = await axios.get(
                    `${state.apiBase + state.apiEvents}`
                );
                commit('setEvents', response.data);
            } catch (error) {
                commit('setEvents', []);
            }
        },
    },
    modules: {},
});
