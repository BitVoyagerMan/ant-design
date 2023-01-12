"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4781],{29052:function(p,t,l){l.r(t);var _=l(2143),r=l(50250),c=l(59378),m=l(5648),h=l(74775),a=l(5937),v=l(2068),Z=l(74399),P=l(63942),x=l(16073),f=l(24628),y=l(19260),C=l(56140),s=l(5388),E=l(49545),A=l(6965),g=l(49706),T=l(95127),O=l(74418),j=l(73024),o=l(94065),d=l(67294),n=l(96923);function i(){var u=(0,o.eL)(),e=u.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[1].value),(0,n.tZ)("li",null,(0,n.tZ)("code",null,e[2].value),e[3].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(s.Z,{items:[{demo:{id:"components-collapse-demo-basic"},previewerProps:{title:"\u6298\u53E0\u9762\u677F",filename:"components/collapse/demo/basic.tsx",jsx:`import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;
const App = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u540C\u65F6\u5C55\u5F00\u591A\u4E2A\u9762\u677F\uFF0C\u8FD9\u4E2A\u4F8B\u5B50\u9ED8\u8BA4\u5C55\u5F00\u4E86\u7B2C\u4E00\u4E2A\u3002</p>",style:`[data-theme="compact"] p, p {
  margin: 0;
}`}},{demo:{id:"components-collapse-demo-accordion"},previewerProps:{title:"\u624B\u98CE\u7434",filename:"components/collapse/demo/accordion.tsx",jsx:`import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;
const App = () => (
  <Collapse accordion>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
);
export default App;
`,description:"<p>\u624B\u98CE\u7434\uFF0C\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A tab\u3002</p>"}},{demo:{id:"components-collapse-demo-mix"},previewerProps:{title:"\u9762\u677F\u5D4C\u5957",filename:"components/collapse/demo/mix.tsx",jsx:`import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;
const App = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse onChange={onChange}>
      <Panel header="This is panel header 1" key="1">
        <Collapse defaultActiveKey="1">
          <Panel header="This is panel nest panel" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};
export default App;
`,description:"<p>\u5D4C\u5957\u6298\u53E0\u9762\u677F\u3002</p>"}},{demo:{id:"components-collapse-demo-borderless"},previewerProps:{title:"\u7B80\u6D01\u98CE\u683C",filename:"components/collapse/demo/borderless.tsx",jsx:`import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = (
  <p
    style={{
      paddingLeft: 24,
    }}
  >
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);
const App = () => (
  <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="This is panel header 1" key="1">
      {text}
    </Panel>
    <Panel header="This is panel header 2" key="2">
      {text}
    </Panel>
    <Panel header="This is panel header 3" key="3">
      {text}
    </Panel>
  </Collapse>
);
export default App;
`,description:"<p>\u4E00\u5957\u6CA1\u6709\u8FB9\u6846\u7684\u7B80\u6D01\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-collapse-demo-custom"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u9762\u677F",filename:"components/collapse/demo/custom.tsx",jsx:`import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
const { Panel } = Collapse;
const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;
const App = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: token.colorBgContainer,
      }}
    >
      <Panel header="This is panel header 1" key="1" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3" style={panelStyle}>
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u5404\u4E2A\u9762\u677F\u7684\u80CC\u666F\u8272\u3001\u5706\u89D2\u3001\u8FB9\u8DDD\u548C\u56FE\u6807\u3002</p>"}},{demo:{id:"components-collapse-demo-noarrow"},previewerProps:{title:"\u9690\u85CF\u7BAD\u5934",filename:"components/collapse/demo/noarrow.tsx",jsx:`import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;
const App = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="This is panel header with arrow icon" key="1">
        <p>{text}</p>
      </Panel>
      <Panel showArrow={false} header="This is panel header with no arrow icon" key="2">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};
export default App;
`,description:"<p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>showArrow={false}</code> \u9690\u85CF <code>CollapsePanel</code> \u7EC4\u4EF6\u7684\u7BAD\u5934\u56FE\u6807\u3002</p>"}},{demo:{id:"components-collapse-demo-extra"},previewerProps:{title:"\u989D\u5916\u8282\u70B9",filename:"components/collapse/demo/extra.tsx",jsx:`import { SettingOutlined } from '@ant-design/icons';
import { Collapse, Select } from 'antd';
import { useState } from 'react';
const { Panel } = Collapse;
const { Option } = Select;
const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;
const App = () => {
  const [expandIconPosition, setExpandIconPosition] = useState('start');
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
      >
        <Panel header="This is panel header 1" key="1" extra={genExtra()}>
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 2" key="2" extra={genExtra()}>
          <div>{text}</div>
        </Panel>
        <Panel header="This is panel header 3" key="3" extra={genExtra()}>
          <div>{text}</div>
        </Panel>
      </Collapse>
      <br />
      <span>Expand Icon Position: </span>
      <Select
        value={expandIconPosition}
        style={{
          margin: '0 8px',
        }}
        onChange={onPositionChange}
      >
        <Option value="start">start</Option>
        <Option value="end">end</Option>
      </Select>
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u540C\u65F6\u5C55\u5F00\u591A\u4E2A\u9762\u677F\uFF0C\u8FD9\u4E2A\u4F8B\u5B50\u9ED8\u8BA4\u5C55\u5F00\u4E86\u7B2C\u4E00\u4E2A\u3002</p>"}},{demo:{id:"components-collapse-demo-ghost"},previewerProps:{title:"\u5E7D\u7075\u6298\u53E0\u9762\u677F",filename:"components/collapse/demo/ghost.tsx",jsx:`import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;
const App = () => (
  <Collapse defaultActiveKey={['1']} ghost>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
);
export default App;
`,description:"<p>\u5C06\u6298\u53E0\u9762\u677F\u7684\u80CC\u666F\u53D8\u6210\u900F\u660E\u3002</p>"}},{demo:{id:"components-collapse-demo-collapsible"},previewerProps:{title:"\u53EF\u6298\u53E0\u89E6\u53D1\u533A\u57DF",filename:"components/collapse/demo/collapsible.tsx",jsx:`import { Collapse, Space } from 'antd';
const { Panel } = Collapse;
const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;
const App = () => (
  <Space direction="vertical">
    <Collapse collapsible="header" defaultActiveKey={['1']}>
      <Panel header="This panel can only be collapsed by clicking text" key="1">
        <p>{text}</p>
      </Panel>
    </Collapse>
    <Collapse collapsible="icon" defaultActiveKey={['1']}>
      <Panel header="This panel can only be collapsed by clicking icon" key="1">
        <p>{text}</p>
      </Panel>
    </Collapse>
    <Collapse collapsible="disabled">
      <Panel header="This panel can't be collapsed" key="1">
        <p>{text}</p>
      </Panel>
    </Collapse>
  </Space>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>collapsible</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u9762\u677F\u7684\u53EF\u6298\u53E0\u89E6\u53D1\u533A\u57DF\u3002</p>",style:`[data-theme="compact"] p, p {
  margin: 0;
}
#components-collapse-demo-collapsible .ant-space {
  width: 100%;
}`}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"collapse"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#collapse"},(0,n.tZ)("span",{className:"icon icon-link"})),"Collapse"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[4].value),(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value),(0,n.tZ)("th",null,e[7].value),(0,n.tZ)("th",null,e[8].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[9].value),(0,n.tZ)("td",null,e[10].value),(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null,e[15].value,(0,n.tZ)("br",null),e[16].value),(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[24].value),e[25].value,(0,n.tZ)("code",null,e[26].value),e[27].value,(0,n.tZ)("code",null,e[28].value)),(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,e[30].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,e[32].value),(0,n.tZ)("td",null,e[33].value,(0,n.tZ)("br",null),e[34].value),(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[36].value),(0,n.tZ)("td",null,e[37].value),(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null,e[39].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null,e[41].value),(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[44].value),(0,n.tZ)("td",null,e[45].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[46].value),e[47].value,(0,n.tZ)("code",null,e[48].value)),(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[51].value),(0,n.tZ)("td",null,e[52].value),(0,n.tZ)("td",null,e[53].value),(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null,e[55].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[56].value),(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"collapsepanel"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#collapsepanel"},(0,n.tZ)("span",{className:"icon icon-link"})),"Collapse.Panel"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[60].value),(0,n.tZ)("th",null,e[61].value),(0,n.tZ)("th",null,e[62].value),(0,n.tZ)("th",null,e[63].value),(0,n.tZ)("th",null,e[64].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[65].value),(0,n.tZ)("td",null,e[66].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[67].value),e[68].value,(0,n.tZ)("code",null,e[69].value),e[70].value,(0,n.tZ)("code",null,e[71].value)),(0,n.tZ)("td",null,e[72].value),(0,n.tZ)("td",null,e[73].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[74].value),(0,n.tZ)("td",null,e[75].value),(0,n.tZ)("td",null,e[76].value),(0,n.tZ)("td",null,e[77].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[78].value),(0,n.tZ)("td",null,e[79].value),(0,n.tZ)("td",null,e[80].value),(0,n.tZ)("td",null,e[81].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[82].value),(0,n.tZ)("td",null,e[83].value),(0,n.tZ)("td",null,e[84].value),(0,n.tZ)("td",null,e[85].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[86].value),(0,n.tZ)("td",null,e[87].value),(0,n.tZ)("td",null,e[88].value),(0,n.tZ)("td",null,e[89].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[90].value),(0,n.tZ)("td",null,e[91].value),(0,n.tZ)("td",null,e[92].value),(0,n.tZ)("td",null,e[93].value),(0,n.tZ)("td",null)))))))}t.default=i}}]);
