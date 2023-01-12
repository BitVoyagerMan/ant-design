"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3154],{5942:function(r,i,e){e.r(i);var m=e(2143),f=e(50250),p=e(59378),c=e(5648),o=e(74775),a=e(5937),h=e(2068),v=e(74399),x=e(63942),Z=e(16073),E=e(24628),P=e(19260),A=e(56140),l=e(5388),j=e(49545),D=e(6965),g=e(49706),M=e(95127),O=e(74418),U=e(73024),_=e(94065),s=e(67294),t=e(96923);function d(){var u=(0,_.eL)(),n=u.texts;return(0,t.tZ)(_.dY,null,(0,t.tZ)(s.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("p",null,n[1].value),(0,t.tZ)("p",null,n[2].value),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(l.Z,{items:[{demo:{id:"components-affix-demo-basic"},previewerProps:{title:"Basic",filename:"components/affix/demo/basic.tsx",jsx:`import { Affix, Button } from 'antd';
import { useState } from 'react';
const App = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};
export default App;
`,description:"<p>The simplest usage.</p>"}},{demo:{id:"components-affix-demo-on-change"},previewerProps:{title:"Callback",filename:"components/affix/demo/on-change.tsx",jsx:`import { Affix, Button } from 'antd';
const App = () => (
  <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
);
export default App;
`,description:"<p>Callback with affixed state.</p>"}},{demo:{id:"components-affix-demo-target"},previewerProps:{title:"Container to scroll.",filename:"components/affix/demo/target.tsx",jsx:`import { Affix, Button } from 'antd';
import { useState } from 'react';
const App = () => {
  const [container, setContainer] = useState(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>Set a <code>target</code> for 'Affix', which is listen to scroll event of target element (default is <code>window</code>).</p>",style:`#components-affix-demo-target .scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}`}},{demo:{id:"components-affix-demo-debug"},previewerProps:{debug:!0,title:"debug",filename:"components/affix/demo/debug.tsx",jsx:`import { Affix, Button } from 'antd';
import { useState } from 'react';
const App = () => {
  const [top, setTop] = useState(10);
  return (
    <div
      style={{
        height: 10000,
      }}
    >
      <div>Top</div>
      <Affix offsetTop={top}>
        <div
          style={{
            background: 'red',
          }}
        >
          <Button type="primary" onClick={() => setTop(top + 10)}>
            Affix top
          </Button>
        </div>
      </Affix>
      <div>Bottom</div>
    </div>
  );
};
export default App;
`,description:"<p>DEBUG</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[3].value),(0,t.tZ)("th",null,n[4].value),(0,t.tZ)("th",null,n[5].value),(0,t.tZ)("th",null,n[6].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[7].value),(0,t.tZ)("td",null,n[8].value),(0,t.tZ)("td",null,n[9].value),(0,t.tZ)("td",null,n[10].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[11].value),(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null,n[16].value),(0,t.tZ)("td",null,n[17].value),(0,t.tZ)("td",null,n[18].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[19].value),(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null,n[22].value)))),(0,t.tZ)("p",null,(0,t.tZ)("strong",null,n[23].value),n[24].value,(0,t.tZ)("code",null,n[25].value),n[26].value,(0,t.tZ)("code",null,n[27].value),n[28].value,(0,t.tZ)("code",null,n[29].value),n[30].value,(0,t.tZ)("code",null,n[31].value),n[32].value),(0,t.tZ)(o.Z,{lang:"jsx"},n[33].value),(0,t.tZ)("h2",{id:"faq"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,t.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,t.tZ)("h3",{id:"when-binding-container-with-target-in-affix-elements-sometimes-move-out-of-the-container"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-binding-container-with-target-in-affix-elements-sometimes-move-out-of-the-container"},(0,t.tZ)("span",{className:"icon icon-link"})),"When binding container with ",(0,t.tZ)("code",null,n[34].value)," in Affix, elements sometimes move out of the container."),(0,t.tZ)("p",null,n[35].value,(0,t.tZ)("a",{href:"https://codesandbox.io/s/2xyj5zr85p"},n[36].value)),(0,t.tZ)("p",null,n[37].value,(0,t.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/3938"},n[38].value),n[39].value,(0,t.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/5642"},n[40].value),n[41].value,(0,t.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/16120"},n[42].value)),(0,t.tZ)("h3",{id:"when-affix-is-used-in-a-horizontal-scroll-container-the-position-of-the-element-left-is-incorrect"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-affix-is-used-in-a-horizontal-scroll-container-the-position-of-the-element-left-is-incorrect"},(0,t.tZ)("span",{className:"icon icon-link"})),"When Affix is \u200B\u200Bused in a horizontal scroll container, the position of the element ",(0,t.tZ)("code",null,n[43].value)," is incorrect."),(0,t.tZ)("p",null,n[44].value,(0,t.tZ)("code",null,n[45].value),n[46].value),(0,t.tZ)("p",null,n[47].value,(0,t.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/29108"},n[48].value)))))}i.default=d}}]);
