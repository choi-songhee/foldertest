<template>
  <div>
    <Header />
    <addList />
    <Board />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import addList from '@/components/addList.vue'
import Board from '@/components/Board.vue'

export default {
  name: 'home',
  components: {
    Header,
    addList,
    Board
  }
}
</script>

<style lang="scss">

</style>
