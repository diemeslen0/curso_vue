new Vue({
  el: '#app', // O id do elemento que quero controlar
  data: {
    title: 'Hello World!' // O dado que irei colocar na variável 
  },                      // que estará no meu elemento
  methods: {
    changeTitle: function(event){
      this.title = event.target.value;
    }
  }
});