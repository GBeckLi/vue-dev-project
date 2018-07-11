<template>
  <div>
    <h3>
      <slot></slot>
    </h3>
    <ul>
      <item v-for="(item, index) in list"
        :key="item.id" 
        :index="index"
        :item="item"
        @remove-item="removeItem($event)" @mouseover.native="itemHover($event)">{{item.value}}</item>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit } from "vue-property-decorator";
import Item from "./item.vue";

@Component({
  model: {
    prop: 'list',
    event: 'delete'
  },
  components: {
    item: Item
  }
})
export default class ListComponent extends Vue {
  // data
  // list: any[] = [];

  @Prop({
    type: Array,
    default: function() {
      return [];
    }
  })
  list;

  @Emit()
  delete(list) {}

  removeItem(index) {
    console.log(index);
    this.list.splice(index, 1);
    this.delete(this.list);
    this.$store.commit('list/countChange', -1);
  }

  itemHover(val) {
    console.log(val);
  }

  created() {
    // console.log(this.list);
  }
}
</script>

<style scoped lang="less">
</style>
