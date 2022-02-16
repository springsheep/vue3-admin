<template>
  <div class="breadCrumd">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue"
  import { ArrowRight } from "@element-plus/icons"
  export default defineComponent({
    components: { ArrowRight },
    setup() {
      // todo
      return {}
    },
  })
</script>

<style lang="less" scoped>
  .breadCrumd {
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
</style>
