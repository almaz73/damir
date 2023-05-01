<script setup>
import AddressCtrl from "@/components/AddressCtrl.vue";
</script>

<template>
  <h3>Сведения о больном</h3>
  <div class="row">
    <el-input/>
    <el-input/>
    <el-input/>
  </div>
  <div class="row">
    <el-date-picker/>
    <el-select/>
    <el-radio>Мужчина</el-radio>
    <el-radio>Женщина</el-radio>
  </div>
  <AddressCtrl/>

  <div class="head-add">
    <h3>Адрес регистрации</h3>
    <el-checkbox>Совпадает с адресом регистрации</el-checkbox>
  </div>
  <AddressCtrl/>
</template>

<style scoped>
.addr_reg {
  display: flex;
}
</style>
