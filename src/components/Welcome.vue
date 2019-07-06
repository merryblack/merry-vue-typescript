<template lang="pug">
  div#welcome
    div.pagination.black
      div.dot.selected
      div.dot
      div.dot
      div.dot
    div.background
      div.shapes
        div.circle.c1
        div.circle.c2
        div.circle.c3
        div.circle.c4
        div.circle.c5
        div.circle.c6
        div.circle.c7
      div.background.background2

    flicking.flicking(ref="flicker" :options="flickingOptions" :tag="'div'"
    :plugins="plugins" @need-panels="e => {}" @move-end="e => {}")
      div.eg-flick-viewport
        div.eg-flick-camera
          div.page.main
            div.wheel
            div.container
              h1 Hello
              p.description You can make flicking gestures, which are ways to navigate left and right to move between panels arranged side by side.
          div.page.feature
            div.feature
              h3 Flicking
              p.description You can dynamically add panels to the flicking.
            div.feature
              h3 Free Scroll
              p.description The panels are freely scrollable..
            div.feature
              h3 Variable Size
              p.description You can place multiple panels and specify various sizes for each panel.
            div.feature
              h3 Flexible Align
              p.description Use Hanger and Anchor to provide customizable alignment.
            div.feature
              h3 Progress
              p.description Indicates the overall progress of the Flicking.
            div.feature
              h3 Bound
              p.description Bound the panels so that they are not out of the flicking area.
          div.page.slogan
            div.container
              h2 Every
                span(data-text="30") million people experience.
                  br
                  | It's reliable, flexible and extendable carousel.
          div.page.more
            div.container
              a(href="https://github.com/naver/egjs-flicking" target="_blank")
                h2 LEARN MORE
      div.imac
        div.screen
          div.container
            div.panels
              div.panel
              div.panel
              div.panel
              div.panel
        div.bottom
        div.stand
        div.stand-bottom
      div.macbook
        div.screen.ratio062
          div.container
            div.panels
              div.panel
              div.panel
              div.panel
              div.panel
        div.bottom
      div.ipad.ratio13
        div.container
          div.panels
            div.panel
            div.panel
            div.panel
            div.panel
      div.iphone
        div.head
        div.container
          div.panels
            div.panel
            div.panel
            div.panel
            div.panel
        div.home

</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import ScrollFlicking from '../helpers/ScrollFlicking'

  @Component
  export default class Welcome extends Vue {
    @Prop()
    step: number = 0;
    isShowing: boolean = true;
    title: string = '당신의 이름은';
    inputValue: string = '';
    name: string = '';
    message: string = '';
    plugins = [new ScrollFlicking()];
    flickingOptions = {horizontal: false, autoResize: true, duration: 700};
  }
</script>

<style scoped lang="scss">
  #welcome {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap');

    * {
      letter-spacing: 0.5px;
    }
    .ratio13:before {
      content: "";
      position: relative;
      display: block;
      width: 100%;
      padding-top: 130%;
    }
    .ratio062:before {
      content: "";
      position: relative;
      display: block;
      width: 100%;
      padding-top: 66%;
    }
    .flicking, .background {
      position: relative;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
    .flicking, .background {
      position: absolute;
      overflow: hidden;
    }
    .background .rect,
    .background .circle,
    .background .star,
    .background .triangle {
      position: absolute;
    }
    .background .circle {
      border-radius: 50%;
    }
    .background .circle:before {
      content: "";
      position: relative;
      display: block;
      width: 100%;
      padding-top: 100%;
    }
    .c1 {
      width: 60vmax;
      min-width: 1000px;
      bottom: 50%;
      right: 45%;
      background: #E46865;
    }
    .c2 {
      width: 50%;
      min-width: 800px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 30px solid #f0f0f0;
      z-index: -1;
    }
    .c3 {
      width: 40%;
      min-width: 600px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #F2B51D;
      z-index: -1;
    }
    .c4 {
      width: 60vmax;
      min-width: 1000px;
      top: 50%;
      left: 45%;
      background: #30B78E;
    }
    .c5 {
      width: 20%;
      min-width: 300px;
      bottom: 60%;
      left: 70%;
      border: 40px solid #ea905d;
    }
    .c6 {
      width: 20%;
      min-width: 300px;
      top: 60%;
      right: 70%;
      border: 40px solid #5d95ea;
    }
    .c7 {
      width: 60vmax;
      min-width: 1000px;
      left: 50%;
      top: 80%;
      background: #6692CA;
    }
    .r1 {
      width: 20px;
      height: 20px;
      top: 90%;
      right: 65%;
      border: 3px solid #7095DD;
      border-radius: 2px;
    }
    .t1 {
      width: 22px;
      bottom: 90%;
      left: 65%;
    }
    .iphone, .ipad, .macbook, .imac {
      z-index: 2050;
      transform: translateY(100vh);
    }
    .iphone {
      position: absolute;
      width: 200px;
      height: 400px;
      border-radius: 20px;
      background: #eee;
      box-shadow: rgba(100, 100, 100, 0.4) 5px 5px;
      left: 50%;
      top: 100%;
      transform: translate(-50%, -90px);
      margin: auto;
      transform-origin: bottom;
    }
    .iphone .head {
      position: absolute;
      width: 36px;
      height: 8px;
      top: 22px;
      left: 0;
      right: 0;
      border-radius: 4px;
      margin: auto;
      background: #ddd;
    }
    .iphone .container {
      position: absolute;
      width: calc(100% - 16px);
      height: calc(100% - 100px);
      background: transparent;
      border: 2px solid #ddd;
      border-radius: 5px;
      left: 0;
      right: 0;
      margin: auto;
      bottom: 52px;
    }
    .iphone .home {
      position: absolute;
      width: 36px;
      height: 36px;
      border: 2px solid #ccc;
      background: #eee;
      border-radius: 50%;
      bottom: 6px;
      left: 0;
      right: 0;
      margin: auto;
    }

    .panels {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 150px;
    }
    .panels .panel {
      position: relative;
      width: 70%;
      height: 100%;
      border-radius: 10px;
      background: #f55;
    }
    .panels .panel:nth-child(4n + 1) {
      background-color:#78CAFF;
    }
    .panels .panel:nth-child(4n + 2) {
      background-color:#FFD99D;
    }
    .panels .panel:nth-child(4n + 3) {
      background-color:#FFB0B9;
    }
    .panels .panel:nth-child(4n) {
      background-color:#B5F6B9;
    }
    .ipad {
      position: absolute;
      width: 150px;
      background: #444;
      border-radius: 5px;
      left: 50%;
      bottom: 50%;
    }
    .ipad .container {
      position: absolute;
      left: 6px;
      top: 6px;
      bottom: 6px;
      right: 6px;
      background: #eee;
      border-radius: 3px;
    }
    .ipad .panels {
      height: 80px;
    }
    .ipad .panels .panel {
      width: 40%;
    }
    .imac {
      position: absolute;
      width: 280px;
      left: 50%;
      bottom: 50%;
    }
    .imac .screen {
      position: relative;
      width: 100%;
      height: 170px;
      margin: auto;
      background: #444;
      border-radius: 5px 5px 0px 0px;
    }
    .imac .screen .container {
      position: absolute;
      left: 8px;
      right: 8px;
      top: 12px;
      bottom: 12px;
      background: #eee;
    }
    .imac .panels {
      height: 60px;
    }
    .imac .panels .panel {
      width: 50px;
    }

    .imac .bottom {
      position: relative;
      width: 100%;
      height: 26px;
      margin: auto;
      background: #eee;
      border-radius: 0px 0px 5px 5px;
    }
    .imac .stand {
      position: relative;
      margin: auto;
      width: 40px;
      border-bottom: 35px solid #eee;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
    }
    .imac .stand-bottom {
      position: relative;
      margin: auto;
      width: 100px;
      height: 6px;
      border-radius: 3px;
      background: #e5e5e5;
    }
    .macbook {
      position: absolute;
      width: 240px;
      left: 50%;
      bottom: 50%;
    }
    .macbook .screen {
      position: relative;
      width: 200px;
      margin: auto;
      background: #444;
      border-radius: 5px;
    }
    .macbook .screen .container {
      position: absolute;
      left: 6px;
      top: 6px;
      bottom: 6px;
      right: 6px;
      background: #eee;
      border-radius: 3px;
    }
    .macbook .panels {
      height: 50px;
    }
    .macbook .panels .panel {
      width: 40px;
    }
    .macbook .bottom {
      position: relative;
      width: 240px;
      height: 10px;
      background: #eee;
      margin: 3px auto 0px;
      border-radius: 5px;
    }

    .background2 {
      background: #9c5dea;
      z-index: -1;
      transform: translateY(100vh);
    }
    .flicking .eg-flick-viewport,
    .flicking .eg-flick-camera,
    .flicking .page {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .flicking .page .container {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .flicking .page.main h1, .flicking .page.main .description {
      text-align: center;
    }
    .flicking .page.main h1 {
      font-size: 60px;
      padding: 0;
      margin-bottom: 15px;
      color: #fff;
    }
    .flicking .page.main .description {
      font-size: 16px;
      max-width: 600px;
      margin: 0px auto;
      padding: 5px;
      box-sizing: border-box;
      color: #fff;
    }

    .flicking .page.features h3,
    .flicking .page.features .description {
      color: #fff;
    }
    .flicking .page.features .feature {
      position: absolute;
      width: 200px;
      top: 50%;
      left: 50%;
    }

    .flicking .page.slogan h2 span[data-text]:before {
      content: attr(data-text);
    }
    .flicking .page.slogan .container {
      min-width: 600px;
      height: 350px;
      text-align: center;
      color: #eee;
    }
    .flicking .page.more a {
      text-decoration: underline;
      color: #eee;
    }
    .flicking .page.more h2 {
      width: 110px;
      padding: 5px 10px 5px 10px;
      border: 3px solid #eee;
      color: #eee;
    }



    .pagination {
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2080;
    }
    .pagination .dot {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.4);
      margin: 10px 10px;
      transition: background-color ease 0.5s;
      cursor: pointer;
    }
    .pagination.black .dot.selected {
      background: #333;
    }
    .pagination.black .dot {
      background: rgba(100, 100, 100, 0.4);
    }
    .pagination .dot.selected {
      background: white;
    }

    .wheel {
      position: absolute;
      bottom: 110px;
      width: 2px;
      height: 10px;
      left: 50%;
      transform: translate(-50%, 0);
      background: #eee;
    }
  }
</style>
