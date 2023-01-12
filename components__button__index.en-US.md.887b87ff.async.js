"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2695],{78148:function(s,l,e){e.r(l);var p=e(2143),c=e(50250),_=e(59378),m=e(5648),B=e(74775),a=e(5937),h=e(2068),v=e(74399),g=e(63942),Z=e(16073),b=e(24628),y=e(19260),f=e(56140),i=e(5388),S=e(49545),x=e(6965),D=e(49706),P=e(95127),O=e(74418),w=e(73024),o=e(94065),u=e(67294),t=e(96923);function d(){var r=(0,o.eL)(),n=r.texts;return(0,t.tZ)(o.dY,null,(0,t.tZ)(u.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("p",null,n[1].value),(0,t.tZ)("p",null,n[2].value),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[3].value),(0,t.tZ)("li",null,n[4].value),(0,t.tZ)("li",null,n[5].value),(0,t.tZ)("li",null,n[6].value),(0,t.tZ)("li",null,n[7].value)),(0,t.tZ)("p",null,n[8].value),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,(0,t.tZ)("code",null,n[9].value),n[10].value),(0,t.tZ)("li",null,(0,t.tZ)("code",null,n[11].value),n[12].value),(0,t.tZ)("li",null,(0,t.tZ)("code",null,n[13].value),n[14].value),(0,t.tZ)("li",null,(0,t.tZ)("code",null,n[15].value),n[16].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(i.Z,{items:[{demo:{id:"components-button-demo-basic"},previewerProps:{title:"Type",filename:"components/button/demo/basic.tsx",jsx:`import { Button, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);
export default App;
`,description:"<p>There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button, <code>text</code> button and <code>link</code> button in antd.</p>"}},{demo:{id:"components-button-demo-icon"},previewerProps:{title:"Icon",filename:"components/button/demo/icon.tsx",jsx:`import { SearchOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Space wrap>
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
    </Space>
    <Space wrap>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>
      <Button icon={<SearchOutlined />} href="https://www.google.com" />
    </Space>
  </Space>
);
export default App;
`,description:`<p><code>Button</code> components can contain an <code>Icon</code>. This is done by setting the <code>icon</code> property or placing an <code>Icon</code> component within the <code>Button</code>.</p>
<p>If you want specific control over the positioning and placement of the <code>Icon</code>, then that should be done by placing the <code>Icon</code> component within the <code>Button</code> rather than using the <code>icon</code> property.</p>`}},{demo:{id:"components-button-demo-debug-icon"},previewerProps:{debug:!0,title:"Debug Icon",filename:"components/button/demo/debug-icon.tsx",jsx:`import { SearchOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Divider, Radio, Space, Tooltip } from 'antd';
import { useState } from 'react';
const App = () => {
  const [size, setSize] = useState('large');
  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <ConfigProvider componentSize={size}>
        <Space direction="vertical">
          <Space wrap>
            <Tooltip title="search">
              <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" shape="circle">
              A
            </Button>
            <Button type="primary" icon={<SearchOutlined />}>
              Search
            </Button>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
          </Space>
          <Space wrap>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Tooltip title="search">
              <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />}>
              Search
            </Button>
            <Button icon={<SearchOutlined />} href="https://www.google.com" />
          </Space>
        </Space>
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Debug usage</p>"}},{demo:{id:"components-button-demo-debug-block"},previewerProps:{debug:!0,title:"Debug Block",filename:"components/button/demo/debug-block.tsx",jsx:`import { DownloadOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
const App = () => (
  <Form.Item>
    <Button
      size="large"
      shape="round"
      block
      style={{
        marginBottom: 12,
      }}
    >
      Submit
    </Button>
    <Button size="large" shape="round" icon={<DownloadOutlined />} />
  </Form.Item>
);
export default App;
`,description:"<p>Debug usage</p>"}},{demo:{id:"components-button-demo-size"},previewerProps:{title:"Size",filename:"components/button/demo/size.tsx",jsx:`import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space } from 'antd';
import { useState } from 'react';
const App = () => {
  const [size, setSize] = useState('large'); // default is 'middle'

  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <Space direction="vertical">
        <Space wrap>
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
        </Space>
        <Button type="link" size={size}>
          Link
        </Button>
        <Space wrap>
          <Button type="primary" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
          <Button type="primary" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
        </Space>
      </Space>
    </>
  );
};
export default App;
`,description:`<p>Ant Design supports a default button size as well as a large and small size.</p>
<p>If a large or small button is desired, set the <code>size</code> property to either <code>large</code> or <code>small</code> respectively. Omit the <code>size</code> property for a button with the default size.</p>`}},{demo:{id:"components-button-demo-disabled"},previewerProps:{title:"Disabled",filename:"components/button/demo/disabled.tsx",jsx:`import { Button, Space } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Space>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </Space>
    <Space>
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </Space>
    <Space>
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="text">Text</Button>
      <Button type="text" disabled>
        Text(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="primary" href="https://ant.design/index-cn">
        Href Primary
      </Button>
      <Button type="primary" href="https://ant.design/index-cn" disabled>
        Href Primary(disabled)
      </Button>
    </Space>
    <Space>
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
    </Space>
    <Space>
      <Button danger type="text">
        Danger Text
      </Button>
      <Button danger type="text" disabled>
        Danger Text(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="link" danger>
        Danger Link
      </Button>
      <Button type="link" danger disabled>
        Danger Link(disabled)
      </Button>
    </Space>
    <Space className="site-button-ghost-wrapper">
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </Space>
  </Space>
);
export default App;
`,description:"<p>To mark a button as disabled, add the <code>disabled</code> property to the <code>Button</code>.</p>"}},{demo:{id:"components-button-demo-loading"},previewerProps:{title:"Loading",filename:"components/button/demo/loading.tsx",jsx:`import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useState } from 'react';
const App = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <Space direction="vertical">
      <Space wrap>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
      </Space>

      <Space wrap>
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
        />
      </Space>
    </Space>
  );
};
export default App;
`,description:"<p>A loading indicator can be added to a button by setting the <code>loading</code> property on the <code>Button</code>.</p>"}},{demo:{id:"components-button-demo-multiple"},previewerProps:{title:"Multiple Buttons",filename:"components/button/demo/multiple.tsx",jsx:`import { Button, Dropdown, Space } from 'antd';
const onMenuClick = (e) => {
  console.log('click', e);
};
const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];
const App = () => (
  <Space direction="vertical">
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown.Button
      menu={{
        items,
        onClick: onMenuClick,
      }}
    >
      Actions
    </Dropdown.Button>
  </Space>
);
export default App;
`,description:'<p>If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into <a href="/components/dropdown/#components-dropdown-demo-dropdown-button">Dropdown.Button</a>.</p>'}},{demo:{id:"components-button-demo-ghost"},previewerProps:{title:"Ghost Button",filename:"components/button/demo/ghost.tsx",jsx:`import { Button, Space } from 'antd';
const App = () => (
  <Space className="site-button-ghost-wrapper" wrap>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="primary" danger ghost>
      Danger
    </Button>
  </Space>
);
export default App;
`,description:"<p><code>ghost</code> property will make button's background transparent, it is commonly used in colored background.</p>"}},{demo:{id:"components-button-demo-danger"},previewerProps:{title:"Danger Buttons",filename:"components/button/demo/danger.tsx",jsx:`import { Button, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </Space>
);
export default App;
`,description:"<p><code>danger</code> is a property of button after antd 4.0.</p>"}},{demo:{id:"components-button-demo-block"},previewerProps:{title:"Block Button",filename:"components/button/demo/block.tsx",jsx:`import { Button, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button disabled block>
      disabled
    </Button>
    <Button type="text" block>
      text
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </Space>
);
export default App;
`,description:"<p><code>block</code> property will make the button fit to its parent width.</p>"}},{demo:{id:"components-button-demo-legacy-group"},previewerProps:{debug:!0,title:"Deprecated Button Group",filename:"components/button/demo/legacy-group.tsx",jsx:`import { DownloadOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
const getGroup = (props) => (
  <div>
    <Button.Group {...props}>
      <Button type="primary">Button 1</Button>
      <Button type="primary">Button 2</Button>
      <Tooltip title="Tooltip">
        <Button type="primary" icon={<DownloadOutlined />} disabled />
      </Tooltip>
      <Tooltip title="Tooltip">
        <Button type="primary" icon={<DownloadOutlined />} />
      </Tooltip>
    </Button.Group>
  </div>
);
const App = () => (
  <>
    {getGroup({
      size: 'small',
    })}
    <br />
    {getGroup()}
    <br />
    {getGroup({
      size: 'large',
    })}
  </>
);
export default App;
`,description:"<p>Debug usage</p>"}},{demo:{id:"components-button-demo-chinese-chars-loading"},previewerProps:{debug:!0,title:"Loading style bug",filename:"components/button/demo/chinese-chars-loading.tsx",jsx:`// @ts-nocheck
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
const Text1 = () => '\u90E8\u7F72';
const Text2 = () => <span>\u90E8\u7F72</span>;
const Text3 = () => 'Submit';
const App = () => (
  <Space wrap>
    <Button loading>\u90E8\u7F72</Button>
    <Button loading>
      <Text1 />
    </Button>
    <Button loading>
      <Text2 />
    </Button>
    <Button loading>
      <Text3 />
    </Button>
    <Button loading icon={<PoweroffOutlined />}>
      <Text1 />
    </Button>
    <Button loading>\u6309\u94AE</Button>
  </Space>
);
export default App;
`,description:'<p><a href="https://github.com/ant-design/ant-design/issues/36165">https://github.com/ant-design/ant-design/issues/36165</a></p>'}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("p",null,n[17].value,(0,t.tZ)("code",null,n[18].value),n[19].value,(0,t.tZ)("code",null,n[20].value),n[21].value,(0,t.tZ)("code",null,n[22].value),n[23].value,(0,t.tZ)("code",null,n[24].value),n[25].value,(0,t.tZ)("code",null,n[26].value),n[27].value),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[28].value),(0,t.tZ)("th",null,n[29].value),(0,t.tZ)("th",null,n[30].value),(0,t.tZ)("th",null,n[31].value),(0,t.tZ)("th",null,n[32].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[33].value),(0,t.tZ)("td",null,n[34].value),(0,t.tZ)("td",null,n[35].value),(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,n[39].value),(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,n[46].value),(0,t.tZ)("td",null,n[47].value),(0,t.tZ)("td",null,n[48].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[49].value),(0,t.tZ)("td",null,n[50].value),(0,t.tZ)("td",null,n[51].value),(0,t.tZ)("td",null,n[52].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[53].value),(0,t.tZ)("td",null,n[54].value,(0,t.tZ)("code",null,n[55].value),n[56].value,(0,t.tZ)("code",null,n[57].value),n[58].value,(0,t.tZ)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type"},n[59].value)),(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[61].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null,n[63].value),(0,t.tZ)("td",null,n[64].value),(0,t.tZ)("td",null,n[65].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[66].value),(0,t.tZ)("td",null,n[67].value),(0,t.tZ)("td",null,n[68].value),(0,t.tZ)("td",null,n[69].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[70].value),(0,t.tZ)("td",null,n[71].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[72].value),n[73].value,(0,t.tZ)("code",null,n[74].value),n[75].value,(0,t.tZ)("code",null,n[76].value)),(0,t.tZ)("td",null,n[77].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[78].value),(0,t.tZ)("td",null,n[79].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[80].value),n[81].value,(0,t.tZ)("code",null,n[82].value),n[83].value,(0,t.tZ)("code",null,n[84].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[85].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[86].value),(0,t.tZ)("td",null,n[87].value),(0,t.tZ)("td",null,n[88].value),(0,t.tZ)("td",null,n[89].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[90].value),(0,t.tZ)("td",null,n[91].value,(0,t.tZ)("code",null,n[92].value),n[93].value,(0,t.tZ)("code",null,n[94].value),n[95].value,(0,t.tZ)("code",null,n[96].value),n[97].value,(0,t.tZ)("code",null,n[98].value),n[99].value,(0,t.tZ)("code",null,n[100].value),n[101].value,(0,t.tZ)("code",null,n[102].value)),(0,t.tZ)("td",null,n[103].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[104].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[105].value),(0,t.tZ)("td",null,n[106].value,(0,t.tZ)("code",null,n[107].value),n[108].value),(0,t.tZ)("td",null,n[109].value),(0,t.tZ)("td",null,n[110].value),(0,t.tZ)("td",null)))),(0,t.tZ)("p",null,n[111].value),(0,t.tZ)("h2",{id:"faq"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,t.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,t.tZ)("h3",{id:"how-to-remove-space-between-2-chinese-characters"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-remove-space-between-2-chinese-characters"},(0,t.tZ)("span",{className:"icon icon-link"})),"How to remove space between 2 chinese characters?"),(0,t.tZ)("p",null,n[112].value,(0,t.tZ)(o.rU,{to:"/components/config-provider/#api"},n[113].value),n[114].value,(0,t.tZ)("code",null,n[115].value),n[116].value,(0,t.tZ)("code",null,n[117].value),n[118].value),(0,t.tZ)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/MY%26THAPZrW/38f06cb9-293a-4b42-b183-9f443e79ffea.png",style:{boxShadow:"none",margin:"0",width:"100px"},alt:"Button with two Chinese characters"}),(0,t.tZ)("style",{dangerouslySetInnerHTML:{__html:`
.site-button-ghost-wrapper {
  padding: 16px;
  background: rgb(190, 200, 200);
}

[data-theme="dark"] .site-button-ghost-wrapper {
  background: rgba(255, 255, 255, 0.2);
}
`}}))))}l.default=d}}]);
