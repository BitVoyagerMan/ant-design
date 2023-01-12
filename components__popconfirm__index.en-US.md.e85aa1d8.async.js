"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9015],{16164:function(d,i,e){e.r(i);var p=e(2143),m=e(50250),u=e(59378),_=e(5648),f=e(74775),l=e(5937),v=e(2068),P=e(74399),h=e(63942),x=e(16073),Z=e(24628),C=e(19260),O=e(56140),r=e(5388),T=e(49545),E=e(6965),g=e(49706),B=e(95127),D=e(74418),A=e(73024),o=e(94065),s=e(67294),n=e(96923);function a(){var c=(0,o.eL)(),t=c.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(s.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("p",null,t[2].value,(0,n.tZ)("code",null,t[3].value),t[4].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(r.Z,{items:[{demo:{id:"components-popconfirm-demo-basic"},previewerProps:{title:"Basic",filename:"components/popconfirm/demo/basic.tsx",jsx:`import { message, Popconfirm } from 'antd';
const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};
const App = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>
);
export default App;
`,description:`<p>The basic example supports the title and description props of confirmation.</p>
<blockquote>
<p><code>description</code> is supported in version <code>5.1.0</code>.</p>
</blockquote>`}},{demo:{id:"components-popconfirm-demo-locale"},previewerProps:{title:"Locale text",filename:"components/popconfirm/demo/locale.tsx",jsx:`import { Popconfirm } from 'antd';
const App = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>
);
export default App;
`,description:"<p>Set <code>okText</code> and <code>cancelText</code> props to customize the button's labels.</p>"}},{demo:{id:"components-popconfirm-demo-placement"},previewerProps:{title:"Placement",filename:"components/popconfirm/demo/placement.tsx",jsx:`import { Button, message, Popconfirm } from 'antd';
const text = 'Are you sure to delete this task?';
const description = 'Delete the task';
const confirm = () => {
  message.info('Clicked on Yes.');
};
const App = () => (
  <div className="demo">
    <div
      style={{
        marginLeft: 70,
        whiteSpace: 'nowrap',
      }}
    >
      <Popconfirm
        placement="topLeft"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm
        placement="top"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm
        placement="topRight"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>TR</Button>
      </Popconfirm>
    </div>
    <div
      style={{
        width: 70,
        float: 'left',
      }}
    >
      <Popconfirm
        placement="leftTop"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>LT</Button>
      </Popconfirm>
      <Popconfirm
        placement="left"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm
        placement="leftBottom"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>LB</Button>
      </Popconfirm>
    </div>
    <div
      style={{
        width: 70,
        marginLeft: 304,
      }}
    >
      <Popconfirm
        placement="rightTop"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>RT</Button>
      </Popconfirm>
      <Popconfirm
        placement="right"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm
        placement="rightBottom"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>RB</Button>
      </Popconfirm>
    </div>
    <div
      style={{
        marginLeft: 70,
        clear: 'both',
        whiteSpace: 'nowrap',
      }}
    >
      <Popconfirm
        placement="bottomLeft"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>BL</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottom"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottomRight"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>BR</Button>
      </Popconfirm>
    </div>
  </div>
);
export default App;
`,description:"<p>There are 12 <code>placement</code> options available. Use <code>arrowPointAtCenter</code> if you want the arrow to point at the center of target.</p>",style:`#components-popconfirm-demo-placement .demo {
  overflow: auto;
}
#components-popconfirm-demo-placement .ant-popover-wrap > a {
  margin-right: 8px;
}
#components-popconfirm-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
  width: 70px;
  text-align: center;
  padding: 0;
}`}},{demo:{id:"components-popconfirm-demo-dynamic-trigger"},previewerProps:{title:"Conditional trigger",filename:"components/popconfirm/demo/dynamic-trigger.tsx",jsx:`import { message, Popconfirm, Switch } from 'antd';
import { useState } from 'react';
const App = () => {
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState(true);
  const changeCondition = (checked) => {
    setCondition(checked);
  };
  const confirm = () => {
    setOpen(false);
    message.success('Next step.');
  };
  const cancel = () => {
    setOpen(false);
    message.error('Click on cancel.');
  };
  const handleOpenChange = (newOpen) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(condition);
    if (condition) {
      confirm(); // next step
    } else {
      setOpen(newOpen);
    }
  };
  return (
    <div>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        open={open}
        onOpenChange={handleOpenChange}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">Delete a task</a>
      </Popconfirm>
      <br />
      <br />
      Whether directly execute\uFF1A
      <Switch defaultChecked onChange={changeCondition} />
    </div>
  );
};
export default App;
`,description:"<p>Make it pop up under some conditions.</p>"}},{demo:{id:"components-popconfirm-demo-icon"},previewerProps:{title:"Customize icon",filename:"components/popconfirm/demo/icon.tsx",jsx:`import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
const App = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    icon={
      <QuestionCircleOutlined
        style={{
          color: 'red',
        }}
      />
    }
  >
    <a href="#">Delete</a>
  </Popconfirm>
);
export default App;
`,description:"<p>Set <code>icon</code> props to customize the icon.</p>"}},{demo:{id:"components-popconfirm-demo-async"},previewerProps:{title:"Asynchronously close",filename:"components/popconfirm/demo/async.tsx",jsx:`import { Button, Popconfirm } from 'antd';
import { useState } from 'react';
const App = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <Popconfirm
      title="Title"
      description="Open Popconfirm with async logic"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{
        loading: confirmLoading,
      }}
      onCancel={handleCancel}
    >
      <Button type="primary" onClick={showPopconfirm}>
        Open Popconfirm with async logic
      </Button>
    </Popconfirm>
  );
};
export default App;
`,description:"<p>Asynchronously close a popconfirm when a the OK button is pressed. For example, you can use this pattern when you submit a form.</p>"}},{demo:{id:"components-popconfirm-demo-promise"},previewerProps:{title:"Asynchronously close on Promise",filename:"components/popconfirm/demo/promise.tsx",jsx:`import { Button, Popconfirm } from 'antd';
const App = () => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });
  return (
    <Popconfirm
      title="Title"
      description="Open Popconfirm with Promise"
      onConfirm={confirm}
      onOpenChange={() => console.log('open change')}
    >
      <Button type="primary">Open Popconfirm with Promise</Button>
    </Popconfirm>
  );
};
export default App;
`,description:"<p>Asynchronously close a popconfirm when the OK button is pressed. For example, you can use this pattern when you submit a form.</p>"}},{demo:{id:"components-popconfirm-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/popconfirm/demo/render-panel.tsx",jsx:`import { Popconfirm } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopconfirm } = Popconfirm;
const App = () => (
  <>
    <InternalPopconfirm title="Are you OK?" description="Does this look good?" />
    <InternalPopconfirm
      title="Are you OK?"
      description="Does this look good?"
      placement="bottomRight"
      style={{
        width: 250,
      }}
    />
  </>
);
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}},{demo:{id:"components-popconfirm-demo-wireframe"},previewerProps:{debug:!0,title:"Wireframe",filename:"components/popconfirm/demo/wireframe.tsx",jsx:`import { ConfigProvider, Popconfirm } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopconfirm } = Popconfirm;
const App = () => (
  <ConfigProvider
    theme={{
      token: {
        wireframe: true,
      },
    }}
  >
    <InternalPopconfirm title="Are you OK?" />
    <InternalPopconfirm
      title="Are you OK?"
      placement="bottomRight"
      style={{
        width: 250,
      }}
    />
  </ConfigProvider>
);
export default App;
`,description:"<p>Wireframe style.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value),(0,n.tZ)("th",null,t[9].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,(0,n.tZ)(o.rU,{to:"/components/button/#api"},t[12].value)),(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[17].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,(0,n.tZ)(o.rU,{to:"/components/button/#api"},t[28].value)),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[33].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null,t[35].value,(0,n.tZ)("code",null,t[36].value),t[37].value),(0,n.tZ)("td",null,t[38].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[39].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null,t[44].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value),(0,n.tZ)("td",null,t[51].value),(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null,t[53].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null,t[57].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[58].value),(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null,t[61].value),(0,n.tZ)("td",null)))),(0,n.tZ)("p",null,t[62].value,(0,n.tZ)(o.rU,{to:"/components/tooltip/#api"},t[63].value),t[64].value),(0,n.tZ)("h2",{id:"note"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#note"},(0,n.tZ)("span",{className:"icon icon-link"})),"Note"),(0,n.tZ)("p",null,t[65].value,(0,n.tZ)("code",null,t[66].value),t[67].value,(0,n.tZ)("code",null,t[68].value),t[69].value,(0,n.tZ)("code",null,t[70].value),t[71].value,(0,n.tZ)("code",null,t[72].value),t[73].value,(0,n.tZ)("code",null,t[74].value),t[75].value))))}i.default=a}}]);
