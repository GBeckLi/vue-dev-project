# vue-dev-project
用于学习Vue的项目，使用ts和webpack


坑：
1: 引入'element-ui/lib/theme-chalk/index.css'的时候，控制台会报错。此时需要使用postcss作为css文件的loader才可以解决。

2: 如果不想把element-ui的全部组件引入，可以再.babelrc中进行设置，设置方法参考源文件。但是需要注意的是需要将babel-loader作为ts文件的loader。