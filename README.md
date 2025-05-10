# 微信小程序商城系统

## 项目简介
这是一个简单的微信小程序商城系统，旨在提供基本的电商功能，包括商品展示、购物车、用户个人信息管理等。该项目结构清晰，易于扩展，适合初学者和开发者进行二次开发。

## 项目结构
```
wechat-mall
├── miniprogram
│   ├── app.js                     // 小程序入口文件
│   ├── app.json                   // 小程序配置文件
│   ├── app.wxss                    // 全局样式文件
│   ├── pages                       // 页面目录
│   │   ├── index                   // 首页
│   │   │   ├── index.js            // 首页逻辑
│   │   │   ├── index.json          // 首页配置
│   │   │   ├── index.wxml          // 首页结构
│   │   │   └── index.wxss          // 首页样式
│   │   ├── product                 // 产品详情页
│   │   │   ├── product.js          // 产品逻辑
│   │   │   ├── product.json        // 产品配置
│   │   │   ├── product.wxml        // 产品结构
│   │   │   └── product.wxss        // 产品样式
│   │   ├── cart                    // 购物车页
│   │   │   ├── cart.js             // 购物车逻辑
│   │   │   ├── cart.json           // 购物车配置
│   │   │   ├── cart.wxml           // 购物车结构
│   │   │   └── cart.wxss           // 购物车样式
│   │   └── profile                 // 用户个人信息页
│   │       ├── profile.js          // 用户信息逻辑
│   │       ├── profile.json        // 用户信息配置
│   │       ├── profile.wxml        // 用户信息结构
│   │       └── profile.wxss        // 用户信息样式
│   ├── utils                       // 工具函数目录
│   │   └── request.js              // 网络请求工具
│   ├── components                  // 组件目录
│   │   └── product-card            // 产品卡片组件
│   │       ├── product-card.js     // 产品卡片逻辑
│   │       ├── product-card.json   // 产品卡片配置
│   │       ├── product-card.wxml   // 产品卡片结构
│   │       └── product-card.wxss   // 产品卡片样式
│   └── static                     // 静态资源目录
│       └── styles                  // 样式目录
│           └── common.wxss         // 公共样式
├── project.config.json             // 项目配置文件
└── README.md                       // 项目文档
```

## 功能概述
- **首页**：展示商品列表，用户可以浏览商品。
- **产品详情页**：展示单个产品的详细信息，用户可以查看产品描述和价格。
- **购物车**：用户可以将商品添加到购物车，查看购物车中的商品。
- **用户个人信息页**：用户可以查看和修改个人信息。

## 使用说明
1. 克隆项目到本地。
2. 使用微信开发者工具打开 `miniprogram` 目录。
3. 根据需要修改和扩展功能。

## 扩展性
该项目结构清晰，易于添加新功能和页面。开发者可以根据需求添加新的产品类别、用户功能或其他电商相关功能。
## 本地开发环境搭建说明

1. **安装微信开发者工具**
   - 前往 [微信公众平台](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) 下载并安装微信开发者工具。

2. **克隆项目代码**
   ```bash
   git clone https://your-repository-url.git
   cd wechat-mall
   ```

3. **安装依赖**
   - 如果项目中使用了 npm 构建工具，请确保已安装 [Node.js](https://nodejs.org/)。
   - 在项目根目录下运行以下命令安装依赖：
     ```bash
     npm install
     ```

4. **导入项目**
   - 打开微信开发者工具，选择“导入项目”。
   - 选择 `wechat-mall/miniprogram` 目录作为项目路径。
   - 设置 AppID（如果没有 AppID，可选择“无 AppID 测试”）。

5. **启动项目**
   - 在微信开发者工具中点击“编译”按钮，预览小程序效果。
   - 确保微信开发者工具的“ES6 转 ES5”选项已开启。

6. **调试**
   - 使用微信开发者工具的调试功能，查看日志和网络请求。
   - 可通过工具中的“模拟器”查看不同设备的显示效果。

7. **目录说明**
   - `miniprogram`：小程序主目录，包含页面、组件、工具函数等。
   - `project.config.json`：微信开发者工具的项目配置文件。
