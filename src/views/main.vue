<style lang="less">
 h2{
   color: pink;
 }
</style>

<template>
  <div id="main">
    <h2>{{ content }}</h2>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class MainComponent extends Vue {
    content: string = 'Main Component';
  }
</script>

