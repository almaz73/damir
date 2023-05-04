<template>
  <h3>Общая информация</h3>
  <div class="row">
    <span class="label"><a>Повод</a></span>
    <el-select style="min-width:230px"/>

    <span class="label"><a>Указать повод вручную</a></span>
    <el-input/>

    <span class="label sps_line"><a>Спецотметки</a></span>
    <el-input class="sps_line"/>

    <el-button class="special-big">Опрос</el-button>
  </div>
  <div class="row sps">
    <span class="label"><a>Спецотметки</a></span>
    <el-input/>
  </div>

</template>

<style scoped>
@media (width < 1200px) {
  .sps_line {
    display: none;
  }

  .sps {
    display: flex;
  }
}

@media (width >= 1200px) {
  .sps_line {
    display: flex;
  }

  .sps {
    display: none;
  }
}
</style>


