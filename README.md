Learning KOA and related frameworks



run the project :
 node --harmony server.js

接下来添加：
router
template engine
log
oauth
cache
mogodb


































// 添加自动提示
```
npm install -g typings 

typings --version    
```


安装完成后，我们需要安装相应的需要提示功能库或者框架的类型信息文件，，使用命令行进入项目目录中，分别输入下面两个命令来安装Node和Lodash的类型接口信息文件：

typings install dt~node --global --save
typings install lodash --save

什么时候需要使用 --global 参数：

如果安装的包使用script标记来引用(如jQuery)(也就是在浏览器中使用)
这个包是属于环境的一部分(如node)时
该包没有使用 --global 安装失败时

这时候我们可以看到我们的 NodeSnippet目录中多了一些文件：

这些文件就是为我们提供提示信息的类型类型文件(使用TypeScript定义)。查看Typings是否支持某个库或框架的智能提示，我们可以使用下面的命令:

typings search exampleName
启用智能提示功能

通过两种方式来启动提示功能：

第一种是在需要进行只能提示的文件最上行增加提示信息文件所在目录，格式如下:
/// <reference path="./typings/index.d.ts" />
第二种是在项目所在目录(在这里是NodeSnippet文件夹中)增加一个名为jsconfig.json的空文件。
更多jsconfig.json文件的内容可以参考：https://code.visualstudio.com/docs/languages/javascript

启用提示功能后我们就可以非常愉快的使用Visual Studio Code 为我们提供的智能提示功能了。