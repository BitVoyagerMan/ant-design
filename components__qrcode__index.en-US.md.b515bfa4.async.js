"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7519],{34875:function(u,o,n){n.r(o);var c=n(2143),m=n(50250),p=n(59378),v=n(5648),Z=n(74775),a=n(5937),d=n(2068),f=n(74399),g=n(63942),h=n(16073),C=n(24628),E=n(19260),P=n(56140),i=n(5388),x=n(49545),j=n(6965),R=n(49706),D=n(95127),M=n(74418),O=n(73024),l=n(94065),s=n(67294),e=n(96923);function _(){var r=(0,l.eL)(),t=r.texts;return(0,e.tZ)(l.dY,null,(0,e.tZ)(s.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value,(0,e.tZ)("code",null,t[1].value),t[2].value)),(0,e.tZ)(d.Z,{message:"If the QR code cannot be scanned for identification, it may be because the link address is too long, which leads to too dense pixels. You can configure the QR code to be larger through `size`, or shorten the link through short link services."}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,t[3].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(i.Z,{items:[{demo:{id:"components-qrcode-demo-base"},previewerProps:{title:"base",filename:"components/qrcode/demo/base.tsx",jsx:`import { QRCode } from 'antd';
const App = () => <QRCode value="https://ant.design/" />;
export default App;
`,description:"<p>Basic Usage.</p>"}},{demo:{id:"components-qrcode-demo-icon"},previewerProps:{title:"With Icon",filename:"components/qrcode/demo/icon.tsx",jsx:`import { QRCode } from 'antd';
const App = () => (
  <QRCode
    errorLevel="H"
    value="https://ant.design/"
    icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
  />
);
export default App;
`,description:"<p>QRCode with Icon.</p>"}},{demo:{id:"components-qrcode-demo-status"},previewerProps:{title:"other status",filename:"components/qrcode/demo/status.tsx",jsx:`import { QRCode, Space } from 'antd';
const App = () => (
  <Space wrap>
    <QRCode value="https://ant.design/" status="loading" />
    <QRCode value="https://ant.design/" status="expired" onRefresh={() => console.log('refresh')} />
  </Space>
);
export default App;
`,description:"<p>The status can be controlled by the value <code>status</code>.</p>"}},{demo:{id:"components-qrcode-demo-customsize"},previewerProps:{title:"Custom Size",filename:"components/qrcode/demo/customSize.tsx",jsx:`import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
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
`,description:"<p>Custom Size.</p>"}},{demo:{id:"components-qrcode-demo-customcolor"},previewerProps:{title:"Custom Color",filename:"components/qrcode/demo/customColor.tsx",jsx:`import { QRCode, Space, theme } from 'antd';
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
`,description:"<p>Custom Color.</p>"}},{demo:{id:"components-qrcode-demo-download"},previewerProps:{title:"Download QRCode",filename:"components/qrcode/demo/download.tsx",jsx:`import { Button, QRCode } from 'antd';
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
`,description:"<p>A way to download QRCode.</p>"}},{demo:{id:"components-qrcode-demo-errorlevel"},previewerProps:{title:"Error Level",filename:"components/qrcode/demo/errorlevel.tsx",jsx:`import { QRCode, Segmented } from 'antd';
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
`,description:"<p>set Error Level.</p>"}},{demo:{id:"components-qrcode-demo-popover"},previewerProps:{title:"Advanced Usage",filename:"components/qrcode/demo/Popover.tsx",jsx:`import { Popover, QRCode } from 'antd';
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
`,description:"<p>With Popover.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,t[4].value,(0,e.tZ)("code",null,t[5].value))),(0,e.tZ)(a.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",{align:"left"},t[6].value),(0,e.tZ)("th",{align:"left"},t[7].value),(0,e.tZ)("th",{align:"left"},t[8].value),(0,e.tZ)("th",{align:"left"},t[9].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[10].value),(0,e.tZ)("td",{align:"left"},t[11].value),(0,e.tZ)("td",{align:"left"},t[12].value),(0,e.tZ)("td",{align:"left"},t[13].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[14].value),(0,e.tZ)("td",{align:"left"},t[15].value),(0,e.tZ)("td",{align:"left"},t[16].value),(0,e.tZ)("td",{align:"left"},t[17].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[18].value),(0,e.tZ)("td",{align:"left"},t[19].value),(0,e.tZ)("td",{align:"left"},t[20].value),(0,e.tZ)("td",{align:"left"},t[21].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[22].value),(0,e.tZ)("td",{align:"left"},t[23].value),(0,e.tZ)("td",{align:"left"},t[24].value),(0,e.tZ)("td",{align:"left"},t[25].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[26].value),(0,e.tZ)("td",{align:"left"},t[27].value),(0,e.tZ)("td",{align:"left"},t[28].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[29].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[30].value),(0,e.tZ)("td",{align:"left"},t[31].value),(0,e.tZ)("td",{align:"left"},t[32].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[33].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[34].value),(0,e.tZ)("td",{align:"left"},t[35].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[36].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[37].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[38].value),(0,e.tZ)("td",{align:"left"},t[39].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[40].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[41].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[42].value),(0,e.tZ)("td",{align:"left"},t[43].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[44].value)),(0,e.tZ)("td",{align:"left"},t[45].value)))),(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"about-qrcode-errorlevel"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#about-qrcode-errorlevel"},(0,e.tZ)("span",{className:"icon icon-link"})),"About QRCode ErrorLevel"),(0,e.tZ)("p",null,t[46].value),(0,e.tZ)("p",null,t[47].value,(0,e.tZ)("code",null,t[48].value),t[49].value,(0,e.tZ)("code",null,t[50].value),t[51].value,(0,e.tZ)("code",null,t[52].value),t[53].value,(0,e.tZ)("code",null,t[54].value),t[55].value,(0,e.tZ)("code",null,t[56].value),t[57].value,(0,e.tZ)("code",null,t[58].value),t[59].value,(0,e.tZ)("code",null,t[60].value),t[61].value,(0,e.tZ)("code",null,t[62].value),t[63].value),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,t[64].value,(0,e.tZ)("a",{href:"https://www.qrcode.com/en/about/error_correction.html"},t[65].value))))))}o.default=_}}]);
