<template>
  <div>
    <header id="custom-header">
      <img class="header-icon" src="~/assets/img/bars-solid.png" alt="">
      <p>HandsUP</p>
      <img class="header-icon" src="~/assets/img/sign-out-alt-solid.png" alt="">
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
#custom-header {
  position: fixed;
  top: 0;
  height: 55px;
  background-color: #8DC8FF;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px;

  p {
    flex: 1;
    font-size: 36px;
    padding-left: 25px;
  }
}

.header-icon {
  width: 32px;
  height: 32px;
}
</style>

