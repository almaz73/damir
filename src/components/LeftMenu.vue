<template>
  <div class="col">
    <button>
      <router-link to="/help">Help</router-link>
    </button>
    <button>Мониторинг</button>
    <button>
      <img src="../assets/img/icons/newKT.png"><br>
      <router-link to="/callcard">Новый КТ</router-link>
    </button>
    <button>Опер. обст</button>
    <button>Госпитализация</button>
    <button>Поликлиника</button>
    <button>Журнал</button>
  </div>

</template>
<script>
export default {
  name: 'LeftMenu'
}
</script>
<style scoped>
.col {
  display: flex;
  flex-direction: column;
}

button {
  border: none;
  padding: 5px 0;
  margin: 3px;
  background: #e9e6f3;;
  box-shadow: 1px 1px 1px #999;
}
</style>
