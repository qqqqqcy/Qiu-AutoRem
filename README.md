# Qiu-AutoRem
通过等比缩放页面元素，适配移动端不同尺寸设备的，js 方案

# 快速使用

```html
<script src="https://raw.githubusercontent.com/xiajunqcy/QiuAutoRem/master/autoRem.js"></script>
<script>
    var autoRem = new AutoRem();
</script>
```
默认比例为：设计图尺寸 750px，fontSize 值为 50px    
例：750px 的设计稿中，尺寸为 450px x 200px 的元素，css 如下设置即可
```less
width: 4.5rem;
height: 2rem;
```
该元素即会跟随页面等比缩放

# 功能说明
```js
    var obj = {
        width: 750, // 设计稿尺寸
        scale: 100, // 设计稿中 1px 对应css中 1rem 的比例
    }
    var autoRem = new AutoRem(obj) // obj 可不传，默认 obj = {width: 750, cale: 100,}
    autoRem.standFontsize() // 取得当前尺寸页面下的根元素 fontSize px值
    autoRem.render(obj) // 重新设置 width，scale 并且渲染，obj 不传时只重新渲染

```
