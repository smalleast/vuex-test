# vuex-test
Vue multipage app based on webpack.


## resources:
+ http://webpack.github.io/docs/multiple-entry-points.html
+ http://www.cnblogs.com/rubylouvre/p/5158923.html
+ https://github.com/alexanderGugel/ied
+ http://gugel.io/ied/
+ https://github.com/webpack/docs/wiki/how-to-write-a-plugin
+ https://ruby-china.org/topics/29630
+ http://www.tuicool.com/articles/B3QbEni
+ https://zhuanlan.zhihu.com/p/20397902
+ https://blog.pusher.com/exploring-real-time-apps-with-vuejs-es2016-and-webpack/
+ https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-part-ii
+ https://webpack.github.io/docs/webpack-dev-server.html
+ http://www.cnblogs.com/pingfan1990/p/5100147.html
+ http://www.tuicool.com/articles/IZfAby
+ http://www.cnblogs.com/ihardcoder/p/5623411.html
+ http://stackoverflow.com/questions/37031123/why-am-i-not-being-able-to-compile-sass-with-webpack


## todos:
- [ ] need yo generator.
- [x] hot reload & dev config file.
  + http://localhost:8080/webpack-dev-server/modules/auth
  + http://localhost:8080/webpack-dev-server/modules/detail
  + http://localhost:8080/webpack-dev-server/modules/home
  + http://localhost:8080/webpack-dev-server/modules/list
- [x] support vue 2.x

## build command:
  - scripts:
  ```json
  {
      "clean": "rimraf dist",
      "build": "npm run clean && cd src && webpack -p --config webpack.config.product.js",
      "dev": "npm run clean && cd src && webpack-dev-server --inline --progress --colors --port 8090 --config webpack.config.development.js"
  }
  ```

  - bash command:
  ```bash
  npm run clean
  npm run dev
  npm run build
  ```


## server config:
+ apache:
```apache
DocumentRoot /Users/feizheng/github/vuex-test/dist/
```

##
```
scss
@import "./components/*";

import-glob-loader

module: {
      preloaders: [{
        test: /\.scss/,
        loader: 'import-glob-loader'
      }],
      loaders: [{
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer')
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')
      },   {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass!import-glob-loader')
      },  {
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=8096&name=assets/images/[name].[ext]'
      }, {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8096&name=assets/fonts/[name].[ext]'
      }, {
        test: /\.(html|tpl)$/,
        loader: 'html-loader?minimize=false'
      }]
    }
```

##babel编译不过...三个点传对象的语法
```
 methods: {
      ...mapActions([
        'increment',
        'incrementIfOdd'
      ]),
      save: save
    }

  ```

  ##解决方法
  ```
  安装组件：babel-plugin-transform-object-rest-spread
  babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime','transform-object-rest-spread']
      }
  ```
