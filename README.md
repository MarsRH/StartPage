# StartPage

一个简单的起始页项目，使用Vue 3和Tailwind CSS构建。可以自定义显示。

A simple start page project built with Vue 3 and Tailwind CSS. Customizable display.

## 功能

- 自定义标题和背景图片
- 支持移动端背景图片
- 显示一言
- 自定义页脚信息
- 自定义顶部菜单
- 自定义站点列表

## Features

- Customizable title and background image
- Support for mobile background image
- Display a quote
- Customizable footer information
- Customizable top menu
- Customizable site list

## 快速开始

### 克隆仓库

```bash
git clone https://github.com/MarsRH/StartPage.git
cd startpage
```

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建项目

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## Quick Start

### Clone the repository

```bash
git clone https://github.com/MarsRH/StartPage.git
cd startpage
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build the project

```bash
npm run build
```

### Preview the build result

```bash
npm run preview
```

## 配置

你可以在`config.js`文件中配置以下内容：

- `title`: 页面标题
- `backgroundImageUrl`: 背景图片URL
- `moblieBackgroundImageUrl`: 移动端背景图片URL
- `showOneWord`: 是否显示一言
- `oneWordUrl`: 一言API URL
- `showFooter`: 是否显示页脚
- `footerText`: 页脚文字
- `topTitle`: 顶部标题
- `showMenu`: 是否显示顶部菜单
- `menu`: 顶部菜单项
- `sites`: 站点列表

## Configuration

You can configure the following in the `config.js` file:

- `title`: Page title
- `backgroundImageUrl`: Background image URL
- `moblieBackgroundImageUrl`: Mobile background image URL
- `showOneWord`: Whether to display a quote
- `oneWordUrl`: Quote API URL
- `showFooter`: Whether to display the footer
- `footerText`: Footer text
- `topTitle`: Top title
- `showMenu`: Whether to display the top menu
- `menu`: Top menu items
- `sites`: Site list

## 目录结构

```plaintext
startpage/
├── public/                # 公共资源
├── src/                   # 源代码
│   ├── components/        # Vue组件
│   ├── App.vue            # 主应用组件
│   └── main.js            # 入口文件
├── config.js              # 配置文件
├── package.json           # 项目配置文件
├── README.md              # 项目说明文件
└── vite.config.js         # Vite配置文件
```

## Directory Structure

```plaintext
startpage/
├── public/                # Public resources
├── src/                   # Source code
│   ├── components/        # Vue components
│   ├── App.vue            # Main application component
│   └── main.js            # Entry file
├── config.js              # Configuration file
├── package.json           # Project configuration file
├── README.md              # Project README file
└── vite.config.js         # Vite configuration file
```

## 许可证

该项目使用MIT许可证。

## License

This project is licensed under the MIT License.
