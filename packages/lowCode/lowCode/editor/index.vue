<template>
  <div class="page-wrap">
    <el-button @click="openAdd">新建</el-button>
    <el-dialog v-model="dialogVisible" title="Tips" width="30%">
      <span>This is a message</span>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getFileOpen } from "packages/project/src/api/file.js";

function openAdd() {
  dialogVisible.value = true;
  getFileOpen().then((res) => {
    console.log(res);
  });
}

const dialogVisible = ref(false);
</script>

<style scoped lang="scss"></style>
