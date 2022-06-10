# vscode-code-to-type

## Js 代码快速生成 Ts Type 类型

1. 支持常见的数据类型：对象、数组、字符串、数字、函数等
2. 容忍错误的数据类型，无法解析的会使用 `any` 类型
3. 保留注释
4. 同位置合并为联合类型（支持可选）

使用方式：复制内容到剪贴板（浏览器接口返回的json、mock文档中的数据等等，只要是标准的数据格式都可以）

然后快捷键 `cmd` + `shift` + `v`，粘贴到任意位置即可

例如复制如下代码：

```js
[{
    name: '小明',
    age: 18
}, {
    name: '小华',
    age: 19
}, {
    name: '小狗',
    // 这里是个错误
    error:
}]
```

会被转换成

```ts
export type KType3035 = {
    name: string;
    age?: number;
    // 这里是个错误
    error?: any;
}[];
```
具体操作演示

![示例](https://github.com/jb-qian/vscode-code-to-type/raw/main/vscode-code-to-type.gif)
