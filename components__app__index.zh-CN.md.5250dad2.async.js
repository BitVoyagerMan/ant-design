"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8288],{13111:function(l,s,t){t.r(s);var o=t(2143),r=t(50250),m=t(59378),E=t(5648),e=t(74775),c=t(5937),D=t(2068),v=t(74399),P=t(63942),p=t(16073),M=t(24628),h=t(19260),C=t(56140),x=t(5388),O=t(49545),Z=t(6965),A=t(49706),j=t(95127),U=t(74418),F=t(73024),i=t(94065),a=t(67294),_=t(96923);function u(){var d=(0,i.eL)(),n=d.texts;return(0,_.tZ)(i.dY,null,(0,_.tZ)(a.Fragment,null,(0,_.tZ)("div",{className:"markdown"},(0,_.tZ)("p",null,n[0].value),(0,_.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,_.tZ)("ul",null,(0,_.tZ)("li",null,n[1].value,(0,_.tZ)("code",null,n[2].value),n[3].value,(0,_.tZ)("code",null,n[4].value),n[5].value,(0,_.tZ)("code",null,n[6].value),n[7].value,(0,_.tZ)("code",null,n[8].value),n[9].value),(0,_.tZ)("li",null,n[10].value,(0,_.tZ)("code",null,n[11].value),n[12].value)),(0,_.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,_.tZ)(i.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"basic",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>\u83B7\u53D6 <code>message</code>, <code>notification</code>, <code>modal</code> \u9759\u6001\u65B9\u6CD5\u3002</p>"}}),(0,_.tZ)("div",{className:"markdown"},(0,_.tZ)("h2",{id:"\u5982\u4F55\u4F7F\u7528"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u4F7F\u7528"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),(0,_.tZ)("h3",{id:"\u57FA\u7840\u7528\u6CD5"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u57FA\u7840\u7528\u6CD5"),(0,_.tZ)("p",null,n[13].value,(0,_.tZ)("code",null,n[14].value),n[15].value),(0,_.tZ)(e.Z,{lang:"tsx"},n[16].value),(0,_.tZ)("p",null,n[17].value),(0,_.tZ)("h3",{id:"\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u4E0E ConfigProvider \u5148\u540E\u987A\u5E8F"),(0,_.tZ)("p",null,n[18].value,(0,_.tZ)("code",null,n[19].value),n[20].value),(0,_.tZ)(e.Z,{lang:"tsx"},n[21].value),(0,_.tZ)("h3",{id:"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\uFF08\u5982\u65E0\u5FC5\u8981\uFF0C\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957\uFF09"),(0,_.tZ)(e.Z,{lang:"tsx"},n[22].value),(0,_.tZ)("h3",{id:"\u5168\u5C40\u573A\u666Fredux-\u573A\u666F"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5168\u5C40\u573A\u666Fredux-\u573A\u666F"},(0,_.tZ)("span",{className:"icon icon-link"})),"\u5168\u5C40\u573A\u666F\uFF08redux \u573A\u666F\uFF09"),(0,_.tZ)(e.Z,{lang:"tsx"},n[23].value),(0,_.tZ)(e.Z,{lang:"tsx"},n[24].value))))}s.default=u}}]);
