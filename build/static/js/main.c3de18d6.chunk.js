(this.webpackJsonptraineeclient=this.webpackJsonptraineeclient||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},129:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var r=n(30),s=n(3),c=n(1),i=n.n(c),a=n(34),l=n.n(a),o=(n(114),n(108)),j=n(43),d=n(18),x=n(96),b=function(e){var t=e.letter,n=e.color;return Object(s.jsx)("h3",{style:{color:n},children:t})},h=function(){return Object(s.jsx)("footer",{className:"mt-5",children:Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",borderTop:"solid 1px #D5D8DC",marginBottom:"5px"},children:[Object(s.jsx)(b,{letter:"T",color:"#F7DC6F"}),Object(s.jsx)(b,{letter:"r",color:"#7DCEA0"}),Object(s.jsx)(b,{letter:"a",color:"#73C6B6"}),Object(s.jsx)(b,{letter:"i",color:"#76D7C4"}),Object(s.jsx)(b,{letter:"n",color:"#85C1E9"}),Object(s.jsx)(b,{letter:"e",color:"#7FB3D5"}),Object(s.jsx)(b,{letter:"e",color:"#BB8FCE"}),Object(s.jsx)(b,{letter:"s",color:"#C39BD3"})]})})},u=n(22),O=n(46),m=n(20),p=i.a.createContext(),g=i.a.createContext();function f(e,t){if(t.me)return Object(r.a)(Object(r.a)({},e),{},{me:t.me,isAdmin:t.me&&"admin"===t.me.role});switch(t.type){case"LOGIN_SUCCESS":return Object(r.a)(Object(r.a)({},e),{},{isAuthenticated:!0});case"SIGN_OUT_SUCCESS":return Object(r.a)(Object(r.a)({},e),{},{isAuthenticated:!1,isAdmin:null,me:null});default:throw new Error("Unhandled action type: ".concat(t.type))}}function y(e){var t=e.children,n=i.a.useReducer(f,{isAuthenticated:!!localStorage.getItem("id_token"),isAdmin:null,me:null}),r=Object(u.a)(n,2),c=r[0],a=r[1];return Object(s.jsx)(p.Provider,{value:c,children:Object(s.jsx)(g.Provider,{value:a,children:t})})}function C(){var e=i.a.useContext(p);if(void 0===e)throw new Error("useUserState must be used within a UserProvider");return e}function v(){var e=i.a.useContext(g);if(void 0===e)throw new Error("useUserDispatch must be used within a UserProvider");return e}n(115);var S=n(35);function w(){var e=Object(O.a)(["\n  mutation logout {\n    logout\n  }\n"]);return w=function(){return e},e}var k=Object(m.gql)(w()),I=function(e){var t=e.letter,n=e.color;return Object(s.jsx)("h3",{style:{color:n},children:t})},E=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(m.useMutation)(k),a=Object(u.a)(i,1)[0],l=C(),o=v(),x=Object(m.useApolloClient)(),b=Object(d.g)(),h=function(e){return r(!n)},O=function(){return r(!n)};return Object(s.jsxs)("header",{children:[Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"center",borderBottom:"solid 1px #D5D8DC",marginBottom:"5px"},children:[Object(s.jsx)(I,{letter:"T",color:"#F7DC6F"}),Object(s.jsx)(I,{letter:"r",color:"#7DCEA0"}),Object(s.jsx)(I,{letter:"a",color:"#73C6B6"}),Object(s.jsx)(I,{letter:"i",color:"#76D7C4"}),Object(s.jsx)(I,{letter:"n",color:"#85C1E9"}),Object(s.jsx)(I,{letter:"e",color:"#7FB3D5"}),Object(s.jsx)(I,{letter:"e",color:"#BB8FCE"}),Object(s.jsx)(I,{letter:"s",color:"#C39BD3"})]}),n?Object(s.jsx)(S.h,{onClick:h,style:{fontSize:"32px"}}):Object(s.jsx)(S.f,{onClick:h,style:{fontSize:"32px"}}),n&&Object(s.jsxs)("ul",{className:"header-ul",children:[Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{onClick:function(){return O()},to:"/",children:"Inicio"})}),l.isAuthenticated?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{onClick:function(){return O()},to:"/profile",children:"Perfil"})}),Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{to:"/singin",onClick:function(){a().then((function(){localStorage.removeItem("id_token"),x.clearStore(),o({type:"SIGN_OUT_SUCCESS"}),b.push("/singin"),O()}))},children:"Cerrar sesi\xf3n"})})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{onClick:function(){return O()},to:"/singin",children:"Iniciar sesi\xf3n"})}),Object(s.jsx)("li",{children:Object(s.jsx)(j.b,{onClick:function(){return O()},to:"/singup",children:"Registrate"})})]})]})]})},N=function(e){var t=e.children;return Object(s.jsxs)(x.a,{fluid:!0,children:[Object(s.jsx)(E,{}),t,Object(s.jsx)(h,{})]})},D=n(64),A=n(97),B=n(56),F=n(54),R=(n(126),function(){return Object(s.jsx)("article",{className:"cardHome-container",children:Object(s.jsxs)(D.a,{children:[Object(s.jsxs)(A.a,{className:"cardHome-data-container",children:[Object(s.jsx)(B.a,{fluid:!0,rounded:!0,src:""}),Object(s.jsxs)(D.a,{className:"cardHome-data-info",children:[Object(s.jsx)("h5",{children:"Isaac Figueroa"}),Object(s.jsx)(A.a,{style:{textAlign:"right"},children:Object(s.jsxs)(D.a,{style:{marginRight:"15px"},children:[Object(s.jsx)(F.a,{style:{fontSize:"20px"}})," ",Object(s.jsx)(F.b,{style:{fontSize:"20px"}})," ",Object(s.jsx)(F.d,{style:{fontSize:"20px"}})," ",Object(s.jsx)(F.c,{style:{fontSize:"20px"}})," ",Object(s.jsx)(F.e,{style:{fontSize:"20px"}})]})}),Object(s.jsxs)("p",{style:{marginTop:"9px"},children:[Object(s.jsx)(S.e,{})," Buenos Aires, Argentina"]})]})]}),Object(s.jsxs)(A.a,{className:"cardHome-footer-container",children:[Object(s.jsxs)(D.a,{children:[Object(s.jsx)(S.b,{}),"17"]}),Object(s.jsxs)(D.a,{children:["Ver perfil ",Object(s.jsx)(S.a,{})]})]})]})})}),q=(n(127),n(39)),T=q.Row,P=q.Col,U=function(){return Object(s.jsxs)(T,{className:"filter_container",children:[Object(s.jsx)(P,{className:"filter_item",children:"Filtrar"}),Object(s.jsx)(P,{className:"filter_item",children:"Ordenar"})]})},_=n(101),L=n(66),z=n(45),H=(n(129),function(){return Object(s.jsx)(A.a,{className:"jumbotron-container",children:Object(s.jsxs)(_.a,{inline:!0,children:[Object(s.jsx)(L.a,{type:"text",placeholder:"Profesi\xf3n..."}),Object(s.jsx)(z.a,{variant:"dark",type:"submit",children:"Buscar"})]})})}),M=function(e){return Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"20px 0 20px 0"},children:[Object(s.jsx)(B.a,{fluid:!0,rounded:!0,src:"https://via.placeholder.com/100.png/09f/fff",alt:"2"}),Object(s.jsx)(B.a,{fluid:!0,rounded:!0,src:"https://via.placeholder.com/100.png/10f/fff",alt:"2"}),Object(s.jsx)(B.a,{fluid:!0,rounded:!0,src:"https://via.placeholder.com/100.png/14f/fff",alt:"2"})]})},Z=function(){return Object(s.jsxs)(x.a,{fluid:!0,children:[Object(s.jsx)("p",{children:"http://localhost:4000/graphql"}),Object(s.jsx)("p",{children:"http://localhost:4000/graphql"}),Object(s.jsx)(H,{}),Object(s.jsx)(M,{}),Object(s.jsx)(U,{}),Object(s.jsx)(R,{}),Object(s.jsx)(R,{})]})},$=n(33),G=n(75),W=n(53);function J(){var e=Object(O.a)(["\n    mutation login($input:LoginInput){\n       login(input:$input){\n        token\n        user{\n            email\n            active\n            role\n        }\n       }\n    }\n"]);return J=function(){return e},e}var V=Object($.gql)(J()),Q=function(){var e=Object(m.useMutation)(V),t=Object(u.a)(e,2),n=t[0],r=t[1].loading,i=Object(G.a)(),a=i.register,l=i.handleSubmit,o=i.errors,j=Object(c.useState)(null),x=Object(u.a)(j,2),b=x[0],h=x[1],O=Object(d.g)(),p=v();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(A.a,{style:{width:"100%",marginTop:"2rem",marginBottom:"1rem"},children:[Object(s.jsxs)(D.a,{xs:12,md:6,children:[Object(s.jsx)("h3",{className:"text-center",children:"Iniciar sesi\xf3n"}),Object(s.jsx)(B.a,{fluid:!0,src:"https://cdn.logo.com/hotlink-ok/logo-social.png"}),b&&Object(s.jsx)("h2",{children:b})]}),Object(s.jsx)(D.a,{xs:12,md:6,children:Object(s.jsxs)(_.a,{onSubmit:l((function(e){n({variables:{input:{email:e.email,password:e.password}}}).then((function(e){p({type:"LOGIN_SUCCESS"}),localStorage.setItem("id_token",e.data.login.token),O.push("/")})).catch((function(e){h(e.message)}))})),children:[Object(s.jsx)(_.a.Label,{column:!0,sm:"2",children:"Email"}),Object(s.jsxs)(D.a,{children:[Object(s.jsx)(_.a.Control,{name:"email",type:"email",autoComplete:"off",ref:a({required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})}),o.email&&Object(s.jsx)("p",{children:o.email.message})]}),Object(s.jsx)(_.a.Label,{column:!0,sm:"2",children:"Contrase\xf1a"}),Object(s.jsxs)(D.a,{children:[Object(s.jsx)(_.a.Control,{name:"password",autoComplete:"off",type:"password",ref:a({required:"Password is required"})}),o.password&&Object(s.jsx)("p",{children:o.password.message})]}),Object(s.jsx)(D.a,{sm:"10",children:Object(s.jsx)(z.a,{variant:"primary",className:"mt-3",type:"submit",disabled:!!r,children:r?"Ingresando":"Ingresar"})})]})})]}),Object(s.jsx)("h6",{className:"text-center",children:"O inici\xe1 con"}),Object(s.jsxs)(A.a,{style:{display:"flex",justifyContent:"center"},children:[Object(s.jsx)(D.a,{xs:2,sm:1,children:Object(s.jsx)(z.a,{variant:"light",children:Object(s.jsx)(W.a,{style:{color:"blue"}})})}),Object(s.jsx)(D.a,{xs:2,sm:1,children:Object(s.jsx)(z.a,{variant:"light",children:Object(s.jsx)(W.b,{})})})]})]})};function K(){var e=Object(O.a)(["\n    mutation registerUser($input:RegisterUserInput){\n       registerUser(input:$input)\n    }\n"]);return K=function(){return e},e}var X=Object($.gql)(K()),Y=function(){var e=Object(m.useMutation)(X),t=Object(u.a)(e,2),n=t[0],r=t[1].loading,i=Object(G.a)(),a=i.register,l=i.handleSubmit,o=i.errors,j=Object(c.useState)(null),d=Object(u.a)(j,2),x=d[0],b=d[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(A.a,{style:{width:"100%",marginTop:"2rem",marginBottom:"1rem"},children:[Object(s.jsxs)(D.a,{xs:12,md:6,children:[Object(s.jsx)("h3",{className:"text-center",children:"Registrate"}),Object(s.jsx)(B.a,{fluid:!0,src:"https://cdn.logo.com/hotlink-ok/logo-social.png"}),x&&Object(s.jsx)("h2",{children:x})]}),Object(s.jsx)(D.a,{xs:12,md:6,children:Object(s.jsxs)(_.a,{onSubmit:l((function(e){n({variables:{input:{name:e.name,email:e.email,password:e.password}}}).then((function(e){var t=e.data.registerUser;console.log(t),b(!1===t?"Email en uso":"Registrado correctamente")})).catch((function(e){console.log(e)}))})),children:[Object(s.jsx)(_.a.Label,{column:!0,sm:"2",children:"Nombre"}),Object(s.jsxs)(D.a,{children:[Object(s.jsx)(_.a.Control,{name:"name",type:"Name",autoComplete:"off",ref:a({required:"Name is required"})}),o.name&&Object(s.jsx)("p",{children:o.name.message})]}),Object(s.jsx)(_.a.Label,{column:!0,sm:"2",children:"Email"}),Object(s.jsxs)(D.a,{children:[Object(s.jsx)(_.a.Control,{name:"email",type:"email",autoComplete:"off",ref:a({required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})}),o.email&&Object(s.jsx)("p",{children:o.email.message})]}),Object(s.jsx)(_.a.Label,{column:!0,sm:"2",children:"Contrase\xf1a"}),Object(s.jsxs)(D.a,{children:[Object(s.jsx)(_.a.Control,{name:"password",autoComplete:"off",type:"password",ref:a({required:"Password is required"})}),o.password&&Object(s.jsx)("p",{children:o.password.message})]}),Object(s.jsx)(D.a,{sm:"10",children:Object(s.jsx)(z.a,{variant:"primary",className:"mt-3",type:"submit",disabled:!!r,children:r?"Registrando":"Registrarme"})})]})})]}),Object(s.jsx)("h6",{className:"text-center",children:"O inici\xe1 con"}),Object(s.jsxs)(A.a,{style:{display:"flex",justifyContent:"center"},children:[Object(s.jsx)(D.a,{xs:2,sm:1,children:Object(s.jsx)(z.a,{variant:"light",children:Object(s.jsx)(W.a,{style:{color:"blue"}})})}),Object(s.jsx)(D.a,{xs:2,sm:1,children:Object(s.jsx)(z.a,{variant:"light",children:Object(s.jsx)(W.b,{})})})]})]})},ee=n(98);function te(){var e=Object(O.a)(["\n    query Profile {\n    profile {\n      name\n      email\n      role\n      smtpEmail\n      smtpPassword\n      smtpHost\n      smtpPort\n      smtpSubject\n      emailTemplate\n       } \n    }\n"]);return te=function(){return e},e}var ne=Object(m.gql)(te()),re=function(){var e=Object(m.useQuery)(ne),t=e.error,n=e.loading,r=e.data;return n?Object(s.jsx)(s.Fragment,{children:"Loading"}):(t&&console.log(t.message),console.log(r),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(A.a,{children:[Object(s.jsx)(D.a,{style:{display:"flex",justifyContent:"center",margin:"20px 0px 20px 0px"},xs:12,children:Object(s.jsx)(B.a,{roundedCircle:!0,src:"https://via.placeholder.com/100.png/09f/fff",alt:""})}),Object(s.jsxs)(D.a,{xs:12,children:[Object(s.jsx)("h6",{className:"text-center",children:"Isaac Figueroa"}),Object(s.jsx)("p",{className:"text-center",style:{color:"#7DCEA0"},children:" Developer"})]})]}),Object(s.jsxs)(A.a,{style:{justifyContent:"center",borderBottom:"solid 1px #F7DC6F",borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px"},children:[Object(s.jsx)("div",{style:{padding:"5px",margin:"5px"},children:Object(s.jsxs)("p",{style:{fontWeight:"600"},children:["Solicitudes",Object(s.jsx)(ee.a,{variant:"light",children:"9"}),Object(s.jsx)("span",{className:"sr-only",children:"unread messages"})]})}),Object(s.jsx)("div",{style:{padding:"5px",margin:"5px"},children:Object(s.jsxs)("p",{style:{fontWeight:"600"},children:["Visto",Object(s.jsx)(ee.a,{variant:"light",children:"9"}),Object(s.jsx)("span",{className:"sr-only",children:"unread messages"})]})}),Object(s.jsx)("div",{style:{padding:"5px",margin:"5px"},children:Object(s.jsxs)("p",{style:{fontWeight:"600"},children:["Mensajes",Object(s.jsx)(ee.a,{variant:"light",children:"9"}),Object(s.jsx)("span",{className:"sr-only",children:"unread messages"})]})})]}),Object(s.jsxs)(A.a,{style:{marginTop:"2rem",padding:"10px",borderRadius:"5px"},children:[Object(s.jsx)(D.a,{xs:11,style:{display:"flex",alignItems:"center",height:"2rem",padding:"10px"},children:Object(s.jsxs)("h6",{style:{color:"#85929E"},children:[" ",Object(s.jsx)(S.e,{style:{fontSize:"19px"}})," Glew, Buenos Aires"]})}),Object(s.jsx)(D.a,{xs:11,style:{display:"flex",alignItems:"center",height:"2rem",padding:"10px"},children:Object(s.jsxs)("h6",{style:{color:"#85929E"},children:[" ",Object(s.jsx)(S.g,{style:{fontSize:"19px"}})," 1122960568"]})}),Object(s.jsx)(D.a,{xs:11,style:{display:"flex",alignItems:"center",height:"2rem",padding:"10px"},children:Object(s.jsxs)("h6",{style:{color:"#85929E"},children:[Object(s.jsx)(S.d,{style:{fontSize:"19px"}}),"   isaac2010411@gmail.com"]})}),Object(s.jsx)(D.a,{xs:11,style:{display:"flex",alignItems:"center",height:"2rem",padding:"10px"},children:Object(s.jsxs)("h6",{style:{color:"#85929E"},children:[Object(s.jsx)(S.c,{style:{fontSize:"19px"}}),"   http://isaac.com.ar"]})})]}),Object(s.jsxs)(A.a,{style:{marginTop:"2rem",padding:"10px"},children:[Object(s.jsx)(D.a,{xs:12,style:{borderRadius:"5px",backgroundColor:"#F7DC6F",marginTop:"15px"},children:Object(s.jsx)(D.a,{xs:12,style:{height:"4rem",borderRadius:"5px",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(s.jsx)("h6",{children:"Datos personales"})})}),Object(s.jsx)(D.a,{xs:12,style:{borderRadius:"5px",backgroundColor:"#7DCEA0",marginTop:"15px"},children:Object(s.jsx)(D.a,{xs:12,style:{height:"4rem",borderRadius:"5px",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(s.jsx)("h6",{children:"Estudios"})})}),Object(s.jsx)(D.a,{xs:12,style:{borderRadius:"5px",backgroundColor:"#73C6B6",marginTop:"15px"},children:Object(s.jsx)(D.a,{xs:12,style:{height:"4rem",borderRadius:"5px",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(s.jsx)("h6",{children:"Idiomas"})})}),Object(s.jsx)(D.a,{xs:12,style:{borderRadius:"5px",backgroundColor:"#76D7C4",marginTop:"15px"},children:Object(s.jsx)(D.a,{xs:12,style:{height:"4rem",borderRadius:"5px",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(s.jsx)("h6",{children:"Aptitudes"})})}),Object(s.jsx)(D.a,{xs:12,style:{borderRadius:"5px",backgroundColor:"#85C1E9",marginTop:"15px"},children:Object(s.jsx)(D.a,{xs:12,style:{height:"4rem",borderRadius:"5px",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(s.jsx)("h6",{children:"Experiencia"})})}),Object(s.jsx)(D.a,{xs:12,style:{borderRadius:"5px",backgroundColor:"#7FB3D5",marginTop:"15px"},children:Object(s.jsx)(D.a,{xs:12,style:{height:"4rem",borderRadius:"5px",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(s.jsx)("h6",{children:"Portfolio"})})})]})]}))};function se(e){var t=e.component,n=Object(o.a)(e,["component"]),c=C().isAuthenticated;return Object(s.jsx)(d.b,Object(r.a)(Object(r.a)({},n),{},{render:function(e){return c?i.a.createElement(t,e):Object(s.jsx)(d.a,{to:{pathname:"/singin",state:{from:e.location}}})}}))}var ce=function(){return Object(s.jsx)(j.a,{children:Object(s.jsx)(N,{children:Object(s.jsxs)(d.d,{children:[Object(s.jsx)(d.b,{exact:!0,path:"/",component:Z}),Object(s.jsx)(d.b,{exact:!0,path:"/singup",component:Y}),Object(s.jsx)(d.b,{exact:!0,path:"/singin",component:Q}),Object(s.jsx)(se,{exact:!0,path:"/profile",component:re})]})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))},ae=n(105),le=n(6),oe=n(107),je=(n(140),new m.HttpLink({uri:"http://localhost:4000/graphql",credentials:"same-origin"})),de=new ae.a({uri:"ws://localhost:4000/graphql/subscriptions",options:{reconnect:!0,connectionParams:{authToken:"isaac"}}}),xe=Object(oe.a)((function(e,t){var n=t.headers,s=localStorage.getItem("id_token");return{headers:Object(r.a)(Object(r.a)({},n),{},{authorization:s?"Bearer ".concat(s):""})}})),be=Object(m.split)((function(e){var t=e.query,n=Object(le.p)(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),de,je),he=new m.ApolloClient({cache:new m.InMemoryCache,link:xe.concat(be)});l.a.render(Object(s.jsx)(m.ApolloProvider,{client:he,children:Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(y,{children:Object(s.jsx)(ce,{})})})}),document.getElementById("root")),ie()}},[[141,1,2]]]);
//# sourceMappingURL=main.c3de18d6.chunk.js.map