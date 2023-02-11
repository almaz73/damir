<template>
  <div class="panel">
    <div class="panel__section panel__left right-line">
      <h2>Общая информация</h2>
      <div class="panel__block">
        <div class="row">
          <el-label>Повод</el-label>
          <el-select v-model="value" placeholder="Повод">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <el-input  v-model="inp1" placeholder="Указать вручную"></el-input>
          <el-button round>Опрос</el-button>
        </div>
        <div class="row">
          <el-label>Спецотметки</el-label>
          <el-input  v-model="inp1" placeholder="Lj,fdmnt cgtwjnvtnre"></el-input>
        </div>

      </div>
      <h2>Место вызова</h2>
      <div class="panel__block">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, natus consectetur! Nisi officia, modi tempora
        non maxime ab minus quaerat expedita repellat alias atque incidunt architecto tempore sequi consequuntur sint.
      </div>
      <h2>Сведения о больном</h2>
    </div>
    <div class="panel__section panel__right">
      <h2>Информация об обслуживании </h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoPanel',
  data(){
    return{
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        }],
      value: '',
      inp1:''
    }
  }
}
</script>
<style scoped>
h2 {
  padding-bottom: 10px;
}

.panel {

  background: white;
  display: flex;

}

.panel__section {
  padding: 26px 10px 10px 28px;
}

.panel__left {
  width: 58%;
}

.panel__right {
  width: 42%;
}

.right-line {
  border-right: 1px solid #D8D9D9;
  height: 100%;
}

.panel__block {
  margin-bottom: 10px;
}
</style>
