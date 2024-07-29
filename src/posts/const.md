---
title: "const 常量的使用"
imgUrl: "/post-images/vim-essentials-cheatsheet.jpg"
# youtubeId: "80mWp6H4zEw"
publishedAt: "2024-07-26"
summary: "简要介绍了cpp中const常量的使用以及注意事项"
---

# const 常量

## 特性

const可以修饰变量和指针

- 必须初始化
- 不能修改

## const常量和宏定义常量有什么区别？

### 发生时机不同

1. const 常量在编译阶段定义
2. 宏定义在预处理阶段

### 类型检查

1. const 常量会由编译器进行类型检查，更安全不易出错
2. 宏定义没有类型检查，只是进行简单的文本替换

### 作用域

- const 常量遵循普通的变量作用域规则，具有块级作用域。
- 宏定义没有作用域限制，它是全局性的，可以在定义点之后的任何位置使用。

_~定义常量尽量使用const或者枚举类型enum~_

## const修饰指针

- **const修饰指针本身** -> 指针常量_const pointer_：
  即 const 在 int\* 后面

```cpp
int x = 10;
int y = 20;
int *const ptr = &x; // ptr是一个常量指针，指向int类型的对象

*ptr = 30; // 合法，通过ptr修改了所指向对象x的值为30
ptr = &y;  // 非法，ptr是常量，不能修改指针的值
```

- **const修饰指针所指向的对象** -> 常量指针_pointer to const_：
  即 const 在 int*前面 也可以写成 const在*前面

```cpp
int x = 10;
const int *ptr = &x; // ptr是一个指向常量int类型对象的指针
//等同于 int const *ptr
*ptr = 20; // 非法，ptr指向的是一个常量对象，不能通过ptr修改其值
ptr++;     // 合法，因为ptr本身不是常量，可以改变指针的指向
```

- **const同时修饰指针和指针所指向的对象**：
  即 const 同时在 int\* 的前面和后面

```cpp
int x = 10;
const int *const ptr = &x; // ptr是一个常量指针，指向常量int类型的对象

*ptr = 20; // 非法，ptr指向的是一个常量对象，不能通过ptr修改其值
ptr++;     // 非法，ptr本身是常量，不能修改指针的值
```
