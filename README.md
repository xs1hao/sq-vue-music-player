# my-vue 从 0 开始 我的 vue 项目

#### 2021年5月27日22:33:49 （第一天）
    . 时隔三年，在次手写一个vue项目，混迹于开发界已经快三年了，对写代码的认识也有了不少，那么现在再次从零开始，写一个VUE项目。
    . 先把 webpack 弄好吧，现在已经 webpack5 了，那就来个 webpack5 吧。
    . 对于一个已经使用 vue-cli 创建好的vue 项目，怎么快速添加webpck哩？

    1) 全局安装 npm i -g @vue/cli-init (这电脑不知道咋了，现在全局安装东西，都必须要以管理员身份运行cmd，TMD)；

    2) vue init webpack xxx （xxx为项目名称）--- 是的，他就开始运行了，又要让你做很多选择；

    这个时候，我发现，原来上面的命令，是又给我生成了一个 项目。我tm，原来如此，好吧，删了从来。
    3) 启动项目，在init项目的时候，使用了eslint 启动时会报了很多eslint 的错，修改webpakc /* eslint-loader */ 里面的配置: fix: true; 项目成功启动；
