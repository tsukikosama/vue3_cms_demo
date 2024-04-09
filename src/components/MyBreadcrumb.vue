<template>
  <!-- 面包屑 -->
  <el-breadcrumb
                 style="cursor: pointer; margin: 10px 0; display:inline-block;margin-left: 10px; ">
    <el-breadcrumb-item :to="item.path" v-for="item in pathList" :key="item.id">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>


<script lang="ts" setup>


import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";

const route = useRoute()
const pathList = ref()

const getCurrentPath = () => {

  pathList.value = route.matched.filter(item => item.meta && item.meta.title);
}

onMounted(() => {
  getCurrentPath();
})

watch(route, (to) => {
  pathList.value = to.matched.filter(item => item.meta && item.meta.title);

}, { immediate: true });
</script>