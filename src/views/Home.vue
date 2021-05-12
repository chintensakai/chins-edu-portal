<template>
  <div class="home">
    <h3>热门课程</h3>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="6"
        ><div class="grid-content" @click="gotoCourseInfo(curseId)">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img
              src="https://www.gulixueyuan.com/files/default/2018/06-15/0918251905f6057842.jpg"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img
              src="https://www.gulixueyuan.com/files/default/2018/06-15/0918146150a9565117.jpg"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img
              src="https://www.gulixueyuan.com/files/default/2018/06-14/1709051b4c3c309882.jpg"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img
              src="https://www.gulixueyuan.com/files/course/2020/09-17/092058a40481921036.jpg"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {
    gotoCourseInfo(courseId) {
      alert(courseId)
      this.$router.push("/about")
    }
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
