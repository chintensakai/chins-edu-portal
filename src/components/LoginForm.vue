<template>
  <div>
    <el-dialog title="用户登录" :visible.sync="dialogFormVisible" center>
      <el-form :model="form">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密 码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" style="margin-right: 20px">扫码登录</el-button>
        <el-button @click="emitToParent">取 消</el-button>
        <el-button type="primary" @click="goLoginProcess">登 录</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import user from "@/network/user.js";
export default {
  name: "LoginForm",
  props: ["dialogFormVisible"],
  data() {
    return {
      form: {
        mobile: "",
        password: "",
      },
      formLabelWidth: "60px",
    };
  },
  methods: {
    //   子组件向父组件传递数据，父组件收到之后关闭对话框
    emitToParent() {
      this.$emit("formVisible");
    },
    refreshLoginState() {
      console.log("sdfdsfdf")
      this.$emit("loginSuccess");
    },
    goLoginProcess() {
      user
        .submitLogin(this.form)
        .then((res) => {
          if (res.data["Authorization"]) {
            // 登录成功，token放入vuex
            this.emitToParent();
            this.$store.commit("getToken", res.data["Authorization"]);
            return user.getUserInfo();
          }
        })
        .then((res2) => {
          console.log("9999999999")
          console.log(res2.data.userInfo);
          this.$store.commit("getUserInfo", res2.data.userInfo);
          this.refreshLoginState()
        });
    },
  },
};
</script>