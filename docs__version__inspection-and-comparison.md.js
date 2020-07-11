(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[80],{VhbD:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),c=(n("B2uJ"),n("+su7"),n("qOys")),r=n.n(c);n("5Yjd");a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u68c0\u67e5\u548c\u6bd4\u8f83"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u68c0\u67e5\u548c\u6bd4\u8f83"},l.a.createElement("span",{className:"icon icon-link"})),"\u68c0\u67e5\u548c\u6bd4\u8f83"),l.a.createElement("h2",{id:"\u65e5\u5fd7-git-log"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u65e5\u5fd7-git-log"},l.a.createElement("span",{className:"icon icon-link"})),"\u65e5\u5fd7 git log"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"Show commit logs"),l.a.createElement("p",null,"\u7528\u4e8e\u663e\u793a\u63d0\u4ea4\u65e5\u5fd7\u4fe1\u606f")),l.a.createElement("p",null,l.a.createElement("code",null,"git log ")," \u547d\u4ee4\u7528\u4e8e\u663e\u793a\u63d0\u4ea4\u65e5\u5fd7\u4fe1\u606f\u3002"),l.a.createElement("p",null,"\u8be5\u547d\u4ee4\u91c7\u7528\u9002\u7528\u4e8e ",l.a.createElement("code",null,"git rev-list")," \u547d\u4ee4\u7684\u9009\u9879\u6765\u63a7\u5236\u663e\u793a\u7684\u5185\u5bb9\u4ee5\u53ca\u5982\u4f55\u4ee5\u53ca\u9002\u7528\u4e8e ",l.a.createElement("code",null,"git diff- *")," \u547d\u4ee4\u7684\u9009\u9879\uff0c\u4ee5\u63a7\u5236\u5982\u4f55\u66f4\u6539\u6bcf\u4e2a\u63d0\u4ea4\u5f15\u5165\u7684\u5185\u5bb9\u3002"),l.a.createElement("h3",{id:"\u67e5\u770b\u63d0\u4ea4\u65e5\u5fd7"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u770b\u63d0\u4ea4\u65e5\u5fd7"},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u63d0\u4ea4\u65e5\u5fd7"),l.a.createElement("p",null,"\ud83d\udcd6 ",l.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),l.a.createElement(r.a,{code:"# \u67e5\u770b\u6240\u6709\u63d0\u4ea4\u8bb0\u5f55\n$ git log\n\n# \u67e5\u770b\u6307\u5b9a\u6b21\u6570\u63d0\u4ea4\u8bb0\u5f55\n$ git log -n\n\n# \u6839\u636eID\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55\n$ git log <commit-id>\n\n# \u6839\u636e\u591a\u4e2aID\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55\n$ git log <commit1_id> <commit2_id>\n\n# \u67e5\u770b\u6700\u540e\u4e00\u6b21\u63d0\u4ea4\u8bb0\u5f55\n$ git log HEAD\n\n# \u67e5\u770b\u5012\u6570\u7b2c\u4e8c\u6b21\u63d0\u4ea4\u8bb0\u5f55\n$ git log HEAD^\n$ git log HEAD~1\n",lang:"bash"}),l.a.createElement("p",null,"\u67e5\u770b\u6700\u8fd1\u4e09\u6b21\u7684\u63d0\u4ea4\u65e5\u5fd7\u3002"),l.a.createElement(r.a,{code:"$ git log -3\n",lang:"bash"}),l.a.createElement(r.a,{code:"$ git log c5f8a258babf5eec54edc794ff980d8340396592\n",lang:"bash"}),l.a.createElement("h3",{id:"\u67e5\u770b\u547d\u4ee4\u65e5\u5fd7"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u770b\u547d\u4ee4\u65e5\u5fd7"},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u547d\u4ee4\u65e5\u5fd7"),l.a.createElement("p",null,"\ud83d\udcd6 ",l.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),l.a.createElement(r.a,{code:"$ git relog\n",lang:"bash"}),l.a.createElement("h2",{id:"\u5dee\u5f02-git-diff"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5dee\u5f02-git-diff"},l.a.createElement("span",{className:"icon icon-link"})),"\u5dee\u5f02 git diff"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"how changes between commits, commit and working tree, etc"),l.a.createElement("p",null,"\u7528\u4e8e\u663e\u793a\u63d0\u4ea4\u548c\u5de5\u4f5c\u6811\u7b49\u4e4b\u95f4\u7684\u66f4\u6539\u3002\u6b64\u547d\u4ee4\u6bd4\u8f83\u7684\u662f\u5de5\u4f5c\u76ee\u5f55\u4e2d\u5f53\u524d\u6587\u4ef6\u548c\u6682\u5b58\u533a\u57df\u5feb\u7167\u4e4b\u95f4\u7684\u5dee\u5f02,\u4e5f\u5c31\u662f\u4fee\u6539\u4e4b\u540e\u8fd8\u6ca1\u6709\u6682\u5b58\u8d77\u6765\u7684\u53d8\u5316\u5185\u5bb9\u3002")),l.a.createElement("h3",{id:"\u67e5\u770b\u5de5\u4f5c\u533a\u4e0e\u6682\u5b58\u533a\u5dee\u5f02"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u770b\u5de5\u4f5c\u533a\u4e0e\u6682\u5b58\u533a\u5dee\u5f02"},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u5de5\u4f5c\u533a\u4e0e\u6682\u5b58\u533a\u5dee\u5f02"),l.a.createElement("p",null,"\u67e5\u770b\u6587\u4ef6\u5728\u5de5\u4f5c\u533a\u4e0e\u6682\u5b58\u533a\u7684\u5dee\u522b\u3002"),l.a.createElement("p",null,"\ud83d\udcd6 ",l.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),l.a.createElement(r.a,{code:"$ git diff <filename>\n",lang:"bash"}),l.a.createElement("p",null,"\u5982\u679c\u8fd8\u6ca1 add \u5230\u6682\u5b58\u533a\uff0c\u5219\u67e5\u770b\u6587\u4ef6\u81ea\u8eab\u4fee\u6539\u524d\u540e\u7684\u5dee\u522b\u3002\u4e5f\u53ef\u67e5\u770b\u548c\u53e6\u4e00\u5206\u652f\u7684\u533a\u522b\u3002"),l.a.createElement("p",null,"\ud83d\udcd6 ",l.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),l.a.createElement(r.a,{code:"$ git diff <branch /> <filename>\n",lang:"bash"}),l.a.createElement("h3",{id:"\u67e5\u6682\u5b58\u533a\u4e0e\u6700\u8fd1\u7248\u672c\u7684\u5dee\u5f02"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u6682\u5b58\u533a\u4e0e\u6700\u8fd1\u7248\u672c\u7684\u5dee\u5f02"},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u6682\u5b58\u533a\u4e0e\u6700\u8fd1\u7248\u672c\u7684\u5dee\u5f02"),l.a.createElement("p",null,"\u8868\u793a\u67e5\u770b\u5df2\u7ecf add \u8fdb\u6682\u5b58\u533a\u4f46\u662f\u5c1a\u672a commit \u7684\u5185\u5bb9\u540c\u6700\u65b0\u4e00\u6b21 commit \u65f6\u7684\u5185\u5bb9\u7684\u5dee\u5f02\u3002"),l.a.createElement("p",null,"\ud83d\udcd6 ",l.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),l.a.createElement(r.a,{code:"$ git diff --cached <filename>\n",lang:"bash"}),l.a.createElement("p",null,"\u5982\u679c\u4f60\u8981\u6bd4\u8f83\u6307\u5b9a\u4ed3\u5e93\u7248\u672c\u3002"),l.a.createElement("p",null,"\ud83d\udcd6 ",l.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),l.a.createElement(r.a,{code:"$ git diff --cached <commit> <filename>\n",lang:"bash"}),l.a.createElement("h3",{id:"\u67e5\u770b\u5de5\u4f5c\u533a\u4e0e\u6700\u8fd1\u7248\u672c\u95f4\u5dee\u5f02"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u770b\u5de5\u4f5c\u533a\u4e0e\u6700\u8fd1\u7248\u672c\u95f4\u5dee\u5f02"},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u5de5\u4f5c\u533a\u4e0e\u6700\u8fd1\u7248\u672c\u95f4\u5dee\u5f02"),l.a.createElement("p",null,"\u67e5\u770b\u5de5\u4f5c\u533a\u540c Git \u4ed3\u5e93\u6307\u5b9a\u63d0\u4ea4\u7248\u672c\u7684\u5dee\u5f02\u3002"),l.a.createElement("p",null,"\ud83d\udcd6 ",l.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),l.a.createElement(r.a,{code:"$ git diff <commit> <filename>\n",lang:"bash"}),l.a.createElement("h3",{id:"\u67e5\u770b\u63d0\u4ea4\u7248\u672c\u95f4\u7684\u5dee\u5f02"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u770b\u63d0\u4ea4\u7248\u672c\u95f4\u7684\u5dee\u5f02"},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u63d0\u4ea4\u7248\u672c\u95f4\u7684\u5dee\u5f02"),l.a.createElement("p",null,"\ud83d\udcd6 ",l.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),l.a.createElement(r.a,{code:"$ git diff <commit> <commit>\n",lang:"bash"}),l.a.createElement("h3",{id:"\u67e5\u770b\u5de5\u4f5c\u533a\u3001\u6682\u5b58\u533a\u548c\u6700\u8fd1\u7248\u672c\u95f4\u7684\u5dee\u5f02"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u770b\u5de5\u4f5c\u533a\u3001\u6682\u5b58\u533a\u548c\u6700\u8fd1\u7248\u672c\u95f4\u7684\u5dee\u5f02"},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u5de5\u4f5c\u533a\u3001\u6682\u5b58\u533a\u548c\u6700\u8fd1\u7248\u672c\u95f4\u7684\u5dee\u5f02"),l.a.createElement("p",null,"\ud83d\udcd6 ",l.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),l.a.createElement(r.a,{code:"$ git diff HEAD\n",lang:"bash"})))}}}]);