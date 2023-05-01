<script setup>
import NavMenu from "../components/NavMenu.vue";
import HeaderMenu from "../components/HeaderMenu.vue";
import {useCallcardStore} from "@/stores/callCardStores.js";
import {onMounted} from "vue";
import {useTriggerMenu} from "@/stores/triggerMenu.js";

const triggerMenu = useTriggerMenu()

const callcardStore = useCallcardStore()

onMounted(() => {
  callcardStore.getAll().then(res => {
    console.log('Получение данных с сайта, res = ', res.data);
  })
})
</script>

<template>
  <header >
    <HeaderMenu/>
  </header>
  <div class="kt">
    <nav :class="{ 'nav-mobile--active': triggerMenu.show }">
      <NavMenu/>
    </nav>
    <section>
      section
      <hr>
    </section>
  </div>
</template>
