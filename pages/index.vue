<template>
  <div class="container">
    <div class="box">
      <h1>{{ $t('todo-list') }}</h1>

      <div>
        <div v-if="!todoList.length" class="no-data">
          <p>no data</p>
        </div>
        <ListItem v-for="item in todoList" v-bind="item" />
      </div>

      <div class="input-content">
        <input type="text" placeholder="請輸入要做的事" v-model="inputValue" @keyup.enter="onSumit">
        <div id="submit-button" @click="onSumit">
          <img src="~/assets/img/plus-solid.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '../store/index'

const store = useStore()
const { todoList } = storeToRefs(store)
const inputValue = ref('')

async function onSumit() {
  if (!inputValue.value) return

  const todoName = inputValue.value
  inputValue.value = ''

  await store.addTodo(todoName)
}
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 800px;
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid #c7c7c6;
  background-color: white;
  padding: 10px 17px;
}

.no-data {
  margin: 20px 10px;
  color: #ccc;
}

.input-content {
  display: flex;

  input {
    flex: 1;
    padding: 7px 11px;
    border-radius: 4px;
    border: 1px solid #c7c3c6;
    margin-right: 25px;
  }

  input:focus {
    outline: none !important;
    border: 1px solid #aaa;
  }

  #submit-button {
    background-color: #8DC8FF;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
  }
}


::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #c1c1c1;
  opacity: 1;
  font-size: 14px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #c1c1c1;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #c1c1c1;
}
</style>