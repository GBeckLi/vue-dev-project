<template>
  <div>
    <p>you click {{ count }} time.</p>
    <button @click="count++">Add</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component({
    name: "count"
  })
  export default class CountComponent extends Vue {
    count: number = 0;
  }
</script>

