<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class App extends Vue {
  }
</script>

<style> <!-- 전역 스타일 작성 -->
@font-face {
  font-family: 'BareunBatang';
  font-style: normal;
  font-weight: 400;
  src: url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFM.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFM.woff') format('woff');
}

@font-face {
  font-family: 'BareunBatang';
  font-style: normal;
  font-weight: 700;
  src: url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFB.woff') format('woff');
}

@font-face {
  font-family: 'BareunBatang';
  font-style: normal;
  font-weight: 300;
  src: url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFL.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/othrs/kpa/BareunBatang/BareunBatangOTFL.woff') format('woff');
}

#app {
  font-family: 'BareunBatang', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  background-color: #000;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

/*color-display*/
/*
#F5F5F5 whitesmoke
#FFFAF0 floralwhite
#FFFAFA snow
#FFF5EE seashell
#F8F8FF ghostwhite
#F0F8FF aliceblue
#F0FFF0 honeydew
#F0FFFF azure
#FFFFF0 ivory
*/

</style>
