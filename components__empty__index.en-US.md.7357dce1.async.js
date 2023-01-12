"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[453],{72047:function(r,i,n){n.r(i);var u=n(2143),p=n(50250),c=n(59378),h=n(5648),s=n(74775),l=n(5937),E=n(2068),v=n(74399),P=n(63942),g=n(16073),x=n(24628),f=n(19260),Z=n(56140),d=n(5388),y=n(49545),A=n(6965),D=n(49706),j=n(95127),C=n(74418),M=n(73024),_=n(94065),a=n(67294),t=n(96923);function o(){var m=(0,_.eL)(),e=m.texts;return(0,t.tZ)(_.dY,null,(0,t.tZ)(a.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[1].value),(0,t.tZ)("li",null,e[2].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-empty-demo-basic"},previewerProps:{title:"Basic",filename:"components/empty/demo/basic.tsx",jsx:`import { Empty } from 'antd';
const App = () => <Empty />;
export default App;
`,description:"<p>Simplest Usage.</p>"}},{demo:{id:"components-empty-demo-simple"},previewerProps:{title:"Chose image",filename:"components/empty/demo/simple.tsx",jsx:`import { Empty } from 'antd';
const App = () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
export default App;
`,description:"<p>You can choose another style of <code>image</code> by setting image to <code>Empty.PRESENTED_IMAGE_SIMPLE</code>.</p>"}},{demo:{id:"components-empty-demo-customize"},previewerProps:{title:"Customize",filename:"components/empty/demo/customize.tsx",jsx:`import { Button, Empty } from 'antd';
const App = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
);
export default App;
`,description:"<p>Customize image source, image size, description and extra content.</p>"}},{demo:{id:"components-empty-demo-config-provider"},previewerProps:{title:"ConfigProvider",filename:"components/empty/demo/config-provider.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import {
  Cascader,
  ConfigProvider,
  Divider,
  List,
  Select,
  Switch,
  Table,
  Transfer,
  TreeSelect,
} from 'antd';
import { useState } from 'react';
const customizeRenderEmpty = () => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <SmileOutlined
      style={{
        fontSize: 20,
      }}
    />
    <p>Data Not Found</p>
  </div>
);
const style = {
  width: 200,
};
const App = () => {
  const [customize, setCustomize] = useState(false);
  return (
    <div>
      <Switch
        unCheckedChildren="default"
        checkedChildren="customize"
        checked={customize}
        onChange={(val) => {
          setCustomize(val);
        }}
      />

      <Divider />

      <ConfigProvider renderEmpty={customize ? customizeRenderEmpty : undefined}>
        <div className="config-provider">
          <h4>Select</h4>
          <Select style={style} />

          <h4>TreeSelect</h4>
          <TreeSelect style={style} treeData={[]} />

          <h4>Cascader</h4>
          <Cascader style={style} options={[]} showSearch />

          <h4>Transfer</h4>
          <Transfer />

          <h4>Table</h4>
          <Table
            style={{
              marginTop: 8,
            }}
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              },
            ]}
          />

          <h4>List</h4>
          <List />
        </div>
      </ConfigProvider>
    </div>
  );
};
export default App;
`,description:"<p>Use ConfigProvider set global Empty style.</p>",style:`.code-box-demo .config-provider h4 {
  font-size: inherit;
  margin: 16px 0 8px 0;
}`}},{demo:{id:"components-empty-demo-description"},previewerProps:{title:"No description",filename:"components/empty/demo/description.tsx",jsx:`import { Empty } from 'antd';
const App = () => <Empty description={false} />;
export default App;
`,description:"<p>Simplest Usage with no description.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(s.Z,{lang:"jsx"},e[3].value),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[4].value),(0,t.tZ)("th",null,e[5].value),(0,t.tZ)("th",null,e[6].value),(0,t.tZ)("th",null,e[7].value),(0,t.tZ)("th",null,e[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[9].value),(0,t.tZ)("td",null,e[10].value),(0,t.tZ)("td",null,e[11].value),(0,t.tZ)("td",null,e[12].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[13].value),(0,t.tZ)("td",null,e[14].value),(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[16].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h2",{id:"built-in-images"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#built-in-images"},(0,t.tZ)("span",{className:"icon icon-link"})),"Built-in images"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,(0,t.tZ)("p",null,e[21].value),(0,t.tZ)("div",{className:"site-empty-buildIn-img site-empty-buildIn-simple"},(0,t.tZ)("div",null))),(0,t.tZ)("li",null,(0,t.tZ)("p",null,e[22].value),(0,t.tZ)("div",{className:"site-empty-buildIn-img site-empty-buildIn-default"}))),(0,t.tZ)("style",{dangerouslySetInnerHTML:{__html:`
  .site-empty-buildIn-img {
    background-repeat: no-repeat;
    background-size: contain;
  }
  .site-empty-buildIn-simple {
    width: 55px;
    height: 35px;
    background-image: url("https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png");
  }
  .site-empty-buildIn-default {
    width: 121px;
    height: 116px;
    background-image: url("https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png");
  }
  [data-theme="dark"] .site-empty-buildIn-simple {
    background-image: url("https://gw.alipayobjects.com/zos/antfincdn/ldFsHUh3Xh/ea62c5fe-07bb-4fcd-9d35-19220cef372e.png");
  }
  [data-theme="dark"] .site-empty-buildIn-default {
    background-image: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*gfq-SoT3wF0AAAAAAAAAAABkARQnAQ");
  }
`}}))))}i.default=o}}]);
