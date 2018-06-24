1：第一步：实现基本的打包：init 之后
	cnpm install webpack --save-dev    写入基本文件之后
	webpack ./app/main.js   ./public/bundle.js  --怎么又自动跑到dist去了？
	即便是注销还是往dist跑，绝对不是config文件的问题。
	写入新的config；可以通过webpack打包输出到public目录
	加入"start": "webpack"  命令，直接运行 npm start  --需要cli支持--成功
	cnpm install  webpack-cli --save-dev

2：第二步：实现服务器：安装之后
	修改config的devServer，
	向json添加命令文件
    "server": "webpack-dev-server --open"
    npm run server 会自动打包，并自动打开端口--热刷新已经实现 由config中 inline: true控制
3：第三步：开始使用插件；loaders  在这里批量安装出了问题，跑很久进度都是0/3
	必须在json文件中新添加启动命令，npm run server 才能跑；
	分开跑，可以成功，也有大量重连 ---安装loader依赖包
	cnpm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
	cnpm install --save react react-dom
	安装完loader依赖之后，必须重新npm start 打包，再run server 不然报找不到loader
4：第四步： 配置  .babelrc,
	要把loader中的use下的options中的内容抽离出来,options整个条目给删掉，
5：第五步：安装css-loader  cnpm install --save-dev style-loader css-loader
6：安装插件：cnpm install --save-dev html-webpack-plugin         使用模板依赖
	需要init，json需要增加命令，然后安装，再运行
从远程克隆下来再npm install 还是有问题，无法安装依赖；合并远程到本地也还是不行；
远程文件合并到本地——remote——fetch from ——origin:merge——local merge
分别安装依赖项之后可以运行，出现文件大小的waring，没关系



***************所有的依赖项目***最终需要自己构建一个包，可以直接运行webpack，
                                          以及运行express模板；

cnpm install webpack webpack-cli webpack-dev-server --save-dev      基本依赖：
cnpm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react 转义
cnpm install --save react react-dom react                react依赖
cnpm install --save-dev style-loader css-loader          css-loader依赖
cnpm install --save-dev html-webpack-plugin         使用模板依赖

cnpm install webpack webpack-cli webpack-dev-server babel-core babel-loader babel-preset-env babel-preset-react react react-dom style-loader css-loader --save-dev