<template>
  <div class="list-item">
    <img v-if="checked" class="list-item__icon" src="~/assets/img/check-square-regular.png" @click="toggleTodo(id)">
    <img v-else class="list-item__icon" src="~/assets/img/square-regular.png" @click="toggleTodo(id)">

    <p>{{ name }}</p>
    <img class="list-item__delete" src="~/assets/img/trash-alt-solid.png" width="24" height="24"
      @click="removeTodo(id)">
  </div>
</template>

<script setup>
import { useStore } from '../store/index'

const props = defineProps({
  id: String,
  name: String,
  checked: Boolean
})

const { removeTodo, toggleTodo } = useStore()
</script>

<style lang="scss">
.list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px 35px 40px 20px;

  &__icon {
    width: 22px;
    height: 22px;
  }

  p {
    flex: 1;
    font-size: 18px;
    margin-left: 32px;
  }

  &__delete {
    cursor: pointer;
  }
}
</style>