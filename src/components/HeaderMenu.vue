<template>
  <div class="headermenu">
    <div class="left">
      <div class="button-sandwich view-mobile" :class="{ 'button-sandwich--active': this.activeButton }"
        @click="triggerMenu">
        <div class="button-sandwich__in"></div>
      </div>
      <span class="server-time">12:52</span>
      <span class="text text-version">Версия 1.42.0 от 24 января 2023 17:33</span>
      <button class="wide">112</button>
      <button class="wide"><span class="no-wrap">Оповещения <span class="wide__num">36</span></span> </button>
      <button class="wide">Подписать</button>
      <button class="wide">⚠</button>
      <button class="wide">⏰</button>
      <button class="wide">#</button>
      <button class="wide">?</button>
    </div>
    <div class="right">
      <div class="right__info">
        <div class="text">⚠</div>
        <div class="text text--danger"> Тестовый сервер</div>
        <div class="text">
          Чувашия системня
        </div>
        <div class="text">
          Полный доступ
        </div>
        <div class="text text--danger">
          Режим ЧС
        </div>
        <div class="text">
          adminSMP
        </div>
      </div>


      <!-- <el-button class="mobile-none"  @click="exit()">Выход</el-button> -->
      <el-button @click="exit()" :type="plain" text class="exit"><img src="src/assets/img/icons/svg/exit.svg"
          alt="Выход"><span class="exit-text">Выход</span> </el-button>
      <!-- <img class="mobile-exit" src="src/assets/img/icons/svg/exit.svg" @click="exit()"  alt="Выход"> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useTriggerMenu } from "../callcard/store/triggerMenu";

export default {
  name: 'HeaderMenu',
  data() {
    return {
      activeButton: false,
    }
  },
  methods: {
    triggerMenu() {
      useTriggerMenu().show = !useTriggerMenu().show
      this.activeButton = useTriggerMenu().show
    },
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
  padding: 0px 5px;
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.text--danger {
  color: #D8332E;
  font-weight: bold;
}

.text-version {
  margin: 0px 5px 0px 15px;
}

button {
  height: 100%;
}

.wide {
  background-color: #D5E0EB;
  border: none;
  border-radius: 5px;
  color: #646262;
  margin: 0px 1px;
  font-size: 18px;
  min-width: 30px;
  height: 100%;
  padding: 0px 5px;

}

.wide__num {
  background: white;
  color: red;
  border-radius: 20px;
  font-size: 15px;
  padding: 2px 6px;
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

.right__info {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.no-wrap {
  white-space: nowrap;
}

.view-mobile {
  display: none;
}

.button-sandwich {
  position: relative;
  width: 66px;
  height: 100%;
  background: #EFEFEF;
  cursor: pointer;
  perspective: 1000px;
  transition: .4s;
  z-index: 5;
}

.button-sandwich__in,
.button-sandwich__in::before,
.button-sandwich__in::after {
  position: absolute;
  width: 18px;
  height: 2px;
  background: #7F9DC6;
  left: calc(50% - 9px);
  top: calc(50% - 1px);
  z-index: 1;
}

.button-sandwich__in::before,
.button-sandwich__in::after {
  content: "";
  transition: .5s;
}

.button-sandwich__in::before {
  transform: translateY(-5px);
}

.button-sandwich__in::after {
  transform: translateY(5px);
}

.button-sandwich--active .button-sandwich__in {
  height: 0px;
}

.button-sandwich--active .button-sandwich__in::before {
  transform: rotate(45deg);
}

.button-sandwich--active .button-sandwich__in::after {
  transform: rotate(-45deg);
}

.exit {
  color: #7180A3;
  font-size: 19px;
}

.exit img {
  margin-right: 5px;
}

.mobile-exit {
  display: none;
}

@media screen and (max-width: 900px) {


  .headermenu .left {
    width: auto;
    padding-left: 0px;
  }

  .headermenu .right {
    width: auto;
  }

  .text,
  .server-time,
  .wide {
    display: none;
  }

  .view-mobile {
    display: block;
  }

  .headermenu {
    justify-content: space-between;
  }

  .exit img {
    margin-right: 0px;
  }

  .exit .exit-text {
    display: none;
  }
  .exit{
    height: 100%;
  }
}
</style>
