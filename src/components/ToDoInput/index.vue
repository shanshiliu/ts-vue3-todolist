<template>
  <div>
    <input 
      type="text"
      v-model="toDoValue"
      @keyup="setToDoValue">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IUseToDo, useToDo } from '@/hooks/index'
export default defineComponent({
  setup () {
    const toDoValue = ref<string>('');
    const { setToDo } : IUseToDo = useToDo() 
    const setToDoValue = (e: KeyboardEvent): void => {
       if (e.key == 'Enter' && toDoValue.value.trim().length) {
          // 增删减查 定义hooks
          setToDo(toDoValue.value)
          toDoValue.value = ''
       }
    }

    return {
      toDoValue,
      setToDoValue
    }
  }
})
</script>

<style scoped>

</style>