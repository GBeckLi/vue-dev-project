<style lang="less">
 h2{
   color: pink;
 }
</style>

<template>
  <div id="main">
    <h2>{{ content }}</h2>
    <h3>ToDo List</h3>
    <div>
      <label>Add a todo</label>
      <input type="text" v-model="todo" @keyup.enter="addTodo" />
      <button @click="addTodo">Add</button>
    </div>
    <div>
      <label>Checkbox</label>
      <input type="checkbox" v-model="checkbox" true-value="hello" false-value="world" />
      <span>{{ checkbox }}</span>
    </div>
    <list v-model="todos" @delete="onTodoChanged($event)">
      <span>TodoList</span>
    </list>
    <!-- <ul>
      <li v-for="(todo, index) in todos" :key="'todo'+index">
        <span>{{todo}}</span>
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul> -->
    <button @click="flag=!flag">Reverse Flag</button>
    <div>
      <h3>Counts</h3>
      <count></count>
    </div>
    <list style="width: 300px"></list>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Count from '../components/count.vue';
  import List from '../components/list/list.vue';
  import Component from 'vue-class-component';
  import { Watch } from 'vue-property-decorator';
  import api from './../service/api';

  @Component({
    components: {
      count: Count,
      list: List
    }
  })
  export default class MainComponent extends Vue {
    content: string = 'Main Component';
    flag: boolean = true;
    todo: string = '';
    todos: Object[] = [];
    checkbox: string = 'world';
    count = 0;

    components: {
      count: Count
    }

    init(): void {
      // this.axios
      api.getJson()
        .then(res => {
          console.log(res.data);
        })
    }

    reverseFlag(): void{
      this.flag = !this.flag;
      console.log(this.flag);
    }

    addTodo(): void {
      console.log(this.todo);
      this.todos.push({
        id: this.count++,
        value: this.todo
      });
      this.todo = '';
    }

    removeTodo(index): void {
      this.todos.splice(index, 1);
    }

    onTodoChanged(value) {
      console.log(value);
      console.log(this.todos);
    }

    // @Watch('todos')
    // onTodosChanged(val: Array<Object>, oldVal: Object[]) {
    //   console.log(val, oldVal);
    // }

    // life hooks
    created() {
      // this.init();
    }

    
  }
</script>

