<template>
  <div class="home">
    <el-carousel :interval="3000" type="card">
      <el-carousel-item v-for="item in carousel" :key="item">
        <el-image :src="item" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>

    <h3>热门课程</h3>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="6" v-for="(item, index) in hotCourses" :key="index"
        ><div class="grid-content" @click="gotoCourseInfo(curseId)">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img :src="item.cover" class="image" />
            <div style="padding: 14px">
              <span>{{ item.title }}</span>
              <div class="bottom clearfix">
                <time class="time">课时数 {{ item.lessonNum }}</time>
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
import { getHotCourses } from "@/network/course.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      currentDate: new Date(),
      carousel: [
        "https://www.gulixueyuan.com/files/course/2021/04-06/163053d42c7a182263.png",
        "https://www.gulixueyuan.com/files/course/2021/03-23/114903fb91ed428957.jpg",
        "https://www.gulixueyuan.com/files/course/2021/04-26/083850a4ac13186341.jpg",
      ],
      hotCourses: [],
    };
  },
  methods: {
    gotoCourseInfo(courseId) {
      alert(courseId);
      this.$router.push("/about");
    },
    getHomeHotCourses() {
      getHotCourses().then((res) => {
        console.log(res);
        this.hotCourses = res.data.hostCourses;
      });
    },
  },
  created() {
    this.getHomeHotCourses();
  },
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

.el-carousel__item el-img {
  padding: 0;
  margin: 0;
  width: 500px;
}
/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>
