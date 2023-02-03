<template>
  <router-view/>

  <!--  Для стилизации меню -->
 <!-- <TransparentTemplate src="menu.gif" top="0" left="0" use="1" :toolLeft="150"/> -->

  <!--  Для стилизации КТ -->
  <TransparentTemplate src="kt.png" top="0" left="0" use="1" />

  <!--  Для стилизации КТ -->
 <!-- <TransparentTemplate src="head.gif" top="0" left="0" use="1"/> -->

</template>

<script>
import TransparentTemplate from "./components/TransparentTemplate.vue";

export default {
  components: {TransparentTemplate}
}
</script>

<style>
</style>
