"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[884],{2275:(t,e,a)=>{a.d(e,{Z:()=>u});var s=a(4050),n=a(5116),o=a(782),i=a(1638),d=a(2858),r=a(2340),c=a(9107),l=a(3103),h=a(231);const u=(0,s.X$)((0,n.c$)(((t,{userId:e})=>{const a=(0,i.jr)(t),s=e&&(0,i.dy)(t,e);return{chat:a,contactName:s?(0,d.Vl)(s):void 0}}),((t,e)=>(0,o.ei)(e,["deleteChatMember"])))((({isOpen:t,chat:e,userId:a,contactName:n,onClose:o,deleteChatMember:i})=>{const d=(0,c.Z)(),u=(0,s.I4)((()=>{i({chatId:e.id,userId:a}),o()}),[e,i,o,a]);if(e&&a)return s.ZP.createElement(l.Z,{isOpen:t,onClose:o,onEnter:u,className:"delete",title:d("GroupRemoved.Remove")},s.ZP.createElement("p",null,(0,r.Z)(d("PeerInfo.Confirm.RemovePeer",n))),s.ZP.createElement(h.Z,{color:"danger",className:"confirm-dialog-button",isText:!0,onClick:u},d("lng_box_remove")),s.ZP.createElement(h.Z,{className:"confirm-dialog-button",isText:!0,onClick:o},d("Cancel")))})))},6071:(t,e,a)=>{a.d(e,{Z:()=>o});var s=a(4050),n=a(9118);const o=(t,e=!1)=>(0,s.Ye)((()=>(0,n.P2)((t=>t()),t,!e)),[t,e])},6204:(t,e,a)=>{a.d(e,{f:()=>y,C:()=>b});var s=a(5116),n=a(6137),o=a(1713),i=a(3716),d=a(1226),r=a(307),c=a(1638),l=a(782),h=a(9118),u=a(2858),p=a(3551),f=a(4446),C=a(2607);const I=(0,h.P2)((t=>t()),300,!0),m=(0,h.P2)((t=>t()),3e3,!0),v=(0,h.Ds)((t=>t()),500,!1,!0);async function g(t,e,a){var o;let h=(0,s.Rd)();const u=await(0,d.t9)("fetchChats",{limit:i.Ov,offsetDate:a,archived:"archived"===t,withPinned:void 0===h.chats.orderedPinnedIds[t],serverTimeOffset:h.serverTimeOffset,lastLocalServiceMessage:null===(o=(0,c.VF)(h))||void 0===o?void 0:o.message});if(!u)return;const{chatIds:p}=u;p.length>0&&p[0]===e&&p.shift(),h=(0,s.Rd)(),h=(0,r.Sh)(h,(0,l.ee)(u.users,"id")),h=(0,r.zn)(h,u.userStatusesById),h=(0,r.GL)(h,(0,l.ee)(u.chats,"id")),h=(0,r.B1)(h,t,p),h=(0,r.vv)(h,t,u),Object.keys(u.draftsById).forEach((t=>{h=(0,r.pf)(h,t,n._f,"draft",u.draftsById[t])})),Object.keys(u.replyingToById).forEach((t=>{h=(0,r.pf)(h,t,n._f,"replyingToId",u.replyingToById[t])})),0!==p.length||h.chats.isFullyLoaded[t]||(h={...h,chats:{...h.chats,isFullyLoaded:{...h.chats.isFullyLoaded,[t]:!0}}}),(0,s.R3)(h)}async function y(t){const e=await(0,d.t9)("fetchFullChat",t);if(!e)return;const{users:a,fullInfo:n,groupCall:o}=e;let i=(0,s.Rd)();if(a&&(i=(0,r.Sh)(i,(0,l.ee)(a,"id"))),o){const t=(0,C.$5)(i,o.id);i=(0,f.AH)(i,o.id,(0,l.CE)(o,["connectionState"]),void 0,t?void 0:o.participantsCount)}return i=(0,r.a4)(i,t.id,{fullInfo:n}),(0,s.R3)(i),e}async function b(t){const e=(0,s.Rd)(),a=(0,c.DI)(e,t);if(a&&!a.isMin)return a;const n=await(0,d.t9)("getChatByUsername",t);return n?((0,s.R3)((0,r.a4)((0,s.Rd)(),n.id,n)),n):void 0}(0,s.Q6)("preloadTopChatMessages",((t,e)=>{(async()=>{const a=[];for(let o=0;o<i.ul;o++){await(0,h.wO)(100);const{byId:o,listIds:{active:i},orderedPinnedIds:{active:d}}=(0,s.Rd)().chats;if(!i)return;const{chatId:r}=(0,c.Bt)(t)||{},{pinnedChats:l,otherChats:p}=(0,u.O)(o,i,d,"all",!0),f=[...l,...p].find((({id:t})=>t!==r&&!a.includes(t)));if(!f)return;a.push(f.id),e.loadViewportMessages({chatId:f.id,threadId:n._f})}})()})),(0,s.Q6)("openChat",((t,e,a)=>{const{id:s,threadId:o}=a,{currentUserId:i}=t,r=(0,c.Z1)(t,s);if(null!=r&&r.hasUnreadMark&&e.toggleChatUnread({id:s}),r&&r.lastMessage&&r.lastMessage.threadInfo&&e.requestThreadInfoUpdate({chatId:r.lastMessage.threadInfo.chatId,threadId:r.lastMessage.threadInfo.threadId}),r)(0,u.Hp)(r)&&!r.isMin&&e.requestChatUpdate({chatId:s});else if(s===i)(0,d.t9)("fetchChat",{type:"self"});else{const e=(0,c.dy)(t,s);e&&(0,d.t9)("fetchChat",{type:"user",user:e})}o!==n._f&&((0,c.qS)(t,s,o)||e.requestThreadInfoUpdate({chatId:s,threadId:o}))})),(0,s.Q6)("openLinkedChat",((t,e,a)=>{const{id:s}=a,n=(0,c.Z1)(t,s);n&&(async()=>{var t;const a=await(0,d.t9)("fetchFullChat",n);null!=a&&null!==(t=a.fullInfo)&&void 0!==t&&t.linkedChatId&&e.openChat({id:a.fullInfo.linkedChatId})})()})),(0,s.Q6)("focusMessageInComments",((t,e,a)=>{const{chatId:s,threadId:n,messageId:o}=a,i=(0,c.Z1)(t,s);i&&(async()=>{await(0,d.t9)("requestThreadInfoUpdate",{chat:i,threadId:n})&&e.focusMessage({chatId:s,threadId:n,messageId:o})})()})),(0,s.Q6)("openSupportChat",((t,e)=>{const a=(0,c.P_)(t);a?e.openChat({id:a.id,shouldReplaceHistory:!0}):(e.openChat({id:i.AJ,shouldReplaceHistory:!0}),(async()=>{const t=await(0,d.t9)("fetchChat",{type:"support"});t&&e.openChat({id:t.chatId,shouldReplaceHistory:!0})})())})),(0,s.Q6)("openTipsChat",((t,e,a)=>{const{langCode:s}=a,n="pt-br"===s?"BR":i.Db.includes(s)?s.toUpperCase():"";e.openChatByUsername({username:`${i.vi}${n}`})})),(0,s.Q6)("loadMoreChats",((t,e,a)=>{const{listType:s="active"}=a,n=t.chats.listIds[s];if(t.chats.isFullyLoaded[s])return;const o=n?n.map((e=>t.chats.byId[e])).filter((e=>Boolean(null==e?void 0:e.lastMessage)&&!(0,c.ep)(t,e.id))).sort(((t,e)=>t.lastMessage.date-e.lastMessage.date))[0]:void 0;I(o?()=>g(s,o.id,o.lastMessage.date):()=>g(s))})),(0,s.Q6)("preloadArchivedChats",(()=>{(async()=>{for(;!(0,s.Rd)().chats.isFullyLoaded.archived;){const t=(0,s.Rd)(),e=t.chats.listIds.archived,a=e?e.map((e=>t.chats.byId[e])).filter((e=>Boolean(null==e?void 0:e.lastMessage)&&!(0,c.ep)(t,e.id))).sort(((t,e)=>t.lastMessage.date-e.lastMessage.date))[0]:void 0;await g("archived",null==a?void 0:a.id,null==a?void 0:a.lastMessage.date),await(0,h.wO)(300)}})()})),(0,s.Q6)("loadFullChat",((t,e,a)=>{const{chatId:s,force:n}=a,o=(0,c.Z1)(t,s);o&&(n?y(o):v((()=>y(o))))})),(0,s.Q6)("loadTopChats",(()=>{m((()=>g("active")))})),(0,s.Q6)("requestChatUpdate",((t,e,a)=>{var s;const{serverTimeOffset:n}=t,{chatId:o}=a,r=(0,c.Z1)(t,o);r&&(0,d.t9)("requestChatUpdate",{chat:r,serverTimeOffset:n,...o===i.aw&&{lastLocalMessage:null===(s=(0,c.VF)(t))||void 0===s?void 0:s.message}})})),(0,s.Q6)("updateChatMutedState",((t,e,a)=>{const{serverTimeOffset:n}=t,{chatId:o,isMuted:i}=a,l=(0,c.Z1)(t,o);l&&((0,s.R3)((0,r.a4)(t,o,{isMuted:i})),(0,d.t9)("updateChatMutedState",{chat:l,isMuted:i,serverTimeOffset:n}))})),(0,s.Q6)("createChannel",((t,e,a)=>{const{title:n,about:i,photo:l,memberIds:h}=a;!async function(t,e,a,n){(0,s.R3)({...(0,s.Rd)(),chatCreation:{progress:o.Nh.InProgress}});const i=await(0,d.t9)("createChannel",{title:t,about:a,users:e});if(!i)return;const{id:c,accessHash:l}=i;let h=(0,s.Rd)();h=(0,r.a4)(h,c,i),h={...h,chatCreation:{...h.chatCreation,progress:i?o.Nh.Complete:o.Nh.Error}},(0,s.R3)(h),(0,s.uC)().openChat({id:c,shouldReplaceHistory:!0}),c&&l&&n&&await(0,d.t9)("editChatPhoto",{chatId:c,accessHash:l,photo:n})}(n,h.map((e=>(0,c.dy)(t,e))).filter(Boolean),i,l)})),(0,s.Q6)("joinChannel",((t,e,a)=>{const{chatId:s}=a,n=(0,c.Z1)(t,s);if(!n)return;const{id:o,accessHash:i}=n;o&&i&&(0,d.t9)("joinChannel",{channelId:o,accessHash:i})})),(0,s.Q6)("deleteChatUser",((t,e,a)=>{var n;const{chatId:o,userId:i}=a,l=(0,c.Z1)(t,o),h=(0,c.dy)(t,i);l&&h&&(t=(0,r.Dd)(t,o),(0,s.R3)(t),(null===(n=(0,c.Bt)(t))||void 0===n?void 0:n.chatId)===o&&e.openChat({id:void 0}),(0,d.t9)("deleteChatUser",{chat:l,user:h}))})),(0,s.Q6)("deleteChat",((t,e,a)=>{var n;const{chatId:o}=a,i=(0,c.Z1)(t,o);i&&(t=(0,r.Dd)(t,o),(0,s.R3)(t),(null===(n=(0,c.Bt)(t))||void 0===n?void 0:n.chatId)===o&&e.openChat({id:void 0}),(0,d.t9)("deleteChat",{chatId:i.id}))})),(0,s.Q6)("leaveChannel",((t,e,a)=>{var n;const{chatId:o}=a,i=(0,c.Z1)(t,o);if(!i)return;t=(0,r.Dd)(t,o),(0,s.R3)(t),(null===(n=(0,c.Bt)(t))||void 0===n?void 0:n.chatId)===o&&e.openChat({id:void 0});const{id:l,accessHash:h}=i;l&&h&&(0,d.t9)("leaveChannel",{channelId:l,accessHash:h})})),(0,s.Q6)("deleteChannel",((t,e,a)=>{var n;const{chatId:o}=a,i=(0,c.Z1)(t,o);if(!i)return;t=(0,r.Dd)(t,o),(0,s.R3)(t),(null===(n=(0,c.Bt)(t))||void 0===n?void 0:n.chatId)===o&&e.openChat({id:void 0});const{id:l,accessHash:h}=i;l&&h&&(0,d.t9)("deleteChannel",{channelId:l,accessHash:h})})),(0,s.Q6)("createGroupChat",((t,e,a)=>{const{title:n,memberIds:i,photo:l}=a;!async function(t,e,a){(0,s.R3)({...(0,s.Rd)(),chatCreation:{progress:o.Nh.InProgress}});try{const n=await(0,d.t9)("createGroupChat",{title:t,users:e});if(!n)return;const{id:i}=n;let c=(0,s.Rd)();c=(0,r.a4)(c,i,n),c={...c,chatCreation:{...c.chatCreation,progress:n?o.Nh.Complete:o.Nh.Error}},(0,s.R3)(c),(0,s.uC)().openChat({id:i,shouldReplaceHistory:!0}),i&&a&&await(0,d.t9)("editChatPhoto",{chatId:i,photo:a})}catch(t){if("USERS_TOO_FEW"===t.message){const t=(0,s.Rd)();(0,s.R3)({...t,chatCreation:{...t.chatCreation,progress:o.Nh.Error,error:"CreateGroupError"}})}}}(n,i.map((e=>(0,c.dy)(t,e))).filter(Boolean),l)})),(0,s.Q6)("toggleChatPinned",((t,e,a)=>{const{id:s,folderId:n}=a,o=(0,c.Z1)(t,s);if(o)if(n){const e=(0,c.Mw)(t,n);if(e){const a=!(0,c.ep)(t,s,n),{pinnedChatIds:o,includedChatIds:i}=e,r=a?[s,...o||[]]:(o||[]).filter((t=>t!==s)),l=[s,...i];(0,d.t9)("editChatFolder",{id:n,folderUpdate:{...e,pinnedChatIds:r,includedChatIds:l}})}}else{const e=(0,c.Ek)(t,s),a=(0,c.ep)(t,s,"archived"===e?i.WS:void 0);(0,d.t9)("toggleChatPinned",{chat:o,shouldBePinned:!a})}})),(0,s.Q6)("toggleChatArchived",((t,e,a)=>{const{id:s}=a,n=(0,c.Z1)(t,s);n&&(0,d.t9)("toggleChatArchived",{chat:n,folderId:(0,u.pE)(n)?0:i.WS})})),(0,s.Q6)("loadChatFolders",(()=>{!async function(){const t=await(0,d.t9)("fetchChatFolders");if(t){const e=(0,s.Rd)();(0,s.R3)({...e,chatFolders:{...e.chatFolders,...t}})}}()})),(0,s.Q6)("loadRecommendedChatFolders",(()=>{!async function(){const t=await(0,d.t9)("fetchRecommendedChatFolders");if(t){const e=(0,s.Rd)();(0,s.R3)({...e,chatFolders:{...e.chatFolders,recommended:t}})}}()})),(0,s.Q6)("editChatFolders",((t,e,a)=>{const{chatId:s,idsToRemove:n,idsToAdd:o}=a;n.forEach((async e=>{const a=(0,c.Mw)(t,e);var n;a&&await(0,d.t9)("editChatFolder",{id:e,folderUpdate:{...a,pinnedChatIds:null===(n=a.pinnedChatIds)||void 0===n?void 0:n.filter((t=>t!==s)),includedChatIds:a.includedChatIds.filter((t=>t!==s))}})})),o.forEach((async e=>{const a=(0,c.Mw)(t,e);a&&await(0,d.t9)("editChatFolder",{id:e,folderUpdate:{...a,includedChatIds:a.includedChatIds.concat(s)}})}))})),(0,s.Q6)("editChatFolder",((t,e,a)=>{const{id:s,folderUpdate:n}=a,o=(0,c.Mw)(t,s);o&&(0,d.t9)("editChatFolder",{id:s,folderUpdate:{id:s,emoticon:o.emoticon,pinnedChatIds:o.pinnedChatIds,...n}})})),(0,s.Q6)("addChatFolder",((t,e,a)=>{const{folder:n}=a,{orderedIds:o}=t.chatFolders;!async function(t,e){const{id:a,description:n,...o}=t;if(await(0,d.t9)("editChatFolder",{id:e+1,folderUpdate:{id:e+1,...o}}),!n)return;const i=(0,s.Rd)(),{recommended:r}=i.chatFolders;r&&(0,s.R3)({...i,chatFolders:{...i.chatFolders,recommended:r.filter((({id:t})=>t!==a))}})}(n,null!=o&&o.length?Math.max.apply(Math.max,o):i.WS)})),(0,s.Q6)("deleteChatFolder",((t,e,a)=>{const{id:s}=a;(0,c.Mw)(t,s)&&async function(t){await(0,d.t9)("deleteChatFolder",t)}(s)})),(0,s.Q6)("toggleChatUnread",((t,e,a)=>{const{id:s}=a,{serverTimeOffset:o}=t,i=(0,c.Z1)(t,s);i&&(i.unreadCount?(0,d.t9)("markMessageListRead",{serverTimeOffset:o,chat:i,threadId:n._f}):(0,d.t9)("toggleDialogUnread",{chat:i,hasUnreadMark:!i.hasUnreadMark}))})),(0,s.Q6)("openChatByInvite",((t,e,a)=>{const{hash:s}=a;(async()=>{const t=await(0,d.t9)("openChatByInvite",s);t&&e.openChat({id:t.chatId})})()})),(0,s.Q6)("openTelegramLink",((t,e,a)=>{const{url:s}=a;if(s.match(i.g$))return void(0,p.o)(s.match(i.g$)[0]);const n=new URL(s.startsWith("http")?s:`https://${s}`),[o,d,r]=n.pathname.split("/").filter(Boolean).map((t=>decodeURI(t))),l=Object.fromEntries(n.searchParams);let h;if("joinchat"===o&&(h=d),(o.startsWith(" ")||o.startsWith("+"))&&(h=o.substr(1,o.length-1)),h)return void e.openChatByInvite({hash:h});if("addstickers"===o)return void e.openStickerSetShortName({stickerSetShortName:d});const u=d||void 0,f=r?Number(r):void 0,C=l.comment?Number(l.comment):void 0;if(l.hasOwnProperty("voicechat")||l.hasOwnProperty("livestream"))e.joinVoiceChatByLink({username:o,inviteHash:l.voicechat||l.livestream});else if("c"===o&&u&&f){const a=`-${u}`;if(!(0,c.Z1)(t,a))return void e.showNotification({message:"Chat does not exist"});e.focusMessage({chatId:a,messageId:f})}else e.openChatByUsername({username:o,messageId:f||Number(u),commentId:C,startParam:l.start})})),(0,s.Q6)("acceptInviteConfirmation",((t,e,a)=>{const{hash:s}=a;(async()=>{const t=await(0,d.t9)("importChatInvite",{hash:s});t&&e.openChat({id:t.id})})()})),(0,s.Q6)("openChatByUsername",((t,e,a)=>{const{username:n,messageId:o,commentId:r,startParam:l}=a;(async()=>{const a=(0,c.jr)(t);if(!r)return a&&a.username===n?void e.focusMessage({chatId:a.id,messageId:o}):void await async function(t,e,a,s){t.openChat({id:i.AJ});const n=await b(e);if(!n)return t.openPreviousChat(),void t.showNotification({message:"User does not exist"});a?t.focusMessage({chatId:n.id,messageId:a}):t.openChat({id:n.id}),s&&t.startBot({botId:n.id,param:s})}(e,n,o,l);const{chatId:h,type:u}=(0,c.Bt)(t)||{},p=(0,c.DI)(t,n);if(h&&p&&"thread"===u){const a=(0,c.tZ)(t,h,o);if(a&&a.chatId===h)return void e.focusMessage({chatId:a.chatId,threadId:a.threadId,messageId:r})}o&&await async function(t,e,a,n){t.openChat({id:i.AJ});const o=await b(e);if(!o)return;const r=(0,s.Rd)(),l=(0,c.tZ)(r,o.id,a);let h;if(l)h=l.chatId;else{const t=await(0,d.t9)("requestThreadInfoUpdate",{chat:o,threadId:a});if(!t)return;h=t.discussionChatId}h&&t.focusMessage({chatId:h,threadId:a,messageId:Number(n)})}(e,n,o,r)})()})),(0,s.Q6)("togglePreHistoryHidden",((t,e,a)=>{const{chatId:s,isEnabled:n}=a;let o=(0,c.Z1)(t,s);o&&(async()=>{if((0,u.G9)(o)){if(o=await(0,d.t9)("migrateChat",o),!o)return;e.openChat({id:o.id})}(0,d.t9)("togglePreHistoryHidden",{chat:o,isEnabled:n})})()})),(0,s.Q6)("updateChatDefaultBannedRights",((t,e,a)=>{const{chatId:s,bannedRights:n}=a,o=(0,c.Z1)(t,s);o&&(0,d.t9)("updateChatDefaultBannedRights",{chat:o,bannedRights:n})})),(0,s.Q6)("updateChatMemberBannedRights",((t,e,a)=>{const{chatId:n,userId:o,bannedRights:i}=a;let l=(0,c.Z1)(t,n);const h=(0,c.dy)(t,o);l&&h&&(async()=>{if((0,u.G9)(l)){if(l=await(0,d.t9)("migrateChat",l),!l)return;e.openChat({id:l.id})}await(0,d.t9)("updateChatMemberBannedRights",{chat:l,user:h,bannedRights:i});const t=(0,s.Rd)(),a=(0,c.Z1)(t,n);if(!a||!a.fullInfo)return;const{members:p,kickedMembers:f}=a.fullInfo,C=!!i.viewMessages,I=!Object.keys(i).length;(0,s.R3)((0,r.a4)(t,n,{fullInfo:{...a.fullInfo,...p&&C&&{members:p.filter((t=>t.userId!==o))},...p&&!C&&{members:p.map((t=>t.userId===o?{...t,bannedRights:i}:t))},...I&&f&&{kickedMembers:f.filter((t=>t.userId!==o))}}}))})()})),(0,s.Q6)("updateChatAdmin",((t,e,a)=>{const{chatId:n,userId:o,adminRights:i,customTitle:l}=a;let h=(0,c.Z1)(t,n);const p=(0,c.dy)(t,o);h&&p&&(async()=>{if((0,u.G9)(h)){if(h=await(0,d.t9)("migrateChat",h),!h)return;e.openChat({id:h.id})}await(0,d.t9)("updateChatAdmin",{chat:h,user:p,adminRights:i,customTitle:l});const t=(0,s.Rd)(),a=(0,c.Z1)(t,n);if(!a||!a.fullInfo)return;const{adminMembers:f}=a.fullInfo,C=!Object.keys(i).length;(0,s.R3)((0,r.a4)(t,n,{fullInfo:{...a.fullInfo,...f&&C&&{adminMembers:f.filter((t=>t.userId!==o))},...f&&!C&&{adminMembers:f.map((t=>t.userId===o?{...t,adminRights:i,customTitle:l}:t))}}}))})()})),(0,s.Q6)("updateChat",((t,e,a)=>{const{chatId:n,title:i,about:l,photo:h}=a,u=(0,c.Z1)(t,n);u&&(async()=>{(0,s.R3)((0,r.H9)((0,s.Rd)(),o.wv.InProgress)),await Promise.all([u.title!==i?(0,d.t9)("updateChatTitle",u,i):void 0,u.fullInfo&&u.fullInfo.about!==l?(0,d.t9)("updateChatAbout",u,l):void 0,h?(0,d.t9)("editChatPhoto",{chatId:n,accessHash:u.accessHash,photo:h}):void 0]),(0,s.R3)((0,r.H9)((0,s.Rd)(),o.wv.Complete))})()})),(0,s.Q6)("toggleSignatures",((t,e,a)=>{const{chatId:s,isEnabled:n}=a,o=(0,c.Z1)(t,s);o&&(0,d.t9)("toggleSignatures",{chat:o,isEnabled:n})})),(0,s.Q6)("loadGroupsForDiscussion",(()=>{(async()=>{const t=await(0,d.t9)("fetchGroupsForDiscussion");if(!t)return;const e=t.reduce(((t,e)=>(e&&(t[e.id]=e),t)),{}),a=(0,r.fZ)((0,s.Rd)(),e);(0,s.R3)({...a,chats:{...a.chats,forDiscussionIds:Object.keys(e)}})})()})),(0,s.Q6)("linkDiscussionGroup",((t,e,a)=>{const{channelId:s,chatId:n}=a,o=(0,c.Z1)(t,s);let i=(0,c.Z1)(t,n);o&&i&&(async()=>{if((0,u.G9)(i)){if(i=await(0,d.t9)("migrateChat",i),!i)return;e.openChat({id:i.id})}let{fullInfo:t}=i;if(!t){const e=await(0,d.t9)("fetchFullChat",i);if(!e)return;t=e.fullInfo}t.isPreHistoryHidden&&await(0,d.t9)("togglePreHistoryHidden",{chat:i,isEnabled:!1}),(0,d.t9)("setDiscussionGroup",{channel:o,chat:i})})()})),(0,s.Q6)("unlinkDiscussionGroup",((t,e,a)=>{var s;const{channelId:n}=a,o=(0,c.Z1)(t,n);if(!o)return;let i;null!==(s=o.fullInfo)&&void 0!==s&&s.linkedChatId&&(i=(0,c.Z1)(t,o.fullInfo.linkedChatId)),(async()=>{await(0,d.t9)("setDiscussionGroup",{channel:o}),i&&y(i)})()})),(0,s.Q6)("setActiveChatFolder",((t,e,a)=>({...t,chatFolders:{...t.chatFolders,activeChatFolder:a}}))),(0,s.Q6)("loadMoreMembers",(t=>{(async()=>{var e,a;const{chatId:n}=(0,c.Bt)(t)||{},o=n?(0,c.Z1)(t,n):void 0;if(!o||(0,u.G9)(o))return;const i=(null===(e=o.fullInfo)||void 0===e||null===(a=e.members)||void 0===a?void 0:a.length)||void 0,h=await(0,d.t9)("fetchMembers",o.id,o.accessHash,"recent",i);if(!h)return;const{members:p,users:f}=h;p&&p.length&&(t=(0,s.Rd)(),t=(0,r.Sh)(t,(0,l.ee)(f,"id")),t=(0,r.a4)(t,o.id,{fullInfo:{...o.fullInfo,members:[...(o.fullInfo||{}).members||[],...p||[]]}}),(0,s.R3)(t))})()})),(0,s.Q6)("addChatMembers",((t,e,a)=>{const{chatId:s,memberIds:n}=a,i=(0,c.Z1)(t,s),r=n.map((e=>(0,c.dy)(t,e))).filter(Boolean);i&&r.length&&(e.setNewChatMembersDialogState(o.WB.Loading),(async()=>{await(0,d.t9)("addChatMembers",i,r),e.setNewChatMembersDialogState(o.WB.Closed),y(i)})())})),(0,s.Q6)("deleteChatMember",((t,e,a)=>{const{chatId:s,userId:n}=a,o=(0,c.Z1)(t,s),i=(0,c.dy)(t,n);o&&i&&(async()=>{await(0,d.t9)("deleteChatMember",o,i),y(o)})()}))},1689:(t,e,a)=>{a.d(e,{FF:()=>M,NH:()=>Q,Mt:()=>Z});var s=a(5116),n=a(2607),o=a(1226),i=a(1638),d=a(4319),r=a(4446),c=a(782),l=a(307),h=a(6204),u=a(4753),p=a(7361),f=a(663);let C,I;const m=new Audio("./voicechat_join.mp3"),v=new Audio("./voicechat_connecting.mp3");v.loop=!0;const g=new Audio("./voicechat_leave.mp3"),y={join:m,allowTalk:new Audio("./voicechat_onallowtalk.mp3"),leave:g,connecting:v};let b=Promise.resolve();async function w(t){const e=await(0,o.t9)("getGroupCall",{call:t});if(!e)return;let a=(0,s.Rd)();const i=(0,n.$5)(a,t.id);return a=(0,r.AH)(a,t.id,(0,c.CE)(e.groupCall,["connectionState"]),void 0,null!=i&&i.isLoaded?void 0:e.groupCall.participantsCount),a=(0,l.Sh)(a,(0,c.ee)(e.users,"id")),a=(0,l.fZ)(a,(0,c.ee)(e.chats,"id")),(0,s.R3)(a),e.groupCall}async function R(t,e){const a=await(0,o.t9)("fetchGroupCallParticipants",{call:t,offset:e});if(!a)return;let n=(0,s.Rd)();n=(0,l.Sh)(n,(0,c.ee)(a.users,"id")),n=(0,l.fZ)(n,(0,c.ee)(a.chats,"id")),(0,s.R3)(n)}function M(){return C}function Q(){return I}function Z(){var t;null===(t=C)||void 0===t||t.pause(),I=void 0,C=void 0}(0,s.Q6)("toggleGroupCallPanel",(t=>({...t,groupCalls:{...t.groupCalls,isGroupCallPanelHidden:!t.groupCalls.isGroupCallPanelHidden}}))),(0,s.Q6)("subscribeToGroupCallUpdates",((t,e,a)=>{const{subscribed:s,id:i}=a,d=(0,n.$5)(t,i);d&&(async()=>{s&&(await w(d),await R(d)),await(0,o.t9)("toggleGroupCallStartSubscription",{subscribed:s,call:d})})()})),(0,s.Q6)("createGroupCall",((t,e,a)=>{const{chatId:n}=a,d=(0,i.Z1)(t,n);d&&(async()=>{const a=await(0,o.t9)("createGroupCall",{peer:d});a&&(t=(0,s.Rd)(),(0,s.R3)((0,r.AH)(t,a.id,{...a,chatId:n})),e.joinGroupCall({id:a.id,accessHash:a.accessHash}))})()})),(0,s.Q6)("createGroupCallInviteLink",((t,e)=>{const a=(0,n.mU)(t);if(!a||!a.chatId)return;const s=(0,i.Z1)(t,a.chatId);if(!s)return;const r=!!s&&!!s.username;(async()=>{let{inviteLink:t}=s.fullInfo;r&&(t=await(0,o.t9)("exportGroupCallInvite",{call:a,canSelfUnmute:!1})),t&&((0,d.TE)(t),e.showNotification({message:"Link copied to clipboard"}))})()})),(0,s.Q6)("joinVoiceChatByLink",((t,e,a)=>{const{username:s,inviteHash:n}=a;(async()=>{const t=await(0,h.C)(s);if(!t)return void e.showNotification({message:f.i0("NoUsernameFound")});const a=await(0,h.f)(t);null!=a&&a.groupCall&&e.joinGroupCall({id:a.groupCall.id,accessHash:a.groupCall.accessHash,inviteHash:n})})()})),(0,s.Q6)("joinGroupCall",((t,e,a)=>{if(!p.Bi)return;const{chatId:o,id:i,accessHash:d,inviteHash:c}=a;!function(){const t=new(window.AudioContext||window.webkitAudioContext);C=new Audio,I=t,C.srcObject=(t=>{const e=t.createOscillator(),a=e.connect(t.createMediaStreamDestination());return e.start(),new MediaStream([Object.assign(a.stream.getAudioTracks()[0],{enabled:!1})])})(t),(0,u.Z)(C)}(),(async()=>{var l;await(b?(b=Promise.all(Object.values(y).map((t=>(t.muted=!0,t.volume=1e-4,t.play().then((()=>{t.pause(),t.volume=1,t.currentTime=0,t.muted=!1})))))).then((()=>{b=void 0})),b):Promise.resolve());const{groupCalls:{activeGroupCallId:h}}=t;let u=i?(0,n.$5)(t,i):(0,n.Bj)(t,o);(null===(l=u)||void 0===l?void 0:l.id)!==h?h?e.leaveGroupCall({rejoin:a}):u&&h===u.id?e.toggleGroupCallPanel():(u||i&&d||(u=await w({id:i,accessHash:d})),u&&(t=(0,s.Rd)(),t=(0,r.AH)(t,u.id,{...u,inviteHash:c},void 0,u.participantsCount+1),(0,s.R3)({...t,groupCalls:{...t.groupCalls,activeGroupCallId:u.id,isGroupCallPanelHidden:!1}}))):e.toggleGroupCallPanel()})()})),(0,s.Q6)("playGroupCallSound",((t,e,a)=>{const{sound:s}=a;y[s]&&(b?b.then((()=>{(0,u.Z)(y[s])})):("connecting"!==s&&y.connecting.pause(),(0,u.Z)(y[s])))})),(0,s.Q6)("loadMoreGroupCallParticipants",(t=>{const e=(0,n.mU)(t);e&&R(e,e.nextOffset)})),(0,s.Q6)("openCallFallbackConfirm",(t=>({...t,groupCalls:{...t.groupCalls,isFallbackConfirmOpen:!0}}))),(0,s.Q6)("closeCallFallbackConfirm",(t=>({...t,groupCalls:{...t.groupCalls,isFallbackConfirmOpen:!1}})))},4446:(t,e,a)=>{a.d(e,{AH:()=>d,dc:()=>r,Ic:()=>c,B6:()=>l});var s=a(2607),n=a(782),o=a(6788),i=a(1638);function d(t,e,a,s,o){var i;const d=Object.values({...null===(i=t.groupCalls.byId[e])||void 0===i?void 0:i.participants,...a.participants}).filter((t=>!t.isLeft)).reduce(((t,e)=>(t[e.id]=e,t)),{});return{...t,groupCalls:{...t.groupCalls,byId:{...t.groupCalls.byId,[e]:{...t.groupCalls.byId[e],...(0,n.CE)(a,["participantsCount"]),...s&&{participantsCount:t.groupCalls.byId[e].participantsCount+s},...void 0!==o&&{participantsCount:o},participants:d}}}}}function r(t,e){const a=(0,s.$5)(t,e);if(a&&a.chatId){const e=(0,i.Z1)(t,a.chatId);e&&(t=(0,o.a4)(t,a.chatId,{fullInfo:{...e.fullInfo,groupCallId:void 0}}))}return{...t,groupCalls:{...t.groupCalls,byId:{...(0,n.CE)(t.groupCalls.byId,[e.toString()])}}}}function c(t,e,a){return t.groupCalls.activeGroupCallId?d(t,t.groupCalls.activeGroupCallId,e,void 0,a):t}function l(t,e,a,n,o=!1){const i=(0,s.$5)(t,e);return i?d(t,e,{participants:{...i.participants,[a]:{...i.participants[a],...n}}},n.isLeft?o?0:-1:i.participants[a]||o?0:1):t}},2607:(t,e,a)=>{a.d(e,{Bj:()=>i,$5:()=>d,GU:()=>r,Ht:()=>c,mU:()=>l,oq:()=>h});var s=a(8857),n=a(2858),o=a(6376);function i(t,e){const a=(0,s.Z1)(t,e);if(a&&a.fullInfo&&a.fullInfo.groupCallId)return d(t,a.fullInfo.groupCallId)}function d(t,e){return t.groupCalls.byId[e]}function r(t,e,a){var s;return null===(s=d(t,e))||void 0===s?void 0:s.participants[a]}function c(t){var e,a;const o=null===(e=l(t))||void 0===e?void 0:e.chatId;if(!o)return!1;const i=(0,s.Z1)(t,o);return!!i&&((0,n.G9)(i)&&i.isCreator||!(null===(a=i.adminRights)||void 0===a||!a.manageCall))}function l(t){const{groupCalls:{activeGroupCallId:e}}=t;if(e)return d(t,e)}function h(t){const e=(0,o.dy)(t,t.currentUserId);return`Calls: ${(0,n.Js)(e)}`}},3551:(t,e,a)=>{a.d(e,{o:()=>o});var s=a(5116),n=a(7361);const o=t=>{const{protocol:e,searchParams:a,pathname:o,hostname:i}=new URL(t);if("tg:"!==e)return;const{openChatByInvite:d,openChatByUsername:r,openStickerSetShortName:c,focusMessage:l,joinVoiceChatByLink:h}=(0,s.uC)(),u=(n.s$?i:o).replace(/^\/\//,""),p={};switch(a.forEach(((t,e)=>{p[e]=t})),u){case"resolve":{const{domain:t,post:e,comment:a,voicechat:s,livestream:n}=p;"telegrampassport"!==t&&(p.hasOwnProperty("voicechat")||p.hasOwnProperty("livestream")?h({username:t,inviteHash:s||n}):r({username:t,messageId:Number(e),commentId:Number(a)}));break}case"privatepost":{const{post:t,channel:e}=p;l({chatId:`-${e}`,id:t});break}case"bg":break;case"join":{const{invite:t}=p;d({hash:t});break}case"addstickers":{const{set:t}=p;c({stickerSetShortName:t});break}}}}}]);
//# sourceMappingURL=884.0744a0141224dc13c805.js.map