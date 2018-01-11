<template>
  <div id="today">
    <div class="welcome">
      <h1>Hello, Stranger</h1>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator'

  @Component
  export default class Today extends Vue {
    @Prop() now: string = '';
    you: string = 'Stranger'
  }
</script>

<style scoped lang="scss">
  #today {
    font-weight: normal;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background: url("../assets/images/forest_0001.jpg") center;

    h1, h2 {
      font-weight: normal;
      color: floralwhite;
    }

    .welcome {
      margin-top: 120px;
      width: 100%;
      text-align: center;
    }
  }
</style>
