// Vue Routerで定義されたルーティングに応じた画面が差し込む
<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn text to="/" tag="router-link">Home</v-btn>
      <v-btn text to="/about" tag="router-link">天気予報結果</v-btn>

    </v-app-bar>

    <v-main class="background">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};

</script>

<style>

.background {
  position: relative;
  background-image: url('https://www.lanilanihawaii.com/wp-content/uploads/2018/09/pixta_12096161_M.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4); 
  z-index: 1;
}

/* 中のコンテンツを前面に表示 */
.v-main > * {
  position: relative;
  z-index: 2;
}
</style>
