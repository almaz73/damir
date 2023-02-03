<template>
  <header>
    <HeaderMenu/>
  </header>
  <div class="header-height"></div>
  <main>
    <nav>
      <LeftMenu/>
    </nav>
    <slot/>
  </main>
</template>
<script>
import HeaderMenu from "./HeaderMenu.vue";
import LeftMenu from "./LeftMenu.vue";

export default {
  /***
   *Этот модуль как оболочка для страниц будет содержать общиее мнею , верхнее фиксированное и левое основное,
   * а посередени в слоте будет отображать страницу'
   */
  name: 'Shell',
  components: {LeftMenu, HeaderMenu}
}
</script>
<style scoped>

header {
  position: fixed;
  width: 100%;
  background: #e9e6f3;;
  box-shadow: 0 0 5px black;
  height: 27px;
}

.header-height {
  height: 33px;
}


main {
  display: flex;
}

nav {
  min-width: 150px;
  background: #EFEFEF;
}

article {
  background-color: #546e7a;
  padding: 1em;
}


@media screen and (min-width: 600px) {
  body {
    min-height: 100vh;
  }

  main {
    flex-direction: row;
    min-height: 100%;
    flex: 1 1 auto;
  }
}
</style>
