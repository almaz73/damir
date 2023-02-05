<template>
  <Shell>
    <article>
      <div class="header">
        <h1>Редактирование для НП (№14905 от 31.03.2021)</h1>
        <el-button class="custom-style" round>Изменить признак вызова</el-button>
        <el-select v-model="value" class="m-2 custom-style" placeholder="Действия" round>
          <el-option

              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
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
<script>
import Shell from "@/components/Shell.vue";
import {useCallcardStore} from "./store/callCardStores.js";
import ReasonButtons from "./parts/ReasonButtons.vue";
import {ref} from 'vue'
import InfoPanel from "./parts/InfoPanel.vue";
import LookPanel from "./parts/LookPanel.vue";

export default {
  name: 'CallCard',
  components: {LookPanel, InfoPanel, ReasonButtons, Shell},
  data() {
    return {
      callcardStore: useCallcardStore(),
      activeName: ref('info'),
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        }],
      value: ''
    }
  },
  methods: {
    handleClick: (tab, event) => {
      console.log('tab, event', tab, event)
    }
  },
  mounted() {
    this.callcardStore.getAll().then(res => {
      console.log('res', res.data);
    })
  }
}
</script>

<style scoped>

.custom-style {
  --el-font-size-base: 19px;
  margin: 0px 5px;
}

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
  width: 100%;
}

</style>
