![Octo-Exam](https://socialify.git.ci/Lmmmmmm-bb/Octo-Exam/image?description=1&language=1&name=1&theme=Light)

<p align="center">
<a href="https://github.com/Lmmmmmm-bb/Octo-Exam"><img alt="GitHub license" src="https://img.shields.io/github/license/Lmmmmmm-bb/Octo-Exam"></a>
<a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"></a>
<a href="https://github.com/Lmmmmmm-bb/Octo-Exam/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Lmmmmmm-bb/Octo-Exam"></a>
<a href="https://github.com/Lmmmmmm-bb/Octo-Exam/pulls"><img alt="GitHub PR" src="https://img.shields.io/badge/PR-Welcome-%2345A2FF"></a>
<a href="https://github.com/Xujingling927/SpringBoot-Vue-OnlineExam"><img alt="Octo-Exam-BE" src="https://img.shields.io/badge/BE-Welcome-blue"></a>
</p>

## 技术栈

- Vite
- Vue3 + Vue-Router4 + Pinia
- Axios + Vue-Query
- ESLint + Prettier
- Commit Lint + Husky
- Element Plus + Tailwind CSS
- SCSS + SCSS-Typed-Modules
- pnpm

## 启动项目

```shell
# 开发调试
> pnpm install # 安装依赖
> pnpm run dev # 启动开发服务器
# 生产环境
> pnpm run build # 构建生产环境
> pnpm run preview # 本地预览
```

## 一些问题的解答

### Why Pinia not Vuex

由于 Vuex4 对 TS 的支持不太友好，Pinia 有更好的 TS 支持和函数式思想，提供的 API 简单，上手也更快，所以最后选择了 Pinia。[对比 Pinia 和 Vuex](https://pinia.vuejs.org/introduction.html#comparison-with-vuex)

### Commit Lint Friendly

仓库使用了 `commit-lint` 和 `cz-customizable`，请使用 `pnpm run commit` 代替 `git commit`。
