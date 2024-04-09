<template>
  <div class="mycontent">
    <el-col >
      <h5 class="mytitle">Customasdass colors</h5>
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          text-color="#fff"

          router
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu index="/">
          <template #title>
            <el-icon><location /></el-icon>
            <span>按钮</span>
          </template>
          <el-menu-item-group title="按钮 One">
            <el-menu-item index="/button">按钮 one</el-menu-item>
            <el-menu-item index="/waterfall">瀑布流 two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="按钮 Two">
            <el-menu-item index="/b">b three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="/1-4">
            <template #title>按钮 four</template>
            <el-menu-item index="/b2">b2 one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

      </el-menu>
    </el-col>
  </div>
</template>

<script lang="ts" setup>

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
  .mytitle{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 0px;
    padding: 10px 0px;
    font-size: 24px;
    background-color: #002140;
  }
  .el-menu{
    height: calc(100vh - 40px);

  }
</style>