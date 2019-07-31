<template>
  <div id="app">
    <div>
      <router-link to="about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.color-main {
  color: #409eff !important;
}
.color-success {
  color: #67c23a !important;
}
.color-warning {
  color: #e6a23c !important;
}
.color-danger {
  color: #f56c6c !important;
}
.color-info {
  color: #909399 !important;
}
</style>
