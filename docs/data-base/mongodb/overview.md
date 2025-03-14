---
nav:
  title: 数据库
  order: 3
group:
  title: MongoDB
  order: 2
title: 基本概述
order: 1
---

# 基本概述

**Mongo** 来源于 Humongous 意为「庞大」。

面向文档存储的开源数据库：

- 性能好（内存计算）
- 大规模数据存储（可拓展性）
- 可靠安全（本地复制、自动故障转移）
- 方便存储复杂数据结构（Schema Free）

MongoDB 是一个基于分布式文件存储的开源文档数据库。由 C++ 语言编写。旨在为 Web 应用提供高性能、高可用性和高伸缩数据存储解决方案。

## 术语概念

| 关系型数据库术语 | MongoDB 术语 | 说明                                      |
| ---------------- | ------------ | ----------------------------------------- |
| database         | database     | 数据库                                    |
| table            | collection   | 数据库表 / 集合                             |
| row              | document     | 记录行 / 文档                               |
| column           | fIeld        | 数据字段 / 域                               |
| index            | index        | 索引                                      |
| primary key      | primary key  | 主键，MongoDB 自动将 `_id` 字段设置为主键 |

## 使用场景

```jsx | inline
import React from 'react';
import img from '../../assets/mongodb/mongodb-advantage.png';

export default () => <img alt="MongoDB优点" src={img} width="480" />;
```

- **数据缓存**：由于性能很高，MongoDB 适合作为信息基础设施的缓存层。在系统重启之后，由 MongoDB 搭建的持久化缓存层可以避免下层的数据源过载。
- **对象和 JSON 存储**：MongoDB 的 BSON(二进制 JSON)数据格式非常适合文档化格式的存储及查询,而且 JSON 格式存储最接近真实对象模型，对开发者友好，方便快速开发迭代,灵活的模式让你不在为了不断变化的需求而去频繁修改数据库字段和结构。
- **高伸缩性场景**：MongoDB 通过分片集群，使 MongoDB 服务能力易于水平扩展。
- **弱事务类型业务**：MongoDB 不支持多文档事务，所以像银行系统这种需要大量原子性复杂事务的程序不适合使用 MongoDB。（注：MongoDB 4.0 将支持跨文档的事务）。

## 数据库

一个 MongoDB 中可以建立多个数据库。

MongoDB 的默认数据库为 `"db"`，该数据库存储在 `data` 目录中。

MongoDB 的单个实例可以容纳多个独立的数据库，每一个都有自己的集合和权限，不同的数据库也放置在不同的文件中。

数据库也通过名字来标识。数据库名可以是满足以下条件的任意 UTF-8 字符串。

- 不能是空字符串（`""`)。
- 不得含有 `' '`（空格)、`.`、`$`、`/`、`\` 和 \0` (空字符)。
- 应全部小写。
- 最多 64 字节。

有一些数据库名是保留的，可以直接访问这些有特殊作用的数据库。

- **admin**： 从权限的角度来看，这是 `"root"` 数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。
- **local:** 这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合
- **config**: 当 Mongo 用于分片设置时，config 数据库在内部使用，用于保存分片的相关信息。

## 文档

文档是一组键值（key-value）对（即 BSON）。MongoDB 的文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型，这与关系型数据库有很大的区别，也是 MongoDB 非常突出的特点。

🌰 **示例：**

```js
{"site": "www.mrsingsing.com", "name": "MongoDB"}
```

下表列出了 RDBMS 与 MongoDB 对应的术语：

| RDBMS  | MongoDB                            |
| ------ | ---------------------------------- |
| 数据库 | 数据库                             |
| 表格   | 集合                               |
| 行     | 文档                               |
| 列     | 字段                               |
| 表联合 | 潜入文档                           |
| 主键   | 主键（MongoDB 提供了 `key` 为 `_id`） |

需要注意的是：

1. 文档中的键/值对是有序的
2. 文档中的值不仅可以是在双引号里面的字符串，还可以是其他几种数据类型（甚至可以是整个嵌入的文档)。
3. MongoDB 区分类型和大小写。
4. MongoDB 的文档不能有重复的键。
5. 文档的键是字符串。除了少数例外情况，键可以使用任意 UTF-8 字符。

文档键命名规范：

- 键不能含有 `0` (空字符)。这个字符用来表示键的结尾。
- `.` 和 `$` 有特别的意义，只有在特定环境下才能使用。
- 以下划线 `_` 开头的键是保留的（不是严格要求的）。

## 集合

集合就是 MongoDB 文档组，类似于 RDBMS （关系数据库管理系统：Relational Database Management System）中的表格。

集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性。

### 合法的集合名

- 集合名不能是空字符串 `""`
- 集合名不能含有 `\0` 字符（空字符)，这个字符表示集合名的结尾

- 集合不能以 `system.` 开头，这是为系统集合保留的前缀
- 用户创建的集合名字不能含有保留字符。有些驱动程序的确支持在集合名里面包含，这是因为某些系统生成的集合中包含该字符。除非你要访问这种系统创建的集合，否则千万不要在名字里出现 `$`
- 关系型数据库中的表（table）中的每一条数据（row）的格式是事先约定好的的，而 MongoDB 中的集合（collection）中文档（document）的数据格式是不固定的，也就是说我们可以将如下数据插入统一文档中。

```js
{"site":"www.wuhuan.me"}
{"site":"www.baidu.com","name":"百度"}
```

## 元数据

数据库的信息是存储在集合中。它们使用了系统的命名空间：

```
dbname.system.*
```

在 MongoDB 数据库中名字空间 `<dbname>.system.*` 是包含多种系统信息的特殊集合(Collection)，如下：

| 集合命名空间             | 描述                                    |
| ------------------------ | --------------------------------------- |
| dbname.system.namespaces | 列出所有名字空间                        |
| dbname.system.indexes    | 列出所有索引                            |
| dbname.system.profile    | 包含数据库概要（profile）信息           |
| dbname.system.users      | 列出所有可访问数据库的用户              |
| dbname.local.sources     | 包含复制对端（slave）的服务器信息和状态 |

对于修改系统集合中的对象有如下限制。

在 `{{system.indexes}}` 插入数据，可以创建索引。但除此之外该表信息是不可变的（特殊的 drop index 命令将自动更新相关信息）。

`{{system.users}}` 是可修改的。 `{{system.profile}}` 是可删除的。

## 数据类型

| 数据类型        | 说明                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| String          | 字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。                              |
| Integer         | 整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。                                       |
| Boolean         | 布尔值。用于存储布尔值（真/假）。                                                                          |
| Double          | 双精度浮点值。用于存储浮点值。                                                                             |
| Min/Max keys    | 将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。                                               |
| Array           | 用于将数组或列表或多个值存储为一个键。                                                                     |
| Timestamp       | 时间戳。记录文档修改或添加的具体时间。                                                                     |
| Object          | 用于内嵌文档。                                                                                             |
| Null            | 用于创建空值。                                                                                             |
| Symbol          | 符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。                     |
| Date            | 日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。 |
| Object ID       | 对象 ID。用于创建文档的 ID。                                                                               |
| Binary Data     | 二进制数据。用于存储二进制数据。                                                                           |
| Code            | 代码类型。用于在文档中存储 JavaScript 代码。                                                               |
| Regular express | 正则表达式类型。用于存储正则表达式。                                                                       |

### 文档主键

- 文档的主键的唯一性
- 支持所有数据类型（数组除外）
- 复合主键

### 对象主键

MongoDB 文档必须有一个**默认**的 `_id` 键（默认的文档主键），且在一个集合里 `_id` 始终唯一。`_id` 键可以是任何类型的，默认是个 **ObjectId** 对象，它由 MongoDB 数据库自动创建。MongoDB 使用 ObjectId 而不是使用常规做法（自增主键）主要原因是，在多个服务器（分布式）同步自动增加主键费力费时。

ObjectId 由 12 个字节的 BSON 组成：

- 前 4 个字节表示时间戳（如果多个文档同秒钟存储到数据库，对象主键精确度无法区分先后顺序；服务端创建，如果服务端时间不同也会有区别）
- 接下来的 3 个字节是机器标识码
- 紧接的两个字节由进程 id 组成（PID）
- 最后三个字节是随机数

**创建新的 ObjectId**

我们可以在命令行通过如下语句来创建一个新的 ObjectId

```bash
> newId = ObjectId()
```

上面语句将返回一个唯一 `_id`





