<template>
  <!-- 画面全体のレイアウトコンテナ -->
  <v-container>
    
    <!-- 中央揃え -->
    <v-row justify="center">
      
      <!-- 幅を指定したカラム：モバイルで全幅、タブレットサイズ以上で幅6 -->
      <v-col cols="12" md="6">
        
        <!-- タイトル表示 -->
        <h2 class="text-h5 font-weight-bold text-center mb-4">☀天気予報結果☀</h2>
      
        <!-- 天気予報を表示 -->
        <div v-if="forecast">
          <p v-html="totalForecast"></p>
        </div>        

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WeatherForecast',
  computed: {
    forecast() {
      // ストアのstateからforecastの中身を取得
      return this.$store.state.forecast
    },
    // ストアのgettersからtotalForecastの処理結果を取得
    totalForecast() {
      return this.$store.getters.totalForecast
    }
  },
  methods: {
    // ストアのactionsのfetchForecastを呼び出す処理
    tryForecast() {
      this.$store.dispatch('tryForecast');
    }
  }
}
</script>