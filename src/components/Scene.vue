<template lang="pug">
  div#scene
    h1 message
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'

  @Component
  export default class Scene extends Vue {
    @Prop()
    message: string = 'Hello scene';

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  #scene {
    width: 100vw;
    height: 100vh;
    background-color: #F6C6CE;

    h1 {
      color: #fff;
    }
  }
</style>
