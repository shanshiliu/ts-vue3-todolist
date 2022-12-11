<template>
  <div>
    this is a to-do-list
    <el-scrollbar max-height="calc(100vh - 80px)">
      <to-do-item
        v-for="item in list"
        :key="item.id"
        :todoItem="item"
        @delToDo="delToDo"
        @setDoing="setDoing"
        @setStatus="setStatus"
      />
    </el-scrollbar>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, PropType } from "@vue/runtime-core";
import toDoItem from "./item.vue";
import { IUseToDo, useToDo } from "@/hooks";
import { IToDoItem } from "@/typings";

export default defineComponent({
  name: "toDoList",
  props: {
    list: Array as PropType<IToDoItem[]>,
  },
  components: {
    toDoItem,
  },
  setup() {
    const { setToDoList, setDoing, setStatus, delToDo }: IUseToDo = useToDo();

    return {
      setDoing,
      delToDo,
      setStatus,
    };
  },
});
</script>
  
<style>
</style>