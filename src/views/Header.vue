<template>
  <div class="menu">
    <div class="l-content">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="2">课程</el-menu-item>
        <el-menu-item index="3">讲师</el-menu-item>
        <el-menu-item index="4">关于</el-menu-item>
      </el-menu>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" v-if="isLogin" >
        <span style="">{{ nickname }}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="text" v-else @click="showLoginForm"
        ><i class="el-icon-user"></i> 登录</el-button
      >
    </div>
    <LoginForm
      :dialogFormVisible="dialogFormVisible"
      @formVisible="formVisible"
      @loginSuccess="loginSuccess"
    ></LoginForm>
  </div>
</template>
<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "Header",
  components: {
    LoginForm,
  },
  data() {
    return {
      activeIndex: "/",
      isLogin: false,
      dialogFormVisible: false,
      nickname: ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    showLoginForm() {
      this.dialogFormVisible = true;
    },
    formVisible() {
      this.dialogFormVisible = false;
    },
    loginSuccess() {
      console.log(this.$store.state.userInfo.nickname)
      this.isLogin = true;
      this.nickname = this.$store.state.userInfo.nickname
    },
  },
  created() {
    if(this.$store.state.userInfo.nickname) {
      console.log(this.$store.state.userInfo.nickname)
      this.isLogin = true;
      this.nickname = this.$store.state.userInfo.nickname
    }
  }
};
</script>
<style>
.menu {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  width: 100%;
}
.menu ul {
  display: flex;
  justify-content: center;
}
</style>