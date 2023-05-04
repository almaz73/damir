<script setup>
import axios from "axios";
import {useRouter} from "vue-router";
import {useTriggerMenu} from "@/stores/triggerMenu.js";
import {ref} from "vue";
import HeaderWatch from "@/components/HeaderWatch.vue";

const router = useRouter()
let activeButton = ref(false)

function triggerMenu() {
  useTriggerMenu().show = !useTriggerMenu().show
  activeButton.value = useTriggerMenu().show
}

function exit() {
  router.push({path: '/login'});
  axios.post('/ambulance/logout')
}

</script>
<template>
  <div class="herder-menu">
    <span class="sandwich">
      <img src="../assets/img/headMenu/sandwich.png" @click="triggerMenu()"/>
    </span>
    <header-watch/>
    <el-button>
      версия
    </el-button>
    <el-button>
      <img src="../assets/img/headMenu/testLink.png"/>
      Тест связи
    </el-button>
    <el-button>
      <img src="../assets/img/headMenu/documentation.png"/>
      Документация
    </el-button>
    <el-button>
      <img src="../assets/img/headMenu/112.png"/>
      112
    </el-button>
    <el-button>
      <img src="../assets/img/headMenu/support.png"/>
      Техподдержка
    </el-button>
    <el-button>
      <img src="../assets/img/headMenu/sign.png"/>
      Подписать
    </el-button>
    <el-button>
      <img src="../assets/img/headMenu/message.png"/>
      Оповещение
    </el-button>

    <span style="flex-grow: 1"/>

    <el-button>
      <img src="../assets/img/headMenu/adm.png"/>
      adminSMP
    </el-button>

    <el-button @click="exit()">
      Выход
    </el-button>
  </div>
</template>
<style>
/* Верхнее меню */

.herder-menu {
  white-space: nowrap;
  display: flex;
  padding: 1px;
  /*justify-content: space-between;*/
}

.herder-menu .el-button {
  margin-right: 2px;
  background: #D5E0EB;
  padding: 11px;
}

.herder-menu .el-button img {
  margin-right: 3px;
}

.herder-menu .sandwich {
  display: none;
  cursor: pointer;
}

@media (width < 900px) {
  .herder-menu .sandwich {
    display: inline-block;
  }
}

/* Содержимое КТ */
.kt .head-add {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
