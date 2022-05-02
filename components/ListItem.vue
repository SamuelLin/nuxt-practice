<template>
  <div class="list-item">
    <img v-if="active" src="~/assets/img/check-square-regular.png" width="22" height="22">
    <img v-else src="~/assets/img/square-regular.png" width="22" height="22">

    <p>我要成為海賊王</p>
    <img class="list-item__delete" src="~/assets/img/trash-alt-solid.png" width="24" height="24">
  </div>
</template>

<script setup>
const props = defineProps({
  active: Boolean
})

const count = ref(0);
const add = () => count.value++;
</script>

<style lang="scss">
.list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px 35px 40px 20px;

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