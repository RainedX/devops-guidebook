(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{"bx/X":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");t["default"]=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u8d1f\u8f7d\u5747\u8861"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u8d1f\u8f7d\u5747\u8861"},n.a.createElement("span",{className:"icon icon-link"})),"\u8d1f\u8f7d\u5747\u8861"),n.a.createElement("h2",{id:"gslb"},n.a.createElement("a",{"aria-hidden":"true",href:"#gslb"},n.a.createElement("span",{className:"icon icon-link"})),"GSLB"),n.a.createElement("blockquote",null,n.a.createElement("p",null,"GSLB \u662f\u82f1\u6587 Global Server Load Balance \u7684\u7f29\u5199\uff0c\u610f\u601d\u662f\u5168\u5c40\u8d1f\u8f7d\u5747\u8861\u3002\u4f5c\u7528\uff1a\u5b9e\u73b0\u5728\u5e7f\u57df\u7f51\uff08\u5305\u62ec\u4e92\u8054\u7f51\uff09\u4e0a\u4e0d\u540c\u5730\u57df\u7684\u670d\u52a1\u5668\u95f4\u7684\u6d41\u91cf\u8c03\u914d\uff0c\u4fdd\u8bc1\u4f7f\u7528\u6700\u4f73\u7684\u670d\u52a1\u5668\u670d\u52a1\u79bb\u81ea\u5df1\u6700\u8fd1\u7684\u5ba2\u6237\uff0c\u4ece\u800c\u786e\u4fdd\u8bbf\u95ee\u8d28\u91cf\u3002")),n.a.createElement("h2",{id:"slb"},n.a.createElement("a",{"aria-hidden":"true",href:"#slb"},n.a.createElement("span",{className:"icon icon-link"})),"SLB"),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u8d1f\u8f7d\u5747\u8861\uff08Server Load Balancer\uff0c\u7b80\u79f0 SLB\uff09\u662f\u4e00\u79cd\u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\uff0c\u9488\u5bf9\u963f\u91cc\u4e91\u5f39\u6027\u8ba1\u7b97\u5e73\u53f0\u800c\u8bbe\u8ba1\uff0c\u5728\u7cfb\u7edf\u67b6\u6784\u3001\u7cfb\u7edf\u5b89\u5168\u53ca\u6027\u80fd\uff0c\u6269\u5c55\uff0c\u517c\u5bb9\u6027\u8bbe\u8ba1\u4e0a\u90fd\u5145\u5206\u8003\u8651\u4e86\u5f39\u6027\u8ba1\u7b97\u5e73\u53f0\u4e91\u670d\u52a1\u5668\u4f7f\u7528\u7279\u70b9\u548c\u7279\u5b9a\u7684\u4e1a\u52a1\u573a\u666f\u3002")),n.a.createElement("h2",{id:"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u56db\u5c42\u8d1f\u8f7d\u5747\u8861"},n.a.createElement("span",{className:"icon icon-link"})),"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861"),n.a.createElement("h2",{id:"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861"},n.a.createElement("span",{className:"icon icon-link"})),"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861"),n.a.createElement("p",null,"\u914d\u7f6e\u8bed\u6cd5\uff1a"),n.a.createElement(c.a,{code:"syntax: upstream name{...}\ndefault: -\ncontext: http\n",lang:"bash"}),n.a.createElement("p",null,"\ud83c\udf30 ",n.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),n.a.createElement(c.a,{code:"upstream imooc {\n    server 116.62.103.228:8001;\n    server 116.62.103.228:8002;\n    server 116.62.103.228:8003;\n}\n\nserver {\n    listen 80;\n    server_name localhost jeson.t.imooc.io;\n\n    #charset koi8-r\n    access_log /var/log/nginx/test_proxy.access.log main;\n\n    location / {\n        proxy_pass http://imooc;\n        include proxy_params;\n    }\n\n    # error_page 404 /404.html\n}\n",lang:"nginx"}),n.a.createElement("p",null,n.a.createElement("strong",null,"\u540e\u7aef\u670d\u52a1\u5668\u5728\u8d1f\u8f7d\u5747\u8861\u8c03\u5ea6\u4e2d\u7684\u72b6\u6001")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5b57\u6bb5"),n.a.createElement("th",null,"\u4f5c\u7528"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"down"),n.a.createElement("td",null,"\u5f53\u524d\u7684 Server \u6682\u65f6\u4e0d\u53c2\u4e0e\u8d1f\u8f7d\u5747\u8861")),n.a.createElement("tr",null,n.a.createElement("td",null,"backup"),n.a.createElement("td",null,"\u9884\u7559\u7684\u5907\u4efd\u670d\u52a1\u5668")),n.a.createElement("tr",null,n.a.createElement("td",null,"max_fails"),n.a.createElement("td",null,"\u5141\u8bb8\u8bf7\u6c42\u5931\u8d25\u7684\u6b21\u6570")),n.a.createElement("tr",null,n.a.createElement("td",null,"fail_timeout"),n.a.createElement("td",null,"\u7ecf\u8fc7 max_fails \u5931\u8d25\u540e\uff0c\u670d\u52a1\u6682\u505c\u7684\u65f6\u95f4")),n.a.createElement("tr",null,n.a.createElement("td",null,"max_conns"),n.a.createElement("td",null,"\u9650\u5236\u6700\u5927\u7684\u63a5\u6536\u7684\u8fde\u63a5\u6570")))),n.a.createElement("h2",{id:"\u8c03\u5ea6\u7b97\u6cd5"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u8c03\u5ea6\u7b97\u6cd5"},n.a.createElement("span",{className:"icon icon-link"})),"\u8c03\u5ea6\u7b97\u6cd5"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5b57\u6bb5"),n.a.createElement("th",null,"\u4f5c\u7528"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"\u8f6e\u8be2"),n.a.createElement("td",null,"\u6309\u65f6\u95f4\u987a\u5e8f\u9010\u4e00\u5206\u914d\u5230\u4e0d\u540c\u7684\u540e\u7aef\u670d\u52a1\u5668")),n.a.createElement("tr",null,n.a.createElement("td",null,"\u52a0\u6743\u8f6e\u8be2"),n.a.createElement("td",null,"weight \u503c\u8d8a\u5927\uff0c\u5206\u914d\u5230\u7684\u8bbf\u95ee\u51e0\u7387\u8d8a\u9ad8")),n.a.createElement("tr",null,n.a.createElement("td",null,"ip_hash"),n.a.createElement("td",null,"\u6bcf\u4e2a\u8bf7\u6c42\u6309\u8bbf\u95ee ip \u7684 hash \u7ed3\u679c\u5206\u914d\uff0c\u8fd9\u6837\u6765\u81ea\u540c\u4e2a ip \u7684\u56fa\u5b9a\u8bbf\u95ee\u4e00\u4e2a\u540e\u7aef\u670d\u52a1\u5668")),n.a.createElement("tr",null,n.a.createElement("td",null,"least_conn"),n.a.createElement("td",null,"\u6700\u5c11\u94fe\u63a5\u6570\uff0c\u90a3\u4e2a\u673a\u5668\u8fde\u63a5\u6570\u5c11\u5c31\u5206\u652f")),n.a.createElement("tr",null,n.a.createElement("td",null,"url_hash"),n.a.createElement("td",null,"\u6309\u7167\u8bbf\u95ee\u7684 url \u7684 hash \u7ed3\u679c\u6765\u5206\u914d\u8bf7\u6c42\uff0c\u662f\u6bcf\u4e2a url \u5b9a\u5411\u5230\u540c\u4e00\u4e2a\u540e\u7aef\u670d\u52a1\u5668")),n.a.createElement("tr",null,n.a.createElement("td",null,"hash \u5173\u952e\u503c"),n.a.createElement("td",null,"hash \u81ea\u5b9a\u4e49\u7684 key")))),n.a.createElement("p",null,n.a.createElement("a",{href:"https://juejin.im/post/5e806d84e51d4546b659b370",target:"_blank",rel:"noopener noreferrer"},"https://juejin.im/post/5e806d84e51d4546b659b370",n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))))}}}]);