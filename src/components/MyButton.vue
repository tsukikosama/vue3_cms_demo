<template>
  <div class="mb-4">
    <el-button @click="test()">Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
  <div v-for="(item,index) in img" :key="index">
    <span>{{item.img}}</span>
    <el-image :src="item.img" alt="" srcset=""></el-image>
    <span>{{item.title}}</span>
<!--    6666-->
  </div>

    <div>
      <el-button type="primary" class="float-button">悬浮按钮</el-button>
    </div>



</template>

<script setup lang="ts">
    import request from "../utils/request";
    import {ElLoading, ElMessage} from "element-plus";
    import { ref } from 'vue';

    name: 'demo1'

    interface Imgs {
      img : string,
      title : string,
    }

    const img = ref<Imgs[]>([]);
    //发送后台请求
    const test = ()=>{
      const loadingInstance = ElLoading.service({ fullscreen: true })
      request.get('/polls/getdemo').then((res) =>{
        img.value = res.data

        ElMessage.success("成功")
        loadingInstance.close()
      }).catch((e) =>{
        console.log(e)
      })
    }

</script>

<style scoped>

  .float-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

</style>