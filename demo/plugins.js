function FileListPlugin(options) {
}

FileListPlugin.prototype.apply = function (compiler) {
    compiler.plugin('emit', function (compilation, callback) {
        // console.log(compiler)
        //console.log(compilation.assets)
        // 创建一个头部字符串：
        var src = '';
        var dist = '';
        var filelist = '';

        // 检查所有编译好的资源文件：
        // 为每个文件名新增一行


        compilation.modules.forEach(function (module) {
            if (module._source && module._source._value) {
                src += `${module.resource}\n${module._source._value}\n\n`
            }
            // console.log((module))
            module.fileDependencies && module.fileDependencies.forEach(function (filepath) {
                filelist += `${filepath}\n`
            })
        })

        compilation.chunks.forEach(function (chunk) {
//console.log(...chunk._modules)
            // chunk.modules是模块的集合（构建时webpack梳理出的依赖，即import、require的module）
            // 形象一点说：chunk.modules是原材料，下面的chunk.files才是最终的成品
            // chunk._modules.forEach(function (module) {
            //     // module.fileDependencies就是具体的文件，最真实的资源【举例，在css中@import("reset.css")，这里的reset.css就是fileDependencie】
            //     module.fileDependencies && module.fileDependencies.forEach(function (filepath) {
            //         filelist += `${filepath}\n`
            //     })
            //
            //     if (module._source && module._source._value) {
            //         src += `${module._source._value}\n\n`
            //     }
            //
            // });

            //console.log((chunk.origins))
            // 最终生成的文件的集合
            chunk.files.forEach(function (filename) {
                // source()可以得到每个文件的源码
                var source = compilation.assets[filename].source();
                dist += `${filename}:\n${source} \n\n`;
            });
        });

        // 把它作为一个新的文件资源插入到 webpack 构建中：
        compilation.assets['src.md'] = {
            source: function () {
                return src;
            },
            size: function () {
                return src.length;
            }
        };
        compilation.assets['dist.md'] = {
            source: function () {
                return dist;
            },
            size: function () {
                return dist.length;
            }
        };
        compilation.assets['filelist.md'] = {
            source: function () {
                return filelist;
            },
            size: function () {
                return filelist.length;
            }
        };

        callback();
    });
};

module.exports = FileListPlugin;