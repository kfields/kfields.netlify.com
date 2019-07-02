---
title: "Botworx"
date: 2018-09-15 07:42:34
description: BDI Agent Framework
cover: "https://i.imgur.com/XpzLX41.png"
slug: "botworx"
category: ""
tags:
  - BDI
---

[https://botworx.blogspot.com/](https://botworx.blogspot.com/)

Originally implemented in C++ with a custom Lisp interpreter I wrote, then C#, and now Javascript using a DSL that resembles Python.

This was an attempt to combine deliberative and reactive programming in the same framework.  It implements forward chaining using simple rules.  The C# version has a crude Hierarchical Task Network implementation that clones generators, scary stuff.  The reactive part basically is like a behavior tree using asynchronous tasks.