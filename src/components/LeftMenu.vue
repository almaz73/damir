<template>
  <div class="col">
    <button class="button">
      <img src="../assets/img/icons/ambulancemonitor.png"><br>
      <router-link class="button__text" to="/help">Help</router-link>
    </button>
    <button class="button button--active">
      <img src="../assets/img/icons/ambulancemonitor.png"><br>
      <router-link class="button__text " to="/callcard">Мониторинг</router-link>
    </button>
    <button class="button">
      <img src="../assets/img/icons/newKT.png"><br>
      <router-link class="button__text" to="/#">Новый КТ</router-link>
    </button>
    <button class="button">
      <img src="../assets/img/icons/oo.png"><br>
      <router-link class="button__text" to="/#">Опер. обст</router-link>
    </button>
    <button class="button">
      <img src="../assets/img/icons/hospital.png"><br>
      <router-link class="button__text" to="/#">Госпитализация</router-link>
    </button>
    <button class="button">
      <img src="../assets/img/icons/naryad.png"><br>
      <router-link class="button__text" to="/#">Поликлиника</router-link>
    </button>
    <button class="button">
      <img src="../assets/img/icons/naryad.png"><br>
      <router-link class="button__text" to="/#">Журнал</router-link>
    </button>
  </div>
  <div class="little-menu" v-if="triggerMenu.show">
    ...9999999999999999

  </div>

</template>
<script>
import {useTriggerMenu} from "@/callcard/store/triggerMenu";

export default {
  name: 'LeftMenu',
  data() {
    return {
      triggerMenu: useTriggerMenu()
    }
  }
}
</script>
<style scoped>
.col {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}

.button {
  border: none;
  padding: 10px 0;
  margin-bottom: 3px;
  background: #e9e6f3;
  box-shadow: 1px 1px 2px #999;
  background: #F5F5F5;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: background .3s;
  cursor: pointer;
}

.button:hover {
  background: #fff;
}

.button__text {
  color: black;
  text-decoration: none;
  font-size: 16px;
}

.button--active {
  background: #fff;
}

.little-menu {
  position: absolute;
  top: 30px
}

</style>
