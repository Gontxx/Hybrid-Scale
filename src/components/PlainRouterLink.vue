<template>
  <router-link
      :underline="false"
      :to="{ path: to}"
      style="text-decoration: none;"
  >
    {{text}}
  </router-link>
</template>

<script>
export default {
name: "PlainRouterLink",
  props: ['to', 'text']
}
</script>

<style scoped>
a.router-link-active {
  color: #606266;
}
a {
  color: #606266;
}
a:hover {
  color: #409eff;
}
</style>