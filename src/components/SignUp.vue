<template>
  <div class="sign-up">
    <h1>회원가입</h1>
    <input type="text" placeholder="email"><br>
    <input type="password" placeholder="password"><br>
    <button>가입하기</button>
    <span>로그인하기</span>
  </div>

</template>

<script>
export default {
  name: 'signUp',
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
