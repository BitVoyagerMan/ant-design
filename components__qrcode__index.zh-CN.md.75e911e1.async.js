"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9127],{96564:function(r,l,n){n.r(l);var c=n(2143),p=n(50250),m=n(59378),v=n(5648),E=n(74775),a=n(5937),d=n(2068),Z=n(74399),f=n(63942),g=n(16073),C=n(24628),P=n(19260),h=n(56140),u=n(5388),x=n(49545),D=n(6965),j=n(49706),A=n(95127),M=n(74418),R=n(73024),o=n(94065),i=n(67294),e=n(96923);function _(){var s=(0,o.eL)(),t=s.texts;return(0,e.tZ)(o.dY,null,(0,e.tZ)(i.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value,(0,e.tZ)("code",null,t[1].value),t[2].value)),(0,e.tZ)(d.Z,{message:"\u82E5\u4E8C\u7EF4\u7801\u65E0\u6CD5\u626B\u7801\u8BC6\u522B\uFF0C\u53EF\u80FD\u662F\u56E0\u4E3A\u94FE\u63A5\u5730\u5740\u8FC7\u957F\u5BFC\u81F4\u50CF\u7D20\u8FC7\u4E8E\u5BC6\u96C6\uFF0C\u53EF\u4EE5\u901A\u8FC7 `size` \u914D\u7F6E\u4E8C\u7EF4\u7801\u66F4\u5927\uFF0C\u6216\u8005\u901A\u8FC7\u77ED\u94FE\u63A5\u670D\u52A1\u7B49\u65B9\u5F0F\u5C06\u94FE\u63A5\u53D8\u77ED\u3002"}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,e.tZ)("p",null,t[3].value),(0,e.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,e.tZ)(u.Z,{items:[{demo:{id:"components-qrcode-demo-base"},previewerProps:{title:"\u57FA\u672C\u4F7F\u7528",filename:"components/qrcode/demo/base.tsx",jsx:`import { QRCode } from 'antd';
const App = () => <QRCode value="https://ant.design/" />;
export default App;
`,description:"<p>\u57FA\u672C\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-qrcode-demo-icon"},previewerProps:{title:"\u5E26 Icon \u7684\u4F8B\u5B50",filename:"components/qrcode/demo/icon.tsx",jsx:`import { QRCode } from 'antd';
const App = () => (
  <QRCode
    errorLevel="H"
    value="https://ant.design/"
    icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
  />
);
export default App;
`,description:"<p>\u5E26 Icon \u7684\u4E8C\u7EF4\u7801\u3002</p>"}},{demo:{id:"components-qrcode-demo-status"},previewerProps:{title:"\u4E0D\u540C\u7684\u72B6\u6001",filename:"components/qrcode/demo/status.tsx",jsx:`import { QRCode, Space } from 'antd';
const App = () => (
  <Space wrap>
    <QRCode value="https://ant.design/" status="loading" />
    <QRCode value="https://ant.design/" status="expired" onRefresh={() => console.log('refresh')} />
  </Space>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7 <code>status</code> \u7684\u503C\u63A7\u5236\u4E8C\u7EF4\u7801\u7684\u72B6\u6001\u3002</p>"}},{demo:{id:"components-qrcode-demo-customsize"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u5C3A\u5BF8",filename:"components/qrcode/demo/customSize.tsx",jsx:`import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, QRCode } from 'antd';
import { useState } from 'react';
const App = () => {
  const [size, setSize] = useState(160);
  const increase = () => {
    setSize((prevSize) => {
      const newSize = prevSize + 10;
      if (newSize > 300) {
        return 300;
      }
      return newSize;
    });
  };
  const decline = () => {
    setSize((prevSize) => {
      const newSize = prevSize - 10;
      if (newSize < 48) {
        return 48;
      }
      return newSize;
    });
  };
  return (
    <>
      <Button.Group
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={decline} disabled={size <= 48} icon={<MinusOutlined />}>
          Smaller
        </Button>
        <Button onClick={increase} disabled={size >= 300} icon={<PlusOutlined />}>
          Larger
        </Button>
      </Button.Group>
      <QRCode
        errorLevel="H"
        size={size}
        iconSize={size / 4}
        value="https://ant.design/"
        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
    </>
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u5C3A\u5BF8</p>"}},{demo:{id:"components-qrcode-demo-customcolor"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u989C\u8272",filename:"components/qrcode/demo/customColor.tsx",jsx:`import { QRCode, Space, theme } from 'antd';
const { useToken } = theme;
const App = () => {
  const { token } = useToken();
  return (
    <Space>
      <QRCode
        value="https://ant.design/"
        color={token.colorSuccessText}
        style={{
          marginBottom: 16,
          backgroundColor: token.colorBgLayout,
        }}
      />
      <QRCode
        value="https://ant.design/"
        color={token.colorInfoText}
        style={{
          marginBottom: 16,
          backgroundColor: token.colorBgLayout,
        }}
      />
    </Space>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>color</code> \u81EA\u5B9A\u4E49\u4E8C\u7EF4\u7801\u989C\u8272\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code>style</code> \u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272\u3002</p>"}},{demo:{id:"components-qrcode-demo-download"},previewerProps:{title:"\u4E0B\u8F7D\u4E8C\u7EF4\u7801",filename:"components/qrcode/demo/download.tsx",jsx:`import { Button, QRCode } from 'antd';
const downloadQRCode = () => {
  const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
const App = () => (
  <div id="myqrcode">
    <QRCode
      value="https://ant.design/"
      style={{
        marginBottom: 16,
      }}
    />
    <Button type="primary" onClick={downloadQRCode}>
      Download
    </Button>
  </div>
);
export default App;
`,description:"<p>\u4E0B\u8F7D\u4E8C\u7EF4\u7801\u7684\u7B80\u5355\u5B9E\u73B0\u3002</p>"}},{demo:{id:"components-qrcode-demo-errorlevel"},previewerProps:{title:"\u7EA0\u9519\u6BD4\u4F8B",filename:"components/qrcode/demo/errorlevel.tsx",jsx:`import { QRCode, Segmented } from 'antd';
import { useState } from 'react';
const App = () => {
  const [level, setLevel] = useState('L');
  return (
    <>
      <QRCode
        style={{
          marginBottom: 16,
        }}
        errorLevel={level}
        value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Segmented options={['L', 'M', 'Q', 'H']} value={level} onChange={setLevel} />
    </>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E errorLevel \u8C03\u6574\u4E0D\u540C\u7684\u5BB9\u9519\u7B49\u7EA7\u3002</p>"}},{demo:{id:"components-qrcode-demo-popover"},previewerProps:{title:"\u9AD8\u7EA7\u7528\u6CD5",filename:"components/qrcode/demo/Popover.tsx",jsx:`import { Popover, QRCode } from 'antd';
const src = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
const App = () => (
  <Popover
    overlayInnerStyle={{
      padding: 0,
    }}
    content={<QRCode value={src} bordered={false} />}
  >
    <img width={100} height={100} src={src} alt="icon" />
  </Popover>
);
export default App;
`,description:"<p>\u5E26\u6C14\u6CE1\u5361\u7247\u7684\u4F8B\u5B50\u3002</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,t[4].value,(0,e.tZ)("code",null,t[5].value),t[6].value)),(0,e.tZ)(a.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",{align:"left"},t[7].value),(0,e.tZ)("th",{align:"left"},t[8].value),(0,e.tZ)("th",{align:"left"},t[9].value),(0,e.tZ)("th",{align:"left"},t[10].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[11].value),(0,e.tZ)("td",{align:"left"},t[12].value),(0,e.tZ)("td",{align:"left"},t[13].value),(0,e.tZ)("td",{align:"left"},t[14].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[15].value),(0,e.tZ)("td",{align:"left"},t[16].value),(0,e.tZ)("td",{align:"left"},t[17].value),(0,e.tZ)("td",{align:"left"},t[18].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[19].value),(0,e.tZ)("td",{align:"left"},t[20].value),(0,e.tZ)("td",{align:"left"},t[21].value),(0,e.tZ)("td",{align:"left"},t[22].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[23].value),(0,e.tZ)("td",{align:"left"},t[24].value),(0,e.tZ)("td",{align:"left"},t[25].value),(0,e.tZ)("td",{align:"left"},t[26].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[27].value),(0,e.tZ)("td",{align:"left"},t[28].value),(0,e.tZ)("td",{align:"left"},t[29].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[30].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[31].value),(0,e.tZ)("td",{align:"left"},t[32].value),(0,e.tZ)("td",{align:"left"},t[33].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[34].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[35].value),(0,e.tZ)("td",{align:"left"},t[36].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[37].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[38].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[39].value),(0,e.tZ)("td",{align:"left"},t[40].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[41].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[42].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[43].value),(0,e.tZ)("td",{align:"left"},t[44].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[45].value)),(0,e.tZ)("td",{align:"left"},t[46].value)))),(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"\u5173\u4E8E\u4E8C\u7EF4\u7801\u7EA0\u9519\u7B49\u7EA7"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5173\u4E8E\u4E8C\u7EF4\u7801\u7EA0\u9519\u7B49\u7EA7"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5173\u4E8E\u4E8C\u7EF4\u7801\u7EA0\u9519\u7B49\u7EA7"),(0,e.tZ)("p",null,t[47].value),(0,e.tZ)("p",null,t[48].value,(0,e.tZ)("code",null,t[49].value),t[50].value,(0,e.tZ)("code",null,t[51].value),t[52].value,(0,e.tZ)("code",null,t[53].value),t[54].value,(0,e.tZ)("code",null,t[55].value),t[56].value,(0,e.tZ)("code",null,t[57].value),t[58].value,(0,e.tZ)("code",null,t[59].value),t[60].value,(0,e.tZ)("code",null,t[61].value),t[62].value,(0,e.tZ)("code",null,t[63].value),t[64].value),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,t[65].value,(0,e.tZ)("a",{href:"https://www.qrcode.com/zh/about/error_correction.html"},t[66].value))))))}l.default=_}}]);
