<template>
  <router-view/>

  <!--  Для стилизации меню -->
  <!-- <TransparentTemplate src="menu.gif" top="0" left="0" use="1" :toolLeft="150"/> -->

  <!--  Для стилизации КТ -->
  <!-- <TransparentTemplate src="kt.png" top="0" left="0" toolLeft="130" use="1" /> -->

  <!--  Для стилизации КТ -->
  <!-- <TransparentTemplate src="head.gif" top="0" left="0" use="1"/> -->

  <!--  Для стилизации панели авторизации -->
<!--   <TransparentTemplate src="login.JPG" top="0" left="0" use="1"/>-->

  <!-- Треться версия дизайна -->
  <TransparentTemplate src="variant_3.png" top="0" left="0" use="1" originSize="1200px"/>

  <TmpLinks/>

</template>

<script setup>
import TransparentTemplate from "./components/TransparentTemplate.vue";
import {onMounted} from "vue";
import TmpLinks from "./components/TmpLinks.vue";
onMounted(()=>{
  console.log('== === === === 111 cardNumber', window.cardNumber);
  // window.cardNumber - при открытии из основной программы получаем id КТ
  // для работы напрямую, без перехода из основной программы, берем id вызова из адресной строки
  if (!window.cardNumber) window.cardNumber = location.href.split('/').slice(-1)[0]


  // Если пришли из основной программы:
  location.href.includes('ambulance') && this.$router.push('/ambulance/2/#/callcard/' + window.cardNumber)
})

</script>

<style>
</style>
