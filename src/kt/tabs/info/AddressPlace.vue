<template>
  <div class="addr">
    <div class="head-add">

      <h3>Место вызова</h3>
      <el-checkbox>Только местные объекты</el-checkbox>
    </div>

    <div class="area">
      <br><br><br>
    </div>



    <AddressCtrl/>

  </div>


</template>
<style scoped>

.area {
  width: 100%;
  border: 1px solid #ddd;
}
</style>
<script setup>
import AddressCtrl from "../../../components/AddressCtrl.vue";
</script>
