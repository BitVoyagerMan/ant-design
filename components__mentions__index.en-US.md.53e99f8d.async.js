"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[878],{52546:function(_,a,e){e.r(a);var m=e(2143),c=e(50250),p=e(59378),Z=e(5648),s=e(74775),l=e(5937),v=e(2068),h=e(74399),f=e(63942),b=e(16073),x=e(24628),M=e(19260),E=e(56140),u=e(5388),P=e(49545),g=e(6965),C=e(49706),j=e(95127),y=e(74418),D=e(73024),o=e(94065),i=e(67294),n=e(96923);function d(){var r=(0,o.eL)(),t=r.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(i.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(u.Z,{items:[{demo:{id:"components-mentions-demo-basic"},previewerProps:{title:"Basic",filename:"components/mentions/demo/basic.tsx",jsx:`import { Mentions } from 'antd';
const onChange = (value) => {
  console.log('Change:', value);
};
const onSelect = (option) => {
  console.log('select', option);
};
const App = () => (
  <Mentions
    style={{
      width: '100%',
    }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@afc163"
    options={[
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ]}
  />
);
export default App;
`,description:"<p>Basic usage.</p>"}},{demo:{id:"components-mentions-demo-async"},previewerProps:{title:"Asynchronous loading",filename:"components/mentions/demo/async.tsx",jsx:`import { Mentions } from 'antd';
import debounce from 'lodash/debounce';
import { useCallback, useRef, useState } from 'react';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const ref = useRef();
  const loadGithubUsers = (key) => {
    if (!key) {
      setUsers([]);
      return;
    }
    fetch(\`https://api.github.com/search/users?q=\${key}\`)
      .then((res) => res.json())
      .then(({ items = [] }) => {
        if (ref.current !== key) return;
        setLoading(false);
        setUsers(items.slice(0, 10));
      });
  };
  const debounceLoadGithubUsers = useCallback(debounce(loadGithubUsers, 800), []);
  const onSearch = (search) => {
    console.log('Search:', search);
    ref.current = search;
    setLoading(!!search);
    setUsers([]);
    debounceLoadGithubUsers(search);
  };
  return (
    <Mentions
      style={{
        width: '100%',
      }}
      loading={loading}
      onSearch={onSearch}
      options={users.map(({ login, avatar_url: avatar }) => ({
        key: login,
        value: login,
        className: 'antd-demo-dynamic-option',
        label: (
          <>
            <img src={avatar} alt={login} />
            <span>{login}</span>
          </>
        ),
      }))}
    />
  );
};
export default App;
`,description:"<p>async</p>",style:`.antd-demo-dynamic-option img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}`}},{demo:{id:"components-mentions-demo-form"},previewerProps:{title:"With Form",filename:"components/mentions/demo/form.tsx",jsx:`import { Button, Form, Mentions } from 'antd';
const { getMentions } = Mentions;
const App = () => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Submit:', values);
    } catch (errInfo) {
      console.log('Error:', errInfo);
    }
  };
  const checkMention = async (_, value) => {
    const mentions = getMentions(value);
    if (mentions.length < 2) {
      throw new Error('More than one must be selected!');
    }
  };
  return (
    <Form form={form} layout="horizontal" onFinish={onFinish}>
      <Form.Item
        name="coders"
        label="Top coders"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        rules={[
          {
            validator: checkMention,
          },
        ]}
      >
        <Mentions
          rows={1}
          options={[
            {
              value: 'afc163',
              label: 'afc163',
            },
            {
              value: 'zombieJ',
              label: 'zombieJ',
            },
            {
              value: 'yesmeck',
              label: 'yesmeck',
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="bio"
        label="Bio"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Mentions
          rows={3}
          placeholder="You can use @ to ref user here"
          options={[
            {
              value: 'afc163',
              label: 'afc163',
            },
            {
              value: 'zombieJ',
              label: 'zombieJ',
            },
            {
              value: 'yesmeck',
              label: 'yesmeck',
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 14,
          offset: 6,
        }}
      >
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Controlled mode, for example, to work with <code>Form</code>.</p>"}},{demo:{id:"components-mentions-demo-prefix"},previewerProps:{title:"Customize Trigger Token",filename:"components/mentions/demo/prefix.tsx",jsx:`import { Mentions } from 'antd';
import { useState } from 'react';
const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};
const App = () => {
  const [prefix, setPrefix] = useState('@');
  const onSearch = (_, newPrefix) => {
    setPrefix(newPrefix);
  };
  return (
    <Mentions
      style={{
        width: '100%',
      }}
      placeholder="input @ to mention people, # to mention tag"
      prefix={['@', '#']}
      onSearch={onSearch}
      options={(MOCK_DATA[prefix] || []).map((value) => ({
        key: value,
        value,
        label: value,
      }))}
    />
  );
};
export default App;
`,description:"<p>Customize Trigger Token by <code>prefix</code> props. Default to <code>@</code>, <code>Array&#x3C;string></code> also supported.</p>"}},{demo:{id:"components-mentions-demo-readonly"},previewerProps:{title:"disabled or readOnly",filename:"components/mentions/demo/readonly.tsx",jsx:`import { Mentions } from 'antd';
const options = ['afc163', 'zombiej', 'yesmeck'].map((value) => ({
  value,
  key: value,
  label: value,
}));
const App = () => (
  <>
    <div
      style={{
        marginBottom: 10,
      }}
    >
      <Mentions
        style={{
          width: '100%',
        }}
        placeholder="this is disabled Mentions"
        disabled
        options={options}
      />
    </div>
    <Mentions
      style={{
        width: '100%',
      }}
      placeholder="this is readOnly Mentions"
      readOnly
      options={options}
    />
  </>
);
export default App;
`,description:"<p>Configurate <code>disabled</code> and <code>readOnly</code>.</p>"}},{demo:{id:"components-mentions-demo-placement"},previewerProps:{title:"Placement",filename:"components/mentions/demo/placement.tsx",jsx:`import { Mentions } from 'antd';
const App = () => (
  <Mentions
    style={{
      width: '100%',
    }}
    placement="top"
    options={[
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ]}
  />
);
export default App;
`,description:"<p>Change the suggestions placement.</p>"}},{demo:{id:"components-mentions-demo-autosize"},previewerProps:{title:"autoSize",filename:"components/mentions/demo/autoSize.tsx",jsx:`import { Mentions } from 'antd';
const App = () => (
  <Mentions
    autoSize
    style={{
      width: '100%',
    }}
    options={[
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ]}
  />
);
export default App;
`,description:"<p>Height autoSize.</p>"}},{demo:{id:"components-mentions-demo-status"},previewerProps:{title:"Status",filename:"components/mentions/demo/status.tsx",jsx:`import { Mentions, Space } from 'antd';
const onChange = (value) => {
  console.log('Change:', value);
};
const onSelect = (option) => {
  console.log('select', option);
};
const App = () => {
  const options = [
    {
      value: 'afc163',
      label: 'afc163',
    },
    {
      value: 'zombieJ',
      label: 'zombieJ',
    },
    {
      value: 'yesmeck',
      label: 'yesmeck',
    },
  ];
  return (
    <Space direction="vertical">
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="error"
        options={options}
      />
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="warning"
        options={options}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Add status to Mentions with <code>status</code>, which could be <code>error</code> or <code>warning</code>\u3002</p>"}},{demo:{id:"components-mentions-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/mentions/demo/render-panel.tsx",jsx:`import { Mentions } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalMentions } = Mentions;
const options = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
];
const App = () => (
  <InternalMentions
    style={{
      width: '100%',
    }}
    value="@"
    options={options}
  />
);
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h3",{id:"usage-upgrade-after-510"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage-upgrade-after-510"},(0,n.tZ)("span",{className:"icon icon-link"})),"Usage upgrade after 5.1.0"),(0,n.tZ)(s.Z,{lang:"__react"},t[2].value),(0,n.tZ)(s.Z,{lang:"jsx"},t[3].value),(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"mention"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mention"},(0,n.tZ)("span",{className:"icon icon-link"})),"Mention"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[32].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[33].value),(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[35].value),t[36].value,(0,n.tZ)("code",null,t[37].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[38].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[39].value),(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[42].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[46].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value),(0,n.tZ)("td",null,t[51].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null,t[53].value),(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null,t[57].value),(0,n.tZ)("td",null,t[58].value),(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null,t[61].value),(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null,t[63].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[64].value),(0,n.tZ)("td",null,t[65].value),(0,n.tZ)("td",null,t[66].value),(0,n.tZ)("td",null,t[67].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[68].value),(0,n.tZ)("td",null,t[69].value),(0,n.tZ)("td",null,t[70].value),(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null,t[74].value),(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null,t[78].value),(0,n.tZ)("td",null,t[79].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null,t[82].value),(0,n.tZ)("td",null,t[83].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[84].value),(0,n.tZ)("td",null,t[85].value),(0,n.tZ)("td",null,(0,n.tZ)(o.rU,{to:"#option"},t[86].value)),(0,n.tZ)("td",null,t[87].value),(0,n.tZ)("td",null,t[88].value)))),(0,n.tZ)("h3",{id:"mention-methods"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mention-methods"},(0,n.tZ)("span",{className:"icon icon-link"})),"Mention methods"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[89].value),(0,n.tZ)("th",null,t[90].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[91].value),(0,n.tZ)("td",null,t[92].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[93].value),(0,n.tZ)("td",null,t[94].value)))),(0,n.tZ)("h3",{id:"option"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#option"},(0,n.tZ)("span",{className:"icon icon-link"})),"Option"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[95].value),(0,n.tZ)("th",null,t[96].value),(0,n.tZ)("th",null,t[97].value),(0,n.tZ)("th",null,t[98].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[99].value),(0,n.tZ)("td",null,t[100].value),(0,n.tZ)("td",null,t[101].value),(0,n.tZ)("td",null,t[102].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[103].value),(0,n.tZ)("td",null,t[104].value),(0,n.tZ)("td",null,t[105].value),(0,n.tZ)("td",null,t[106].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[107].value),(0,n.tZ)("td",null,t[108].value),(0,n.tZ)("td",null,t[109].value),(0,n.tZ)("td",null,t[110].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[111].value),(0,n.tZ)("td",null,t[112].value),(0,n.tZ)("td",null,t[113].value),(0,n.tZ)("td",null,t[114].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[115].value),(0,n.tZ)("td",null,t[116].value),(0,n.tZ)("td",null,t[117].value),(0,n.tZ)("td",null,t[118].value)))))))}a.default=d}}]);
