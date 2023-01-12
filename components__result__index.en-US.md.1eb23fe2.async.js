"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9610],{4532:function(r,o,n){n.r(o);var d=n(2143),m=n(50250),p=n(59378),c=n(5648),v=n(74775),l=n(5937),x=n(2068),h=n(74399),E=n(63942),P=n(16073),Z=n(24628),B=n(19260),f=n(56140),_=n(5388),j=n(49545),O=n(6965),C=n(49706),D=n(95127),y=n(74418),M=n(73024),s=n(94065),i=n(67294),t=n(96923);function a(){var u=(0,s.eL)(),e=u.texts;return(0,t.tZ)(s.dY,null,(0,t.tZ)(i.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("p",null,e[1].value),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(_.Z,{items:[{demo:{id:"components-result-demo-success"},previewerProps:{title:"Success",filename:"components/result/demo/success.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
);
export default App;
`,description:"<p>Show successful results.</p>"}},{demo:{id:"components-result-demo-info"},previewerProps:{title:"Info",filename:"components/result/demo/info.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);
export default App;
`,description:"<p>Show processing results.</p>"}},{demo:{id:"components-result-demo-warning"},previewerProps:{title:"Warning",filename:"components/result/demo/warning.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);
export default App;
`,description:"<p>The result of the warning.</p>"}},{demo:{id:"components-result-demo-403"},previewerProps:{title:"403",filename:"components/result/demo/403.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>you are not authorized to access this page.</p>"}},{demo:{id:"components-result-demo-404"},previewerProps:{title:"404",filename:"components/result/demo/404.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>The page you visited does not exist.</p>"}},{demo:{id:"components-result-demo-500"},previewerProps:{title:"500",filename:"components/result/demo/500.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>Something went wrong on server.</p>"}},{demo:{id:"components-result-demo-error"},previewerProps:{title:"Error",filename:"components/result/demo/error.tsx",jsx:`import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
const { Paragraph, Text } = Typography;
const App = () => (
  <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
        frozen. <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
        eligible to apply. <a>Apply Unlock &gt;</a>
      </Paragraph>
    </div>
  </Result>
);
export default App;
`,description:"<p>Complex error feedback.</p>",style:`.site-result-demo-error-icon {
  color: red;
}`}},{demo:{id:"components-result-demo-customicon"},previewerProps:{title:"Custom icon",filename:"components/result/demo/customIcon.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';
const App = () => (
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
);
export default App;
`,description:"<p>Custom icon.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[2].value),(0,t.tZ)("th",null,e[3].value),(0,t.tZ)("th",null,e[4].value),(0,t.tZ)("th",null,e[5].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[6].value),(0,t.tZ)("td",null,e[7].value),(0,t.tZ)("td",null,e[8].value),(0,t.tZ)("td",null,e[9].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[10].value),(0,t.tZ)("td",null,e[11].value),(0,t.tZ)("td",null,e[12].value),(0,t.tZ)("td",null,e[13].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[14].value),(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[16].value),e[17].value,(0,t.tZ)("code",null,e[18].value),e[19].value,(0,t.tZ)("code",null,e[20].value),e[21].value,(0,t.tZ)("code",null,e[22].value),e[23].value,(0,t.tZ)("code",null,e[24].value),e[25].value,(0,t.tZ)("code",null,e[26].value),e[27].value,(0,t.tZ)("code",null,e[28].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[29].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[30].value),(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null,e[32].value),(0,t.tZ)("td",null,e[33].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[34].value),(0,t.tZ)("td",null,e[35].value),(0,t.tZ)("td",null,e[36].value),(0,t.tZ)("td",null,e[37].value)))))))}o.default=a}}]);
