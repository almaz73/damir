<template>
  <div class="watch-block">
    <span>
      {{ formatTime }}
    </span>
  </div>
</template>

<script setup>
import {ref, onBeforeUnmount} from 'vue'

const formatTime = ref('')
let updateTimeInterval;

function run() {
  const minutes = new Date().toLocaleString().slice(9, -6)

  if (formatTime.value !== minutes) formatTime.value = minutes

  clearTimeout(updateTimeInterval)
  updateTimeInterval = setTimeout(run, 1000)
}

run()

onBeforeUnmount(() => {
  clearTimeout(updateTimeInterval)
})
</script>

<style scoped>

.watch-block {
  color: #3B3A3B;
  border: 1px solid #3B3A3B;
  border-radius: 5px;
  margin: 3px 17px;
}

.watch-block span {
  padding: 0 9px;
  font-weight: 700;
  font-size: 36px;
  line-height: 30px;
}
</style>
