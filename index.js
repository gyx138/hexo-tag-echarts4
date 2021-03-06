var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var filePath = path.join(__dirname, 'template.html');

function echartsMaps(args, content) {
    var template = fs.readFileSync(filePath).toString(),
        tag_content = {};

    if (content.length) {
        var tag_content = content;
    }

    return _.template(template)({
        id: 'echarts' + ((Math.random() * 9999) | 0),
        tag_content: tag_content,
        height: args[0] || 400,
        width: args[1] || '85%'
    });
}

hexo.extend.tag.register('echarts', echartsMaps, {
    async: true,
    ends: true
});