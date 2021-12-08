//1.使用common.js的模块化规范
const {add,mul} = require("./js/mathUtils");

//2.使用ES6的模块化规范
//import {add,mul} from "./js/mathUtils";
console.log(add(2,3));
console.log(mul(2,3));

//3.依赖css文件
require("./css/normal.css");

//4.依赖less文件
require("./css/special.less");

//使用vue进行开发
import Vue from 'vue'
// import App from './vue/app.js'
import App from './vue/app.vue'
const app = new Vue({
    el:'#app',
    template:`<App/>`,
    components:{
        App
    }
})