<template>
  <v-container>
    <WeatherForecast />
  </v-container>
</template>

<script>
  import WeatherForecast from '@/components/WeatherForecast.vue' //WeatherForecast.vueをインポート

  export default {
    name: 'AboutView',

    components: {
      WeatherForecast,
    },
  }
</script>