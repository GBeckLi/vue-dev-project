<template>
  <div id="app">
    <h1>Hello world</h1>
    <h2>{{ text }}</h2>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible="visible" @close="visible = false" title="hello world">
      <p>try ELement</p>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import { Dialog } from 'element-ui';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

// Vue.use(Dialog);

@Component
export default class AppComponent extends Vue {
  @Prop({default: 'Lovely Kathy'})
  text: string;

  visible: boolean = false;

  closeDialog(): void {
    this.visible = false;
  }
}
</script>

<style lang="less" scoped>

</style>
