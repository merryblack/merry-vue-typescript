<template lang="pug">
  div#today
    div.welcome(v-bind:class="{'hide':!this.isShowing}")
      h1 {{title}}
      input.welcome-input(v-model="inputValue" v-on:keyup.enter="somebodyKeyUpEnter" placeholder="")

</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator'

  @Component
  export default class Today extends Vue {
    @Prop()
    step: number = 0;
    isShowing: boolean = true;
    title: string = '당신의 이름은?';
    inputValue: string = '';
    name: string = '';
    message: string = '';

    somebodyKeyUpEnter () {
      this.isShowing = false
      switch (this.step) {
        case 0:
          setTimeout(() => {
            this.step += 1
            this.title = '오늘의 한마디'
            this.isShowing = true
            this.name = this.inputValue
            this.inputValue = ''
          }, 1300)
          break
        case 1:
          setTimeout(() => {
            this.step += 1
            this.message = this.inputValue
            console.log(this.name + ' ' + this.message)
          }, 1300)
          break
        default:
      }
    }
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
    opacity: 1;

    h1, h2 {
      font-weight: normal;
      color: floralwhite;
      text-align: center;
    }

    input {
      width: 380px;
      height: 32px;
      outline: none;
      border: none;
      border-bottom: solid 1px floralwhite;
      color: floralwhite;
      font-size: 18px;
      margin-top: 40px;
      text-align: center;
      background-color: transparent;
      line-height: 32px;

      &::placeholder {
        color: darkgray;
        font-size: 18px;
        font-weight: 300;
      }
    }

    .welcome {
      margin-top: 120px;
      width: 100%;
      text-align: center;
      transition: opacity 1s ease-in-out;

      &.hide {
        opacity: 0;
      }
    }

  }
</style>
