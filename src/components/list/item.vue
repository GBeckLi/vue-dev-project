<template>
  <li v-on="itemListener">
    <span>
      <slot></slot>
    </span>
    <button @click="removeItem(index)">Remove</button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Emit} from 'vue-property-decorator';

@Component({
  inheritAttrs: false
})
export default class ItemComponent extends Vue {

  // computed
  get itemListener(): Object {
    return Object.assign({}, this.$listeners)
  }

  @Prop({
    type: Object,
    required: true
  })
  item;

  @Prop({
    type: Number,
    required: true
  })
  index;

  @Emit()
  removeItem(index){
    console.log(this.index);    
  }

  created() {
    console.log(this.$listeners)
  }
}
</script>

<style lang="less" scoped>
  li{
    height: 30px;
    line-height: 30px;
    background-color: skyblue;
    margin-bottom: 4px;
    padding-left: 10px;
  }
</style>
