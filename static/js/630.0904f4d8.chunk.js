"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[630],{1630:function(s,t,e){e.r(t),e.d(t,{default:function(){return G}});var n=e(5671),i=e(3144),o=e(136),r=e(5716),a=e(8683),u=e(2791),l=e(885),c={image:"ProfileInfo_image__5J9ak",info:"ProfileInfo_info__P-i7F",statusArea:"ProfileInfo_statusArea__rkVyK",status:"ProfileInfo_status__H9X2x",avatar:"ProfileInfo_avatar__Jmx-P",data:"ProfileInfo_data__ggGfo",name:"ProfileInfo_name__zgEhi",contacts:"ProfileInfo_contacts__W1Lcj",contact:"ProfileInfo_contact__L+iK0"},d=e(4080),f=e(8055),p=e(184),h=function(s){var t=(0,u.useState)(s.status),e=(0,l.Z)(t,2),n=e[0],i=e[1],o=(0,u.useState)(!1),r=(0,l.Z)(o,2),a=r[0],d=r[1];(0,u.useEffect)((function(){i(s.status)}),[s.status]);return(0,p.jsxs)("div",{className:c.status,children:[!a&&(0,p.jsx)("div",{children:(0,p.jsx)("span",{onDoubleClick:function(){d(!0)},children:n||"No status"})}),a&&(0,p.jsx)("div",{children:(0,p.jsx)("input",{onChange:function(s){i(s.currentTarget.value)},autoFocus:!0,onBlur:function(){s.updateStatus(n),d(!1)},value:n})})]})},x=e(774),j=e(704),m=(0,j.Z)({form:"edit-profile"})((function(s){var t=s.handleSubmit,e=(s.profile,s.isOwner);return(0,p.jsx)("div",{className:c.info,children:(0,p.jsxs)("form",{onSubmit:function(){},children:[e&&(0,p.jsx)("div",{children:(0,p.jsx)("button",{onClick:t,children:"Save"})}),(0,p.jsx)("div",{className:c.name,children:(0,x.Gr)("Full name",[],"fullName",x.II)}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Looking for a job"}),":",(0,x.Gr)("",[],"lookingForAJob",x.II,{type:"checkbox"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My professional skills"}),":   ",(0,x.Gr)("My professional skills",[],"lookingForAJobDescription",x.gx)]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me"}),": ",(0,x.Gr)("About me",[],"aboutMe",x.gx)]})]})})})),v=function(s){var t=s.profile,e=s.isOwner,n=s.goToEditMode;return(0,p.jsxs)("div",{className:c.info,children:[e&&(0,p.jsx)("div",{children:(0,p.jsx)("button",{onClick:n,children:"Edit"})}),(0,p.jsx)("div",{className:c.name,children:t.fullName}),(0,p.jsx)("div",{className:c.city,children:t.aboutMe}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Looking for a job"}),":",t.lookingForAJob?"yes":"no"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me"}),": ",t.aboutMe]}),(0,p.jsx)("div",{className:c.contacts,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Contacts:"})," ",Object.keys(t.contacts).map((function(s){return(0,p.jsx)(P,{contactTitle:s,contactValue:t.contacts[s]},s)}))]})})]})},P=function(s){var t=s.contactTitle,e=s.contactValue;return(0,p.jsxs)("div",{className:c.contact,children:[(0,p.jsx)("b",{children:t}),":",e]})},_=function(s){var t=s.profile,e=s.status,n=s.updateStatus,i=s.isOwner,o=s.savePhoto,r=s.saveProfile,a=(0,u.useState)(!1),x=(0,l.Z)(a,2),j=x[0],P=x[1];if(!t)return(0,p.jsx)(d.Z,{});return(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:c.data,children:[(0,p.jsxs)("div",{className:c.statusArea,children:[(0,p.jsx)("div",{className:c.avatar,children:(0,p.jsx)("img",{src:t.photos.large||f,alt:"user photo"})}),i&&(0,p.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&o(s.target.files[0])}}),(0,p.jsx)(h,{status:e,updateStatus:n})]}),j?(0,p.jsx)(m,{profile:t,isOwner:i,onSubmit:function(s){r(s)}}):(0,p.jsx)(v,{goToEditMode:function(){P(!0)},profile:t,isOwner:i})]})})},g=e(6070),b=e(2982),k="Post_item__64-Vj",Z="Post_actions__UlnxO",I=function(s){return(0,p.jsxs)("div",{className:k,children:[(0,p.jsx)("img",{src:"https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg",alt:""}),s.message,(0,p.jsxs)("div",{className:Z,children:[(0,p.jsx)("span",{children:"like "}),(0,p.jsx)("span",{children:s.likeCount})]})]})},N="Post_posts__z91Hw",S="Post_postwall__8nH9V",y="Posts_input__tMPE+",w=e(6139),A=e(5304),C=(0,A.h)(10),M=(0,j.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,p.jsxs)("form",{className:y,onSubmit:s.handleSubmit,children:[(0,p.jsx)(w.Z,{name:"newPostText",component:x.gx,validate:[A.C,C]}),(0,p.jsx)("button",{children:"Add post"})]})})),O=function(s){var t=(0,b.Z)(s.posts).reverse().map((function(s){return(0,p.jsx)(I,{message:s.message,likeCount:s.likeCount},s.id)}));return(0,p.jsxs)("div",{className:N,children:[(0,p.jsx)("h3",{children:"My posts:"}),(0,p.jsx)(M,{onSubmit:function(t){s.addPost(t.newPostText)}}),(0,p.jsx)("div",{className:S,children:t})]})},F=e(8687),T=(0,F.$j)((function(s){return{posts:s.profilePage.postsData,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(t){s((0,g.Wl)(t))}}}))(O),D=function(s){return(0,p.jsxs)("div",{children:[(0,p.jsx)(_,{savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,saveProfile:s.saveProfile,updateStatus:s.updateStatus}),(0,p.jsx)(T,{})]})},J=e(6871),E=e(7781),U=e(1548),z=function(s){(0,o.Z)(e,s);var t=(0,r.Z)(e);function e(){return(0,n.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;":userId"===s&&(s=this.props.autorizedUserId),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,t,e){this.props.match.params.userId!=s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,p.jsxs)("div",{children:[(0,p.jsx)(D,(0,a.Z)((0,a.Z)({},this.props),{},{isOwner:":userId"===this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})),(0,p.jsx)(J.Z5,{children:(0,p.jsx)(J.AW,{path:":id",element:(0,p.jsx)(D,(0,a.Z)((0,a.Z)({},this.props),{},{profile:this.props.profile}))})})]})}}]),e}(u.Component),G=(0,E.qC)((0,F.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,autorizedUserId:s.auth.id,isAuth:s.auth.isAuth}}),{getUserProfile:g.et,getStatus:g.lR,updateStatus:g.Nf,savePhoto:g.Ju,saveProfile:g.Ii}),(function(s){return function(t){var e=(0,J.bS)("/profile/:userId");return(0,p.jsx)(s,(0,a.Z)((0,a.Z)({},t),{},{match:e}))}}),U.D)(z)},1548:function(s,t,e){e.d(t,{D:function(){return p}});var n=e(8683),i=e(5671),o=e(3144),r=e(136),a=e(5716),u=e(6871),l=e(2791),c=e(8687),d=e(184),f=function(s){return{isAuth:s.auth.isAuth}},p=function(s){var t=function(t){(0,r.Z)(l,t);var e=(0,a.Z)(l);function l(){return(0,i.Z)(this,l),e.apply(this,arguments)}return(0,o.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(s,(0,n.Z)({},this.props)):(0,d.jsx)(u.Fg,{replace:!0,to:"/login"})}}]),l}(l.Component);return(0,c.$j)(f)(t)}}}]);
//# sourceMappingURL=630.0904f4d8.chunk.js.map