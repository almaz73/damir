<template>
  <div class="buttons">
    <el-button class="grey">КВ заполнена</el-button>
    <el-button class="grey">КВ не проверена</el-button>
    <el-button class="green-bold">Идентифицирован</el-button>
    <el-button class="red">Принят из Служба 112 № [ноя25_оказание_532] (принят (112))</el-button>
    <el-button class="red">Передан в Полиция (02)</el-button>
    <el-button class="yellow">Связан с №424 (ЗАДВ)</el-button>
    <el-button class="green-light">ЕДДС (Новокузнецкий ГО ЕДДС)</el-button>
    <el-button class="red">Передан в Полиция (02)</el-button>
    <el-button class="yellow">Связан с №424 (ЗАДВ)</el-button>
    <el-button class="green-light">ЕДДС (Новокузнецкий ГО ЕДДС)</el-button>
  </div>

</template>
<script>
export default {
  name: 'ReasonButtons'
}
</script>
<style scoped>
.buttons {
  display: flex;
  padding: 0px 15px 15px 7px;
  background: #EFEFEF;
  width: 100%;
  flex-wrap: wrap;
}

.buttons button {
  box-shadow: none;
  --el-font-size-base: 14px;
  --el-border-radius-base: 6px;
  margin:0px 0px 8px 8px;
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
</style>
