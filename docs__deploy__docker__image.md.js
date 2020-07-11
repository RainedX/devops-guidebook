(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{bw09:function(e,a,n){"use strict";n.r(a);var l=n("q1tI"),t=n.n(l),c=(n("B2uJ"),n("+su7"),n("qOys")),r=n.n(c);n("5Yjd");a["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u6784\u5efa\u955c\u50cf"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u6784\u5efa\u955c\u50cf"},t.a.createElement("span",{className:"icon icon-link"})),"\u6784\u5efa\u955c\u50cf"),t.a.createElement("p",null,"Docker \u8fd0\u884c\u5bb9\u5668\u524d\u9700\u8981\u672c\u5730\u5b58\u5728\u5bf9\u5e94\u7684\u955c\u50cf\uff0c\u5982\u679c\u672c\u5730\u4e0d\u5b58\u5728\u8be5\u955c\u50cf\uff0cDocker \u4f1a\u4ece\u955c\u50cf\u4ed3\u5e93\u4e0b\u8f7d\u8be5\u955c\u50cf\u3002"),t.a.createElement("h2",{id:"\u83b7\u53d6\u955c\u50cf"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u83b7\u53d6\u955c\u50cf"},t.a.createElement("span",{className:"icon icon-link"})),"\u83b7\u53d6\u955c\u50cf"),t.a.createElement("p",null,"\u4ece Docker \u955c\u50cf\u4ed3\u5e93\u83b7\u53d6\u955c\u50cf\u7684\u547d\u4ee4\u662f ",t.a.createElement("code",null,"docker pull"),"\u3002"),t.a.createElement(r.a,{code:"# \u683c\u5f0f\ndocker pull [\u9009\u9879] [Docker Registry \u5730\u5740[:\u7aef\u53e3\u53f7]/] \u4ed3\u5e93\u540d[:\u6807\u7b7e]\n\n# \u9ed8\u8ba4\u5b98\u65b9\u955c\u50cf\u5e93\u62c9\u53d6\uff0clatest \u6807\u7b7e\n$ docker pull ubuntu\n\n# \u6307\u5b9a\u7248\u672c\u6807\u7b7e\n$ docker pull ubuntu:18.04\n\n# \u6307\u5b9a\u4ed3\u5e93\u57df\u540d\uff08\u9ed8\u8ba4\u5b98\u65b9\u4ed3\u5e93\uff09\n$ docker pull library/ubuntu\n\n# \u7b2c\u4e09\u65b9\u670d\u52a1\u5546\u6216\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\n$ docker pull daocloud.io/library/ubuntu:latest\n",lang:"bash"}),t.a.createElement("ul",null,t.a.createElement("li",null,"Docker \u955c\u50cf\u4ed3\u5e93\u5730\u5740\uff1a\u5730\u5740\u7684\u683c\u5f0f\u4e00\u822c\u662f ",t.a.createElement("code",null,"<\u57df\u540d/IP>[:\u7aef\u53e3\u53f7]")," \u9ed8\u8ba4\u5730\u5740\u662f Docker Hub"),t.a.createElement("li",null,"\u4ed3\u5e93\u540d\uff1a\u8fd9\u91cc\u7684\u4ed3\u5e93\u540d\u662f\u4e24\u6bb5\u540d\u79f0\uff0c\u5373 ",t.a.createElement("code",null,"<\u7528\u6237\u540d>/<\u955c\u50cf\u540d>"),"\u3002\u5bf9\u4e8e Docker Hub\uff0c\u5982\u679c\u4e0d\u7ed9\u51fa\u7528\u6237\u540d\uff0c\u5219\u9ed8\u8ba4\u4e3a ",t.a.createElement("code",null,"library"),"\uff0c\u4e5f\u5c31\u662f\u5b98\u65b9\u955c\u50cf\u3002")),t.a.createElement("p",null,"\u4ece\u4e0b\u8f7d\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u4e4b\u524d\u63d0\u53ca\u7684\u5206\u5c42\u5b58\u50a8\u7684\u6982\u5ff5\uff0c\u955c\u50cf\u662f\u7531\u591a\u5c42\u5b58\u50a8\u6240\u6784\u6210\u3002\u4e0b\u8f7d\u4e5f\u662f\u4e00\u5c42\u5c42\u7684\u53bb\u4e0b\u8f7d\uff0c\u5e76\u975e\u5355\u4e00\u6587\u4ef6\u3002\u4e0b\u8f7d\u8fc7\u7a0b\u4e2d\u7ed9\u51fa\u4e86\u6bcf\u4e00\u5c42\u7684 ID \u7684\u524d 12 \u4f4d\u3002\u5e76\u4e14\u4e0b\u8f7d\u7ed3\u675f\u540e\uff0c\u7ed9\u51fa\u8be5\u955c\u50cf\u5b8c\u6574\u7684 ",t.a.createElement("code",null,"sha256")," \u7684\u6458\u8981\uff0c\u4ee5\u786e\u4fdd\u4e0b\u8f7d\u4e00\u81f4\u6027\u3002"),t.a.createElement("p",null,"\u5728\u4f7f\u7528\u4e0a\u9762\u547d\u4ee4\u7684\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\uff0c\u4f60\u6240\u770b\u5230\u7684\u5c42 ID \u4ee5\u53ca sha256 \u7684\u6458\u8981\u548c\u8fd9\u91cc\u7684\u4e0d\u4e00\u6837\u3002\u8fd9\u662f\u56e0\u4e3a\u5b98\u65b9\u955c\u50cf\u662f\u4e00\u76f4\u5728\u7ef4\u62a4\u7684\uff0c\u6709\u4efb\u4f55\u65b0\u7684 bug\uff0c\u6216\u8005\u7248\u672c\u66f4\u65b0\uff0c\u90fd\u4f1a\u8fdb\u884c\u4fee\u590d\u518d\u4ee5\u539f\u6765\u7684\u6807\u7b7e\u53d1\u5e03\uff0c\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u4efb\u4f55\u4f7f\u7528\u8fd9\u4e2a\u6807\u7b7e\u7684\u7528\u6237\u53ef\u4ee5\u83b7\u5f97\u66f4\u5b89\u5168\u3001\u66f4\u7a33\u5b9a\u7684\u955c\u50cf\u3002"),t.a.createElement("p",null,"\u6709\u4e86\u955c\u50cf\u540e\uff0c\u5c31\u80fd\u591f\u4ee5\u8be5\u955c\u50cf\u4e3a\u57fa\u7840\u542f\u52a8\u5e76\u8fd0\u884c\u5bb9\u5668\u3002\u5982\u679c\u6253\u7b97\u542f\u52a8\u540e\u5728\u5bb9\u5668\u5185\u8fd0\u884c ",t.a.createElement("code",null,"bash")," \u8fdb\u884c\u4ea4\u4e92\u64cd\u4f5c\u7684\u8bdd\uff0c\u53ef\u4ee5\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u3002"),t.a.createElement(r.a,{code:"# \u57fa\u4e8e\u955c\u50cf\u521b\u5efa\u5bb9\u5668\n$ docker run -it --rm <image-name> bash\n",lang:"bash"}),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"-i"),"\uff1a\u4ea4\u4e92\u5f0f\u64cd\u4f5c"),t.a.createElement("li",null,t.a.createElement("code",null,"-t"),"\uff1a\u7ec8\u7aef"),t.a.createElement("li",null,t.a.createElement("code",null,"--rm"),"\uff1a\u5bb9\u5668\u9000\u51fa\u540e\u968f\u4e4b\u5220\u9664\uff08\u4e00\u822c\u4e0d\u9700\u8981\uff0c\u8fd9\u91cc\u662f\u5c55\u793a\u9700\u6c42\uff09"),t.a.createElement("li",null,t.a.createElement("code",null,"<image-name>"),"\uff1a\u6307\u5b9a\u542f\u52a8\u5bb9\u5668\u7684\u955c\u50cf\u540d\u79f0\uff08\u5168\u79f0\uff09"),t.a.createElement("li",null,t.a.createElement("code",null,"bash"),"\uff1a\u653e\u5728\u955c\u50cf\u540d\u540e\u7684\u662f\u547d\u4ee4 \u542f\u52a8\u540e\u6267\u884c\u5bb9\u5668\u5185\u547d\u4ee4\u884c")),t.a.createElement("h2",{id:"\u67e5\u770b\u955c\u50cf\u4fe1\u606f"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u770b\u955c\u50cf\u4fe1\u606f"},t.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u955c\u50cf\u4fe1\u606f"),t.a.createElement(r.a,{code:"# \u5148\u67e5\u8be2\u9700\u8981\u67e5\u770b\u7684\u8be6\u7ec6\u4fe1\u606f\u7684\u955c\u50cf ID\n$ docker images\n\n# \u67e5\u770b\u8be6\u7ec6\u7684\u955c\u50cf\u4fe1\u606f\n$ docker inspect <iamge-id>\n\n# \u67e5\u770b\u955c\u50cf\u7684\u67d0\u4e00\u4e2a\u8be6\u7ec6\u4fe1\u606f\uff08.Os \u662f\u5176\u4e2d\u4e00\u4e2a\u5c5e\u6027\uff09\n$ docker inspect -f {{.Os}} <image-id>\n",lang:"bash"}),t.a.createElement("h2",{id:"\u67e5\u770b\u955c\u50cf\u5217\u8868"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u770b\u955c\u50cf\u5217\u8868"},t.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u955c\u50cf\u5217\u8868"),t.a.createElement(r.a,{code:"# \u6216\u8005\n$ docker images\n",lang:"bash"}),t.a.createElement("p",null,"\u5217\u8868\u5305\u542b\u4e86 ",t.a.createElement("code",null,"\u4ed3\u5e93\u540d"),"\u3001",t.a.createElement("code",null,"\u6807\u7b7e"),"\u3001",t.a.createElement("code",null,"\u955c\u50cf ID"),"\u3001",t.a.createElement("code",null,"\u521b\u5efa\u65f6\u95f4")," \u4ee5\u53ca\u6240\u5360\u7528\u7684\u7a7a\u95f4\u3002"),t.a.createElement("p",null,"\u955c\u50cf ID \u662f\u955c\u50cf\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u4e00\u4e2a\u955c\u50cf\u53ef\u4ee5\u5bf9\u5e94\u591a\u4e2a\u6807\u7b7e\u3002"),t.a.createElement("h3",{id:"\u7cfb\u7edf\u5360\u7528\u7a7a\u95f4"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u7cfb\u7edf\u5360\u7528\u7a7a\u95f4"},t.a.createElement("span",{className:"icon icon-link"})),"\u7cfb\u7edf\u5360\u7528\u7a7a\u95f4"),t.a.createElement(r.a,{code:"# \u67e5\u770b\u955c\u50cf\u3001\u5bb9\u5668\u3001\u6570\u636e\u5377\u6240\u5360\u7528\u7cfb\u7edf\u7a7a\u95f4\n$ docker system off\n",lang:"bash"}),t.a.createElement("h3",{id:"\u865a\u60ac\u955c\u50cf"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u865a\u60ac\u955c\u50cf"},t.a.createElement("span",{className:"icon icon-link"})),"\u865a\u60ac\u955c\u50cf"),t.a.createElement("p",null,"\u5728\u955c\u50cf\u5217\u8868\u4e2d\uff0c\u6709\u4e00\u4e9b\u7279\u6b8a\u7684\u955c\u50cf\uff0c\u8fd9\u4e2a\u955c\u50cf\u65e2\u6ca1\u6709\u4ed3\u5e93\u540d\uff0c\u4e5f\u6ca1\u6709\u6807\u7b7e\uff0c\u5747\u4e3a ",t.a.createElement("code",null,"<none>"),"\u3002"),t.a.createElement("p",null,"\u8fd9\u4e9b\u955c\u50cf\u539f\u672c\u662f\u6709\u955c\u50cf\u540d\u548c\u6807\u7b7e\u7684\uff0c\u4f46\u968f\u7740\u5b98\u65b9\u955c\u50cf\u7ef4\u62a4\uff0c\u53d1\u5e03\u4e86\u65b0\u7248\u672c\u540e\uff0c",t.a.createElement("code",null,"docker pull")," \u540e\u539f\u6765\u7684\u955c\u50cf\u540d\u79f0\u5c06\u4f1a\u88ab\u8f6c\u79fb\u5230\u65b0\u4e0b\u8f7d\u7684\u955c\u50cf\u8eab\u4e0a\uff0c\u800c\u65e7\u7684\u955c\u50cf\u4e0a\u8fd9\u4e2a\u540d\u79f0\u5219\u88ab\u53d6\u6d88\uff0c\u4ece\u800c\u6210\u4e3a\u4e86 ",t.a.createElement("code",null,"<none>"),"\u3002"),t.a.createElement("p",null,"\u7531\u4e8e\u65b0\u65e7\u955c\u50cf\u91cd\u540d\uff0c\u65e7\u955c\u50cf\u540d\u79f0\u88ab\u53d6\u6d88\uff0c\u4ece\u800c\u51fa\u73b0\u4ed3\u5e93\u540d\u3001\u6807\u7b7e\u540d\u5747\u4e3a ",t.a.createElement("code",null,"<none>")," \u7684\u955c\u50cf\u3002\u8fd9\u7c7b\u65e0\u6807\u7b7e\u955c\u50cf\u4e5f\u88ab\u79f0\u4e3a ",t.a.createElement("strong",null,"\u865a\u60ac\u955c\u50cf\uff08dangling image\uff09"),"\uff0c\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u4e13\u95e8\u663e\u793a\u8fd9\u7c7b\u955c\u50cf\u3002"),t.a.createElement(r.a,{code:"# \u663e\u793a\u6240\u6709 \u865a\u60ac\u955c\u50cf\n$ docker image ls -f dangling=true\n\n# \u4e00\u822c\u865a\u60ac\u955c\u50cf\u5df2\u7ecf\u5931\u53bb\u5b58\u5728\u7684\u4ef7\u503c\uff0c\u53ef\u4ee5\u968f\u610f\u5220\u9664\n$ docker image prune\n",lang:"bash"}),t.a.createElement("p",null,"\u67e5\u770b\u4e2d\u95f4\u5c42\u955c\u50cf\uff1a"),t.a.createElement(r.a,{code:"$ docker image ls -a\n",lang:"bash"}),t.a.createElement("p",null,"\u4e2d\u95f4\u5c42\u955c\u50cf\u4e0e\u865a\u60ac\u955c\u50cf\u867d\u6709\u7c7b\u4f3c\uff0c\u4f46\u662f\u8fd9\u4e9b\u955c\u50cf\u4e3a\u5176\u4ed6\u955c\u50cf\u6240\u4f9d\u8d56\uff0c\u56e0\u6b64\u8fd9\u4e9b\u65e0\u6807\u7b7e\u955c\u50cf\u4e0d\u5e94\u8be5\u88ab\u5220\u9664\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u4e0a\u5c42\u955c\u50cf\u56e0\u4e3a\u4f9d\u8d56\u4e22\u5931\u800c\u51fa\u9519\u3002"),t.a.createElement("h2",{id:"\u5220\u9664\u955c\u50cf"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5220\u9664\u955c\u50cf"},t.a.createElement("span",{className:"icon icon-link"})),"\u5220\u9664\u955c\u50cf"),t.a.createElement("p",null,"\u5220\u9664\u672c\u5730\u7684\u955c\u50cf\uff0c\u5220\u9664\u524d\u786e\u4fdd\u955c\u50cf\u672a\u88ab\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u6240\u5f15\u7528\u3002"),t.a.createElement(r.a,{code:"# \u683c\u5f0f\n$ docker rmi [\u9009\u9879] <image-id> <image-id> ...\n\n# \u793a\u4f8b\n$ docker rmi 7ba3cc636d5f\n",lang:"bash"}),t.a.createElement("p",null,"\u5176\u4e2d\uff0c",t.a.createElement("code",null,"<\u955c\u50cf>")," \u53ef\u4ee5\u662f ",t.a.createElement("code",null,"\u955c\u50cf\u77ed ID"),"\u3001",t.a.createElement("code",null,"\u955c\u50cf\u957f ID"),"\u3001",t.a.createElement("code",null,"\u955c\u50cf\u540d")," \u6216\u8005 ",t.a.createElement("code",null,"\u955c\u50cf\u6458\u8981"),"\u3002"),t.a.createElement("h2",{id:"\u5236\u4f5c\u955c\u50cf"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5236\u4f5c\u955c\u50cf"},t.a.createElement("span",{className:"icon icon-link"})),"\u5236\u4f5c\u955c\u50cf"),t.a.createElement("h3",{id:"\u5b9a\u5236\u955c\u50cf"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5b9a\u5236\u955c\u50cf"},t.a.createElement("span",{className:"icon icon-link"})),"\u5b9a\u5236\u955c\u50cf"),t.a.createElement(r.a,{code:"# -t \u6307\u5b9a\u955c\u50cf\u540d\u79f0\u548c\u6807\u7b7e\uff0c\u683c\u5f0f\u4e3a `name:tag` \uff0c\u6700\u540e\u7684\u70b9\u4ee3\u8868\u5f53\u524d\u76ee\u5f55\uff0c\u4e5f\u53ef\u4ee5\u6362\u6210\u5176\u4ed6\u7684\u8def\u5f84\n$ docker build -t <image-name>:v1 .\n",lang:"bash"}),t.a.createElement("h2",{id:"\u5bfc\u5165\u5bfc\u51fa\u955c\u50cf"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5bfc\u5165\u5bfc\u51fa\u955c\u50cf"},t.a.createElement("span",{className:"icon icon-link"})),"\u5bfc\u5165\u5bfc\u51fa\u955c\u50cf"),t.a.createElement("h3",{id:"\u538b\u7f29\u5305\u5bfc\u5165"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u538b\u7f29\u5305\u5bfc\u5165"},t.a.createElement("span",{className:"icon icon-link"})),"\u538b\u7f29\u5305\u5bfc\u5165"),t.a.createElement("p",null,"\u9664\u4e86\u6807\u51c6\u7684\u4f7f\u7528 Dockerfile \u751f\u6210\u955c\u50cf\u7684\u65b9\u6cd5\u5916\uff0c\u7531\u4e8e\u5404\u79cd\u7279\u6b8a\u9700\u6c42\u548c\u5386\u53f2\u539f\u56e0\uff0c\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5176\u5b83\u65b9\u6cd5\u7528\u4ee5\u751f\u6210\u955c\u50cf\u3002"),t.a.createElement(r.a,{code:"$ docker import [\u9009\u9879] <\u6587\u4ef6>|<URL>|- [<\u4ed3\u5e93\u540d>[:<\u6807\u7b7e>]]\n",lang:"bash"}),t.a.createElement("p",null,"\u538b\u7f29\u5305\u53ef\u4ee5\u662f\u672c\u5730\u6587\u4ef6\u3001\u8fdc\u7a0b Web \u6587\u4ef6\uff0c\u751a\u81f3\u662f\u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u5f97\u5230\u3002\u538b\u7f29\u5305\u5c06\u4f1a\u5728\u955c\u50cf ",t.a.createElement("code",null,"/")," \u76ee\u5f55\u5c55\u5f00\uff0c\u5e76\u76f4\u63a5\u4f5c\u4e3a\u955c\u50cf\u7b2c\u4e00\u5c42\u63d0\u4ea4\u3002"),t.a.createElement(r.a,{code:"# \u5bfc\u5165\u955c\u50cf\n$ docker import \\\n\n# \u67e5\u770b\u5bfc\u5165\u7684\u5bfc\u5165\u7684\u955c\u50cf\n$ docker image ls <image-name>\n\n# \u67e5\u770b\u5176\u6784\u5efa\u5386\u53f2\n$ docker history <image-name>\n",lang:"bash"}),t.a.createElement("h3",{id:"\u547d\u4ee4\u5bfc\u5165"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u547d\u4ee4\u5bfc\u5165"},t.a.createElement("span",{className:"icon icon-link"})),"\u547d\u4ee4\u5bfc\u5165"),t.a.createElement("p",null,"Docker \u8fd8\u63d0\u4f9b\u4e86 ",t.a.createElement("code",null,"docker save")," \u548c ",t.a.createElement("code",null,"docker load")," \u547d\u4ee4\uff0c\u7528\u4ee5\u5c06\u955c\u50cf\u4fdd\u5b58\u4e3a\u4e00\u4e2a\u6587\u4ef6\uff0c\u7136\u540e\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\u4e0a\uff0c\u518d\u52a0\u8f7d\u8fdb\u6765\u3002\u8fd9\u662f\u5728\u6ca1\u6709 Docker Registry \u65f6\u7684\u505a\u6cd5\uff0c\u73b0\u5728\u5df2\u7ecf\u4e0d\u63a8\u8350\uff0c\u955c\u50cf\u8fc1\u79fb\u5e94\u8be5\u76f4\u63a5\u4f7f\u7528 Docker Registry\uff0c\u65e0\u8bba\u662f\u76f4\u63a5\u4f7f\u7528 Docker Hub \u8fd8\u662f\u4f7f\u7528\u5185\u7f51\u79c1\u6709 Registry \u90fd\u53ef\u4ee5\u3002"),t.a.createElement(r.a,{code:"# \u4fdd\u5b58\u955c\u50cf\uff08\u5c06\u955c\u50cf\u4fdd\u5b58\u4e3a\u5f52\u6863\u6587\u4ef6\uff09\n$ docker image ls <image-name>\n\n# \u4fdd\u5b58\u955c\u50cf\n$ docker save <image-name> -o filename\n",lang:"bash"}),t.a.createElement("h3",{id:"\u5bfc\u51fa\u955c\u50cf"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5bfc\u51fa\u955c\u50cf"},t.a.createElement("span",{className:"icon icon-link"})),"\u5bfc\u51fa\u955c\u50cf"),t.a.createElement(r.a,{code:"# \u67e5\u8be2\u5b98\u65b9\u955c\u50cf\n$ docker search java\n\n# \u83b7\u53d6\u955c\u50cf\n$ docker pull java\n\n# \u5bfc\u5165\u955c\u50cf\n$ docker save java > /home/java.tar.gz\n\n# \u5bfc\u51fa\u955c\u50cf\n$ docker load < /home/java.tar.gz\n\n# \u79fb\u9664\u955c\u50cf\n$ docker rmi java\n",lang:"bash"}),t.a.createElement("h2",{id:"\u4e0a\u4f20\u955c\u50cf"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u4e0a\u4f20\u955c\u50cf"},t.a.createElement("span",{className:"icon icon-link"})),"\u4e0a\u4f20\u955c\u50cf"),t.a.createElement(r.a,{code:"# \u5148\u5230 https://hub.docker.com/ \u6ce8\u518c\u8d26\u53f7\uff0c\u4fdd\u5b58\u8d26\u6237\u5bc6\u7801\n\n# \u63a7\u5236\u53f0\u767b\u5f55 dockerhub \u8d26\u6237\n$ docker login\n\n# \u67e5\u770b\u955c\u50cf\n$ docker images\n\n# \u9009\u62e9\u9700\u8981\u4e0a\u4f20\u7684\u955c\u50cf\uff0c\u91cd\u547d\u540d\u4e3a\u6307\u5b9a\u7684\u683c\u5f0f\n# name \u4e3a\u955c\u50cf\u540d\u79f0 new-name \u4e3a\u81ea\u5df1\u955c\u50cf\u8d77\u7684\u540d\u79f0 v1 \u4e3a\u4efb\u610f\u8bbe\u7f6e\u7684\u7248\u672c\u53f7\n$ docker tag <name> username/<new-name>:v1\n\n# \u63d0\u4ea4\u955c\u50cf\u5230\u81ea\u5df1\u7684\u4ed3\u5e93\n$ docker push username/<new-name>:v1\n",lang:"bash"}),t.a.createElement("p",null,"\u955c\u50cf\u52a0\u901f",t.a.createElement("a",{href:"https://www.jianshu.com/p/5a911f20d93e",target:"_blank",rel:"noopener noreferrer"},"https://www.jianshu.com/p/5a911f20d93e",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))))}}}]);