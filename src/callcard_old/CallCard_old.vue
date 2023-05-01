<template>
  <Shell>
    <article>
      <div class="header">
        <h1>Редактирование для НП (№14905 от 31.03.2021)</h1>
        <el-button round>Изменить признак вызова</el-button>
        <el-select v-model="value" class="round-select" placeholder="Действия">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
        </el-select>
      </div>

      <ReasonButtons/>

      <el-tabs type="border-card" v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Инфо" name="info">
          <InfoPanel/>
        </el-tab-pane>
        <el-tab-pane label="Осмотр" name="look">
          <LookPanel/>
        </el-tab-pane>
        <el-tab-pane label="ФОМС" name="foms">ФОМС</el-tab-pane>
        <el-tab-pane label="Ребенок" name="child">Ребенок</el-tab-pane>
      </el-tabs>

    </article>
  </Shell>


  <div>
  </div>


</template>
<script setup>
import Shell from "@/components/old/Shell.vue";
import {useCallcardStore} from "@/stores/callCardStores.js";
import ReasonButtons from "./parts/ReasonButtons.vue";
import {onMounted, ref} from 'vue'
import InfoPanel from "./parts/InfoPanel.vue";
import LookPanel from "./parts/LookPanel.vue";

const callcardStore = useCallcardStore()
const activeName = ref('info')
const options = ref([{value: 'Option1', label: 'Option1',}, {value: 'Option2', label: 'Option2',}])
let value = ref('')

function handleClick(tab, event) {
  console.log('tab, event', tab, event)
}

onMounted(() => {
  callcardStore.getAll().then(res => {
    console.log('Получение данных с сайта, res = ', res.data);
  })
})
</script>

<style scoped>

h1 {
  font-size: 30px;
  margin: 0px 5px 0px 0px;

}

article {
  width: 100%;
}

.header {
  display: flex;
  padding: 13px;
  background: #EFEFEF;
  flex-wrap: wrap;
}

@media screen and (max-width: 900px) {
  .custom-style {
    margin: 5px auto;
  }
}
</style>
