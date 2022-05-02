<template>
  <div>
    <header id="custom-header">
      <img class="header-icon" src="~/assets/img/bars-solid.png" alt="">
      <p>{{ $t("handsup") }}</p>
      <div class="i18n">
        <span @click="$i18n.locale = 'en'">en</span> / <span @click="$i18n.locale = 'cn'">cn</span>
      </div>
      <img class="header-icon" src="~/assets/img/sign-out-alt-solid.png" alt="">
    </header>

    <main style="margin-top: 55px; position: relative;">
      <Loading />
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

  .i18n {
    font-size: 12px;
    margin-right: 10px;

    span {
      cursor: pointer;
    }
  }
}

.header-icon {
  width: 32px;
  height: 32px;
}
</style>

