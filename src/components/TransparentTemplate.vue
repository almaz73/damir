<template>
    <div :style="{'display':use==1?'block':'none'}">
      <div class="tools" :style="{left:toolLeft+'px'}">
        <el-slider class="slider" @mouseout="save()" v-model="value" vertical height="200px"/>
      </div>
      <div class="opac">
        <div class="template" :style="{opacity:value/100, top:top+'px', left:left+'px'}">
          <img :src="image" style="width: 100%">
        </div>
      </div>
    </div>
  </template>
  <script>
  // Используем полупрозрачный слой чтобы сравнивать программу с дизайном
  export default {
    name: 'TransparentTemplate',
    props: {
      top: {
        type: String,
        default: '0'
      },
      left: {
        type: String,
        default: '0'
      },
      src: {
        type: String
      },
      use: {
        type: String,
        default: '1'
      },
      toolLeft:{
        type: Number
      }
    },
    data() {
      return {
        value: +localStorage.getItem('OPACITE') || 0.2
      }
    },
    computed: {
      image() {
        return '../src/assets/tmpImg/'+this.src
      }
    },
    methods: {
      save() {
        localStorage.setItem('OPACITE', this.value)
      }
    },
    mounted() {
    }

  }
  </script>


  <style scoped>
  .opac {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    pointer-events: none;
    z-index: 1000;
  }

  .template {
    /*/// жестко устанавливаем ширину*/
    width: 1900px;
    position: absolute;
  }

  .tools {
    z-index: 1000000;
    pointer-events: none;
    display: flex;
    width: 100%;
    height: 50vh;
    justify-content: flex-start;
    position: fixed;
    top: 0;
  }

  .tools .slider {
    opacity: 0.5;
    pointer-events: visible;
  }

  .tools .slider:hover {
    opacity: 1;
  }
  </style>
