<template lang="pug">
  div#welcome
    div.pagination.black
      div.dot.selected
      div.dot
      div.dot
      div.dot
      div.dot
    div.background
      div.shapes
        div.rect.c1
        div.rect.c2
        div.rect.box-black
        div.rect.c4

    flicking.flicking(ref="flicker" :options="flickingOptions" :tag="'div'"
    :plugins="plugins" @need-panels="e => {}" @move-end="e => {}")
      div.eg-flick-viewport
        div.eg-flick-camera
          div.page.main
            div.wheel
            div.container
              h1 Welcome,
                br
                | I'm Kate!
              p.description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sagittis neque. Maecenas tincidunt eros venenatis rutrum imperdiet.
          div.page.features
            div.feature
              h3 Lorem ipsum
              p.description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            div.feature
              h3 Lorem ipsum
              p.description Lorem ipsum dolor sit amet,
            div.feature
              h3 Lorem ipsum
              p.description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            div.feature
              h3 Lorem ipsum
              p.description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            div.feature
              h3 Lorem ipsum
              p.description Lorem ipsum dolor sit amet,
            div.feature
              h3 Lorem ipsum
              p.description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          div.page.slogan
            div.container
              h2 Lorem ipsum dolor sit amet,
                br
                | consectetur adipiscing elit.
          div.page.more
            div.container
              a(href="https://github.com/naver/egjs-flicking" target="_blank")
                h2 SEE MORE
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

    .layer {
      width: 100vw;
      height: 100vh;
      left: -200vw;
    }

    .flicking, .background {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      position: absolute;
      overflow: hidden;
    }
    .flicking {
      .eg-flick-viewport, .eg-flick-camera, .page {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .page .container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .page.main {
        h1 {
          text-align: center;
          font-size: 60px;
          padding: 0;
          margin-bottom: 0;
          color: #fff;
          line-height: 72px;
        }
        .description {
          text-align: center;
          font-size: 16px;
          max-width: 600px;
          margin: 0px auto;
          padding: 5px;
          box-sizing: border-box;
          color: #fff;
        }
      }
      .page.features {
        h3, .description {
          color: #fff;
        }
        .feature {
          position: absolute;
          width: 200px;
          top: 0;
          left: 50%;
        }
      }
      .page.slogan {
        h2 span[data-text]:before {
          content: attr(data-text);
        }
        .container {
          min-width: 600px;
          height: 350px;
          text-align: center;
          color: #eee;
        }
      }
      .page.more {
        a {
          text-decoration: underline;
          color: #eee;
        }
        h2 {
          width: 110px;
          padding: 5px 10px 5px 10px;
          border: 3px solid #eee;
          color: #eee;
        }
      }
    }

    .background {
      .rect, .star, .triangle {
        position: absolute;
      }
      .rect {
        &:before {
          content: "";
          position: relative;
          display: block;
          width: 100%;
          padding-top: 100%;
        }
      }
    }

    .background2 {
      background: #fff;
      z-index: -1;
      transform: translateY(100vh);
    }

    .rect {
      &.box-black {
        width: 100%;
        min-width: 600px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #000;
        z-index: -1;
      }
    }

    .rect {
      &.c1 {
        width: 60vmax;
        min-width: 1000px;
        bottom: 50%;
        right: 45%;
        background: #E46865;
      }
      &.c2 {
        width: 50%;
        min-width: 800px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 30px solid #f0f0f0;
        z-index: -1;
      }
      &.c4 {
        width: 60vmax;
        min-width: 1000px;
        top: 50%;
        left: 45%;
        background: #30B78E;
      }
    }

    .pagination {
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2080;
      .dot {
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        margin: 10px 10px;
        transition: background-color ease 0.5s;
        cursor: pointer;
        &.selected {
          background: white;
        }
      }
      &.black .dot.selected {
        background: #333;
      }
      &.black .dot {
        background: rgba(100, 100, 100, 0.4);
      }
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
