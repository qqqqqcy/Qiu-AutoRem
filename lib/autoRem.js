function queryAttr(flag, str) {
    str = str.substr(1, str.length - 2)
    var classobj = newArray();
    var classint = 0;
    var tags = document.getElementsByTagName("*");
    for (var i in tags) {
        if (tags[i].nodeType == 1) {
            if (tags[i].getAttribute("str")) {
                if (flag === 'all') {
                    return tags[i]
                }
                classobj[classint] = tags[i];
                classint++;
            }
        }
    }
    return classobj;
}

function AutoRem(obj) {
    if ((obj instanceof Object)) {
        this.standard = obj
    } else {
        this.standard = {}
    }
    this.standard.width = this.standard.width || 750
    this.standard.scale = this.standard.scale || 100
    this.compat()
    this.render()
    this.addListener()
}

AutoRem.prototype.compat = function() {
    if (!document.querySelector) {
        document.querySelector = function (str) {
            return queryAttr('', str)
        }
    }
    if (!document.querySelectorAll) {
        document.querySelectorAll = function (str) {
            return queryAttr('all', str)
        }
    }
}

AutoRem.prototype.addListener = function () {
    var _this = this
    window.addEventListener('resize', function () {
        _this.resetSrc()
        _this.render()
    });
}

AutoRem.prototype.resetSrc = function () {
    document.querySelectorAll('[auto-src-fin]').forEach(function (el) {
        el.setAttribute('auto-src', el.getAttribute('auto-src-fin'))
        el.removeAttribute('auto-src-fin')
    })
}

AutoRem.prototype.standFontsize = function () {
    var scale = this.standard.scale % 2 ? (this.standard.scale / 2).toFixed(1) : parseInt(this.standard.scale / 2)
    return scale * (this.limitWidth(window.innerWidth) / (this.standard.width / 2)) //  设置标准单位rem
}

AutoRem.prototype.render = function (obj) {
    if ((obj instanceof Object)) {
        this.standard.width = obj.width || this.standard.width
        this.standard.scale = obj.scale || this.standard.scale
    }
    this.resetSrc()
    document.getElementsByTagName('html')[0].style.fontSize = this.standFontsize() + 'px'
    this.renderImg()
}
AutoRem.prototype.limitWidth = function (n) {
    return Math.min(Math.max(320, n), 768)
}
AutoRem.prototype.renderImg = function (el) {
    // el 可以指定元素，不指定的情况下会自动处理页面上所有el
    var target = el || document.querySelector('[auto-src]')
    if (!target) return null
    var imgSrc = target.getAttribute('auto-src'),
        img = new Image(),
        _this = this

    img.src = imgSrc
    img.onload = function (img) {
        target.style.backgroundImage = 'url(' + imgSrc + ')'
        target.style.height = img.target.height * (target.offsetWidth / img.target.width) + 'px'
        target.style.backgroundSize = 'cover'
        target.style.boxSizing = 'border-box'
        target.removeAttribute('auto-src')
        target.setAttribute('auto-src-fin', imgSrc)
        if (!el) _this.renderImg()
    }
}