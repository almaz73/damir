<script setup>
import StatusButtons from "./StatusButtons.vue";
</script>

<template>
  <div class="caption-kt">
    <div class="row">
      <h1>Редактирование для НП (№14905 от 31.03.2021)</h1>
      &nbsp;&nbsp;
      <el-button class="special-little">
        Изменить признак вызова
      </el-button>
      <el-select>
        Действия
      </el-select>
    </div>
    <StatusButtons/>
  </div>


</template>

<style>
.caption-kt {
  padding: 0 25px;
}

.caption-kt h1 {
  display: inline-block;

  margin-top: 16px;
  margin-bottom: 13px;
  font-size: 25px;
}


</style>
