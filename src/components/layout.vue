<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside width="200px" class="aside">
        <div class="head">
          <div>
            <img src="https://s.weituibao.com/1582958061265/mlogo.png" alt="logo" />
            <span>admin</span>
          </div>
        </div>
        <div class="line" />
        <sider />
      </el-aside>
      <el-container class="content">
        <el-header></el-header>
        <div class="line" />
        <tags />
        <div class="line" />
        <breadCrumb />
        <el-main>
          <div class="layout-main">
            <router-view />
          </div>
        </el-main>
        <el-footer> <layoutFooter /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import sider from "./sider.vue"
  import breadCrumb from "./breadCrumb.vue"
  import tags from "./tags.vue"
  import layoutFooter from "./footer.vue"
  export default {
    components: { sider, breadCrumb, tags, layoutFooter },
    name: "HelloWorld",
    props: {
      msg: String,
    },
    setup() {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .layout-main {
    background: #ffffff;
    height: 100%;
    overflow: auto;
  }
  .line {
    border-top: 1px solid hsla(0, 0%, 100%, 0.05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .common-layout {
    min-height: 100vh;
    .aside {
      background: #222832;
    }
    .container {
      height: 100vh;
      .head {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
      }
      .head > div {
        display: flex;
        align-items: center;
      }

      .head img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .head span {
        font-size: 20px;
        color: #ffffff;
      }
    }
  }
  .common-layout .el-header,
  .common-layout .el-footer {
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 50px;
    height: 50px;
  }
  .common-layout .el-footer {
    line-height: 50px;
  }

  .common-layout .el-aside {
    color: var(--el-text-color-primary);
    text-align: center;
  }

  .common-layout .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
    height: calc(100vh - 100px);
    overflow: auto;
    padding: 20px;
  }
</style>
<style>
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .el-menu {
    border-right: none !important;
  }
  .el-submenu {
    border-top: 1px solid hsla(0, 0%, 100%, 0.05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .el-submenu:first-child {
    border-top: none;
  }
  .el-submenu [class^="el-icon-"] {
    vertical-align: -1px !important;
  }
  a {
    color: #409eff;
    text-decoration: none;
  }
  .el-pagination {
    text-align: center;
    margin-top: 20px;
  }
  .el-popper__arrow {
    display: none;
  }
</style>
