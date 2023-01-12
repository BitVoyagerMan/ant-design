"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4142],{30309:function(s,a,e){e.r(a);var v=e(2143),i=e(50250),c=e(59378),_=e(5648),p=e(74775),u=e(5937),m=e(2068),h=e(74399),f=e(63942),x=e(16073),D=e(24628),E=e(19260),P=e(56140),d=e(5388),C=e(49545),S=e(6965),T=e(49706),g=e(95127),w=e(74418),A=e(73024),n=e(94065),o=e(67294),l=e(96923);function r(){var Z=(0,n.eL)(),t=Z.texts;return(0,l.tZ)(n.dY,null,(0,l.tZ)(o.Fragment,null,(0,l.tZ)("div",{className:"markdown"},(0,l.tZ)("p",null,t[0].value),(0,l.tZ)("h2",{id:"when-to-use"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,l.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,l.tZ)("p",null,(0,l.tZ)("code",null,t[1].value),t[2].value,(0,l.tZ)("code",null,t[3].value),t[4].value),(0,l.tZ)("h2",{id:"examples"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,l.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,l.tZ)(d.Z,{items:[{demo:{id:"components-tree-select-demo-basic"},previewerProps:{title:"Basic",filename:"components/tree-select/demo/basic.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState(undefined);
  const onChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-tree-select-demo-multiple"},previewerProps:{title:"Multiple Selection",filename:"components/tree-select/demo/multiple.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                sss
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>Multiple selection usage.</p>"}},{demo:{id:"components-tree-select-demo-treedata"},previewerProps:{title:"Generate from tree data",filename:"components/tree-select/demo/treeData.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      treeData={treeData}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
    />
  );
};
export default App;
`,description:"<p>The tree structure can be populated using <code>treeData</code> property. This is a quick and easy way to provide the tree content.</p>"}},{demo:{id:"components-tree-select-demo-checkable"},previewerProps:{title:"Checkable",filename:"components/tree-select/demo/checkable.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const { SHOW_PARENT } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState(['0-0-0']);
  const onChange = (newValue) => {
    console.log('onChange ', value);
    setValue(newValue);
  };
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };
  return <TreeSelect {...tProps} />;
};
export default App;
`,description:"<p>Multiple and checkable.</p>"}},{demo:{id:"components-tree-select-demo-async"},previewerProps:{title:"Asynchronous loading",filename:"components/tree-select/demo/async.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState();
  const [treeData, setTreeData] = useState([
    {
      id: 1,
      pId: 0,
      value: '1',
      title: 'Expand to load',
    },
    {
      id: 2,
      pId: 0,
      value: '2',
      title: 'Expand to load',
    },
    {
      id: 3,
      pId: 0,
      value: '3',
      title: 'Tree Node',
      isLeaf: true,
    },
  ]);
  const genTreeNode = (parentId, isLeaf = false) => {
    const random = Math.random().toString(36).substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    };
  };
  const onLoadData = ({ id }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTreeData(
          treeData.concat([genTreeNode(id, false), genTreeNode(id, true), genTreeNode(id, true)]),
        );
        resolve(undefined);
      }, 300);
    });
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      treeDataSimpleMode
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      onChange={onChange}
      loadData={onLoadData}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>Asynchronous loading tree node.</p>"}},{demo:{id:"components-tree-select-demo-treeline"},previewerProps:{title:"Show Tree Line",filename:"components/tree-select/demo/treeLine.tsx",jsx:`import { Space, Switch, TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: 'sss',
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  return (
    <Space direction="vertical">
      <Switch
        checkedChildren="treeLine"
        unCheckedChildren="treeLine"
        checked={treeLine}
        onChange={() => setTreeLine(!treeLine)}
      />
      <Switch
        disabled={!treeLine}
        checkedChildren="showLeafIcon"
        unCheckedChildren="showLeafIcon"
        checked={showLeafIcon}
        onChange={() => setShowLeafIcon(!showLeafIcon)}
      />
      <TreeSelect
        treeLine={
          treeLine && {
            showLeafIcon,
          }
        }
        style={{
          width: 300,
        }}
        treeData={treeData}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Use <code>treeLine</code> to show the line style.</p>"}},{demo:{id:"components-tree-select-demo-placement"},previewerProps:{title:"Placement",filename:"components/tree-select/demo/placement.tsx",jsx:`import { Radio, TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />

      <TreeSelect
        showSearch
        dropdownStyle={{
          maxHeight: 400,
          overflow: 'auto',
          minWidth: 300,
        }}
        placeholder="Please select"
        dropdownMatchSelectWidth={false}
        placement={placement}
        allowClear
        treeDefaultExpandAll
        treeData={treeData}
      />
    </>
  );
};
export default App;
`,description:"<p>You can manually specify the position of the popup via <code>placement</code>.</p>"}},{demo:{id:"components-tree-select-demo-status"},previewerProps:{title:"Status",filename:"components/tree-select/demo/status.tsx",jsx:`import { Space, TreeSelect } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <TreeSelect
      status="error"
      style={{
        width: '100%',
      }}
      placeholder="Error"
    />
    <TreeSelect
      status="warning"
      style={{
        width: '100%',
      }}
      multiple
      placeholder="Warning multiple"
    />
  </Space>
);
export default App;
`,description:"<p>Add status to TreeSelect with <code>status</code>, which could be <code>error</code> or <code>warning</code>.</p>"}},{demo:{id:"components-tree-select-demo-suffix"},previewerProps:{debug:!0,title:"Suffix",filename:"components/tree-select/demo/suffix.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';
import { useState } from 'react';
const icon = <SmileOutlined />;
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                sss
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      suffixIcon={icon}
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-tree-select-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tree-select/demo/render-panel.tsx",jsx:`import { TreeSelect } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTreeSelect } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App = () => (
  <InternalTreeSelect
    defaultValue="lucy"
    style={{
      width: '100%',
    }}
    treeData={treeData}
  />
);
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,l.tZ)("div",{className:"markdown"},(0,l.tZ)("h2",{id:"api"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,l.tZ)("span",{className:"icon icon-link"})),"API"),(0,l.tZ)("h3",{id:"tree-props"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tree-props"},(0,l.tZ)("span",{className:"icon icon-link"})),"Tree props"),(0,l.tZ)(u.Z,{className:"component-api-table"},(0,l.tZ)("thead",null,(0,l.tZ)("tr",null,(0,l.tZ)("th",null,t[5].value),(0,l.tZ)("th",null,t[6].value),(0,l.tZ)("th",null,t[7].value),(0,l.tZ)("th",null,t[8].value),(0,l.tZ)("th",null,t[9].value))),(0,l.tZ)("tbody",null,(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[10].value),(0,l.tZ)("td",null,t[11].value),(0,l.tZ)("td",null,t[12].value),(0,l.tZ)("td",null,t[13].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[14].value),(0,l.tZ)("td",null,t[15].value),(0,l.tZ)("td",null,t[16].value),(0,l.tZ)("td",null,t[17].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[18].value),(0,l.tZ)("td",null,t[19].value),(0,l.tZ)("td",null,t[20].value),(0,l.tZ)("td",null,t[21].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[22].value),(0,l.tZ)("td",null,t[23].value),(0,l.tZ)("td",null,t[24].value),(0,l.tZ)("td",null,t[25].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[26].value),(0,l.tZ)("td",null,t[27].value),(0,l.tZ)("td",null,t[28].value),(0,l.tZ)("td",null,t[29].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[30].value),(0,l.tZ)("td",null,t[31].value),(0,l.tZ)("td",null,t[32].value),(0,l.tZ)("td",null,t[33].value),(0,l.tZ)("td",null,t[34].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[35].value),(0,l.tZ)("td",null,t[36].value,(0,l.tZ)("code",null,t[37].value),t[38].value,(0,l.tZ)("code",null,t[39].value),t[40].value),(0,l.tZ)("td",null,t[41].value),(0,l.tZ)("td",null,t[42].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[43].value),(0,l.tZ)("td",null,t[44].value),(0,l.tZ)("td",null,t[45].value),(0,l.tZ)("td",null,t[46].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[47].value),(0,l.tZ)("td",null,t[48].value),(0,l.tZ)("td",null,t[49].value),(0,l.tZ)("td",null,t[50].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[51].value),(0,l.tZ)("td",null,t[52].value),(0,l.tZ)("td",null,t[53].value),(0,l.tZ)("td",null,t[54].value,(0,l.tZ)("code",null,t[55].value),t[56].value,(0,l.tZ)("code",null,t[57].value),t[58].value,(0,l.tZ)("code",null,t[59].value),t[60].value),(0,l.tZ)("td",null,t[61].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[62].value),(0,l.tZ)("td",null,t[63].value,(0,l.tZ)("code",null,t[64].value),t[65].value),(0,l.tZ)("td",null,t[66].value),(0,l.tZ)("td",null,t[67].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[68].value),(0,l.tZ)("td",null,t[69].value,(0,l.tZ)("code",null,t[70].value),t[71].value,(0,l.tZ)("code",null,t[72].value),t[73].value,(0,l.tZ)("a",{href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},t[74].value)),(0,l.tZ)("td",null,t[75].value),(0,l.tZ)("td",null,t[76].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[77].value),(0,l.tZ)("td",null,t[78].value,(0,l.tZ)("code",null,t[79].value),t[80].value),(0,l.tZ)("td",null,t[81].value),(0,l.tZ)("td",null,t[82].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[83].value),(0,l.tZ)("td",null,t[84].value),(0,l.tZ)("td",null,t[85].value),(0,l.tZ)("td",null,t[86].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[87].value),(0,l.tZ)("td",null,t[88].value),(0,l.tZ)("td",null,t[89].value),(0,l.tZ)("td",null,t[90].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[91].value),(0,l.tZ)("td",null,t[92].value,(0,l.tZ)("code",null,t[93].value),t[94].value),(0,l.tZ)("td",null,t[95].value,(0,l.tZ)("code",null,t[96].value)),(0,l.tZ)("td",null,t[97].value),(0,l.tZ)("td",null,t[98].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[99].value),(0,l.tZ)("td",null,t[100].value),(0,l.tZ)("td",null,t[101].value),(0,l.tZ)("td",null,t[102].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[103].value),(0,l.tZ)("td",null,t[104].value,(0,l.tZ)("code",null,t[105].value),t[106].value,(0,l.tZ)("code",null,t[107].value)),(0,l.tZ)("td",null,t[108].value),(0,l.tZ)("td",null,t[109].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[110].value),(0,l.tZ)("td",null,t[111].value),(0,l.tZ)("td",null,t[112].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,t[113].value)),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[114].value),(0,l.tZ)("td",null,t[115].value),(0,l.tZ)("td",null,t[116].value),(0,l.tZ)("td",null,t[117].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[118].value),(0,l.tZ)("td",null,t[119].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,t[120].value),t[121].value,(0,l.tZ)("code",null,t[122].value),t[123].value,(0,l.tZ)("code",null,t[124].value),t[125].value,(0,l.tZ)("code",null,t[126].value)),(0,l.tZ)("td",null,t[127].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[128].value),(0,l.tZ)("td",null,t[129].value,(0,l.tZ)("code",null,t[130].value),t[131].value),(0,l.tZ)("td",null,t[132].value),(0,l.tZ)("td",null,t[133].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[134].value),(0,l.tZ)("td",null,t[135].value,(0,l.tZ)("code",null,t[136].value),t[137].value,(0,l.tZ)("code",null,t[138].value)),(0,l.tZ)("td",null,t[139].value),(0,l.tZ)("td",null,t[140].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[141].value),(0,l.tZ)("td",null,t[142].value,(0,l.tZ)("code",null,t[143].value),t[144].value,(0,l.tZ)("strong",null,t[145].value),t[146].value,(0,l.tZ)("strong",null,(0,l.tZ)("code",null,t[147].value),t[148].value),t[149].value,(0,l.tZ)("strong",null,(0,l.tZ)("code",null,t[150].value),t[151].value),t[152].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,t[153].value),t[154].value,(0,l.tZ)("code",null,t[155].value),t[156].value,(0,l.tZ)("code",null,t[157].value)),(0,l.tZ)("td",null,(0,l.tZ)("code",null,t[158].value)),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[159].value),(0,l.tZ)("td",null,t[160].value),(0,l.tZ)("td",null,t[161].value),(0,l.tZ)("td",null,t[162].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[163].value),(0,l.tZ)("td",null,t[164].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,t[165].value),t[166].value,(0,l.tZ)("code",null,t[167].value),t[168].value,(0,l.tZ)("code",null,t[169].value)),(0,l.tZ)("td",null,t[170].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[171].value),(0,l.tZ)("td",null,t[172].value),(0,l.tZ)("td",null,t[173].value),(0,l.tZ)("td",null,t[174].value),(0,l.tZ)("td",null,t[175].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[176].value),(0,l.tZ)("td",null,t[177].value,(0,l.tZ)("code",null,t[178].value),t[179].value,(0,l.tZ)("code",null,t[180].value),t[181].value),(0,l.tZ)("td",null,t[182].value),(0,l.tZ)("td",null,t[183].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[184].value),(0,l.tZ)("td",null,t[185].value),(0,l.tZ)("td",null,t[186].value),(0,l.tZ)("td",null,t[187].value),(0,l.tZ)("td",null,t[188].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[189].value),(0,l.tZ)("td",null,t[190].value,(0,l.tZ)("code",null,t[191].value)),(0,l.tZ)("td",null,t[192].value),(0,l.tZ)("td",null,t[193].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[194].value),(0,l.tZ)("td",null,t[195].value),(0,l.tZ)("td",null,t[196].value),(0,l.tZ)("td",null,t[197].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[198].value),(0,l.tZ)("td",null,t[199].value,(0,l.tZ)("code",null,t[200].value),t[201].value,(0,l.tZ)("code",null,t[202].value),t[203].value),(0,l.tZ)("td",null,t[204].value),(0,l.tZ)("td",null,t[205].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[206].value),(0,l.tZ)("td",null,t[207].value),(0,l.tZ)("td",null,t[208].value),(0,l.tZ)("td",null,t[209].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[210].value),(0,l.tZ)("td",null,t[211].value,(0,l.tZ)("code",null,t[212].value),t[213].value,(0,l.tZ)("code",null,t[214].value),t[215].value,(0,l.tZ)("code",null,t[216].value),t[217].value,(0,l.tZ)("code",null,t[218].value)),(0,l.tZ)("td",null,t[219].value),(0,l.tZ)("td",null,t[220].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[221].value),(0,l.tZ)("td",null,t[222].value),(0,l.tZ)("td",null,t[223].value),(0,l.tZ)("td",null,t[224].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[225].value),(0,l.tZ)("td",null,t[226].value),(0,l.tZ)("td",null,t[227].value),(0,l.tZ)("td",null,t[228].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[229].value),(0,l.tZ)("td",null,t[230].value,(0,l.tZ)("code",null,t[231].value),t[232].value,(0,l.tZ)("code",null,t[233].value)),(0,l.tZ)("td",null,t[234].value),(0,l.tZ)("td",null,t[235].value),(0,l.tZ)("td",null,t[236].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[237].value),(0,l.tZ)("td",null,t[238].value),(0,l.tZ)("td",null,t[239].value),(0,l.tZ)("td",null,t[240].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[241].value),(0,l.tZ)("td",null,t[242].value,(0,l.tZ)("code",null,t[243].value)),(0,l.tZ)("td",null,t[244].value),(0,l.tZ)("td",null,t[245].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[246].value),(0,l.tZ)("td",null,t[247].value,(0,l.tZ)("code",null,t[248].value),t[249].value),(0,l.tZ)("td",null,t[250].value),(0,l.tZ)("td",null,t[251].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[252].value),(0,l.tZ)("td",null,t[253].value,(0,l.tZ)(n.rU,{to:"/components/tree/#components-tree-demo-line"},t[254].value)),(0,l.tZ)("td",null,t[255].value),(0,l.tZ)("td",null,t[256].value),(0,l.tZ)("td",null,t[257].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[258].value),(0,l.tZ)("td",null,t[259].value,(0,l.tZ)("code",null,t[260].value),t[261].value),(0,l.tZ)("td",null,t[262].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,t[263].value)),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[264].value),(0,l.tZ)("td",null,t[265].value),(0,l.tZ)("td",null,t[266].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,t[267].value)),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[268].value),(0,l.tZ)("td",null,t[269].value),(0,l.tZ)("td",null,t[270].value),(0,l.tZ)("td",null,t[271].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[272].value),(0,l.tZ)("td",null,t[273].value),(0,l.tZ)("td",null,t[274].value),(0,l.tZ)("td",null,t[275].value),(0,l.tZ)("td",null,t[276].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[277].value),(0,l.tZ)("td",null,t[278].value),(0,l.tZ)("td",null,t[279].value),(0,l.tZ)("td",null,t[280].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[281].value),(0,l.tZ)("td",null,t[282].value),(0,l.tZ)("td",null,t[283].value),(0,l.tZ)("td",null,t[284].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[285].value),(0,l.tZ)("td",null,t[286].value),(0,l.tZ)("td",null,t[287].value),(0,l.tZ)("td",null,t[288].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[289].value),(0,l.tZ)("td",null,t[290].value),(0,l.tZ)("td",null,t[291].value),(0,l.tZ)("td",null,t[292].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[293].value),(0,l.tZ)("td",null,t[294].value),(0,l.tZ)("td",null,t[295].value),(0,l.tZ)("td",null,t[296].value),(0,l.tZ)("td",null)))),(0,l.tZ)("h3",{id:"tree-methods"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tree-methods"},(0,l.tZ)("span",{className:"icon icon-link"})),"Tree Methods"),(0,l.tZ)(u.Z,{className:"component-api-table"},(0,l.tZ)("thead",null,(0,l.tZ)("tr",null,(0,l.tZ)("th",null,t[297].value),(0,l.tZ)("th",null,t[298].value),(0,l.tZ)("th",null,t[299].value))),(0,l.tZ)("tbody",null,(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[300].value),(0,l.tZ)("td",null,t[301].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[302].value),(0,l.tZ)("td",null,t[303].value),(0,l.tZ)("td",null)))),(0,l.tZ)("h3",{id:"treenode-props"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#treenode-props"},(0,l.tZ)("span",{className:"icon icon-link"})),"TreeNode props"),(0,l.tZ)("blockquote",null,(0,l.tZ)("p",null,t[304].value,(0,l.tZ)("code",null,t[305].value),t[306].value,(0,l.tZ)("code",null,t[307].value),t[308].value)),(0,l.tZ)(u.Z,{className:"component-api-table"},(0,l.tZ)("thead",null,(0,l.tZ)("tr",null,(0,l.tZ)("th",null,t[309].value),(0,l.tZ)("th",null,t[310].value),(0,l.tZ)("th",null,t[311].value),(0,l.tZ)("th",null,t[312].value),(0,l.tZ)("th",null,t[313].value))),(0,l.tZ)("tbody",null,(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[314].value),(0,l.tZ)("td",null,t[315].value),(0,l.tZ)("td",null,t[316].value),(0,l.tZ)("td",null,t[317].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[318].value),(0,l.tZ)("td",null,t[319].value),(0,l.tZ)("td",null,t[320].value),(0,l.tZ)("td",null,t[321].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[322].value),(0,l.tZ)("td",null,t[323].value),(0,l.tZ)("td",null,t[324].value),(0,l.tZ)("td",null,t[325].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[326].value),(0,l.tZ)("td",null,t[327].value),(0,l.tZ)("td",null,t[328].value),(0,l.tZ)("td",null,t[329].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[330].value),(0,l.tZ)("td",null,t[331].value,(0,l.tZ)("code",null,t[332].value),t[333].value),(0,l.tZ)("td",null,t[334].value),(0,l.tZ)("td",null,t[335].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[336].value),(0,l.tZ)("td",null,t[337].value),(0,l.tZ)("td",null,t[338].value),(0,l.tZ)("td",null,t[339].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[340].value),(0,l.tZ)("td",null,t[341].value),(0,l.tZ)("td",null,t[342].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,t[343].value)),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,t[344].value),(0,l.tZ)("td",null,t[345].value,(0,l.tZ)("code",null,t[346].value),t[347].value),(0,l.tZ)("td",null,t[348].value),(0,l.tZ)("td",null,t[349].value),(0,l.tZ)("td",null)))),(0,l.tZ)("h2",{id:"faq"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,l.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,l.tZ)("h3",{id:"how-to-get-parent-node-in-onchange"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-get-parent-node-in-onchange"},(0,l.tZ)("span",{className:"icon icon-link"})),"How to get parent node in onChange?"),(0,l.tZ)("p",null,t[350].value,(0,l.tZ)("a",{href:"https://codesandbox.io/s/wk080nn81k"},t[351].value)),(0,l.tZ)("h3",{id:"why-sometime-customize-option-cause-scroll-break"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#why-sometime-customize-option-cause-scroll-break"},(0,l.tZ)("span",{className:"icon icon-link"})),"Why sometime customize Option cause scroll break?"),(0,l.tZ)("p",null,t[352].value,(0,l.tZ)(n.rU,{to:"/components/select"},t[353].value),t[354].value))))}a.default=r}}]);
