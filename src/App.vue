<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0;">
        <el-menu mode="horizontal" :default-active="activeMenu">
          <el-menu-item index="1">Itach的主页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">Sublime</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
    </el-container>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';


@Component
export default class AppComponent extends Vue {

  // props
  @Prop({default: 'Lovely Kathy'})
  text: string;

  // data
  visible: boolean = false;

  // computed
  get activeMenu(): string {
    console.log(this.$store.state.actionMenu);
    return this.$store.state.actionMenu;
  }

  // methods
  closeDialog(): void {
    this.visible = false;
  }
}
</script>

<style lang="less" scoped>

</style>
