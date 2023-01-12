"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4764],{4875:function(u,_,n){n.r(_);var r=n(2143),p=n(50250),c=n(59378),E=n(5648),l=n(74775),s=n(5937),h=n(2068),v=n(74399),P=n(63942),Z=n(16073),x=n(24628),f=n(19260),A=n(56140),d=n(5388),y=n(49545),D=n(6965),j=n(49706),g=n(95127),M=n(74418),C=n(73024),i=n(94065),a=n(67294),t=n(96923);function o(){var m=(0,i.eL)(),e=m.texts;return(0,t.tZ)(i.dY,null,(0,t.tZ)(a.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[1].value),(0,t.tZ)("li",null,e[2].value)),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-empty-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/empty/demo/basic.tsx",jsx:`import { Empty } from 'antd';
const App = () => <Empty />;
export default App;
`,description:"<p>\u7B80\u5355\u7684\u5C55\u793A\u3002</p>"}},{demo:{id:"components-empty-demo-simple"},previewerProps:{title:"\u9009\u62E9\u56FE\u7247",filename:"components/empty/demo/simple.tsx",jsx:`import { Empty } from 'antd';
const App = () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>image</code> \u4E3A <code>Empty.PRESENTED_IMAGE_SIMPLE</code> \u9009\u62E9\u53E6\u4E00\u79CD\u98CE\u683C\u7684\u56FE\u7247\u3002</p>"}},{demo:{id:"components-empty-demo-customize"},previewerProps:{title:"\u81EA\u5B9A\u4E49",filename:"components/empty/demo/customize.tsx",jsx:`import { Button, Empty } from 'antd';
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
`,description:"<p>\u81EA\u5B9A\u4E49\u56FE\u7247\u94FE\u63A5\u3001\u56FE\u7247\u5927\u5C0F\u3001\u63CF\u8FF0\u3001\u9644\u5C5E\u5185\u5BB9\u3002</p>"}},{demo:{id:"components-empty-demo-config-provider"},previewerProps:{title:"\u5168\u5C40\u5316\u914D\u7F6E",filename:"components/empty/demo/config-provider.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
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
`,description:"<p>\u81EA\u5B9A\u4E49\u5168\u5C40\u7EC4\u4EF6\u7684 Empty \u6837\u5F0F\u3002</p>",style:`.code-box-demo .config-provider h4 {
  font-size: inherit;
  margin: 16px 0 8px 0;
}`}},{demo:{id:"components-empty-demo-description"},previewerProps:{title:"\u65E0\u63CF\u8FF0",filename:"components/empty/demo/description.tsx",jsx:`import { Empty } from 'antd';
const App = () => <Empty description={false} />;
export default App;
`,description:"<p>\u65E0\u63CF\u8FF0\u5C55\u793A\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(l.Z,{lang:"jsx"},e[3].value),(0,t.tZ)(s.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[4].value),(0,t.tZ)("th",null,e[5].value),(0,t.tZ)("th",null,e[6].value),(0,t.tZ)("th",null,e[7].value),(0,t.tZ)("th",null,e[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[9].value),(0,t.tZ)("td",null,e[10].value),(0,t.tZ)("td",null,e[11].value),(0,t.tZ)("td",null,e[12].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[13].value),(0,t.tZ)("td",null,e[14].value),(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[16].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h2",{id:"\u5185\u7F6E\u56FE\u7247"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u7F6E\u56FE\u7247"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5185\u7F6E\u56FE\u7247"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,(0,t.tZ)("p",null,e[21].value),(0,t.tZ)("div",{className:"site-empty-buildIn-img site-empty-buildIn-simple"},(0,t.tZ)("div",null))),(0,t.tZ)("li",null,(0,t.tZ)("p",null,e[22].value),(0,t.tZ)("div",{className:"site-empty-buildIn-img site-empty-buildIn-default"}))),(0,t.tZ)("style",{dangerouslySetInnerHTML:{__html:`
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
`}}))))}_.default=o}}]);
