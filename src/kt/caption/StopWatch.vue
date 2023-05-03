<template>
  <div class="stop-watch">
    <span>
      {{ resultStr }}
    </span>
  </div>
</template>

<script setup>
import {ref, onBeforeUnmount} from 'vue'
const resultStr = ref('')
let hour = 0
let min = 0
let sec = 0
let timeout

function updateTimer(){
  sec++
  if(sec >= 60){
    min++
    sec = 0
  }
  if(min >= 60){
    hour++
    min = 0
  }
  resultStr.value = `${hour > 0 ? format(hour, ':') : ''}${format(min, ':')}${format(sec)}`

  clearTimeout(timeout)
  timeout = setTimeout(updateTimer, 1000)
}
updateTimer()

function format(num, str=''){
  return num.toString().padStart(2, '0') + str
}
onBeforeUnmount(() => {
  clearTimeout(timeout)
})
</script>

<style scoped>
.stop-watch {
  color:red;
  font-weight: 700;
  font-size: 24px;
  margin-left: 10px;
}
</style>