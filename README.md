# hexo-tag-echarts

[![npm](https://img.shields.io/npm/v/hexo-tag-echarts4.svg)]() [![Travis](https://img.shields.io/travis/gyx138/hexo-tag-echarts4.svg)]()  [![David](https://img.shields.io/david/gyx138/hexo-tag-echarts4.svg)]()  [![David](https://img.shields.io/david/dev/gyx138/hexo-tag-echarts4.svg)]()

本插件基于[Quentin Chen](https://github.com/kchen0x)的[hexo-tag-echarts3](https://github.com/kchen0x/hexo-tag-echarts3)修改。

Insert [Echarts](http://echarts.baidu.com) in Hexo by using tags.

## Install 

```bash
$ npm install hexo-tag-echarts4 --save
```

## Usage

```
{% echarts 400 '85%' %}
\\TODO echarts contents goes here
{% endecharts %}
```

``` javascript 实例
{% echarts 400 '85%' %}
var data = [];

for (var u = 0; u <= 10; u += 0.2) {
	var f = 12*u;
	f = Math.round(f*100)/100;
	data.push([u, f]);
}

option = {
	tooltip: {},
	xAxis: {
		name: 'U/V',
		interval: 1
	},
	yAxis: {
		name: 'f/Hz',
		interval: 10
	},
	series: [{
		data: data,
		type: 'line',
		lineStyle: {
			width: 4
		}
	}]
};
{% endecharts %}
```

For more details, visit [Demo](http://kchen.cc/2016/11/05/echarts-in-hexo/) here.

Echarts [官方实例](https://www.echartsjs.com/examples/zh/index.html)
