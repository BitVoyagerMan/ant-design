"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1418],{91630:function(s,i,n){n.r(i);var u=n(2143),m=n(50250),p=n(59378),c=n(5648),v=n(74775),d=n(5937),h=n(2068),D=n(74399),Z=n(63942),x=n(16073),E=n(24628),P=n(19260),f=n(56140),o=n(5388),M=n(49545),j=n(6965),O=n(49706),U=n(95127),T=n(74418),L=n(73024),l=n(94065),a=n(67294),t=n(96923);function _(){var r=(0,l.eL)(),e=r.texts;return(0,t.tZ)(l.dY,null,(0,t.tZ)(a.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[1].value),(0,t.tZ)("li",null,e[2].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(o.Z,{items:[{demo:{id:"components-divider-demo-horizontal"},previewerProps:{title:"Horizontal",filename:"components/divider/demo/horizontal.tsx",jsx:`import { Divider } from 'antd';
const App = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default App;
`,description:"<p>Divider is <code>horizontal</code> by default. You can add text within Divider.</p>"}},{demo:{id:"components-divider-demo-with-text"},previewerProps:{title:"Divider with title",filename:"components/divider/demo/with-text.tsx",jsx:`import { Divider } from 'antd';
const App = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left" orientationMargin="0">
      Left Text with 0 orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" orientationMargin={50}>
      Right Text with 50px orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default App;
`,description:'<p>Divider with inner title, set <code>orientation="left/right"</code> to align it.</p>'}},{demo:{id:"components-divider-demo-plain"},previewerProps:{title:"Text without heading style",filename:"components/divider/demo/plain.tsx",jsx:`import { Divider } from 'antd';
const App = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider plain>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left" plain>
      Left Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" plain>
      Right Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default App;
`,description:"<p>You can use non-heading style of divider text by setting <code>plain</code>.</p>"}},{demo:{id:"components-divider-demo-vertical"},previewerProps:{title:"Vertical",filename:"components/divider/demo/vertical.tsx",jsx:`import { Divider } from 'antd';
const App = () => (
  <>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </>
);
export default App;
`,description:'<p>Use <code>type="vertical"</code> make it vertical.</p>'}},{demo:{id:"components-divider-demo-customize-style"},previewerProps:{debug:!0,title:"Style Customization",filename:"components/divider/demo/customize-style.tsx",jsx:`import { Divider } from 'antd';
const App = () => (
  <>
    <Divider
      style={{
        borderWidth: 2,
        borderColor: '#7cb305',
      }}
    />
    <Divider
      style={{
        borderColor: '#7cb305',
      }}
      dashed
    />
    <Divider
      style={{
        borderColor: '#7cb305',
      }}
      dashed
    >
      Text
    </Divider>
    <Divider
      type="vertical"
      style={{
        height: 60,
        borderColor: '#7cb305',
      }}
    />
    <Divider
      type="vertical"
      style={{
        height: 60,
        borderColor: '#7cb305',
      }}
      dashed
    />

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 50,
        boxShadow: '0 0 1px red',
      }}
    >
      <Divider
        style={{
          background: 'rgba(0,255,0,0.05)',
        }}
        orientation="left"
      >
        Text
      </Divider>
    </div>
  </>
);
export default App;
`,description:"<p>Use <code>style</code> to change default style.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(d.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[3].value),(0,t.tZ)("th",null,e[4].value),(0,t.tZ)("th",null,e[5].value),(0,t.tZ)("th",null,e[6].value),(0,t.tZ)("th",null,e[7].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[8].value),(0,t.tZ)("td",null,e[9].value),(0,t.tZ)("td",null,e[10].value),(0,t.tZ)("td",null,e[11].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[12].value),(0,t.tZ)("td",null,e[13].value),(0,t.tZ)("td",null,e[14].value),(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[16].value),(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null,e[21].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[22].value),e[23].value,(0,t.tZ)("code",null,e[24].value),e[25].value,(0,t.tZ)("code",null,e[26].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[27].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[28].value),(0,t.tZ)("td",null,e[29].value,(0,t.tZ)("code",null,e[30].value),e[31].value,(0,t.tZ)("code",null,e[32].value),e[33].value,(0,t.tZ)("code",null,e[34].value)),(0,t.tZ)("td",null,e[35].value),(0,t.tZ)("td",null,e[36].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[37].value),(0,t.tZ)("td",null,e[38].value),(0,t.tZ)("td",null,e[39].value),(0,t.tZ)("td",null,e[40].value),(0,t.tZ)("td",null,e[41].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[42].value),(0,t.tZ)("td",null,e[43].value),(0,t.tZ)("td",null,e[44].value),(0,t.tZ)("td",null,e[45].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[46].value),(0,t.tZ)("td",null,e[47].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[48].value),e[49].value,(0,t.tZ)("code",null,e[50].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[51].value)),(0,t.tZ)("td",null)))))))}i.default=_}}]);
