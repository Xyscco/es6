// Aula sobre Operadores rest/spread ================================================
// Aula sobre Desestruturação =======================================================
// const usuario = {
//     nome: 'Francisco',
//     idade: 26,
//     endereco: {
//         cidade: 'Goianira',
//         estado: 'GO' 
//     },
// };
// // const { nome, idade, endereco: { cidade } } = usuario;
// // console.log(nome);
// // console.log(idade);
// // console.log(cidade);
// function mostraNome({ nome, idade }) {
//     console.log(nome, idade);
// }
// mostraNome(usuario);
// Aula sobre Valores padrão ========================================================
// function soma (a, b) {
//     return a + b;
// }
// console.log(soma(1));// retorna NaN
// console.log(soma()); // retorna NaN
// function soma (a = 3, b = 6) {
//     return a + b;
// }
// console.log(soma(1));// retorna 7
// console.log(soma()); // retorna 9
// const soma = (a = 3, b = 6) => a + b;
// console.log(soma(1));// retorna 7
// console.log(soma()); // retorna 9
// Aula sobre Arrow Functions ========================================================
// const arr = [1, 3, 4, 5, 6];
// const newArr = arr.map(function(item) {
//     return item * 2;
// });
// console.log(newArr);
// const newArr = arr.map((item) =>{
//     return item * 2;
// });
// console.log(newArr);
// const newArr = arr.map(item =>{
//     return item * 2;
// });
// console.log(newArr);
// const newArr = arr.map(item => item * 2);
// console.log(newArr);
// const teste = () => ({ nome: 'Francisco'});
// console.log(teste());
// Aula sobre Operações em Array =========================================================
// const arr = [1, 3, 4, 5, 8, 9];
// const newArr = arr.map(function(item) {
//     return item * 2;
// });
// const newArr = arr.map(function(item, index) {
//     return item + index;
// });
// console.log(newArr);
// const sum = arr.reduce(function(total, next) {
//     return total + next;
// });
// console.log(sum);
// const filter = arr.filter(function(item) {
//     return item % 2 === 0;
// });
// console.log(filter);
// const find = arr.find(function(item) {
//     return item === 4;
// });
// console.log(find);
// Aula sobre Const & Let ================================================================
// const a = 1;
// a = 3; Não pode atribuir só pode mutar 
// const usuario = { nome: 'Francisco'};
// usuario.nome = 'Robson';
// console.log(usuario);
// function teste(x) {
//     let y = 2;
//     if (x > 5) {
//         console.log(x, y);
//     }
// }
// teste(10);
// Aula sobre Classe =====================================================================
// class Matematica {
//     static soma(a, b) {
//         return a + b;
//     }
// }
// console.log(Matematica.soma(1, 2));
// class TodoList {
//     constructor() {
//         this.todos = [];
//     }
//     addTodo() {
//         this.todos.push('Novo todo');
//         console.log(this.todos);
//     }
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.addTodo();
// }
// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();
// class List {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// class TodoList extends List{
//     constructor() {
//         super();
//         this.usuario = 'Francisco';
//     }
//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }
// var MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo Todo');
// }
// MinhaLista.mostraUsuario();
// O metodo estatio não enxerga o restante da classe
// class TodoList {
//     constructor() {
//         this.todos = [];
//     }
//     static addTodo() {
//         this.todos.push('Novo todo');
//         console.log(this.todos);
//     }
// }
// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();
// class Matematica {
//     static soma(a, b) {
//         return a + b;
//     }
// }
// console.log(Matematica.soma(1, 2));
"use strict";
