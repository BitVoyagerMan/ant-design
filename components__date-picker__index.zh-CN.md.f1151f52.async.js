"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8242],{46968:function(c,d,l){l.r(d);var Z=l(2143),v=l(50250),p=l(59378),m=l(5648),u=l(74775),a=l(5937),h=l(2068),_=l(74399),k=l(63942),f=l(16073),g=l(24628),P=l(19260),D=l(56140),r=l(5388),E=l(49545),C=l(6965),j=l(49706),x=l(95127),b=l(74418),y=l(73024),n=l(94065),o=l(67294),t=l(96923);function i(){var s=(0,n.eL)(),e=s.texts;return(0,t.tZ)(n.dY,null,(0,t.tZ)(o.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("p",null,e[1].value),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(r.Z,{items:[{demo:{id:"components-date-picker-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/date-picker/demo/basic.tsx",jsx:`import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const App = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
  </Space>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5728\u6D6E\u5C42\u4E2D\u53EF\u4EE5\u9009\u62E9\u6216\u8005\u8F93\u5165\u65E5\u671F\u3002</p>"}},{demo:{id:"components-date-picker-demo-range-picker"},previewerProps:{title:"\u8303\u56F4\u9009\u62E9\u5668",filename:"components/date-picker/demo/range-picker.tsx",jsx:`import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" />
  </Space>
);
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>picker</code> \u5C5E\u6027\uFF0C\u6307\u5B9A\u8303\u56F4\u9009\u62E9\u5668\u7C7B\u578B\u3002</p>"}},{demo:{id:"components-date-picker-demo-switchable"},previewerProps:{title:"\u5207\u6362\u4E0D\u540C\u7684\u9009\u62E9\u5668",filename:"components/date-picker/demo/switchable.tsx",jsx:`import { DatePicker, Select, Space, TimePicker } from 'antd';
import { useState } from 'react';
const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};
const App = () => {
  const [type, setType] = useState('time');
  return (
    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
        <Option value="date">Date</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
        <Option value="quarter">Quarter</Option>
        <Option value="year">Year</Option>
      </Select>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </Space>
  );
};
export default App;
`,description:"<p>\u63D0\u4F9B\u9009\u62E9\u5668\uFF0C\u81EA\u7531\u5207\u6362\u4E0D\u540C\u7C7B\u578B\u7684\u65E5\u671F\u9009\u62E9\u5668\uFF0C\u5E38\u7528\u4E8E\u65E5\u671F\u7B5B\u9009\u573A\u5408\u3002</p>"}},{demo:{id:"components-date-picker-demo-format"},previewerProps:{title:"\u65E5\u671F\u683C\u5F0F",filename:"components/date-picker/demo/format.tsx",jsx:`import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const customFormat = (value) => \`custom format: \${value.format(dateFormat)}\`;
const customWeekStartEndFormat = (value) =>
  \`\${dayjs(value).startOf('week').format(weekFormat)} ~ \${dayjs(value)
    .endOf('week')
    .format(weekFormat)}\`;
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
    <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    <DatePicker defaultValue={dayjs('2015/01', monthFormat)} format={monthFormat} picker="month" />
    <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
    <RangePicker
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={customFormat} />
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>format</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u663E\u793A\u683C\u5F0F\u3002</p>"}},{demo:{id:"components-date-picker-demo-time"},previewerProps:{title:"\u65E5\u671F\u65F6\u95F4\u9009\u62E9",filename:"components/date-picker/demo/time.tsx",jsx:`import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = (value) => {
  console.log('onOk: ', value);
};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker showTime onChange={onChange} onOk={onOk} />
    <RangePicker
      showTime={{
        format: 'HH:mm',
      }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
);
export default App;
`,description:"<p>\u589E\u52A0\u9009\u62E9\u65F6\u95F4\u529F\u80FD\uFF0C\u5F53 <code>showTime</code> \u4E3A\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5176\u5C5E\u6027\u4F1A\u4F20\u9012\u7ED9\u5185\u5EFA\u7684 <code>TimePicker</code>\u3002</p>"}},{demo:{id:"components-date-picker-demo-disabled"},previewerProps:{title:"\u7981\u7528",filename:"components/date-picker/demo/disabled.tsx",jsx:`import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={dayjs('2015-06-06', dateFormat)} disabled />
    <DatePicker picker="month" defaultValue={dayjs('2015-06', 'YYYY-MM')} disabled />
    <RangePicker
      defaultValue={[dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)]}
      disabled
    />
    <RangePicker
      defaultValue={[dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]}
      disabled={[false, true]}
    />
  </Space>
);
export default App;
`,description:"<p>\u9009\u62E9\u6846\u7684\u4E0D\u53EF\u7528\u72B6\u6001\u3002\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6570\u7EC4\u5355\u72EC\u7981\u7528 RangePicker \u7684\u5176\u4E2D\u4E00\u9879\u3002</p>"}},{demo:{id:"components-date-picker-demo-disabled-date"},previewerProps:{title:"\u4E0D\u53EF\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4",filename:"components/date-picker/demo/disabled-date.tsx",jsx:`import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});
const disabledRangeTime = (_, type) => {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{
        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
      }}
    />
    <DatePicker picker="month" disabledDate={disabledDate} />
    <RangePicker disabledDate={disabledDate} />
    <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </Space>
);
export default App;
`,description:"<p>\u53EF\u7528 <code>disabledDate</code> \u548C <code>disabledTime</code> \u5206\u522B\u7981\u6B62\u9009\u62E9\u90E8\u5206\u65E5\u671F\u548C\u65F6\u95F4\uFF0C\u5176\u4E2D <code>disabledTime</code> \u9700\u8981\u548C <code>showTime</code> \u4E00\u8D77\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-date-picker-demo-select-in-range"},previewerProps:{title:"\u9009\u62E9\u4E0D\u8D85\u8FC7\u4E03\u5929\u7684\u8303\u56F4",filename:"components/date-picker/demo/select-in-range.tsx",jsx:`import { DatePicker } from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const App = () => {
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);
  const disabledDate = (current) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
    return !!tooEarly || !!tooLate;
  };
  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  return (
    <RangePicker
      value={dates || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => setDates(val)}
      onChange={(val) => setValue(val)}
      onOpenChange={onOpenChange}
    />
  );
};
export default App;
`,description:"<p>\u8FD9\u91CC\u4E3E\u4F8B\u5982\u4F55\u7528 <code>onCalendarChange</code> \u548C <code>disabledDate</code> \u6765\u9650\u5236\u52A8\u6001\u7684\u65E5\u671F\u533A\u95F4\u9009\u62E9\u3002</p>"}},{demo:{id:"components-date-picker-demo-presetted-ranges"},previewerProps:{title:"\u9884\u8BBE\u8303\u56F4",filename:"components/date-picker/demo/presetted-ranges.tsx",jsx:`import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;
const onChange = (date) => {
  if (date) {
    console.log('Date: ', date);
  } else {
    console.log('Clear');
  }
};
const onRangeChange = (dates, dateStrings) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  } else {
    console.log('Clear');
  }
};
const rangePresets = [
  {
    label: 'Last 7 Days',
    value: [dayjs().add(-7, 'd'), dayjs()],
  },
  {
    label: 'Last 14 Days',
    value: [dayjs().add(-14, 'd'), dayjs()],
  },
  {
    label: 'Last 30 Days',
    value: [dayjs().add(-30, 'd'), dayjs()],
  },
  {
    label: 'Last 90 Days',
    value: [dayjs().add(-90, 'd'), dayjs()],
  },
];
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      presets={[
        {
          label: 'Yesterday',
          value: dayjs().add(-1, 'd'),
        },
        {
          label: 'Last Week',
          value: dayjs().add(-7, 'd'),
        },
        {
          label: 'Last Month',
          value: dayjs().add(-1, 'month'),
        },
      ]}
      onChange={onChange}
    />
    <RangePicker presets={rangePresets} onChange={onRangeChange} />
    <RangePicker
      presets={rangePresets}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onRangeChange}
    />
  </Space>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u9884\u8BBE\u5E38\u7528\u7684\u65E5\u671F\u8303\u56F4\u4EE5\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002</p>"}},{demo:{id:"components-date-picker-demo-extra-footer"},previewerProps:{title:"\u989D\u5916\u7684\u9875\u811A",filename:"components/date-picker/demo/extra-footer.tsx",jsx:`import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker renderExtraFooter={() => 'extra footer'} />
    <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
    <RangePicker renderExtraFooter={() => 'extra footer'} />
    <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
    <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
  </Space>
);
export default App;
`,description:"<p>\u5728\u6D6E\u5C42\u4E2D\u52A0\u5165\u989D\u5916\u7684\u9875\u811A\uFF0C\u4EE5\u6EE1\u8DB3\u67D0\u4E9B\u5B9A\u5236\u4FE1\u606F\u7684\u9700\u6C42\u3002</p>"}},{demo:{id:"components-date-picker-demo-size"},previewerProps:{title:"\u4E09\u79CD\u5927\u5C0F",filename:"components/date-picker/demo/size.tsx",jsx:`import { DatePicker, Radio, Space } from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const App = () => {
  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <Space direction="vertical" size={12}>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <DatePicker size={size} />
      <DatePicker size={size} picker="month" />
      <RangePicker size={size} />
      <DatePicker size={size} picker="week" />
    </Space>
  );
};
export default App;
`,description:"<p>\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4E3A <code>middle</code>\u3002</p>"}},{demo:{id:"components-date-picker-demo-date-render"},previewerProps:{title:"\u5B9A\u5236\u65E5\u671F\u5355\u5143\u683C",filename:"components/date-picker/demo/date-render.tsx",jsx:`import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      dateRender={(current) => {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
    <RangePicker
      dateRender={(current) => {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>dateRender</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9\u548C\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-date-picker-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/date-picker/demo/status.tsx",jsx:`import { DatePicker, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <DatePicker
      status="error"
      style={{
        width: '100%',
      }}
    />
    <DatePicker
      status="warning"
      style={{
        width: '100%',
      }}
    />
    <DatePicker.RangePicker
      status="error"
      style={{
        width: '100%',
      }}
    />
    <DatePicker.RangePicker
      status="warning"
      style={{
        width: '100%',
      }}
    />
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A DatePicker \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"components-date-picker-demo-bordered"},previewerProps:{title:"\u65E0\u8FB9\u6846",filename:"components/date-picker/demo/bordered.tsx",jsx:`import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker bordered={false} />
    <DatePicker picker="week" bordered={false} />
    <DatePicker picker="month" bordered={false} />
    <DatePicker picker="year" bordered={false} />
    <RangePicker bordered={false} />
    <RangePicker picker="week" bordered={false} />
    <RangePicker picker="month" bordered={false} />
    <RangePicker picker="year" bordered={false} />
  </Space>
);
export default App;
`,description:"<p>\u65E0\u8FB9\u6846\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-date-picker-demo-placement"},previewerProps:{title:"\u5F39\u51FA\u4F4D\u7F6E",filename:"components/date-picker/demo/placement.tsx",jsx:`import { DatePicker, Radio } from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
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
      <DatePicker placement={placement} />
      <br />
      <br />
      <RangePicker placement={placement} />
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7 <code>placement</code> \u624B\u52A8\u6307\u5B9A\u5F39\u51FA\u7684\u4F4D\u7F6E\u3002</p>"}},{demo:{id:"components-date-picker-demo-mode"},previewerProps:{debug:!0,title:"\u53D7\u63A7\u9762\u677F",filename:"components/date-picker/demo/mode.tsx",jsx:`import { DatePicker, Space } from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const ControlledDatePicker = () => {
  const [mode, setMode] = useState('time');
  const handleOpenChange = (open) => {
    if (open) {
      setMode('time');
    }
  };
  const handlePanelChange = (_, newMode) => {
    setMode(newMode);
  };
  return (
    <DatePicker
      mode={mode}
      showTime
      onOpenChange={handleOpenChange}
      onPanelChange={handlePanelChange}
    />
  );
};
const ControlledRangePicker = () => {
  const [mode, setMode] = useState(['month', 'month']);
  const [value, setValue] = useState([null, null]);
  const handlePanelChange = (newValue, newModes) => {
    setValue(newValue);
    setMode([
      newModes[0] === 'date' ? 'month' : newModes[0],
      newModes[1] === 'date' ? 'month' : newModes[1],
    ]);
  };
  return (
    <RangePicker
      placeholder={['Start month', 'End month']}
      format="YYYY-MM"
      value={value}
      mode={mode}
      onChange={setValue}
      onPanelChange={handlePanelChange}
    />
  );
};
const App = () => (
  <Space direction="vertical" size={12}>
    <ControlledDatePicker />
    <ControlledRangePicker />
  </Space>
);
export default App;
`,description:"<p>\u901A\u8FC7\u7EC4\u5408 <code>mode</code> \u4E0E <code>onPanelChange</code> \u63A7\u5236\u8981\u5C55\u793A\u7684\u9762\u677F\u3002</p>"}},{demo:{id:"components-date-picker-demo-start-end"},previewerProps:{debug:!0,title:"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9009\u62E9",filename:"components/date-picker/demo/start-end.tsx",jsx:`import { DatePicker, Space } from 'antd';
import { useState } from 'react';
const App = () => {
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const [endOpen, setEndOpen] = useState(false);
  const disabledStartDate = (startDate) => {
    if (!startDate || !endValue) {
      return false;
    }
    return startDate.valueOf() > endValue.valueOf();
  };
  const disabledEndDate = (endDate) => {
    if (!endDate || !startValue) {
      return false;
    }
    return endDate.valueOf() <= startValue.valueOf();
  };
  const handleStartOpenChange = (open) => {
    if (!open) {
      setEndOpen(true);
    }
  };
  const handleEndOpenChange = (open) => {
    setEndOpen(open);
  };
  return (
    <Space>
      <DatePicker
        disabledDate={disabledStartDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={startValue}
        placeholder="Start"
        onChange={setStartValue}
        onOpenChange={handleStartOpenChange}
      />
      <DatePicker
        disabledDate={disabledEndDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={endValue}
        placeholder="End"
        onChange={setEndValue}
        open={endOpen}
        onOpenChange={handleEndOpenChange}
      />
    </Space>
  );
};
export default App;
`,description:`<p>\u5F53 <code>RangePicker</code> \u65E0\u6CD5\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E24\u4E2A <code>DatePicker</code> \u5B9E\u73B0\u7C7B\u4F3C\u7684\u529F\u80FD\u3002</p>
<blockquote>
<ul>
<li>\u901A\u8FC7\u8BBE\u7F6E <code>disabledDate</code> \u65B9\u6CD5\uFF0C\u6765\u7EA6\u675F\u5F00\u59CB\u548C\u7ED3\u675F\u65E5\u671F\u3002</li>
<li>\u901A\u8FC7 <code>open</code> <code>onOpenChange</code> \u6765\u4F18\u5316\u4EA4\u4E92\u3002</li>
</ul>
</blockquote>`}},{demo:{id:"components-date-picker-demo-suffix"},previewerProps:{debug:!0,title:"\u540E\u7F00\u56FE\u6807",filename:"components/date-picker/demo/suffix.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
const smileIcon = <SmileOutlined />;
const { RangePicker } = DatePicker;
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker suffixIcon={smileIcon} onChange={onChange} />
    <DatePicker suffixIcon={smileIcon} onChange={onChange} picker="month" />
    <RangePicker suffixIcon={smileIcon} onChange={onChange} />
    <DatePicker suffixIcon={smileIcon} onChange={onChange} picker="week" />
    <DatePicker suffixIcon="ab" onChange={onChange} />
    <DatePicker suffixIcon="ab" onChange={onChange} picker="month" />
    <RangePicker suffixIcon="ab" onChange={onChange} />
    <DatePicker suffixIcon="ab" onChange={onChange} picker="week" />
  </Space>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5728\u6D6E\u5C42\u4E2D\u53EF\u4EE5\u9009\u62E9\u6216\u8005\u8F93\u5165\u65E5\u671F\u3002</p>"}},{demo:{id:"components-date-picker-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/date-picker/demo/render-panel.tsx",jsx:`import { DatePicker } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalDatePicker } = DatePicker;
const App = () => <InternalDatePicker />;
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("p",null,e[2].value),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[3].value),(0,t.tZ)("li",null,e[4].value),(0,t.tZ)("li",null,e[5].value),(0,t.tZ)("li",null,e[6].value),(0,t.tZ)("li",null,e[7].value),(0,t.tZ)("li",null,e[8].value)),(0,t.tZ)("h3",{id:"\u56FD\u9645\u5316\u914D\u7F6E"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u56FD\u9645\u5316\u914D\u7F6E"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u56FD\u9645\u5316\u914D\u7F6E"),(0,t.tZ)("p",null,e[9].value,(0,t.tZ)("a",{href:"https://ant.design/components/config-provider-cn/"},e[10].value),e[11].value),(0,t.tZ)("p",null,e[12].value,(0,t.tZ)("a",{href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},e[13].value),e[14].value),(0,t.tZ)(u.Z,{lang:"jsx"},e[15].value),(0,t.tZ)(u.Z,{lang:"jsx"},e[16].value),(0,t.tZ)("h3",{id:"\u5171\u540C\u7684-api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5171\u540C\u7684-api"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5171\u540C\u7684 API"),(0,t.tZ)("p",null,e[17].value),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[18].value),(0,t.tZ)("th",null,e[19].value),(0,t.tZ)("th",null,e[20].value),(0,t.tZ)("th",null,e[21].value),(0,t.tZ)("th",null,e[22].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[23].value),(0,t.tZ)("td",null,e[24].value),(0,t.tZ)("td",null,e[25].value),(0,t.tZ)("td",null,e[26].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[27].value),(0,t.tZ)("td",null,e[28].value),(0,t.tZ)("td",null,e[29].value),(0,t.tZ)("td",null,e[30].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null,e[32].value),(0,t.tZ)("td",null,e[33].value),(0,t.tZ)("td",null,e[34].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[35].value),(0,t.tZ)("td",null,e[36].value),(0,t.tZ)("td",null,e[37].value),(0,t.tZ)("td",null,e[38].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[39].value),(0,t.tZ)("td",null,e[40].value),(0,t.tZ)("td",null,e[41].value),(0,t.tZ)("td",null,e[42].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[43].value),(0,t.tZ)("td",null,e[44].value),(0,t.tZ)("td",null,e[45].value),(0,t.tZ)("td",null,e[46].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[47].value),(0,t.tZ)("td",null,e[48].value),(0,t.tZ)("td",null,e[49].value),(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[51].value),(0,t.tZ)("td",null,e[52].value),(0,t.tZ)("td",null,e[53].value),(0,t.tZ)("td",null,e[54].value),(0,t.tZ)("td",null,e[55].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[56].value),(0,t.tZ)("td",null,e[57].value),(0,t.tZ)("td",null,e[58].value),(0,t.tZ)("td",null,e[59].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[60].value),(0,t.tZ)("td",null,e[61].value),(0,t.tZ)("td",null,e[62].value),(0,t.tZ)("td",null,e[63].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[64].value),(0,t.tZ)("td",null,e[65].value),(0,t.tZ)("td",null,e[66].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},e[67].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[68].value),(0,t.tZ)("td",null,e[69].value,(0,t.tZ)(n.rU,{to:"/docs/react/faq#%E5%BD%93%E6%88%91%E6%8C%87%E5%AE%9A%E4%BA%86-datepickerrangepicker-%E7%9A%84-mode-%E5%B1%9E%E6%80%A7%E5%90%8E%E7%82%B9%E5%87%BB%E5%90%8E%E6%97%A0%E6%B3%95%E9%80%89%E6%8B%A9%E5%B9%B4%E4%BB%BD%E6%9C%88%E4%BB%BD"},e[70].value),e[71].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[72].value),e[73].value,(0,t.tZ)("code",null,e[74].value),e[75].value,(0,t.tZ)("code",null,e[76].value),e[77].value,(0,t.tZ)("code",null,e[78].value),e[79].value,(0,t.tZ)("code",null,e[80].value)),(0,t.tZ)("td",null,e[81].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[82].value),(0,t.tZ)("td",null,e[83].value),(0,t.tZ)("td",null,e[84].value),(0,t.tZ)("td",null,e[85].value),(0,t.tZ)("td",null,e[86].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[87].value),(0,t.tZ)("td",null,e[88].value),(0,t.tZ)("td",null,e[89].value),(0,t.tZ)("td",null,e[90].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[91].value),(0,t.tZ)("td",null,e[92].value),(0,t.tZ)("td",null,e[93].value),(0,t.tZ)("td",null,e[94].value),(0,t.tZ)("td",null,e[95].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[96].value),(0,t.tZ)("td",null,e[97].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[98].value),e[99].value,(0,t.tZ)("code",null,e[100].value),e[101].value,(0,t.tZ)("code",null,e[102].value),e[103].value,(0,t.tZ)("code",null,e[104].value),e[105].value,(0,t.tZ)("code",null,e[106].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[107].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[108].value),e[109].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[110].value),(0,t.tZ)("td",null,e[111].value),(0,t.tZ)("td",null,e[112].value),(0,t.tZ)("td",null,e[113].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[114].value),(0,t.tZ)("td",null,e[115].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[116].value),e[117].value,(0,t.tZ)("code",null,e[118].value),e[119].value,(0,t.tZ)("code",null,e[120].value),e[121].value,(0,t.tZ)("code",null,e[122].value)),(0,t.tZ)("td",null,e[123].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[124].value),(0,t.tZ)("td",null,e[125].value),(0,t.tZ)("td",null,e[126].value),(0,t.tZ)("td",null,e[127].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[128].value),(0,t.tZ)("td",null,e[129].value),(0,t.tZ)("td",null,e[130].value),(0,t.tZ)("td",null,e[131].value),(0,t.tZ)("td",null,e[132].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[133].value),(0,t.tZ)("td",null,e[134].value),(0,t.tZ)("td",null,e[135].value,(0,t.tZ)("a",{href:"https://day.js.org/"},e[136].value),e[137].value),(0,t.tZ)("td",null,e[138].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[139].value),(0,t.tZ)("td",null,e[140].value,(0,t.tZ)("code",null,e[141].value),e[142].value,(0,t.tZ)("code",null,e[143].value),e[144].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[145].value),e[146].value,(0,t.tZ)("code",null,e[147].value),e[148].value,(0,t.tZ)("code",null,e[149].value)),(0,t.tZ)("td",null,e[150].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[151].value),(0,t.tZ)("td",null,e[152].value),(0,t.tZ)("td",null,e[153].value),(0,t.tZ)("td",null,e[154].value),(0,t.tZ)("td",null,e[155].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[156].value),(0,t.tZ)("td",null,e[157].value),(0,t.tZ)("td",null,e[158].value),(0,t.tZ)("td",null,e[159].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[160].value),(0,t.tZ)("td",null,e[161].value),(0,t.tZ)("td",null,e[162].value),(0,t.tZ)("td",null,e[163].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[164].value),(0,t.tZ)("td",null,e[165].value,(0,t.tZ)("code",null,e[166].value),e[167].value),(0,t.tZ)("td",null,e[168].value),(0,t.tZ)("td",null,e[169].value),(0,t.tZ)("td",null,e[170].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[171].value),(0,t.tZ)("td",null,e[172].value,(0,t.tZ)("code",null,e[173].value),e[174].value),(0,t.tZ)("td",null,e[175].value),(0,t.tZ)("td",null,e[176].value),(0,t.tZ)("td",null,e[177].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[178].value),(0,t.tZ)("td",null,e[179].value),(0,t.tZ)("td",null,e[180].value),(0,t.tZ)("td",null,e[181].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[182].value),(0,t.tZ)("td",null,e[183].value),(0,t.tZ)("td",null,e[184].value),(0,t.tZ)("td",null,e[185].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"\u5171\u540C\u7684\u65B9\u6CD5"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5171\u540C\u7684\u65B9\u6CD5"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5171\u540C\u7684\u65B9\u6CD5"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[186].value),(0,t.tZ)("th",null,e[187].value),(0,t.tZ)("th",null,e[188].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[189].value),(0,t.tZ)("td",null,e[190].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[191].value),(0,t.tZ)("td",null,e[192].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"datepicker"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#datepicker"},(0,t.tZ)("span",{className:"icon icon-link"})),"DatePicker"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[193].value),(0,t.tZ)("th",null,e[194].value),(0,t.tZ)("th",null,e[195].value),(0,t.tZ)("th",null,e[196].value),(0,t.tZ)("th",null,e[197].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[198].value),(0,t.tZ)("td",null,e[199].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[200].value)),(0,t.tZ)("td",null,e[201].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[202].value),(0,t.tZ)("td",null,e[203].value,(0,t.tZ)("code",null,e[204].value),e[205].value,(0,t.tZ)("code",null,e[206].value),e[207].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[208].value)),(0,t.tZ)("td",null,e[209].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[210].value),(0,t.tZ)("td",null,e[211].value),(0,t.tZ)("td",null,e[212].value),(0,t.tZ)("td",null,e[213].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[214].value),(0,t.tZ)("td",null,e[215].value,(0,t.tZ)("a",{href:"https://day.js.org/"},e[216].value),e[217].value,(0,t.tZ)(n.rU,{to:"#components-date-picker-demo-format"},e[218].value)),(0,t.tZ)("td",null,e[219].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[220].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[221].value),(0,t.tZ)("td",null,e[222].value),(0,t.tZ)("td",null,e[223].value),(0,t.tZ)("td",null,e[224].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[225].value),(0,t.tZ)("td",null,e[226].value,(0,t.tZ)("code",null,e[227].value),e[228].value),(0,t.tZ)("td",null,e[229].value),(0,t.tZ)("td",null,e[230].value),(0,t.tZ)("td",null,e[231].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[232].value),(0,t.tZ)("td",null,e[233].value),(0,t.tZ)("td",null,e[234].value),(0,t.tZ)("td",null,(0,t.tZ)(n.rU,{to:"/components/time-picker-cn#api"},e[235].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[236].value),(0,t.tZ)("td",null,e[237].value,(0,t.tZ)(n.rU,{to:"#components-date-picker-demo-disabled-date"},e[238].value)),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[239].value)),(0,t.tZ)("td",null,e[240].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[241].value),(0,t.tZ)("td",null,e[242].value),(0,t.tZ)("td",null,e[243].value),(0,t.tZ)("td",null,e[244].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[245].value),(0,t.tZ)("td",null,e[246].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[247].value)),(0,t.tZ)("td",null,e[248].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[249].value),(0,t.tZ)("td",null,e[250].value),(0,t.tZ)("td",null,e[251].value),(0,t.tZ)("td",null,e[252].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[253].value),(0,t.tZ)("td",null,e[254].value),(0,t.tZ)("td",null,e[255].value),(0,t.tZ)("td",null,e[256].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[257].value),(0,t.tZ)("td",null,e[258].value),(0,t.tZ)("td",null,e[259].value),(0,t.tZ)("td",null,e[260].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"datepickerpickeryear"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickeryear"},(0,t.tZ)("span",{className:"icon icon-link"})),"DatePicker[picker=year]"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[261].value),(0,t.tZ)("th",null,e[262].value),(0,t.tZ)("th",null,e[263].value),(0,t.tZ)("th",null,e[264].value),(0,t.tZ)("th",null,e[265].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[266].value),(0,t.tZ)("td",null,e[267].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[268].value)),(0,t.tZ)("td",null,e[269].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[270].value),(0,t.tZ)("td",null,e[271].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[272].value)),(0,t.tZ)("td",null,e[273].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[274].value),(0,t.tZ)("td",null,e[275].value,(0,t.tZ)("a",{href:"https://day.js.org/"},e[276].value)),(0,t.tZ)("td",null,e[277].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[278].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[279].value),(0,t.tZ)("td",null,e[280].value),(0,t.tZ)("td",null,e[281].value),(0,t.tZ)("td",null,e[282].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[283].value),(0,t.tZ)("td",null,e[284].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[285].value)),(0,t.tZ)("td",null,e[286].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[287].value),(0,t.tZ)("td",null,e[288].value),(0,t.tZ)("td",null,e[289].value),(0,t.tZ)("td",null,e[290].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"datepickerpickerquarter"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickerquarter"},(0,t.tZ)("span",{className:"icon icon-link"})),"DatePicker[picker=quarter]"),(0,t.tZ)("p",null,(0,t.tZ)("code",null,e[291].value),e[292].value),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[293].value),(0,t.tZ)("th",null,e[294].value),(0,t.tZ)("th",null,e[295].value),(0,t.tZ)("th",null,e[296].value),(0,t.tZ)("th",null,e[297].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[298].value),(0,t.tZ)("td",null,e[299].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[300].value)),(0,t.tZ)("td",null,e[301].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[302].value),(0,t.tZ)("td",null,e[303].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[304].value)),(0,t.tZ)("td",null,e[305].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[306].value),(0,t.tZ)("td",null,e[307].value,(0,t.tZ)("a",{href:"https://day.js.org/"},e[308].value)),(0,t.tZ)("td",null,e[309].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[310].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[311].value),(0,t.tZ)("td",null,e[312].value),(0,t.tZ)("td",null,e[313].value),(0,t.tZ)("td",null,e[314].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[315].value),(0,t.tZ)("td",null,e[316].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[317].value)),(0,t.tZ)("td",null,e[318].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[319].value),(0,t.tZ)("td",null,e[320].value),(0,t.tZ)("td",null,e[321].value),(0,t.tZ)("td",null,e[322].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"datepickerpickermonth"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickermonth"},(0,t.tZ)("span",{className:"icon icon-link"})),"DatePicker[picker=month]"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[323].value),(0,t.tZ)("th",null,e[324].value),(0,t.tZ)("th",null,e[325].value),(0,t.tZ)("th",null,e[326].value),(0,t.tZ)("th",null,e[327].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[328].value),(0,t.tZ)("td",null,e[329].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[330].value)),(0,t.tZ)("td",null,e[331].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[332].value),(0,t.tZ)("td",null,e[333].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[334].value)),(0,t.tZ)("td",null,e[335].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[336].value),(0,t.tZ)("td",null,e[337].value,(0,t.tZ)("a",{href:"https://day.js.org/"},e[338].value)),(0,t.tZ)("td",null,e[339].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[340].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[341].value),(0,t.tZ)("td",null,e[342].value),(0,t.tZ)("td",null,e[343].value),(0,t.tZ)("td",null,e[344].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[345].value),(0,t.tZ)("td",null,e[346].value),(0,t.tZ)("td",null,e[347].value),(0,t.tZ)("td",null,e[348].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[349].value),(0,t.tZ)("td",null,e[350].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[351].value)),(0,t.tZ)("td",null,e[352].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[353].value),(0,t.tZ)("td",null,e[354].value),(0,t.tZ)("td",null,e[355].value),(0,t.tZ)("td",null,e[356].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"datepickerpickerweek"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickerweek"},(0,t.tZ)("span",{className:"icon icon-link"})),"DatePicker[picker=week]"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[357].value),(0,t.tZ)("th",null,e[358].value),(0,t.tZ)("th",null,e[359].value),(0,t.tZ)("th",null,e[360].value),(0,t.tZ)("th",null,e[361].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[362].value),(0,t.tZ)("td",null,e[363].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[364].value)),(0,t.tZ)("td",null,e[365].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[366].value),(0,t.tZ)("td",null,e[367].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[368].value)),(0,t.tZ)("td",null,e[369].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[370].value),(0,t.tZ)("td",null,e[371].value,(0,t.tZ)("a",{href:"https://day.js.org/"},e[372].value)),(0,t.tZ)("td",null,e[373].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[374].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[375].value),(0,t.tZ)("td",null,e[376].value),(0,t.tZ)("td",null,e[377].value),(0,t.tZ)("td",null,e[378].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[379].value),(0,t.tZ)("td",null,e[380].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[381].value)),(0,t.tZ)("td",null,e[382].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[383].value),(0,t.tZ)("td",null,e[384].value),(0,t.tZ)("td",null,e[385].value),(0,t.tZ)("td",null,e[386].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"rangepicker"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#rangepicker"},(0,t.tZ)("span",{className:"icon icon-link"})),"RangePicker"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[387].value),(0,t.tZ)("th",null,e[388].value),(0,t.tZ)("th",null,e[389].value),(0,t.tZ)("th",null,e[390].value),(0,t.tZ)("th",null,e[391].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[392].value),(0,t.tZ)("td",null,e[393].value),(0,t.tZ)("td",null,e[394].value),(0,t.tZ)("td",null,e[395].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[396].value),(0,t.tZ)("td",null,e[397].value,(0,t.tZ)("code",null,e[398].value),e[399].value),(0,t.tZ)("td",null,e[400].value,(0,t.tZ)("code",null,e[401].value),e[402].value,(0,t.tZ)("code",null,e[403].value),e[404].value),(0,t.tZ)("td",null,e[405].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[406].value),(0,t.tZ)("td",null,e[407].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[408].value),e[409].value),(0,t.tZ)("td",null,e[410].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[411].value),(0,t.tZ)("td",null,e[412].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[413].value),e[414].value),(0,t.tZ)("td",null,e[415].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[416].value),(0,t.tZ)("td",null,e[417].value),(0,t.tZ)("td",null,e[418].value),(0,t.tZ)("td",null,e[419].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[420].value),(0,t.tZ)("td",null,e[421].value),(0,t.tZ)("td",null,e[422].value,(0,t.tZ)("code",null,e[423].value),e[424].value,(0,t.tZ)("code",null,e[425].value),e[426].value),(0,t.tZ)("td",null,e[427].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[428].value),(0,t.tZ)("td",null,e[429].value),(0,t.tZ)("td",null,e[430].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[431].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[432].value),(0,t.tZ)("td",null,e[433].value),(0,t.tZ)("td",null,e[434].value,(0,t.tZ)("a",{href:"https://day.js.org/"},e[435].value),e[436].value),(0,t.tZ)("td",null,e[437].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[438].value),(0,t.tZ)("td",null,e[439].value),(0,t.tZ)("td",null,e[440].value),(0,t.tZ)("td",null,e[441].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[442].value),(0,t.tZ)("td",null,e[443].value),(0,t.tZ)("td",null,e[444].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[445].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[446].value),(0,t.tZ)("td",null,e[447].value),(0,t.tZ)("td",null,e[448].value),(0,t.tZ)("td",null,(0,t.tZ)(n.rU,{to:"/components/time-picker-cn#api"},e[449].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[450].value),(0,t.tZ)("td",null,e[451].value,(0,t.tZ)(n.rU,{to:"#components-date-picker-demo-disabled-date"},e[452].value)),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[453].value),e[454].value),(0,t.tZ)("td",null,e[455].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[456].value),(0,t.tZ)("td",null,e[457].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://day.js.org/"},e[458].value),e[459].value),(0,t.tZ)("td",null,e[460].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[461].value),(0,t.tZ)("td",null,e[462].value,(0,t.tZ)("code",null,e[463].value),e[464].value),(0,t.tZ)("td",null,e[465].value,(0,t.tZ)("code",null,e[466].value),e[467].value,(0,t.tZ)("code",null,e[468].value),e[469].value),(0,t.tZ)("td",null,e[470].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[471].value),(0,t.tZ)("td",null,e[472].value),(0,t.tZ)("td",null,e[473].value),(0,t.tZ)("td",null,e[474].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h2",{id:"faq"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,t.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,t.tZ)("h3",{id:"\u5F53\u6211\u6307\u5B9A\u4E86-datepickerrangepicker-\u7684-mode-\u5C5E\u6027\u540E\u70B9\u51FB\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD\u6708\u4EFD"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5F53\u6211\u6307\u5B9A\u4E86-datepickerrangepicker-\u7684-mode-\u5C5E\u6027\u540E\u70B9\u51FB\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD\u6708\u4EFD"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5F53\u6211\u6307\u5B9A\u4E86 DatePicker/RangePicker \u7684 mode \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD/\u6708\u4EFD\uFF1F"),(0,t.tZ)("p",null,e[475].value,(0,t.tZ)(n.rU,{to:"/docs/react/faq#%E5%BD%93%E6%88%91%E6%8C%87%E5%AE%9A%E4%BA%86-datepickerrangepicker-%E7%9A%84-mode-%E5%B1%9E%E6%80%A7%E5%90%8E%E7%82%B9%E5%87%BB%E5%90%8E%E6%97%A0%E6%B3%95%E9%80%89%E6%8B%A9%E5%B9%B4%E4%BB%BD%E6%9C%88%E4%BB%BD"},e[476].value)),(0,t.tZ)("h3",{id:"\u5982\u4F55\u5728-datepicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u5982-momentjs-"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u5728-datepicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u5982-momentjs-"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 Moment.js \uFF09\uFF1F"),(0,t.tZ)("p",null,e[477].value,(0,t.tZ)(n.rU,{to:"/docs/react/use-custom-date-library#datepicker"},e[478].value)),(0,t.tZ)("h3",{id:"\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316 locale \u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F"),(0,t.tZ)("p",null,e[479].value,(0,t.tZ)(n.rU,{to:"/docs/react/faq#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%97%B6%E9%97%B4%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%9A%84%E5%9B%BD%E9%99%85%E5%8C%96-locale-%E8%AE%BE%E7%BD%AE%E4%B8%8D%E7%94%9F%E6%95%88"},e[480].value),e[481].value),(0,t.tZ)("h3",{id:"\u5982\u4F55\u4FEE\u6539\u5468\u7684\u8D77\u59CB\u65E5"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u4FEE\u6539\u5468\u7684\u8D77\u59CB\u65E5"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u4FEE\u6539\u5468\u7684\u8D77\u59CB\u65E5\uFF1F"),(0,t.tZ)("p",null,e[482].value,(0,t.tZ)(n.rU,{to:"/docs/react/i18n-cn"},e[483].value),e[484].value,(0,t.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/5605"},e[485].value),e[486].value,(0,t.tZ)("code",null,e[487].value),e[488].value,(0,t.tZ)("a",{href:"https://codesandbox.io/s/dayjs-day-of-week-x9tuj2?file=/demo.tsx"},e[489].value)),(0,t.tZ)(u.Z,{lang:"js"},e[490].value),(0,t.tZ)("h3",{id:"\u4E3A\u4F55\u4F7F\u7528-panelrender-\u65F6\u539F\u6765\u9762\u677F\u65E0\u6CD5\u5207\u6362"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4F55\u4F7F\u7528-panelrender-\u65F6\u539F\u6765\u9762\u677F\u65E0\u6CD5\u5207\u6362"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4E3A\u4F55\u4F7F\u7528 ",(0,t.tZ)("code",null,e[491].value)," \u65F6\uFF0C\u539F\u6765\u9762\u677F\u65E0\u6CD5\u5207\u6362\uFF1F"),(0,t.tZ)("p",null,e[492].value,(0,t.tZ)("code",null,e[493].value),e[494].value,(0,t.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/27263"},e[495].value),e[496].value))))}d.default=i}}]);
