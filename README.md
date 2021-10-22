# @mr-hope/vuepress-runtime

This is a forked version from the origin [vuepress v1](https://github.com/vuejs/vuepress).

Since nobody is maintaining VuePress V1, it has a few known bugs and outdated deps. So here is this runtime for:

- Update deps to avoid deps conflict (which means droping Node V10)
- Bug fixes

## Changes

With latest deps:

- webpack V5
- markdown-it V12
- ... and so on

Bug fixes:

- Broken Media links containing none-ASII characters
- ... and so on

## Why should you use this intead of staying in V1

- A lot of people may still need Vue2
- The original one is having security alerts that can not be fixed
- Some project may use latest deps like Webpack5, and in that case the original V1 won't work.
- ...
