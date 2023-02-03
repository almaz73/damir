<template>
  <div class="headermenu">
    <div class="left">
      <span class="server-time">12:52</span>
      <span class="text text-version">Версия 1.42.0 от 24 января 2023 17:33</span>
      <button class="wide">112</button>
      <button class="wide">Оповещения <span class="wide__num">36</span></button>
      <button class="wide">Подписать</button>
      <button class="wide">⚠</button>
      <button class="wide">⏰</button>
      <button class="wide">#</button>
      <button class="wide">?</button>
    </div>
    <div class="right">
      <div class="right__info">
        <span>⚠</span>
        <span class="text text--danger"> Тестовый сервер</span>
        <span class="text">
          Чувашия системня
        </span>
        <span class="text">
          Полный доступ
        </span>
        <span class="text text--danger">
          Режим ЧС
        </span>
        <span class="text">
          adminSMP
        </span>
      </div>


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
      axios.post('/ambulance/logout').then(resp => {
        this.$router.push({ path: '/login' });
      })
    },
  },
}
</script>
<style scoped>
.headermenu {
  display: flex;
  background: #EFEFEF;
  height: 33px;
}

.headermenu .left {
  width: 50%;
  display: flex;
  align-items: center;
  padding-left: 15px;
}

.headermenu .right {
  display: flex;
  width: 50%;
  justify-content: right;
  align-items: center;
}

.text {
  font-size: 18px;
}
.text--danger{
  color: #D8332E;
  font-weight: bold;
}
.text-version {
  margin: 0px 5px 0px 15px;
}

button {
  height: 23px
}

.wide {
  background-color: #D5E0EB;
  border: none;
  border-radius: 5px;
  color: #646262;
  margin: 0px 1px;
  font-size: 18px;
  min-width: 35px;
  height: 100%;
}

.wide__num {
  background: white;
  color: red;
  border-radius: 20px;
  font-size: 15px;
  padding: 2px 6px;
}

@media (max-device-width: 900px) {
  .wide {
    display: none;
  }
  .headermenu .left{
    width: auto;
  }
  .headermenu .right{
    width: auto;
  }
}

.server-time {
  display: inline-flex;
  border: 1px solid black;
  padding: 0px 12px;
  margin: 1px 10px;
  border-radius: 3px;
  font-weight: bold;
  font-size: 35px;
  line-height: 0.9;
}
.right__info{
  display: flex;
  justify-content: space-around;
  width: 100%;
}

</style>
