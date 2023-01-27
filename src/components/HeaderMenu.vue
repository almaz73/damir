<template>
  <div class="headermenu">
    <div class="left">
      <span class="server-time">12:52</span>
      Версия 1.42.0 от 24 января 2023
      <button class="wide">112</button>
      <button class="wide">Оповещения</button>
      <button class="wide">Подписать</button>
      <button class="wide">⚠</button>
      <button class="wide">⏰</button>
      <button class="wide">#</button>
      <button>?</button>
    </div>
    <div class="right">
      Тестовый сервер |  Чувашия системня | Полный доступ | Режим ЧС | adminSMP
      <el-button @click="exit()">Выход</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'HeaderMenu',
  methods: {
    exit() {
      console.log('выход',);
      axios.post('/ambulance/logout') .then( resp => {
        this.$router.push({path: '/login'});
      })
    },
  },
}
</script>
<style scoped>
.headermenu {
  display: flex;
  background: #e9e6f3;
  height: 33px;
  box-shadow: 0 0 3px #999;
}
.headermenu .left{
  width: 50%;
  display: flex;
  align-items: center;
}
.headermenu .right{
  display: flex;
  width: 50%;
  justify-content: right;
  align-items: center;
}
button{
  height: 23px
}
@media (max-device-width: 900px) {
  .wide{
    display: none;
  }
}

.server-time {
  display: inline-flex;
  border: 1px solid black;
  padding: 0px 10px;
  margin: 1px 10px;
  border-radius: 3px;
  font-weight: bold;
  font-size: 26px;
  line-height: 0.9;
}
</style>
