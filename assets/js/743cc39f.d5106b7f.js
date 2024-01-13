"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[740],{2801:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(5893),s=n(1151);const i={description:"Starting server",slug:"/start-server",sidebar_position:7},d="Start Server",o={id:"guide/start-server",title:"Start Server",description:"Starting server",source:"@site/docs/guide/start-server.md",sourceDirName:"guide",slug:"/start-server",permalink:"/docs/start-server",draft:!1,unlisted:!1,editUrl:"https://github.com/labstack/echox/blob/master/website/docs/guide/start-server.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Starting server",slug:"/start-server",sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Error Handling",permalink:"/docs/error-handling"},next:{title:"IP Address",permalink:"/docs/ip-address"}},a={},c=[{value:"HTTP Server",id:"http-server",level:2},{value:"HTTPS Server",id:"https-server",level:2},{value:"Auto TLS Server with Let\u2019s Encrypt",id:"auto-tls-server-with-lets-encrypt",level:2},{value:"HTTP/2 Cleartext Server (HTTP2 over HTTP)",id:"http2-cleartext-server-http2-over-http",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"start-server",children:"Start Server"}),"\n",(0,t.jsx)(r.p,{children:"Echo provides following convenience methods to start the server:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"Echo.Start(address string)"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"Echo.StartTLS(address string, certFile, keyFile interface{})"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"Echo.StartAutoTLS(address string)"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"Echo.StartH2CServer(address string, h2s *http2.Server)"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"Echo.StartServer(s *http.Server)"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"http-server",children:"HTTP Server"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Echo.Start"})," is convenience method that starts http server with Echo serving requests."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\n  e := echo.New()\n  // add middleware and routes\n  // ...\n  if err := e.Start(":8080"); err != http.ErrServerClosed {\n    log.Fatal(err)\n  }\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Following is equivalent to ",(0,t.jsx)(r.code,{children:"Echo.Start"})," previous example"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\n  e := echo.New()\n  // add middleware and routes\n  // ...\n  s := http.Server{\n    Addr:        ":8080",\n    Handler:     e,\n    //ReadTimeout: 30 * time.Second, // customize http.Server timeouts\n  }\n  if err := s.ListenAndServe(); err != http.ErrServerClosed {\n    log.Fatal(err)\n  }\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"https-server",children:"HTTPS Server"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Echo.StartTLS"})," is convenience method that starts HTTPS server with Echo serving requests on given address and uses\n",(0,t.jsx)(r.code,{children:"server.crt"})," and ",(0,t.jsx)(r.code,{children:"server.key"})," as TLS certificate pair."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\n  e := echo.New()\n  // add middleware and routes\n  // ...\n  if err := e.StartTLS(":8443", "server.crt", "server.key"); err != http.ErrServerClosed {\n    log.Fatal(err)\n  }\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Following is equivalent to ",(0,t.jsx)(r.code,{children:"Echo.StartTLS"})," previous example"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\n  e := echo.New()\n  // add middleware and routes\n  // ...\n  s := http.Server{\n    Addr:    ":8443",\n    Handler: e, // set Echo as handler\n    TLSConfig: &tls.Config{\n      //MinVersion: 1, // customize TLS configuration\n    },\n    //ReadTimeout: 30 * time.Second, // use custom timeouts\n  }\n  if err := s.ListenAndServeTLS("server.crt", "server.key"); err != http.ErrServerClosed {\n    log.Fatal(err)\n  }\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"auto-tls-server-with-lets-encrypt",children:"Auto TLS Server with Let\u2019s Encrypt"}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"/docs/cookbook/auto-tls#server",children:"Auto TLS Recipe"})]}),"\n",(0,t.jsx)(r.h2,{id:"http2-cleartext-server-http2-over-http",children:"HTTP/2 Cleartext Server (HTTP2 over HTTP)"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Echo.StartH2CServer"})," is convenience method that starts a custom HTTP/2 cleartext server on given address"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\n  e := echo.New()\n  // add middleware and routes\n  // ...\n  s := &http2.Server{\n    MaxConcurrentStreams: 250,\n    MaxReadFrameSize:     1048576,\n    IdleTimeout:          10 * time.Second,\n  }\n  if err := e.StartH2CServer(":8080", s); err != http.ErrServerClosed {\n    log.Fatal(err)\n  }\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Following is equivalent to ",(0,t.jsx)(r.code,{children:"Echo.StartH2CServer"})," previous example"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func main() {\n  e := echo.New()\n  // add middleware and routes\n  // ...\n  h2s := &http2.Server{\n    MaxConcurrentStreams: 250,\n    MaxReadFrameSize:     1048576,\n    IdleTimeout:          10 * time.Second,\n  }\n  s := http.Server{\n    Addr:    ":8080",\n    Handler: h2c.NewHandler(e, h2s),\n  }\n  if err := s.ListenAndServe(); err != http.ErrServerClosed {\n    log.Fatal(err)\n  }\n}\n'})})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>d});var t=n(7294);const s={},i=t.createContext(s);function d(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);