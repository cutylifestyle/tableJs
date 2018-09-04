/*
* 框架开发的宗旨：方便快捷、性能优秀、兼容性高
* 框架开发采用IIFE模式的原因：防止全局污染；降低代码的耦合度，向外只暴露
* 需要暴露的内容。
*
* 框架的开发从功能完备性角度看，需要支持模块化规范，支持多平台，除了浏览器端，
* 后端也需要提供支持.这个时候在立即执行函数里面需要进行模块化的判断，但是不论
* 走哪个模块化判断，最终执行的代码都是同一套代码。所以将核心逻辑作为factory函数
* 传入，实际上在里面写也没有问题，但是从阅读性角度看，factory参数的方式要更加
* 清晰
* */
(function (global, factory) {
    //模块化判断,来自于Vue.js源码,判断之后，是如何进行引出的问题，就是向外
    // 暴露什么
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.Table = factory());

})(typeof window !== "undefined" ? window : this, function () {

});