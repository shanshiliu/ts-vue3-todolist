<template>
  <div>
    <!-- <input
      type="checkbox"
      :checked="todoItem?.status === FINISHED"
      @click="setStatus(todoItem.id)"
    /> -->
    <el-checkbox 
      v-model="checkValue"
      @change="checkboxChange"
    />
    <span :class="todoItem?.status === FINISHED ? 'line-through' : ''">
      {{ todoItem?.content }}
    </span>
    <el-button @click="delToDo" 
      text
      type="danger"
    >
      delete
    </el-button>
    <el-button
      v-if="(todoItem?.status != FINISHED)"
      @click="setDoing"
      text
      :type="todoItem?.status == DOING ? 'info' : 'primary' "
    >
    {{todoItem?.status == DOING ? 'doing' : 'will do'}}
    </el-button>
    <!-- <button
      @click="setDoing(todoItem?.id)"
      :class="todoItem?.status == DOING ? 'doing' : 'will-do'"
    >
    </button> -->
  </div>
</template>

<script lang="ts">

import { IToDoItem, TODO_STATUS } from "@/typings";
import { computed, defineComponent, PropType, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "toDoItem",
  props: {
    todoItem: {
      type: Object as PropType<IToDoItem>,
      require: true
      },
  },
  setup(props, { emit }) {
    const statusState = {
      FINISHED: TODO_STATUS.FINISHED,
      DOING: TODO_STATUS.DOING,
      WILLDO: TODO_STATUS.WILLDO,
    };

    const id:number =  props.todoItem?.id as number

    const delToDo = () => {
      emit('delToDo', id)
    }

    const setDoing = () => {
      emit('setDoing', id)
    }

    const setStatus = () => {
      emit('setStatus', id)
    }

    const checkboxChange = (value: Boolean) => {
      setStatus()
    }

    const checkValue = ref(props.todoItem?.status === statusState.FINISHED)

    return {
      delToDo,
      setDoing,
      setStatus,
      ...statusState,
      checkValue,
      checkboxChange
    };
  },
});
</script>

<style>
.line-through {
  text-decoration: line-through;
}
.doing {
  background: #cdcdcd;
}
.will-do {
  background: orange;
  color: #fff;
}
</style>