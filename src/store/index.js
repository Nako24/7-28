import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        forecast: null
    },
    getters: {
        totalForecast(state) {
            return state.forecast.text.replace(/\n/g, '<br>');
        }
    },
    mutations: {
        setForecast(state, data) {
            state.forecast = data;
        }
    },
    // 非同期処理（時間のかかる処理）外部API
    actions: {
        async tryForecast({ commit }) {
            try {
                const url = 'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json';
                const response = await axios.get(url);
                commit('setForecast', response.data); 
            } catch (error) {
                console.error('天気予報の取得に失敗しました:', error);
            }
        }
    },
    modules: {
    }
})
