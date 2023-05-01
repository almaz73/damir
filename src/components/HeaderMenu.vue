<script setup>
import axios from "axios";
import {useRouter} from "vue-router";
import {useTriggerMenu} from "@/stores/triggerMenu.js";
import {ref} from "vue";

const router = useRouter()
let activeButton = ref(false)

function triggerMenu() {
  useTriggerMenu().show = !useTriggerMenu().show
  activeButton.value = useTriggerMenu().show

  console.log('activeButton.value',activeButton.value);
}

function exit() {
  axios.post('/ambulance/logout').then(resp => {
    router.push({path: '/login'});
  })
}

</script>
<template>
  <div class="herder-menu">
  <span class="sandwich">
    <img src="../assets/img/headMenu/sandwich.PNG" @click="triggerMenu()"/>
  </span>

  [ 12:22 ]
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

  <img src="../assets/img/headMenu/adm.png"/>
  adminSMO

  <el-button @click="exit()">
    Выход
  </el-button>
  </div>
</template>
