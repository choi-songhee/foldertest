<template>
  <div class="login">
    <h1>Login</h1>
    <div class="inputArea">
      <input type="text" v-model="userEmail" placeholder="Email"><br>
      <input type="password" v-model="userPassword" placeholder="Password"><br>
    </div>
    <button @click="login">Login</button>
    <p class="signup-text">아직 회원이 아니신가요?
      <span class="signup-button"><router-link to="/signUp">Sign up</router-link></span>
    </p>
  </div>

</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data() {
    return {
      userEmail: '',
      userPassword: ''
    }
  },
  methods: {
    login() {
      // this.$router.replace('home')
      firebase.auth().signInWithEmailAndPassword(this.userEmail, this.userPassword).then(
          function(user) {//eslint-disable-line no-unused-vars
            alert('로그인 되었습니다')
            this.$router.replace('home')
          },
          function(err) {
            alert(err.message)
          }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin-top: 55%;
  padding: 0 16px;
  color: #041b2d;
}
.inputArea {
  margin-top: 30px;
  input {
    margin: 10px 0 0;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid lightgray;
    &::placeholder {
      color: lightgray;
    }
  }
}
button {
  float: right;
  margin-top: 20px;
  width: 150px;
  height: 45px;
  cursor: pointer;
  font-size: 15px;
  color: #fff;
  border-radius: 60px;
  border: none;
  background: #D66D75;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #E29587, #D66D75);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #E29587, #D66D75); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}
.signup-text {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100vw;
  margin-top: 40px;
  font-size: 15px;
  text-align: center;
  .signup-button {
    display: inline-block;
    margin-left: 5px;
    font-size: 16px;
    font-weight: bold;
    a {
      color: #D66D75;
    }
  }
}
</style>
