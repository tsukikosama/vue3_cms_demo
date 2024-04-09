<template>




      <MyWaterfall/>
</template>

<script>

import {defineComponent} from "vue";

import MyWaterfall from "../components/MyWaterfall.vue";

export default defineComponent({
  components: {MyWaterfall,  }
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