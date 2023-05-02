<template>
  <div class="wrapper">
    <div class="watch-block">
    <span>
      {{ formatTime }}
    </span>
    </div>
  </div>
</template>

<script>
import {ref, onBeforeUnmount, computed} from 'vue'

export default {
  name: "HeaderWatch",
  setup() {
    const currentMinutes = ref(new Date().getMinutes())

    const updateTimeInterval = setTimeout(function run() {
      const minutes = new Date().getMinutes()
      if (minutes !== currentMinutes.value) {
        currentMinutes.value = minutes
      }
      setTimeout(run, 1000)
    }, 1000)

    const formatTime = computed(() => {
      return `${new Date().getHours().toString().padStart(2, '0')}:${currentMinutes.value.toString().padStart(2, '0')}`
    })

    onBeforeUnmount(() => {
      clearTimeout(updateTimeInterval)
    })
    return {
      formatTime,
    }
  },

}
</script>

<style scoped>
.wrapper {
  min-width: 127px;
  display: flex;
  justify-content: center;
}
.watch-block {
  color: #3B3A3B;
  box-sizing: border-box;
  border: 1px solid #3B3C3B;
  border-radius: 4px;
}

.watch-block span {
  padding: 0 12px;
  font-weight: 700;
  font-size: 28px;
}
</style>