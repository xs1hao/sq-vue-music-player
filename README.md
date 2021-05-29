# my-vue-music-player 从 0 开始 我的 vue 项目

#### 2021年5月27日22:33:49 （第一天）
    . 时隔三年，在次手写一个vue项目，混迹于开发界已经快三年了，对写代码的认识也有了不少，那么现在再次从零开始，写一个VUE项目。
    . 先把 webpack 弄好吧，现在已经 webpack5 了，那就来个 webpack5 吧。
    . 对于一个已经使用 vue-cli 创建好的vue 项目，怎么快速添加webpck哩？

    1) 全局安装 /* npm i -g @vue/cli-init */ (这电脑不知道咋了，现在全局安装东西，都必须要以管理员身份运行cmd，TMD)；

    2) /* vue init webpack xxx */（xxx为项目名称）--- 是的，他就开始运行了，这一过程会让你做很多选择；

    这个时候，我发现，原来上面的命令，是又给我生成了一个 项目，我tm，原来如此，好吧，删了从来。
    3) 启动项目，在init项目的时候，使用了eslint 启动时会报了很多关于 eslint 检测的错，修改webpakc
    /* eslint-loader */ 里面的配置: fix: true; 项目成功启动；

#### 2021年5月28日21:01:22 （第二天，周五）
    目标：引入element-ui库；本地调用接口；做两个路由切换的页面；
    1、引入 element-ui 库
      安装element-ui ，执行命令：npm i element-ui -S；
      项目中按需加载 需要借助 babel-plugin-component；执行命令： npm install babel-plugin-component -D
      ***注意***：
      安装element-ui 官网给的配置，修改了babelrc文件，后项目需要执行如下命令： npm install babel-preset-es2015 --save-dev;
    放弃了，还是全部引入吧，一个个的引入，太慢了。
    2、快速生产vue模板，在 .vue 文件中输入vue 或者 自己在vscode 中配置模板即可。
    3、调用接口，怎么能缺少 axios，执行命令： npm install axios

#### 2021年5月30日05:59:06 （第三天，周天）
    目标：
    1、练习 路由守卫；
