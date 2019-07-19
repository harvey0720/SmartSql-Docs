(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{221:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"aop-事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aop-事务","aria-hidden":"true"}},[t._v("#")]),t._v(" AOP 事务")]),t._v(" "),s("h2",{attrs:{id:"nuget-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuget-packages","aria-hidden":"true"}},[t._v("#")]),t._v(" Nuget Packages")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Package")]),t._v(" "),s("th",[t._v("NuGet Stable")]),t._v(" "),s("th",[t._v("Downloads")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"https://www.nuget.org/packages/SmartSql.AOP/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SmartSql.AOP"),s("OutboundLink")],1)]),t._v(" "),s("td",[s("a",{attrs:{href:"https://www.nuget.org/packages/SmartSql.AOP/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/nuget/v/SmartSql.AOP.svg",alt:"SmartSql.AOP"}}),s("OutboundLink")],1)]),t._v(" "),s("td",[s("a",{attrs:{href:"https://www.nuget.org/packages/SmartSql.AOP/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/nuget/dt/SmartSql.AOP.svg",alt:"SmartSql.AOP"}}),s("OutboundLink")],1)])])])]),t._v(" "),s("h2",{attrs:{id:"transactionattribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactionattribute","aria-hidden":"true"}},[t._v("#")]),t._v(" TransactionAttribute")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddWithTran")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _userRepository"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"事务嵌套"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务嵌套","aria-hidden":"true"}},[t._v("#")]),t._v(" 事务嵌套")]),t._v(" "),s("blockquote",[s("p",[t._v("当出现事务嵌套时，子函数的事务特性注解将不再开启，转而使用上级调用函数的事务")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddWithTranWrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddWithTran")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);