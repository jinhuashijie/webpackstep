1：第一步：实现基本的打包：init 之后
	cnpm install webpack --save-dev    写入基本文件之后
	webpack ./app/main.js   ./public/bundle.js  --怎么又自动跑到dist去了？
	即便是注销还是往dist跑，绝对不是config文件的问题。
	写入新的config；可以通过webpack打包输出到public目录
	加入"start": "webpack"  命令，直接运行 npm start  --需要cli支持--成功
	cnpm install  webpack-cli --save-dev






***************所有的依赖项目***最终需要自己构建一个包，可以直接运行webpack，
                                          以及运行express模板；
webpack：webpack webpack-cli

cnpm install webpack webpack-cli --save-dev
npm install --save-dev webpack-dev-server


