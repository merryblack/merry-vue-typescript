<template lang="pug">
  div#welcome
    div.layer.layer0
      | {{message}}
    div.layer.layer1
      | dsfdfs
    div.layer.layer2
      | zsdfsdf
    div.layer.layer3
      | ASDASD
    div.layer.layer4
      | sdas
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'

  @Component
  export default class Welcome extends Vue {
    @Prop()
    message = 'Welcome';

    mounted () {

    }
  }
</script>

<style scoped lang="scss">
  #welcome {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap');

    .layer {
      width: 100vw;
      height: 100vh;
      &.layer0 {background-color: #fff; opacity: 1}
      &.layer1 {background-color: #fff; opacity: .75}
      &.layer2 {background-color: #fff; opacity: .5}
      &.layer3 {background-color: #fff; opacity: .25}
      &.layer4 {background-color: #fff; opacity: 0}
    }
  }
</style>
