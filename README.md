# [Qiu-AutoRem](https://github.com/xiajunqcy/Qiu-AutoRem)
通过等比缩放页面元素，适配不同尺寸的移动端设备

# Basic Usage

```html
<section auto-src="img/bg-1.png">
    <p> content </p>
    <p> content </p>
</section>

<script src="./autoRem.js"></script>
<script>
    var autoRem = new AutoRem();
</script>
```
 
例：750px 的设计稿中，尺寸为 450 X 200 的元素，css 如下设置即可
```less
width: 4.5rem;
height: 2rem;
```
该元素即会跟随页面等比缩放

# Features
 - 只需在所需要的尺寸中写好样式，通过等比缩放，适配不同尺寸屏幕 （默认范围 320 X 768）
 - 设定图片作为 background-image 时，自动计算高度，适配不同尺寸屏幕
 - 设定图片作为 background-image 时，懒加载 [未完成]

# Example Usage
```js
var obj = {
    width: 750, // 设计稿尺寸
    scale: 100, // 设计稿中 1px 对应css中 1rem 的比例
}

// obj 可不传，默认 obj = {width: 750, cale: 100,}
var autoRem = new AutoRem(obj)

// 取得当前尺寸页面下的根元素 fontSize px值
autoRem.standFontsize() 

// 重新设置 width，scale 并且渲染，可不传 obj ，单纯重新渲染
autoRem.render(obj) 

// 渲染属性中有 auto-src 的元素为背景，el 可以指定元素，不指定表示所有
autoRem.renderImg(el) 
```
>[demo](https://github.com/xiajunqcy/Qiu-AutoRem/tree/master/demo)
