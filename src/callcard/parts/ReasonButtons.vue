<template>
  <div class="buttons">
    <el-button v-for="button in buttons" :class="[button.color]" >{{ button.text }}</el-button>
  </div>

</template>
<script>

export default {
  name: 'ReasonButtons',
  data(){
    return {
      buttons:[
        {
          text:'КВ заполнена',
          color:'grey',
        },
        {
          text:'КВ не проверена',
          color:'grey',
        },
        {
          text:'Идентифицирован',
          color:'green-bold',
        },
        {
          text:'Принят из Служба 112 № [ноя25_оказание_532] (принят (112))',
          color:'red',
        },
        {
          text:'Передан в Полиция (02)',
          color:'red',
        },
        {
          text:'Связан с №424 (ЗАДВ)',
          color:'yellow',
        },
        {
          text:'ЕДДС (Новокузнецкий ГО ЕДДС)',
          color:'green-light',
        },
        {
          text:'Передан в Полиция (02)',
          color:'red',
        },
        {
          text:'Связан с №424 (ЗАДВ)',
          color:'yellow',
        },
        {
          text:'ЕДДС (Новокузнецкий ГО ЕДДС)',
          color:'green-light',
        },



      ]
    }
  }
}
</script>
<style scoped>
.buttons {
  display: flex;
  padding: 0px 100px 17px 7px;
  background: #EFEFEF;
  flex-wrap: wrap;
}

.buttons button {
  box-shadow: none;
  --el-font-size-base: 14px;
  --el-border-radius-base: 6px;
  margin: 0px 0px 8px 8px;
  padding:0px 15px;
  height: 30px;

}

.grey {
  background: #D8D9D9;
}

.green-bold {
  background: #599D52;
  color: white;
}

.yellow {
  background: #FBE5A2;
}

.red {
  background: #F5D7D7;
  color: #971111;
}

.green-light {
  background: #B3D7AF;
}

@media screen and (max-width: 900px) {
  .buttons {
    padding: 0px 15px 15px 7px;
  }
}
</style>
