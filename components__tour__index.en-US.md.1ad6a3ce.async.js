"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6176],{63005:function(r,e,n){n.r(e);var i=n(2143),Z=n(50250),c=n(59378),v=n(5648),p=n(74775),u=n(5937),m=n(2068),f=n(74399),h=n(63942),E=n(16073),P=n(24628),O=n(19260),D=n(56140),d=n(5388),x=n(49545),g=n(6965),U=n(49706),j=n(95127),B=n(74418),M=n(73024),a=n(94065),o=n(67294),t=n(96923);function _(){var s=(0,a.eL)(),l=s.texts;return(0,t.tZ)(a.dY,null,(0,t.tZ)(o.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,l[0].value,(0,t.tZ)("code",null,l[1].value),l[2].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("p",null,l[3].value),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-tour-demo-basic"},previewerProps:{title:"Basic",filename:"components/tour/demo/basic.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-tour-demo-non-modal"},previewerProps:{title:"Non-modal",filename:"components/tour/demo/non-modal.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin non-modal Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} mask={false} type="primary" steps={steps} />
    </>
  );
};
export default App;
`,description:'<p>Use <code>mask={false}</code> to make Tour non-modal. At the meantime it is recommended to use with <code>type="primary"</code> to emphasize the guide itself.</p>'}},{demo:{id:"components-tour-demo-placement"},previewerProps:{title:"Placement",filename:"components/tour/demo/placement.tsx",jsx:`import { Button, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Center',
      description: 'Displayed in the center of screen.',
      target: null,
    },
    {
      title: 'Right',
      description: 'On the right of target.',
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        Begin Tour
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>Change the placement of the guide relative to the target, there are 12 placements available. When <code>target={null}</code> the guide will show in the center.</p>"}},{demo:{id:"components-tour-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tour/demo/render-panel.tsx",jsx:`import { Tour } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Tour;
export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
      background: 'rgba(50,0,0,0.65)',
      padding: 8,
    }}
  >
    <InternalPanel title="Hello World!" description="Hello World?!" />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      cover={
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      }
      current={5}
      total={7}
    />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      type="primary"
      current={4}
      total={5}
    />
  </div>
);
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"tour"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tour"},(0,t.tZ)("span",{className:"icon icon-link"})),"Tour"),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,l[4].value),(0,t.tZ)("th",null,l[5].value),(0,t.tZ)("th",null,l[6].value),(0,t.tZ)("th",null,l[7].value),(0,t.tZ)("th",null,l[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[9].value),(0,t.tZ)("td",null,l[10].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[11].value),l[12].value,(0,t.tZ)("code",null,l[13].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[14].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[15].value),(0,t.tZ)("td",null,l[16].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[17].value),l[18].value,(0,t.tZ)("code",null,l[19].value),l[20].value,(0,t.tZ)("code",null,l[21].value),l[22].value,(0,t.tZ)("code",null,l[23].value),l[24].value,(0,t.tZ)("code",null,l[25].value),l[26].value,(0,t.tZ)("code",null,l[27].value),l[28].value,(0,t.tZ)("code",null,l[29].value),l[30].value,(0,t.tZ)("code",null,l[31].value),l[32].value,(0,t.tZ)("code",null,l[33].value),l[34].value,(0,t.tZ)("code",null,l[35].value),l[36].value,(0,t.tZ)("code",null,l[37].value),l[38].value,(0,t.tZ)("code",null,l[39].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[40].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[41].value),(0,t.tZ)("td",null,l[42].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[43].value)),(0,t.tZ)("td",null,l[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[45].value),(0,t.tZ)("td",null,l[46].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[47].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[48].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[49].value),(0,t.tZ)("td",null,l[50].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[51].value),l[52].value,(0,t.tZ)("code",null,l[53].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[54].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[55].value),(0,t.tZ)("td",null,l[56].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[57].value)),(0,t.tZ)("td",null,l[58].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[59].value),(0,t.tZ)("td",null,l[60].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[61].value)),(0,t.tZ)("td",null,l[62].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[63].value),(0,t.tZ)("td",null,l[64].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[65].value)),(0,t.tZ)("td",null,l[66].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"tourstep"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tourstep"},(0,t.tZ)("span",{className:"icon icon-link"})),"TourStep"),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,l[67].value),(0,t.tZ)("th",null,l[68].value),(0,t.tZ)("th",null,l[69].value),(0,t.tZ)("th",null,l[70].value),(0,t.tZ)("th",null,l[71].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[72].value),(0,t.tZ)("td",null,l[73].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[74].value),l[75].value,(0,t.tZ)("code",null,l[76].value)),(0,t.tZ)("td",null,l[77].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[78].value),(0,t.tZ)("td",null,l[79].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[80].value),l[81].value,(0,t.tZ)("code",null,l[82].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[83].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[84].value),(0,t.tZ)("td",null,l[85].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[86].value)),(0,t.tZ)("td",null,l[87].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[88].value),(0,t.tZ)("td",null,l[89].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[90].value)),(0,t.tZ)("td",null,l[91].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[92].value),(0,t.tZ)("td",null,l[93].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[94].value)),(0,t.tZ)("td",null,l[95].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[96].value),(0,t.tZ)("td",null,l[97].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[98].value),l[99].value,(0,t.tZ)("code",null,l[100].value),l[101].value,(0,t.tZ)("code",null,l[102].value),l[103].value,(0,t.tZ)("code",null,l[104].value),l[105].value,(0,t.tZ)("code",null,l[106].value),l[107].value,(0,t.tZ)("code",null,l[108].value),l[109].value,(0,t.tZ)("code",null,l[110].value),l[111].value,(0,t.tZ)("code",null,l[112].value),l[113].value,(0,t.tZ)("code",null,l[114].value),l[115].value,(0,t.tZ)("code",null,l[116].value),l[117].value,(0,t.tZ)("code",null,l[118].value),l[119].value,(0,t.tZ)("code",null,l[120].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[121].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[122].value),(0,t.tZ)("td",null,l[123].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[124].value)),(0,t.tZ)("td",null,l[125].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[126].value),(0,t.tZ)("td",null,l[127].value,(0,t.tZ)("code",null,l[128].value),l[129].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[130].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[131].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[132].value),(0,t.tZ)("td",null,l[133].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[134].value),l[135].value,(0,t.tZ)("code",null,l[136].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[137].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[138].value),(0,t.tZ)("td",null,l[139].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[140].value)),(0,t.tZ)("td",null,l[141].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[142].value),(0,t.tZ)("td",null,l[143].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[144].value)),(0,t.tZ)("td",null,l[145].value),(0,t.tZ)("td",null)))))))}e.default=_}}]);
