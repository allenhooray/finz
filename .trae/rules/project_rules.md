# 仓库与工程
- 这是一个 Monorepo 项目，项目结构如下：
  - packages
    - ui: 业务无关的通用的 UI 组件，使用 [shadcn-vue](https://www.shadcn-vue.com/llms.txt) 做 UI 组件库，可以调用对应的 MCP Server

# 代码风格
- 风格：
  - 文件名：
    - 使用首字母大写的驼峰命名法来命名 Class 文件
    - 使用小写中划线来命名其他文件
    - 页面：
      - 页面在 views 文件夹下
      - 每个页面都需要有一个对应的文件夹，文件夹名就是页面的路由名
      - 每个页面的文件夹下都需要有一个 index.vue 文件，文件名就是页面的路由名
  - 类型：需要有完整的 TypeScript 类型
  - 注释：
    - 使用 JSDoc 为变量和函数添加注释
    - 使用 // 为逻辑添加注释
  - 代码：
    - Class
      - private 变量和方法需要用 _ 开头
      - 响应式的变量（ref 或 reactive）需要用 $ 开头
- 编程逻辑：
  - 实现方法时需要判断是否能复用，如果能复用，判断应该是 utils 方法还是 service 服务
    - 如果是 utils 方法，需要放到 utils 文件夹下
    - 如果是 service 服务，需要放到 service 文件夹下