<template>



    <el-container>
      <el-aside >
        <MyMenu/>
      </el-aside>
      <el-main class="mymain">
        <MyBreadcrumb/>
        <router-view>

        </router-view>
      </el-main>
    </el-container>

</template>

<script>

import {defineComponent} from "vue";
import MyMenu from "../components/MyMenu.vue";
import MyButton from '../components/MyButton.vue'
import MyBreadcrumb from "../components/MyBreadcrumb.vue";

export default defineComponent({
  components: {MyBreadcrumb, MyMenu,MyButton }
})
</script>

<style scoped>

  .mymain{
    background: antiquewhite;
    padding: 0px;
    width: calc(100vw - 250px);
    padding: 10px;
  }

</style>