# vue-dev-project
用于学习Vue的项目，使用ts和webpack


坑：
1: 引入'element-ui/lib/theme-chalk/index.css'的时候，控制台会报错。此时需要使用postcss作为css文件的loader才可以解决。

2: 如果不想把element-ui的全部组件引入，可以再.babelrc中进行设置，设置方法参考源文件。但是需要注意的是需要将babel-loader作为ts文件的loader。

3: 异步加载组件时使用import会报错，这时需要引入babel的插件syntax-dynamic-import。

4: ts模式中所有的组件默认是局部的，需要在@Component修饰符中将用的到组件引入。如果需要将组件全局使用，要在入口文件中以Vue.Component的方式进行全局注册。

5: 在使用Object.assign的时候，编辑器报错assign不是ObjectConstructor的方法。此时需要在tsconfig.json的lib属性中添加'es2015'和'es2017'两个属性。