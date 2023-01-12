"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2805],{79671:function(c,u,e){e.r(u);var p=e(2143),v=e(50250),h=e(59378),Z=e(5648),o=e(74775),a=e(5937),_=e(2068),m=e(74399),g=e(63942),b=e(16073),C=e(24628),j=e(19260),x=e(56140),d=e(5388),f=e(49545),P=e(6965),O=e(49706),E=e(95127),A=e(74418),z=e(73024),t=e(94065),s=e(67294),n=e(96923);function i(){var r=(0,t.eL)(),l=r.texts;return(0,n.tZ)(t.dY,null,(0,n.tZ)(s.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,l[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,l[1].value),(0,n.tZ)("li",null,l[2].value),(0,n.tZ)("li",null,l[3].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(d.Z,{items:[{demo:{id:"components-cascader-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/cascader/demo/basic.tsx",jsx:`import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};
const App = () => <Cascader options={options} onChange={onChange} placeholder="Please select" />;
export default App;
`,description:"<p>\u7701\u5E02\u533A\u7EA7\u8054\u3002</p>"}},{demo:{id:"components-cascader-demo-default-value"},previewerProps:{title:"\u9ED8\u8BA4\u503C",filename:"components/cascader/demo/default-value.tsx",jsx:`import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};
const App = () => (
  <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} onChange={onChange} />
);
export default App;
`,description:"<p>\u9ED8\u8BA4\u503C\u901A\u8FC7\u6570\u7EC4\u7684\u65B9\u5F0F\u6307\u5B9A\u3002</p>"}},{demo:{id:"components-cascader-demo-custom-trigger"},previewerProps:{title:"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u663E\u793A",filename:"components/cascader/demo/custom-trigger.tsx",jsx:`import { Cascader } from 'antd';
import { useState } from 'react';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
      },
    ],
  },
];
const App = () => {
  const [text, setText] = useState('Unselect');
  const onChange = (_, selectedOptions) => {
    setText(selectedOptions.map((o) => o.label).join(', '));
  };
  return (
    <span>
      {text}
      &nbsp;
      <Cascader options={options} onChange={onChange}>
        <a href="#">Change city</a>
      </Cascader>
    </span>
  );
};
export default App;
`,description:"<p>\u5207\u6362\u6309\u94AE\u548C\u7ED3\u679C\u5206\u5F00\u3002</p>"}},{demo:{id:"components-cascader-demo-hover"},previewerProps:{title:"\u79FB\u5165\u5C55\u5F00",filename:"components/cascader/demo/hover.tsx",jsx:`import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};

// Just show the latest item.
const displayRender = (labels) => labels[labels.length - 1];
const App = () => (
  <Cascader
    options={options}
    expandTrigger="hover"
    displayRender={displayRender}
    onChange={onChange}
  />
);
export default App;
`,description:"<p>\u901A\u8FC7\u79FB\u5165\u5C55\u5F00\u4E0B\u7EA7\u83DC\u5355\uFF0C\u70B9\u51FB\u5B8C\u6210\u9009\u62E9\u3002</p>"}},{demo:{id:"components-cascader-demo-disabled-option"},previewerProps:{title:"\u7981\u7528\u9009\u9879",filename:"components/cascader/demo/disabled-option.tsx",jsx:`import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};
const App = () => <Cascader options={options} onChange={onChange} />;
export default App;
`,description:"<p>\u901A\u8FC7\u6307\u5B9A options \u91CC\u7684 <code>disabled</code> \u5B57\u6BB5\u3002</p>"}},{demo:{id:"components-cascader-demo-change-on-select"},previewerProps:{title:"\u9009\u62E9\u5373\u6539\u53D8",filename:"components/cascader/demo/change-on-select.tsx",jsx:`import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hanzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};
const App = () => <Cascader options={options} onChange={onChange} changeOnSelect />;
export default App;
`,description:"<p>\u8FD9\u79CD\u4EA4\u4E92\u5141\u8BB8\u53EA\u9009\u4E2D\u7236\u7EA7\u9009\u9879\u3002</p>"}},{demo:{id:"components-cascader-demo-multiple"},previewerProps:{title:"\u591A\u9009",filename:"components/cascader/demo/multiple.tsx",jsx:`import { Cascader } from 'antd';
const options = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20).fill(null).map((_, index) => ({
      label: \`Number \${index}\`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};
const App = () => (
  <Cascader
    style={{
      width: '100%',
    }}
    options={options}
    onChange={onChange}
    multiple
    maxTagCount="responsive"
  />
);
export default App;
`,description:"<p>\u4E00\u6B21\u6027\u9009\u62E9\u591A\u4E2A\u9009\u9879\u3002</p>"}},{demo:{id:"components-cascader-demo-showcheckedstrategy"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u56DE\u586B\u65B9\u5F0F",filename:"components/cascader/demo/showCheckedStrategy.tsx",jsx:`import { Cascader } from 'antd';
const { SHOW_CHILD } = Cascader;
const options = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20).fill(null).map((_, index) => ({
      label: \`Number \${index}\`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];
const App = () => {
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <Cascader
        style={{
          width: '100%',
        }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ['bamboo', 'little', 'fish'],
          ['bamboo', 'little', 'cards'],
          ['bamboo', 'little', 'bird'],
        ]}
      />
      <br />
      <br />
      <Cascader
        style={{
          width: '100%',
        }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={['bamboo']}
      />
    </>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>ShowCheckedStrategy</code> \u9009\u62E9\u56DE\u586B\u65B9\u5F0F\u3002</p>"}},{demo:{id:"components-cascader-demo-size"},previewerProps:{title:"\u5927\u5C0F",filename:"components/cascader/demo/size.tsx",jsx:`import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};
const App = () => (
  <>
    <Cascader size="large" options={options} onChange={onChange} />
    <br />
    <br />
    <Cascader options={options} onChange={onChange} />
    <br />
    <br />
    <Cascader size="small" options={options} onChange={onChange} />
    <br />
    <br />
  </>
);
export default App;
`,description:"<p>\u4E0D\u540C\u5927\u5C0F\u7684\u7EA7\u8054\u9009\u62E9\u5668\u3002</p>"}},{demo:{id:"components-cascader-demo-custom-render"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u5DF2\u9009\u9879",filename:"components/cascader/demo/custom-render.tsx",jsx:`import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            code: 752100,
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            code: 453400,
          },
        ],
      },
    ],
  },
];
const handleAreaClick = (e, label, option) => {
  e.stopPropagation();
  console.log('clicked', label, option);
};
const displayRender = (labels, selectedOptions) =>
  labels.map((label, i) => {
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
          {label} (<a onClick={(e) => handleAreaClick(e, label, option)}>{option.code}</a>)
        </span>
      );
    }
    return <span key={option.value}>{label} / </span>;
  });
const App = () => (
  <Cascader
    options={options}
    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
    displayRender={displayRender}
    style={{
      width: '100%',
    }}
  />
);
export default App;
`,description:"<p>\u4F8B\u5982\u7ED9\u6700\u540E\u4E00\u9879\u52A0\u4E0A\u90AE\u7F16\u94FE\u63A5\u3002</p>"}},{demo:{id:"components-cascader-demo-search"},previewerProps:{title:"\u641C\u7D22",filename:"components/cascader/demo/search.tsx",jsx:`import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
];
const onChange = (value, selectedOptions) => {
  console.log(value, selectedOptions);
};
const filter = (inputValue, path) =>
  path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
const App = () => (
  <Cascader
    options={options}
    onChange={onChange}
    placeholder="Please select"
    showSearch={{
      filter,
    }}
    onSearch={(value) => console.log(value)}
  />
);
export default App;
`,description:`<p>\u53EF\u4EE5\u76F4\u63A5\u641C\u7D22\u9009\u9879\u5E76\u9009\u62E9\u3002</p>
<blockquote>
<p><code>Cascader[showSearch]</code> \u6682\u4E0D\u652F\u6301\u670D\u52A1\u7AEF\u641C\u7D22\uFF0C\u66F4\u591A\u4FE1\u606F\u89C1 <a href="https://github.com/ant-design/ant-design/issues/5547">#5547</a></p>
</blockquote>`}},{demo:{id:"components-cascader-demo-lazy"},previewerProps:{title:"\u52A8\u6001\u52A0\u8F7D\u9009\u9879",filename:"components/cascader/demo/lazy.tsx",jsx:`import { Cascader } from 'antd';
import { useState } from 'react';
const optionLists = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];
const App = () => {
  const [options, setOptions] = useState(optionLists);
  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  const loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: \`\${targetOption.label} Dynamic 1\`,
          value: 'dynamic1',
        },
        {
          label: \`\${targetOption.label} Dynamic 2\`,
          value: 'dynamic2',
        },
      ];
      setOptions([...options]);
    }, 1000);
  };
  return <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />;
};
export default App;
`,description:`<p>\u4F7F\u7528 <code>loadData</code> \u5B9E\u73B0\u52A8\u6001\u52A0\u8F7D\u9009\u9879\u3002</p>
<blockquote>
<p>\u6CE8\u610F\uFF1A<code>loadData</code> \u4E0E <code>showSearch</code> \u65E0\u6CD5\u4E00\u8D77\u4F7F\u7528\u3002</p>
</blockquote>`}},{demo:{id:"components-cascader-demo-fields-name"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D",filename:"components/cascader/demo/fields-name.tsx",jsx:`import { Cascader } from 'antd';
const options = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};
const App = () => (
  <Cascader
    fieldNames={{
      label: 'name',
      value: 'code',
      children: 'items',
    }}
    options={options}
    onChange={onChange}
    placeholder="Please select"
  />
);
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D\u3002</p>"}},{demo:{id:"components-cascader-demo-suffix"},previewerProps:{debug:!0,title:"\u81EA\u5B9A\u4E49\u56FE\u6807",filename:"components/cascader/demo/suffix.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};
const App = () => (
  <>
    <Cascader
      suffixIcon={<SmileOutlined />}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <br />
    <br />
    <Cascader suffixIcon="ab" options={options} onChange={onChange} placeholder="Please select" />
    <br />
    <br />
    <Cascader
      expandIcon={<SmileOutlined />}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <br />
    <br />
    <Cascader expandIcon="ab" options={options} onChange={onChange} placeholder="Please select" />
  </>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>suffixIcon</code> \u81EA\u5B9A\u4E49\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807\uFF0C\u901A\u8FC7 <code>expandIcon</code> \u81EA\u5B9A\u4E49\u6B21\u7EA7\u83DC\u5355\u5C55\u5F00\u56FE\u6807\u3002</p>"}},{demo:{id:"components-cascader-demo-custom-dropdown"},previewerProps:{title:"\u6269\u5C55\u83DC\u5355",filename:"components/cascader/demo/custom-dropdown.tsx",jsx:`import { Cascader, Divider } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const dropdownRender = (menus) => (
  <div>
    {menus}
    <Divider
      style={{
        margin: 0,
      }}
    />
    <div
      style={{
        padding: 8,
      }}
    >
      The footer is not very short.
    </div>
  </div>
);
const App = () => (
  <Cascader options={options} dropdownRender={dropdownRender} placeholder="Please select" />
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>dropdownRender</code> \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002</p>"}},{demo:{id:"components-cascader-demo-placement"},previewerProps:{title:"\u5F39\u51FA\u4F4D\u7F6E",filename:"components/cascader/demo/placement.tsx",jsx:`import { Cascader, Radio } from 'antd';
import { useState } from 'react';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
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
      <Cascader options={options} placeholder="Please select" placement={placement} />
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7 <code>placement</code> \u624B\u52A8\u6307\u5B9A\u5F39\u51FA\u7684\u4F4D\u7F6E\u3002</p>"}},{demo:{id:"components-cascader-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/cascader/demo/status.tsx",jsx:`import { Cascader, Space } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Cascader status="error" placeholder="Error" />
    <Cascader status="warning" multiple placeholder="Warning multiple" />
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A Cascader \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"components-cascader-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/cascader/demo/render-panel.tsx",jsx:`import { Cascader } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalCascader } = Cascader;
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const App = () => <InternalCascader options={options} placeholder="Please select" />;
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(o.Z,{lang:"jsx"},l[4].value),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,l[5].value),(0,n.tZ)("th",null,l[6].value),(0,n.tZ)("th",null,l[7].value),(0,n.tZ)("th",null,l[8].value),(0,n.tZ)("th",null,l[9].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[10].value),(0,n.tZ)("td",null,l[11].value),(0,n.tZ)("td",null,l[12].value),(0,n.tZ)("td",null,l[13].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[14].value),(0,n.tZ)("td",null,l[15].value),(0,n.tZ)("td",null,l[16].value),(0,n.tZ)("td",null,l[17].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[18].value),(0,n.tZ)("td",null,l[19].value),(0,n.tZ)("td",null,l[20].value),(0,n.tZ)("td",null,l[21].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[22].value),(0,n.tZ)("td",null,l[23].value),(0,n.tZ)("td",null,l[24].value),(0,n.tZ)("td",null,l[25].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[26].value),(0,n.tZ)("td",null,l[27].value),(0,n.tZ)("td",null,l[28].value),(0,n.tZ)("td",null,l[29].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[30].value),(0,n.tZ)("td",null,l[31].value),(0,n.tZ)("td",null,l[32].value),(0,n.tZ)("td",null,l[33].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[34].value),(0,n.tZ)("td",null,l[35].value),(0,n.tZ)("td",null,l[36].value),(0,n.tZ)("td",null,l[37].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[38].value),(0,n.tZ)("td",null,l[39].value),(0,n.tZ)("td",null,l[40].value),(0,n.tZ)("td",null,l[41].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[42].value),(0,n.tZ)("td",null,l[43].value),(0,n.tZ)("td",null,l[44].value),(0,n.tZ)("td",null,l[45].value,(0,n.tZ)("code",null,l[46].value),l[47].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,l[48].value),l[49].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[50].value),(0,n.tZ)("td",null,l[51].value),(0,n.tZ)("td",null,l[52].value),(0,n.tZ)("td",null,l[53].value),(0,n.tZ)("td",null,l[54].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[55].value),(0,n.tZ)("td",null,l[56].value),(0,n.tZ)("td",null,l[57].value),(0,n.tZ)("td",null,l[58].value),(0,n.tZ)("td",null,l[59].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[60].value),(0,n.tZ)("td",null,l[61].value),(0,n.tZ)("td",null,l[62].value),(0,n.tZ)("td",null,l[63].value),(0,n.tZ)("td",null,l[64].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[65].value),(0,n.tZ)("td",null,l[66].value),(0,n.tZ)("td",null,l[67].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,l[68].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[69].value),(0,n.tZ)("td",null,l[70].value),(0,n.tZ)("td",null,l[71].value),(0,n.tZ)("td",null,l[72].value,(0,n.tZ)("code",null,l[73].value),l[74].value,(0,n.tZ)("code",null,l[75].value),l[76].value,(0,n.tZ)("code",null,l[77].value),l[78].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[79].value),(0,n.tZ)("td",null,l[80].value,(0,n.tZ)("a",{href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},l[81].value)),(0,n.tZ)("td",null,l[82].value),(0,n.tZ)("td",null,l[83].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[84].value),(0,n.tZ)("td",null,l[85].value,(0,n.tZ)("code",null,l[86].value),l[87].value),(0,n.tZ)("td",null,l[88].value),(0,n.tZ)("td",null,l[89].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[90].value),(0,n.tZ)("td",null,l[91].value),(0,n.tZ)("td",null,l[92].value,(0,n.tZ)("code",null,l[93].value)),(0,n.tZ)("td",null,l[94].value),(0,n.tZ)("td",null,l[95].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[96].value),(0,n.tZ)("td",null,l[97].value),(0,n.tZ)("td",null,l[98].value),(0,n.tZ)("td",null,l[99].value),(0,n.tZ)("td",null,l[100].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[101].value),(0,n.tZ)("td",null,l[102].value),(0,n.tZ)("td",null,l[103].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,l[104].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[105].value),(0,n.tZ)("td",null,l[106].value),(0,n.tZ)("td",null,l[107].value),(0,n.tZ)("td",null,l[108].value),(0,n.tZ)("td",null,l[109].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[110].value),(0,n.tZ)("td",null,l[111].value),(0,n.tZ)("td",null,(0,n.tZ)(t.rU,{to:"#option"},l[112].value),l[113].value),(0,n.tZ)("td",null,l[114].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[115].value),(0,n.tZ)("td",null,l[116].value),(0,n.tZ)("td",null,l[117].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,l[118].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[119].value),(0,n.tZ)("td",null,l[120].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,l[121].value),l[122].value,(0,n.tZ)("code",null,l[123].value),l[124].value,(0,n.tZ)("code",null,l[125].value),l[126].value,(0,n.tZ)("code",null,l[127].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,l[128].value)),(0,n.tZ)("td",null,l[129].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[130].value),(0,n.tZ)("td",null,l[131].value),(0,n.tZ)("td",null,l[132].value,(0,n.tZ)(t.rU,{to:"#showsearch"},l[133].value)),(0,n.tZ)("td",null,l[134].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[135].value),(0,n.tZ)("td",null,l[136].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,l[137].value),l[138].value,(0,n.tZ)("code",null,l[139].value),l[140].value,(0,n.tZ)("code",null,l[141].value)),(0,n.tZ)("td",null,l[142].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[143].value),(0,n.tZ)("td",null,l[144].value),(0,n.tZ)("td",null,l[145].value),(0,n.tZ)("td",null,l[146].value),(0,n.tZ)("td",null,l[147].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[148].value),(0,n.tZ)("td",null,l[149].value),(0,n.tZ)("td",null,l[150].value),(0,n.tZ)("td",null,l[151].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[152].value),(0,n.tZ)("td",null,l[153].value),(0,n.tZ)("td",null,l[154].value),(0,n.tZ)("td",null,l[155].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[156].value),(0,n.tZ)("td",null,l[157].value),(0,n.tZ)("td",null,l[158].value),(0,n.tZ)("td",null,l[159].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[160].value),(0,n.tZ)("td",null,l[161].value),(0,n.tZ)("td",null,l[162].value),(0,n.tZ)("td",null,l[163].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[164].value),(0,n.tZ)("td",null,l[165].value),(0,n.tZ)("td",null,l[166].value),(0,n.tZ)("td",null,l[167].value),(0,n.tZ)("td",null,l[168].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[169].value),(0,n.tZ)("td",null,l[170].value),(0,n.tZ)("td",null,l[171].value),(0,n.tZ)("td",null,l[172].value),(0,n.tZ)("td",null,l[173].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[174].value),(0,n.tZ)("td",null,l[175].value,(0,n.tZ)("code",null,l[176].value),l[177].value,(0,n.tZ)("code",null,l[178].value),l[179].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,l[180].value),l[181].value,(0,n.tZ)("code",null,l[182].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,l[183].value)),(0,n.tZ)("td",null,l[184].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[185].value),(0,n.tZ)("td",null,l[186].value),(0,n.tZ)("td",null,l[187].value),(0,n.tZ)("td",null,l[188].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[189].value),(0,n.tZ)("td",null,l[190].value,(0,n.tZ)("code",null,l[191].value),l[192].value),(0,n.tZ)("td",null,l[193].value),(0,n.tZ)("td",null,l[194].value),(0,n.tZ)("td",null,l[195].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[196].value),(0,n.tZ)("td",null,l[197].value),(0,n.tZ)("td",null,l[198].value),(0,n.tZ)("td",null,l[199].value),(0,n.tZ)("td",null,l[200].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[201].value),(0,n.tZ)("td",null,l[202].value),(0,n.tZ)("td",null,l[203].value),(0,n.tZ)("td",null,l[204].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"showsearch"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#showsearch"},(0,n.tZ)("span",{className:"icon icon-link"})),"showSearch"),(0,n.tZ)("p",null,(0,n.tZ)("code",null,l[205].value),l[206].value),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,l[207].value),(0,n.tZ)("th",null,l[208].value),(0,n.tZ)("th",null,l[209].value),(0,n.tZ)("th",null,l[210].value),(0,n.tZ)("th",null,l[211].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[212].value),(0,n.tZ)("td",null,l[213].value,(0,n.tZ)("code",null,l[214].value),l[215].value,(0,n.tZ)("code",null,l[216].value),l[217].value,(0,n.tZ)("code",null,l[218].value),l[219].value),(0,n.tZ)("td",null,l[220].value),(0,n.tZ)("td",null,l[221].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[222].value),(0,n.tZ)("td",null,l[223].value),(0,n.tZ)("td",null,l[224].value),(0,n.tZ)("td",null,l[225].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[226].value),(0,n.tZ)("td",null,l[227].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/25779"},l[228].value),l[229].value),(0,n.tZ)("td",null,l[230].value),(0,n.tZ)("td",null,l[231].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[232].value),(0,n.tZ)("td",null,l[233].value),(0,n.tZ)("td",null,l[234].value),(0,n.tZ)("td",null,l[235].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[236].value),(0,n.tZ)("td",null,l[237].value),(0,n.tZ)("td",null,l[238].value),(0,n.tZ)("td",null,l[239].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"option"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#option"},(0,n.tZ)("span",{className:"icon icon-link"})),"Option"),(0,n.tZ)(o.Z,{lang:"typescript"},l[240].value),(0,n.tZ)("h2",{id:"\u65B9\u6CD5"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,l[241].value),(0,n.tZ)("th",null,l[242].value),(0,n.tZ)("th",null,l[243].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[244].value),(0,n.tZ)("td",null,l[245].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,l[246].value),(0,n.tZ)("td",null,l[247].value),(0,n.tZ)("td",null)))),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,l[248].value,(0,n.tZ)("a",{href:"https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17"},l[249].value),l[250].value)))))}u.default=i}}]);
