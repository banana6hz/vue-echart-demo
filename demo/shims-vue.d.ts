// 声明文件(*.d.ts)：告诉TS怎么处理一些不同后缀名的文件
// eg:ts默认是识别不了*.vue后缀的文件的，因此我们需要在这声明一下，告诉ts要怎么处理
declare module '*.vue' {
	import Vue from 'vue'
	export default Vue
}

// 自定义描述文件: 在项目的【根目录】下定义【模块相同的名称】的描述文件A.d.ts,在描述文件内编写模块声明描述
// A.d.ts
// declare module '*';
// declare module 'A';

// 详细描述文件
// A.d.ts
// declare module  "A" {
//   // 添加具体的描述内容
// };

// 常规的类型描述
// 1、module
// 模块描述 声明这个是一个模块文件，模块里面使用export抛出相应的内容

// 2、namespace
// 定义命名空间，通常用的很少

// 3、interface
// 定义接口类型，这点一般配合class使用

// 4、class
// 定义class类型

// 5、type
// 定义基础类型变量

// 6、global
// 这个属性用来定义全局变量的申明的变量可以直接调用，这点用来某些直接绑定在window下的变量
// declare global {
//   $:any
// }