"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2693],{83122:function(s,u,e){e.r(u);var _=e(2143),p=e(50250),m=e(59378),v=e(5648),c=e(74775),a=e(5937),Z=e(2068),h=e(74399),f=e(63942),C=e(16073),x=e(24628),g=e(19260),E=e(56140),d=e(5388),P=e(49545),A=e(6965),S=e(49706),D=e(95127),j=e(74418),O=e(73024),l=e(94065),o=e(67294),n=e(96923);function i(){var r=(0,l.eL)(),t=r.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(o.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(d.Z,{items:[{demo:{id:"components-slider-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/slider/demo/basic.tsx",jsx:`import { Slider, Switch } from 'antd';
import { useState } from 'react';
const App = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  return (
    <>
      <Slider defaultValue={30} disabled={disabled} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
    </>
  );
};
export default App;
`,description:"<p>\u57FA\u672C\u6ED1\u52A8\u6761\u3002\u5F53 <code>range</code> \u4E3A <code>true</code> \u65F6\uFF0C\u6E32\u67D3\u4E3A\u53CC\u6ED1\u5757\u3002\u5F53 <code>disabled</code> \u4E3A <code>true</code> \u65F6\uFF0C\u6ED1\u5757\u5904\u4E8E\u4E0D\u53EF\u7528\u72B6\u6001\u3002</p>",style:`.code-box-demo .ant-slider {
  margin-bottom: 16px;
}`}},{demo:{id:"components-slider-demo-input-number"},previewerProps:{title:"\u5E26\u8F93\u5165\u6846\u7684\u6ED1\u5757",filename:"components/slider/demo/input-number.tsx",jsx:`import { Col, InputNumber, Row, Slider } from 'antd';
import { useState } from 'react';
const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{
            margin: '0 16px',
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
const DecimalStep = () => {
  const [inputValue, setInputValue] = useState(0);
  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={1}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={0.01}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={1}
          style={{
            margin: '0 16px',
          }}
          step={0.01}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
const App = () => (
  <div>
    <IntegerStep />
    <DecimalStep />
  </div>
);
export default App;
`,description:'<p>\u548C <a href="/components/input-number/">\u6570\u5B57\u8F93\u5165\u6846</a> \u7EC4\u4EF6\u4FDD\u6301\u540C\u6B65\u3002</p>'}},{demo:{id:"components-slider-demo-icon-slider"},previewerProps:{title:"\u5E26 icon \u7684\u6ED1\u5757",filename:"components/slider/demo/icon-slider.tsx",jsx:`import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import { Slider } from 'antd';
import { useState } from 'react';
const IconSlider = (props) => {
  const { max, min } = props;
  const [value, setValue] = useState(0);
  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
  return (
    <div className="icon-wrapper">
      <FrownOutlined className={preColorCls} />
      <Slider {...props} onChange={setValue} value={value} />
      <SmileOutlined className={nextColorCls} />
    </div>
  );
};
const App = () => <IconSlider min={0} max={20} />;
export default App;
`,description:"<p>\u6ED1\u5757\u5DE6\u53F3\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u6807\u6765\u8868\u8FBE\u4E1A\u52A1\u542B\u4E49\u3002</p>",style:`.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}

.icon-wrapper .anticon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 16px;
  line-height: 1;
}

.icon-wrapper .icon-wrapper-active {
  color: rgba(0, 0, 0, 0.45);
}

.icon-wrapper .anticon:first-child {
  left: 0;
}

.icon-wrapper .anticon:last-child {
  right: 0;
}`}},{demo:{id:"components-slider-demo-tip-formatter"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u63D0\u793A",filename:"components/slider/demo/tip-formatter.tsx",jsx:`import { Slider } from 'antd';
const formatter = (value) => \`\${value}%\`;
const App = () => (
  <>
    <Slider
      tooltip={{
        formatter,
      }}
    />
    <Slider
      tooltip={{
        formatter: null,
      }}
    />
  </>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>tooltip.formatter</code> \u53EF\u4EE5\u683C\u5F0F\u5316 <code>Tooltip</code> \u7684\u5185\u5BB9\uFF0C\u8BBE\u7F6E <code>tooltip.formatter={null}</code>\uFF0C\u5219\u9690\u85CF <code>Tooltip</code>\u3002</p>"}},{demo:{id:"components-slider-demo-event"},previewerProps:{title:"\u4E8B\u4EF6",filename:"components/slider/demo/event.tsx",jsx:`import { Slider } from 'antd';
const onChange = (value) => {
  console.log('onChange: ', value);
};
const onAfterChange = (value) => {
  console.log('onAfterChange: ', value);
};
const App = () => (
  <>
    <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
    <Slider
      range
      step={10}
      defaultValue={[20, 50]}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
  </>
);
export default App;
`,description:"<p>\u5F53 Slider \u7684\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4F1A\u89E6\u53D1 <code>onChange</code> \u4E8B\u4EF6\uFF0C\u5E76\u628A\u6539\u53D8\u540E\u7684\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002\u5728 <code>onmouseup</code> \u65F6\uFF0C\u4F1A\u89E6\u53D1 <code>onAfterChange</code> \u4E8B\u4EF6\uFF0C\u5E76\u628A\u5F53\u524D\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002</p>"}},{demo:{id:"components-slider-demo-mark"},previewerProps:{title:"\u5E26\u6807\u7B7E\u7684\u6ED1\u5757",filename:"components/slider/demo/mark.tsx",jsx:`import { Slider } from 'antd';
const marks = {
  0: '0\xB0C',
  26: '26\xB0C',
  37: '37\xB0C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100\xB0C</strong>,
  },
};
const App = () => (
  <>
    <h4>included=true</h4>
    <Slider marks={marks} defaultValue={37} />
    <Slider range marks={marks} defaultValue={[26, 37]} />

    <h4>included=false</h4>
    <Slider marks={marks} included={false} defaultValue={37} />

    <h4>marks & step</h4>
    <Slider marks={marks} step={10} defaultValue={37} />

    <h4>step=null</h4>
    <Slider marks={marks} step={null} defaultValue={37} />
  </>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>marks</code> \u5C5E\u6027\u6807\u6CE8\u5206\u6BB5\u5F0F\u6ED1\u5757\uFF0C\u4F7F\u7528 <code>value</code> / <code>defaultValue</code> \u6307\u5B9A\u6ED1\u5757\u4F4D\u7F6E\u3002\u5F53 <code>included=false</code> \u65F6\uFF0C\u8868\u660E\u4E0D\u540C\u6807\u8BB0\u95F4\u4E3A\u5E76\u5217\u5173\u7CFB\u3002\u5F53 <code>step=null</code> \u65F6\uFF0CSlider \u7684\u53EF\u9009\u503C\u4EC5\u6709 <code>marks</code> \u6807\u51FA\u6765\u7684\u90E8\u5206\u3002</p>",style:`#components-slider-demo-mark h4 {
  margin: 0 0 16px;
}
#components-slider-demo-mark .ant-slider-with-marks {
  margin-bottom: 44px;
}`}},{demo:{id:"components-slider-demo-vertical"},previewerProps:{title:"\u5782\u76F4",filename:"components/slider/demo/vertical.tsx",jsx:`import { Slider } from 'antd';
const style = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};
const marks = {
  0: '0\xB0C',
  26: '26\xB0C',
  37: '37\xB0C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100\xB0C</strong>,
  },
};
const App = () => (
  <>
    <div style={style}>
      <Slider vertical defaultValue={30} />
    </div>
    <div style={style}>
      <Slider vertical range step={10} defaultValue={[20, 50]} />
    </div>
    <div style={style}>
      <Slider vertical range marks={marks} defaultValue={[26, 37]} />
    </div>
  </>
);
export default App;
`,description:"<p>\u5782\u76F4\u65B9\u5411\u7684 Slider\u3002</p>"}},{demo:{id:"components-slider-demo-show-tooltip"},previewerProps:{title:"\u63A7\u5236 ToolTip \u7684\u663E\u793A",filename:"components/slider/demo/show-tooltip.tsx",jsx:`import { Slider } from 'antd';
const App = () => (
  <Slider
    defaultValue={30}
    tooltip={{
      open: true,
    }}
  />
);
export default App;
`,description:"<p>\u5F53 <code>tooltip.open</code> \u4E3A <code>true</code> \u65F6\uFF0C\u5C06\u59CB\u7EC8\u663E\u793A ToolTip\uFF1B\u53CD\u4E4B\u5219\u59CB\u7EC8\u4E0D\u663E\u793A\uFF0C\u5373\u4F7F\u5728\u62D6\u52A8\u3001\u79FB\u5165\u65F6\u4E5F\u662F\u5982\u6B64\u3002</p>"}},{demo:{id:"components-slider-demo-reverse"},previewerProps:{title:"\u53CD\u5411",filename:"components/slider/demo/reverse.tsx",jsx:`import { Slider, Switch } from 'antd';
import { useState } from 'react';
const App = () => {
  const [reverse, setReverse] = useState(true);
  return (
    <>
      <Slider defaultValue={30} reverse={reverse} />
      <Slider range defaultValue={[20, 50]} reverse={reverse} />
      Reversed: <Switch size="small" checked={reverse} onChange={setReverse} />
    </>
  );
};
export default App;
`,description:"<p>\u8BBE\u7F6E <code>reverse</code> \u53EF\u4EE5\u5C06\u6ED1\u52A8\u6761\u7F6E\u53CD\u3002</p>"}},{demo:{id:"components-slider-demo-dragabletrack"},previewerProps:{title:"\u8303\u56F4\u53EF\u62D6\u62FD",filename:"components/slider/demo/dragableTrack.tsx",jsx:`import { Slider } from 'antd';
const App = () => (
  <Slider
    range={{
      draggableTrack: true,
    }}
    defaultValue={[20, 50]}
  />
);
export default App;
`,description:"<p>\u53EF\u4EE5\u8BBE\u7F6E <code>range.draggableTrack</code>\uFF0C\u4F7F\u5F97\u8303\u56F4\u523B\u5EA6\u6574\u4F53\u53EF\u62D6\u62FD\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[2].value),(0,n.tZ)("th",null,t[3].value),(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[7].value),(0,n.tZ)("td",null,t[8].value),(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value,(0,n.tZ)("code",null,t[13].value),t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[26].value),t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value,(0,n.tZ)("code",null,t[32].value),t[33].value),(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null,t[35].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null,t[37].value),(0,n.tZ)("td",null,t[38].value),(0,n.tZ)("td",null,t[39].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null,t[46].value,(0,n.tZ)(l.rU,{to:"#range"},t[47].value)),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value),(0,n.tZ)("td",null,t[51].value),(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[53].value),(0,n.tZ)("td",null,t[54].value,(0,n.tZ)("code",null,t[55].value),t[56].value,(0,n.tZ)("code",null,t[57].value),t[58].value),(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[61].value),(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"#tooltip"},t[63].value)),(0,n.tZ)("td",null,t[64].value),(0,n.tZ)("td",null,t[65].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[66].value),(0,n.tZ)("td",null,t[67].value,(0,n.tZ)("code",null,t[68].value),t[69].value),(0,n.tZ)("td",null,t[70].value),(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null,t[74].value),(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null,t[77].value,(0,n.tZ)("code",null,t[78].value),t[79].value),(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[82].value),(0,n.tZ)("td",null,t[83].value),(0,n.tZ)("td",null,t[84].value),(0,n.tZ)("td",null,t[85].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"range"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#range"},(0,n.tZ)("span",{className:"icon icon-link"})),"range"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[86].value),(0,n.tZ)("th",null,t[87].value),(0,n.tZ)("th",null,t[88].value),(0,n.tZ)("th",null,t[89].value),(0,n.tZ)("th",null,t[90].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[91].value),(0,n.tZ)("td",null,t[92].value),(0,n.tZ)("td",null,t[93].value),(0,n.tZ)("td",null,t[94].value),(0,n.tZ)("td",null,t[95].value)))),(0,n.tZ)("h3",{id:"tooltip"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tooltip"},(0,n.tZ)("span",{className:"icon icon-link"})),"tooltip"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[96].value),(0,n.tZ)("th",null,t[97].value),(0,n.tZ)("th",null,t[98].value),(0,n.tZ)("th",null,t[99].value),(0,n.tZ)("th",null,t[100].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[101].value),(0,n.tZ)("td",null,t[102].value),(0,n.tZ)("td",null,t[103].value),(0,n.tZ)("td",null,t[104].value),(0,n.tZ)("td",null,t[105].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[106].value),(0,n.tZ)("td",null,t[107].value,(0,n.tZ)(l.rU,{to:"/components/tooltip-cn"},t[108].value)),(0,n.tZ)("td",null,t[109].value),(0,n.tZ)("td",null,t[110].value),(0,n.tZ)("td",null,t[111].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[112].value),(0,n.tZ)("td",null,t[113].value),(0,n.tZ)("td",null,t[114].value),(0,n.tZ)("td",null,t[115].value),(0,n.tZ)("td",null,t[116].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[117].value),(0,n.tZ)("td",null,t[118].value,(0,n.tZ)("code",null,t[119].value),t[120].value,(0,n.tZ)("code",null,t[121].value),t[122].value),(0,n.tZ)("td",null,t[123].value),(0,n.tZ)("td",null,t[124].value),(0,n.tZ)("td",null,t[125].value)))),(0,n.tZ)("h2",{id:"\u65B9\u6CD5"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[126].value),(0,n.tZ)("th",null,t[127].value),(0,n.tZ)("th",null,t[128].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[129].value),(0,n.tZ)("td",null,t[130].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[131].value),(0,n.tZ)("td",null,t[132].value),(0,n.tZ)("td",null)))))))}u.default=i}}]);
