<template>
  <div class="header">
    <div class="logo-wrap">
      <span class="logo img">
        <img src="@/assets/icon_keep.png" alt="Google Keep">
      </span>
        <span class="logo txt">
        Keep
      </span>
    </div>
    <div class="icon-wrap">
      <a href="#" class="icon home">
        <img src="@/assets/home.svg" alt="">
      </a>
      <a href="#" class="icon refresh">
        <img src="@/assets/refresh.svg" alt="">
      </a>
      <a href="#" class="icon logout">
        <img src="@/assets/logout.svg" alt="">
      </a>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {

    };
  }
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 5px 30px;
  box-sizing: border-box;
  box-shadow: 0 5px 6px -8px #041b2d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo-wrap {
    display: flex;
    align-items: center;
    .logo {
      display: inline-block;
      &.img {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &.txt {
        font-size: 22px;
        color: #041b2d;
      }
    }
  }
  .icon-wrap {
    .icon {
      display: inline-block;
      width: 23px;
      height: auto;
      margin: 0 10px;
      cursor: pointer;
      img {
        width: 100%;
        height: auto;
        vertical-align: middle;
      }
    }
  }
}
</style>
