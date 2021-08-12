<template>
  <div class="login">
    <h3>Login</h3>
    <input type="text" placeholder="email"><br>
    <input type="password" placeholder="password"><br>
    <button>Login</button>
    <p>계정이 없다면, 회원가입을 먼저 진행해주세요 !</p>
    <button><router-link to="/signUp">회원가입</router-link></button>
  </div>

</template>

<script>
export default {
  name: 'login',
  data() {
    return {
    };
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 15px;
  a {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
