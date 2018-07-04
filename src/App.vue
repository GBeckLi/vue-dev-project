<template>
  <div id="app">
    <h1>Hello world</h1>
    <h2>{{ text }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class AppComponent extends Vue {
  @Prop({default: 'Lovely Kathy'})
  text: string;
}
</script>

<style lang="less" scoped>

</style>
