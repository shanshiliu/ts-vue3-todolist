<template>
  <div>
    <to-do-input />
    <to-do-list :list="todoList" />
    <index-vue />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { Store, useStore } from "vuex";
import ToDoInput from "./components/ToDoInput/index.vue";
import ToDoList from "./components/ToDoList/index.vue";
import { IUseToDo, useToDo } from "./hooks";
import indexVue from "./pages/index.vue";

export default defineComponent({
  name: "App",
  components: {
    ToDoInput,
    ToDoList,
    indexVue
  },
  setup() {
    onMounted(() => {
      const { setToDoList } : IUseToDo = useToDo()
      setToDoList()
    });
    const store: Store<any> = useStore()
    return {
      todoList: computed(() => store.state.list)
    }
  },
});
</script>

<style>
#app {
  text-align: center;
}
</style>
