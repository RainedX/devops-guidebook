(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[115],{Yb7X:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),c=t("ZpkN");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5730\u5740\u91cd\u5b9a\u5411"},l.a.createElement(r["AnchorLink"],{to:"#\u5730\u5740\u91cd\u5b9a\u5411","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u5730\u5740\u91cd\u5b9a\u5411"),l.a.createElement("p",null,"\u5e94\u7528\u573a\u666f\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"URL \u8bbf\u95ee\u8df3\u8f6c\uff0c\u652f\u6301\u5f00\u53d1\u8bbe\u8ba1",l.a.createElement("ul",null,l.a.createElement("li",null,"\u9875\u9762\u8df3\u8f6c\u3001\u517c\u5bb9\u6027\u652f\u6301\u3001\u5c55\u793a\u6548\u679c\u7b49"))),l.a.createElement("li",null,"SEO \u4f18\u5316"),l.a.createElement("li",null,"\u7ef4\u62a4",l.a.createElement("ul",null,l.a.createElement("li",null,"\u540e\u53f0\u7ef4\u62a4\u3001\u6d41\u91cf\u8f6c\u53d1"))),l.a.createElement("li",null,"\u5b89\u5168")),l.a.createElement("p",null,"\u4f7f\u7528\u65b9\u5f0f\uff1a"),l.a.createElement(c["a"],{code:"rewrite ^(.*)$ /pages/maintain.html break;\n",lang:"nginx"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"\u5b57\u6bb5"),l.a.createElement("th",{align:"left"},"\u4f5c\u7528"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},l.a.createElement("code",null,"last")),l.a.createElement("td",{align:"left"},"\u505c\u6b62 rewrite \u68c0\u6d4b")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},l.a.createElement("code",null,"break")),l.a.createElement("td",{align:"left"},"\u505c\u6b62 rewrite \u68c0\u6d4b")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},l.a.createElement("code",null,"redirect")),l.a.createElement("td",{align:"left"},"\u8fd4\u56de 302 \u4e34\u65f6\u91cd\u5b9a\u5411\uff0c\u5730\u5740\u680f\u4f1a\u663e\u793a\u8df3\u8f6c\u540e\u7684\u5730\u5740")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},l.a.createElement("code",null,"permanent")),l.a.createElement("td",{align:"left"},"\u8fd4\u56de 301 \u6c38\u4e45\u91cd\u5b9a\u5411\uff0c\u5730\u5740\u680f\u4f1a\u663e\u793a\u8df3\u8f6c\u540e\u7684\u5730\u5740\uff08\u6d4f\u89c8\u5668\u4e0b\u6b21\u76f4\u63a5\u8bbf\u95ee\u91cd\u5b9a\u5411\u540e\u7684\u5730\u5740\uff09")))),l.a.createElement(c["a"],{code:'root /opt/app/code;\n\nlocation ~ ^/break {\n    rewrite ^/break /test/ break;\n}\n\nlocation ~ ^/last {\n    rewrite ^/last /test/ last;\n}\n\nlocation /test/ {\n    default_type application/json;\n    return 200 \'{"status": "success"}\'\n}\n\nlocation ~ ^/imooc {\n    #rewrite ^/imooc http://www.imooc.com/ permanent;\n    #rewrite ^/imooc http://www.imooc.com/ redirect;\n}\n',lang:"nginx"}),l.a.createElement("p",null,"\u89c4\u5219\u4f18\u5148\u7ea7\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6267\u884c server \u5757\u7684 rewrite \u6307\u4ee4"),l.a.createElement("li",null,"\u6267\u884c location \u5339\u914d"),l.a.createElement("li",null,"\u6267\u884c\u6307\u5b9a\u7684 location \u4e2d\u7684 rewrite")),l.a.createElement("h2",{id:"\u5e38\u7528-301-\u8df3\u8f6c"},l.a.createElement(r["AnchorLink"],{to:"#\u5e38\u7528-301-\u8df3\u8f6c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u5e38\u7528 301 \u8df3\u8f6c"),l.a.createElement(c["a"],{code:"# \u5c06 domain.com \u91cd\u5b9a\u5411\u5230 www.domain.com\nserver {\n  listen 80;\n  server_name domain.com;\n  rewrite ^/(.*) http://www.domain.com/$1 permanent;\n}\n\nserver {\n  listen 80;\n  server_name www.domain.com;\n  location / {\n    root html/brain;\n    index index.html index.htm;\n  }\n\n  access.log logs/brain.log.main gzip buffer=128k flush=5s;\n  error_page 500 502 503 504 /50x.html;\n  location = /50x.html {\n    root html;\n  }\n}\n",lang:"nginx"}),l.a.createElement("h2",{id:"\u8de8\u7aef\u9002\u914d"},l.a.createElement(r["AnchorLink"],{to:"#\u8de8\u7aef\u9002\u914d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u8de8\u7aef\u9002\u914d"),l.a.createElement("p",null,"Nginx \u53ef\u4ee5\u901a\u8fc7\u5185\u7f6e\u53d8\u91cf ",l.a.createElement("code",null,"$http_user_agent"),"\uff0c\u83b7\u53d6\u5230\u8bf7\u6c42\u5ba2\u6237\u7aef\u7684 ",l.a.createElement("code",null,"userAgent"),"\uff0c\u4ece\u800c\u77e5\u9053\u7528\u6237\u5904\u4e8e\u79fb\u52a8\u7aef\u8fd8\u662f PC \u7aef\uff0c\u8fdb\u800c\u63a7\u5236\u91cd\u5b9a\u5411\u5230 H5 \u7ad9\u8fd8\u662f PC \u7ad9\u3002"),l.a.createElement(c["a"],{code:"location / {\n    # \u5f53 userAgent \u4e2d\u68c0\u6d4b\u5230\u79fb\u52a8\u7aef\u8bbe\u5907\n    if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {\n        set $mobile_request '1';\n    }\n    # \u5219\u91cd\u5b9a\u5411\u81f3\n    if ($mobile_request = '1') {\n        rewrite ^.+ http://h5.example.com;\n    }\n}\n",lang:"nginx"})))}}}]);