<template>
  <div v-bind:title="title" v-if="seen">
    <h1>{{ message }}</h1>
    <ol>
      <li v-for="todo in todolist"
      v-bind:key="todo.id">
        {{todo.text}}
      </li>
      <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"></todo-item>
    </ol>
    <input v-model="message">
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Sample Vue js application',
      title: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: true,
      todolist: [
        {id: 1, text: 'Urdu'},
        {id: 2, text: 'English'},
        {id: 3, text: 'Mathematics'}
      ],
      groceryList: [
        { id: 4, text: 'Vegetables' },
        { id: 5, text: 'Cheese' },
        { id: 6, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}

</script>
