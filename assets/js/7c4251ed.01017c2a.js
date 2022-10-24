"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7799],{9137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const l={},i="Freshdesk",s={unversionedId:"integrations/sources/freshdesk",id:"integrations/sources/freshdesk",title:"Freshdesk",description:"This page guides you through the process of setting up the Freshdesk source connector.",source:"@site/../docs/integrations/sources/freshdesk.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/freshdesk",permalink:"/integrations/sources/freshdesk",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/freshdesk.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Freshcaller",permalink:"/integrations/sources/freshcaller"},next:{title:"Freshsales",permalink:"/integrations/sources/freshsales"}},o={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up Freshdesk",id:"step-1-set-up-freshdesk",level:2},{value:"Get Domain URL",id:"get-domain-url",level:3},{value:"Get Freshdesk API Key",id:"get-freshdesk-api-key",level:3},{value:"Step 2: Set up the Freshdesk connector in Airbyte",id:"step-2-set-up-the-freshdesk-connector-in-airbyte",level:2},{value:"Supported sync modes &amp; Features",id:"supported-sync-modes--features",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"freshdesk"},"Freshdesk"),(0,n.kt)("p",null,"This page guides you through the process of setting up the Freshdesk source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Freshdesk Account"),(0,n.kt)("li",{parentName:"ul"},"Domain URL"),(0,n.kt)("li",{parentName:"ul"},"Freshdesk API Key")),(0,n.kt)("h2",{id:"step-1-set-up-freshdesk"},"Step 1: Set up Freshdesk"),(0,n.kt)("h3",{id:"get-domain-url"},"Get Domain URL"),(0,n.kt)("p",null,"You can find your domain URL by logging into your account and check the URL in your browser, the domain url should look like: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://myaccount.freshdesk.com/..."),", where ",(0,n.kt)("inlineCode",{parentName:"p"},"myaccount.freshdesk.com")," - is your domain URL."),(0,n.kt)("h3",{id:"get-freshdesk-api-key"},"Get Freshdesk API Key"),(0,n.kt)("p",null,"Follow the link to read more about ",(0,n.kt)("a",{parentName:"p",href:"https://support.freshdesk.com/support/solutions/articles/215517"},"how to find your API key"),". You need the admin permissions to access the account settings."),(0,n.kt)("h2",{id:"step-2-set-up-the-freshdesk-connector-in-airbyte"},"Step 2: Set up the Freshdesk connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into your ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Airbyte Cloud")," account. "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),". "),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Freshdesk")," from the Source type dropdown and enter a name for this connector. "),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"Domain URL"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"Freshdesk API Key"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose the ",(0,n.kt)("inlineCode",{parentName:"li"},"Start Date")," as the starting point for your data replication."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to local Airbyte page."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),". "),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Freshdesk")," from the Source type dropdown and enter a name for this connector. "),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"Domain URL"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"Freshdesk API Key"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose the ",(0,n.kt)("inlineCode",{parentName:"li"},"Start Date")," as the starting point for your data replication."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes--features"},"Supported sync modes & Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("p",null,"The Freshdesk supports full refresh and incremental sync. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run. There are two types of incremental sync:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"server level ","(","native",")"," - when API supports filter on specific columns that Airbyte use to track changes ","(",(0,n.kt)("inlineCode",{parentName:"li"},"updated_at"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"created_at"),", etc",")"),(0,n.kt)("li",{parentName:"ul"},"client level - when API doesn't support filter and Airbyte performs filtration on its side.")),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"Several output streams are available from this source:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#agents"},"Agents")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#companies"},"Companies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#contacts"},"Contacts")," ","(","Native Incremental Sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#conversations"},"Conversations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#groups"},"Groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#roles"},"Roles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#satisfaction-ratings"},"Satisfaction Ratings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#skills"},"Skills")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#surveys"},"Surveys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#tickets"},"Tickets")," ","(","Native Incremental Sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#time-entries"},"Time Entries"))),(0,n.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The Freshdesk connector should not run into Freshdesk API limitations under normal usage. Please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17410"},"17410")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream states.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17249"},"17249")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added nullable to all stream schemas, added transformation into declared schema types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17243"},"17243")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed the issue, when selected stream is not available due to Subscription Plan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15378"},"15378")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allow backward compatibility for input configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14049"},"14049")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update parsing of start_date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13332"},"13332")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add new streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12334"},"12334")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implement with latest CDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8682"},"8682")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to the CDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8524"},"8524")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8017"},"8017")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bugfix an issue that caused the connector to not sync more than 50000 contacts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7486"},"7486")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Include "requester" and "stats" fields in "tickets" stream')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6442"},"6442")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add start_date parameter to specification from which to start pulling data.")))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),k=n,c=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return a?r.createElement(c,i(i({ref:t},d),{},{components:a})):r.createElement(c,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);