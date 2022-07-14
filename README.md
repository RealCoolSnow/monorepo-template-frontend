# monorepo-template-frontend

## 项目结构
    apps/vue3-app 
    packages/* 公共模块

## 全局安装pnpm
`npm i pnpm -g`

## 安装依赖
`pnpm i`

## 运行
`pnpm dev --filter "vue3-app"` 

## 构建
`pnpm build --filter "vue3-app"`

## 服务端构建
`build-vue3-app.sh #后面跟分支名称，不加分支默认为master`
