<template>
  <div class="board-wrap">
    <div
      class="listSets"
      v-for="(user, index) in allLists"
      :key="index"
    >
      <div class="title">{{ user.title }}</div>
      <div class="content">{{ user.content }}</div>
    </div>
  </div>

</template>

<script>
//import { EventBus } from '@/main.js'
export default {
  data() {
    return {
      allLists: []
    }
  }
  // mounted() {
  //   EventBus.$on('addBoard', lists => {
  //     this.allLists.push(lists)
  //   })
  // }
}
</script>

<style lang="scss" scoped>
.board-wrap {
  position: relative;
  top: 100px;
  width: 90%;
  max-width: 600px;
  margin: 50px auto 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
}
</style>
