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
      <div class="row">
        <h2>Место вызова</h2> <el-checkbox></el-checkbox>
      </div>
      <div class="panel__block">
        <div class="area">
          <el-button closeable round >Чувашия</el-button>
          <el-button closeable round >Чебоксары</el-button><br>
          <el-input></el-input>
        </div>
        <div class="row">
          <label>Тип</label><el-select></el-select>
          <label>Объект</label><el-select></el-select>
        </div>
        <div class="row">
          <label>Регион</label><el-select></el-select>
          <label>Улица</label><el-select></el-select>
        </div>
        <div class="row">
          <label>Мо</label><el-select></el-select>
          <label>Подробно</label>
          <div class="row">
            <el-input placeholder="дом"></el-input>
            <el-input placeholder="корп"></el-input>
          </div>
          <div class="row">
            <el-input placeholder="Подъезд"></el-input>
            <el-input placeholder="Этаж"></el-input>
          </div>
        </div>
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

.area{
  width: 100%;
  border: 1px solid #ddd;
  padding: 8px;
}

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
