<template>
  <div>
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <el-tag v-for="tag in tags" :key="tag.name" class="mx-1" closable>
          {{ tag.name }}
        </el-tag>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue"

  export default defineComponent({
    setup() {
      const tags = ref([
        { name: "Tag 1", type: "" },
        { name: "Tag 2", type: "success" },
        { name: "Tag 3", type: "info" },
      ])

      // todo
      return { tags }
    },
  })
</script>

<style lang="less" scoped>
  .scrollbar-flex-content {
    padding-left: 20px;
    padding-right: 20px;
    line-height: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    .mx-1 {
      margin-right: 10px;
    }
  }
</style>
