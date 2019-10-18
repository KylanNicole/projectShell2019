<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="checkOff"/>
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <b-button v-on:click="deleteToDo"/>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  props: {
    todo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
     deleteToDo: function(todo) {
       this.$store.dispatch("deleteToDo", todo);
     },
     checkOff: function(todo) {
        this.$store.dispatch("checkOff", todo);
     }
  }
};
</script>
