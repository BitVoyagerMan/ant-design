"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6669],{65147:function(o,n,e){e.r(n);var r=e(2143),m=e(50250),Z=e(59378),p=e(5648),v=e(74775),a=e(5937),c=e(2068),h=e(74399),E=e(63942),x=e(16073),P=e(24628),f=e(19260),O=e(56140),d=e(5388),j=e(49545),M=e(6965),D=e(49706),R=e(95127),A=e(74418),C=e(73024),_=e(94065),u=e(67294),t=e(96923);function s(){var i=(0,_.eL)(),l=i.texts;return(0,t.tZ)(_.dY,null,(0,t.tZ)(u.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,l[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,l[1].value),(0,t.tZ)("li",null,l[2].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-rate-demo-basic"},previewerProps:{title:"Basic",filename:"components/rate/demo/basic.tsx",jsx:`import { Rate } from 'antd';
const App = () => <Rate />;
export default App;
`,description:"<p>The simplest usage.</p>"}},{demo:{id:"components-rate-demo-half"},previewerProps:{title:"Half star",filename:"components/rate/demo/half.tsx",jsx:`import { Rate } from 'antd';
const App = () => <Rate allowHalf defaultValue={2.5} />;
export default App;
`,description:"<p>Support select half star.</p>"}},{demo:{id:"components-rate-demo-text"},previewerProps:{title:"Show copywriting",filename:"components/rate/demo/text.tsx",jsx:`import { Rate } from 'antd';
import { useState } from 'react';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const App = () => {
  const [value, setValue] = useState(3);
  return (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  );
};
export default App;
`,description:"<p>Add copywriting in rate components.</p>"}},{demo:{id:"components-rate-demo-disabled"},previewerProps:{title:"Read only",filename:"components/rate/demo/disabled.tsx",jsx:`import { Rate } from 'antd';
const App = () => <Rate disabled defaultValue={2} />;
export default App;
`,description:"<p>Read only, can't use mouse to interact.</p>"}},{demo:{id:"components-rate-demo-clear"},previewerProps:{title:"Clear star",filename:"components/rate/demo/clear.tsx",jsx:`import { Rate } from 'antd';
const App = () => (
  <>
    <Rate defaultValue={3} />
    <span className="ant-rate-text">allowClear: true</span>
    <br />
    <Rate allowClear={false} defaultValue={3} />
    <span className="ant-rate-text">allowClear: false</span>
  </>
);
export default App;
`,description:"<p>Support set allow to clear star when click again.</p>"}},{demo:{id:"components-rate-demo-character"},previewerProps:{title:"Other Character",filename:"components/rate/demo/character.tsx",jsx:`import { HeartOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
const App = () => (
  <>
    <Rate character={<HeartOutlined />} allowHalf />
    <br />
    <Rate
      character="A"
      allowHalf
      style={{
        fontSize: 36,
      }}
    />
    <br />
    <Rate character="\u597D" allowHalf />
  </>
);
export default App;
`,description:"<p>Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.</p>"}},{demo:{id:"components-rate-demo-character-function"},previewerProps:{title:"Customize character",filename:"components/rate/demo/character-function.tsx",jsx:`import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const App = () => (
  <>
    <Rate defaultValue={2} character={({ index }) => index + 1} />
    <br />
    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
  </>
);
export default App;
`,description:"<p>Can customize each character using <code>(RateProps) => ReactNode</code>.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,l[3].value),(0,t.tZ)("th",null,l[4].value),(0,t.tZ)("th",null,l[5].value),(0,t.tZ)("th",null,l[6].value),(0,t.tZ)("th",null,l[7].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[8].value),(0,t.tZ)("td",null,l[9].value),(0,t.tZ)("td",null,l[10].value),(0,t.tZ)("td",null,l[11].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[12].value),(0,t.tZ)("td",null,l[13].value),(0,t.tZ)("td",null,l[14].value),(0,t.tZ)("td",null,l[15].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[16].value),(0,t.tZ)("td",null,l[17].value),(0,t.tZ)("td",null,l[18].value),(0,t.tZ)("td",null,l[19].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[20].value),(0,t.tZ)("td",null,l[21].value),(0,t.tZ)("td",null,l[22].value),(0,t.tZ)("td",null,l[23].value),(0,t.tZ)("td",null,l[24].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[25].value),(0,t.tZ)("td",null,l[26].value),(0,t.tZ)("td",null,l[27].value),(0,t.tZ)("td",null,l[28].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[29].value),(0,t.tZ)("td",null,l[30].value),(0,t.tZ)("td",null,l[31].value),(0,t.tZ)("td",null,l[32].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[33].value),(0,t.tZ)("td",null,l[34].value),(0,t.tZ)("td",null,l[35].value),(0,t.tZ)("td",null,l[36].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[37].value),(0,t.tZ)("td",null,l[38].value),(0,t.tZ)("td",null,l[39].value),(0,t.tZ)("td",null,l[40].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[41].value),(0,t.tZ)("td",null,l[42].value),(0,t.tZ)("td",null,l[43].value),(0,t.tZ)("td",null,l[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[45].value),(0,t.tZ)("td",null,l[46].value),(0,t.tZ)("td",null,l[47].value),(0,t.tZ)("td",null,l[48].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[49].value),(0,t.tZ)("td",null,l[50].value),(0,t.tZ)("td",null,l[51].value),(0,t.tZ)("td",null,l[52].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[53].value),(0,t.tZ)("td",null,l[54].value),(0,t.tZ)("td",null,l[55].value),(0,t.tZ)("td",null,l[56].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[57].value),(0,t.tZ)("td",null,l[58].value),(0,t.tZ)("td",null,l[59].value),(0,t.tZ)("td",null,l[60].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[61].value),(0,t.tZ)("td",null,l[62].value),(0,t.tZ)("td",null,l[63].value),(0,t.tZ)("td",null,l[64].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[65].value),(0,t.tZ)("td",null,l[66].value),(0,t.tZ)("td",null,l[67].value),(0,t.tZ)("td",null,l[68].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[69].value),(0,t.tZ)("td",null,l[70].value),(0,t.tZ)("td",null,l[71].value),(0,t.tZ)("td",null,l[72].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h2",{id:"methods"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#methods"},(0,t.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,l[73].value),(0,t.tZ)("th",null,l[74].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[75].value),(0,t.tZ)("td",null,l[76].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[77].value),(0,t.tZ)("td",null,l[78].value)))))))}n.default=s}}]);
