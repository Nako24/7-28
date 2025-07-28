<template>
  <v-container>
    <HelloWorld />
  </v-container>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue' //HelloWorld.vueをインポート

  export default {
    name: 'HomeView',

    components: {
      HelloWorld,
    },
  }
</script>
