<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#222832"
    text-color="#fff"
    class="el-menu-vertical-demo"
    default-active="2"
    :router="true"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Edit /></el-icon>
        <span>实有人口</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="/list">列表</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <div class="line" />
    <el-menu-item index="/home">
      <el-icon><Share /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <div class="line" />
    <el-menu-item index="3" disabled>
      <el-icon><Search /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <div class="line" />
    <el-menu-item index="4">
      <el-icon><Delete /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
  import { defineComponent, reactive } from "vue"
  import { Edit, Share, Delete, Search } from "@element-plus/icons"

  export default defineComponent({
    components: { Edit, Share, Delete, Search },
    setup() {
      const state = reactive({
        defaultOpen: ["1", "2", "3", "4"],
        showMenu: true,
        currentPath: "/dashboard",
        count: {
          number: 1,
        },
      })
      return {
        state,
      }
    },
  })
</script>

<style lang="less" scoped>
  .line {
    border-top: 1px solid hsla(0, 0%, 100%, 0.05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
</style>
