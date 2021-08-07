<template>
  <div class="form-wrap">
    <form class="add-form" @submit.prevent.stop="">
      <input
        v-if="titleArea"
        type="text"
        @focus="showTitle"
        v-model="title"
        name="title"
        placeholder="Title"
      >
      <textarea
        v-show="hiddenContent"
        v-model="content"
        @focus="showTitle"
        name="content"
        placeholder="Take a content.."
      />
      <ul
        v-if="titleArea"
        ref="inputList"
        class="list-wrap"
      >
        <li
          v-for="(item, index) in taskList"
          :key="index"
          ref="listItem"
          class="list-item"
        >
          <input
            type="text"
            @focus="showTitle"
            v-model="taskList[index]"
            name="`taskList-${index}`"
            placeholder="Make a list"
            @keypress.enter.prevent="addItem(index)"
          >
        </li>
      </ul>
      <button class="btn-add">
        <span>&#43;</span>
      </button>
    </form>
  </div>

</template>

<script>
//import { EventBus } from '@/main.js'
export default {
  data() {
    return {
      title: '',
      content: '',
      list: '',
      taskList: [''],
      titleArea: false,
      contentArea: true
    };
  },
  methods: {
    showTitle() {
      this.titleArea = true;
      this.$nextTick(() => {
        //this.$refs.inputList.focus();
      })
    },
    hiddenContent() {
      this.contentArea = false;
    },
    addItem(index) {
      this.taskList.splice(index, 0, '')
      // if(this.$refs.inputList.value !== '') {
      //   this.taskList.splice(0, 0, []);
      // }
      let list = document.querySelectorAll('.list-item');
      let list2 = this.$refs.listItem;
      console.log(list);
      console.log(list2);
      list.classList.add('checkIcon');

      this.$nextTick(() => {
        //this.$refs.inputList.querySelectorAll('input')[index + 1].focus()
        this.$refs.listItem.classList.add('checkIcon');
      })
      this.$store.state.taskList.push(index);
    },
    // addBoard() {
    //   let setObj = {
    //     title: this.title,
    //     content: this.content,
    //     taskList: this.taskList
    //   }
    //   EventBus.$emit('addBoard', setObj)
    // }
  }
}
</script>

<style lang="scss" scoped>
.add-form {
  position: relative;
  top: 100px;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);

  textarea {
    margin-top: 15px;
  }
  .list-wrap {
    li {
      position: relative;
      margin-bottom: 15px;
      padding: 5px 0 5px 25px;
      &::before {
        content: "+";
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -12px;
        color: #041b2d;
        font-size: 24px;
        line-height: 1;
      }
      &.checkIcon {
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 10px;
          height: 10px;
          margin-top: -7px;
          border: 2px solid #041b2d;
        }
      }
      input {
        &::placeholder {
          color: #ddd;
        }
      }
    }
  }
  .btn-add {
    position: absolute;
    right: 16px;
    bottom: -18px;
    background-color: #041b2d;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
    font-size: 24px;
    line-height: 1;
    text-align: center;
    cursor: pointer;
  }
}
</style>
