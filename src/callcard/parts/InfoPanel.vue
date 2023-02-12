<template>
  <div class="panel">
    <div class="panel__section panel__left right-line">
      <h2>Общая информация</h2>
      <div class="panel__block">
        <div class="row row--margin">
          <label style="width: 200px;">Повод</label>
          <div class="panel__activity">
            <el-select class="panel__el" style="width: 540px;" v-model="value" placeholder="Повод">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-input class="panel__el" v-model="inp1" placeholder="Указать вручную"></el-input>
            <el-button class="panel__el" round>Опрос</el-button>
          </div>
        </div>
        <div class="row row--margin">
          <label style="width: 200px;">Спецотметки</label>
          <div class="panel__activity">
            <el-input class="panel__el" v-model="inp1" placeholder="Добавьте спецотметку"></el-input>
          </div>
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
  data() {
    return {
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
      inp1: ''
    }
  }
}
</script>
<style scoped>
.panel {

  background: white;
  display: flex;

}

.panel__section {
  padding: 26px 28px 10px 28px;
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

.panel__block label {
  font-size: 18px;
}

.panel__activity {
  display: flex;
  width: 100%;
  
}

.row--margin {
  margin: 5px 0px 11px 0px;
}

.panel__activity .el-button,
.panel__activity .el-select,
.panel__activity .el-input {
  margin-right: 8px;
}

.panel__activity .panel__el:last-child {
  margin-right: 0px;
}

.panel__activity .el-select {
  --el-font-size-base: 16px;
}

.panel__activity .el-input {
  --el-font-size-base: 19px;
}

@media screen and (max-width: 900px) {
  .panel__block label {
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-width: 52px;
  }
  .panel__activity {
    display: flex;
    width: 90%;
  } 
  .panel__section{
    padding: 16px 10px 10px 10px;
  } 
}
</style>
