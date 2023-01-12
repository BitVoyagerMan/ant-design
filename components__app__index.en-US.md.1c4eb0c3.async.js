"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2443],{66047:function(l,i,n){n.r(i);var u=n(2143),r=n(50250),m=n(59378),c=n(5648),e=n(74775),E=n(5937),h=n(2068),p=n(74399),P=n(63942),M=n(16073),x=n(24628),D=n(19260),O=n(56140),v=n(5388),j=n(49545),U=n(6965),Z=n(49706),C=n(95127),g=n(74418),f=n(73024),s=n(94065),a=n(67294),_=n(96923);function o(){var d=(0,s.eL)(),t=d.texts;return(0,_.tZ)(s.dY,null,(0,_.tZ)(a.Fragment,null,(0,_.tZ)("div",{className:"markdown"},(0,_.tZ)("p",null,t[0].value),(0,_.tZ)("h2",{id:"when-to-use"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,_.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,_.tZ)("p",null,t[1].value),(0,_.tZ)("h2",{id:"examples"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,_.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,_.tZ)(s.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"basic",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'antd';

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
`,description:"<p>Static method for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}}),(0,_.tZ)("div",{className:"markdown"},(0,_.tZ)("h2",{id:"how-to-use"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use"},(0,_.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,_.tZ)("h3",{id:"basic-usage"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage"},(0,_.tZ)("span",{className:"icon icon-link"})),"Basic usage"),(0,_.tZ)("p",null,t[2].value,(0,_.tZ)("code",null,t[3].value),t[4].value),(0,_.tZ)(e.Z,{lang:"tsx"},t[5].value),(0,_.tZ)("p",null,t[6].value),(0,_.tZ)("h3",{id:"sequence-with-configprovider"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider"},(0,_.tZ)("span",{className:"icon icon-link"})),"Sequence with ConfigProvider"),(0,_.tZ)("p",null,t[7].value,(0,_.tZ)("code",null,t[8].value),t[9].value),(0,_.tZ)(e.Z,{lang:"tsx"},t[10].value),(0,_.tZ)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,_.tZ)("span",{className:"icon icon-link"})),"Embedded usage scenarios (if not necessary, try not to do nesting)"),(0,_.tZ)(e.Z,{lang:"tsx"},t[11].value),(0,_.tZ)("h3",{id:"global-scene-redux-scene"},(0,_.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene"},(0,_.tZ)("span",{className:"icon icon-link"})),"Global scene (redux scene)"),(0,_.tZ)(e.Z,{lang:"tsx"},t[12].value),(0,_.tZ)(e.Z,{lang:"tsx"},t[13].value))))}i.default=o}}]);
