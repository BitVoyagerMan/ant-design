"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5413],{7041:function(u,l,t){t.r(l);var c=t(2143),p=t(50250),m=t(59378),b=t(5648),_=t(74775),o=t(5937),v=t(2068),Z=t(74399),h=t(63942),f=t(16073),y=t(24628),T=t(19260),g=t(56140),i=t(5388),x=t(49545),P=t(6965),C=t(49706),A=t(95127),B=t(74418),k=t(73024),a=t(94065),d=t(67294),n=t(96923);function s(){var r=(0,a.eL)(),e=r.texts;return(0,n.tZ)(a.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h3",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,e[1].value),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[2].value),(0,n.tZ)("li",null,e[3].value),(0,n.tZ)("li",null,(0,n.tZ)(a.rU,{to:"/components/radio/#components-radio-demo-radiobutton"},e[4].value),e[5].value)),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(i.Z,{items:[{demo:{id:"components-tabs-demo-basic"},previewerProps:{title:"Basic",filename:"components/tabs/demo/basic.tsx",jsx:`import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: \`Tab 1\`,
    children: \`Content of Tab Pane 1\`,
  },
  {
    key: '2',
    label: \`Tab 2\`,
    children: \`Content of Tab Pane 2\`,
  },
  {
    key: '3',
    label: \`Tab 3\`,
    children: \`Content of Tab Pane 3\`,
  },
];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App;
`,description:"<p>Default activate first tab.</p>"}},{demo:{id:"components-tabs-demo-disabled"},previewerProps:{title:"Disabled",filename:"components/tabs/demo/disabled.tsx",jsx:`import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'Tab 1',
        key: '1',
        children: 'Tab 1',
      },
      {
        label: 'Tab 2',
        key: '2',
        children: 'Tab 2',
        disabled: true,
      },
      {
        label: 'Tab 3',
        key: '3',
        children: 'Tab 3',
      },
    ]}
  />
);
export default App;
`,description:"<p>Disabled a tab.</p>"}},{demo:{id:"components-tabs-demo-centered"},previewerProps:{title:"Centered",filename:"components/tabs/demo/centered.tsx",jsx:`import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: \`Tab \${id}\`,
        key: id,
        children: \`Content of Tab Pane \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>Centered tabs.</p>"}},{demo:{id:"components-tabs-demo-icon"},previewerProps:{title:"Icon",filename:"components/tabs/demo/icon.tsx",jsx:`import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        label: (
          <span>
            <Icon />
            Tab {id}
          </span>
        ),
        key: id,
        children: \`Tab \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>The Tab with Icon.</p>"}},{demo:{id:"components-tabs-demo-slide"},previewerProps:{title:"Slide",filename:"components/tabs/demo/slide.tsx",jsx:`import { Radio, Tabs } from 'antd';
import { useState } from 'react';
const App = () => {
  const [mode, setMode] = useState('top');
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <div>
      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{
          height: 220,
        }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: \`Tab-\${id}\`,
            key: id,
            disabled: i === 28,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
    </div>
  );
};
export default App;
`,description:"<p>In order to fit in more tabs, they can slide left and right (or up and down).</p>"}},{demo:{id:"components-tabs-demo-extra"},previewerProps:{title:"Extra content",filename:"components/tabs/demo/extra.tsx",jsx:`import { Button, Checkbox, Divider, Tabs } from 'antd';
import { useMemo, useState } from 'react';
const CheckboxGroup = Checkbox.Group;
const operations = <Button>Extra Action</Button>;
const OperationsSlot = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};
const options = ['left', 'right'];
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab \${id}\`,
    key: id,
    children: \`Content of tab \${id}\`,
  };
});
const App = () => {
  const [position, setPosition] = useState(['left', 'right']);
  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({
        ...acc,
        [direction]: OperationsSlot[direction],
      }),
      {},
    );
  }, [position]);
  return (
    <>
      <Tabs tabBarExtraContent={operations} items={items} />
      <br />
      <br />
      <br />
      <div>You can also specify its direction or both side</div>
      <Divider />
      <CheckboxGroup
        options={options}
        value={position}
        onChange={(value) => {
          setPosition(value);
        }}
      />
      <br />
      <br />
      <Tabs tabBarExtraContent={slot} items={items} />
    </>
  );
};
export default App;
`,description:"<p>You can add extra actions to the right or left or even both side of Tabs.</p>",style:`.tabs-extra-demo-button {
  margin-right: 16px;
}

.ant-row-rtl .tabs-extra-demo-button {
  margin-right: 0;
  margin-left: 16px;
}`}},{demo:{id:"components-tabs-demo-size"},previewerProps:{title:"Size",filename:"components/tabs/demo/size.tsx",jsx:`import { Radio, Tabs } from 'antd';
import { useState } from 'react';
const App = () => {
  const [size, setSize] = useState('small');
  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        size={size}
        style={{
          marginBottom: 32,
        }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Card Tab \${id}\`,
            key: id,
            children: \`Content of card tab \${id}\`,
          };
        })}
      />
    </div>
  );
};
export default App;
`,description:"<p>Large size tabs are usually used in page header, and small size could be used in Modal.</p>"}},{demo:{id:"components-tabs-demo-position"},previewerProps:{title:"Position",filename:"components/tabs/demo/position.tsx",jsx:`import { Radio, Space, Tabs } from 'antd';
import { useState } from 'react';
const App = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <>
      <Space
        style={{
          marginBottom: 24,
        }}
      >
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of Tab \${id}\`,
          };
        })}
      />
    </>
  );
};
export default App;
`,description:"<p>Tab's position: left, right, top or bottom. Will auto switch to <code>top</code> in mobile.</p>"}},{demo:{id:"components-tabs-demo-card"},previewerProps:{title:"Card type tab",filename:"components/tabs/demo/card.tsx",jsx:`import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const App = () => (
  <Tabs
    onChange={onChange}
    type="card"
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: \`Tab \${id}\`,
        key: id,
        children: \`Content of Tab Pane \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>Another type of Tabs, which doesn't support vertical mode.</p>"}},{demo:{id:"components-tabs-demo-editable-card"},previewerProps:{title:"Add & close tab",filename:"components/tabs/demo/editable-card.tsx",jsx:`import { Tabs } from 'antd';
import { useRef, useState } from 'react';
const initialItems = [
  {
    label: 'Tab 1',
    children: 'Content of Tab 1',
    key: '1',
  },
  {
    label: 'Tab 2',
    children: 'Content of Tab 2',
    key: '2',
  },
  {
    label: 'Tab 3',
    children: 'Content of Tab 3',
    key: '3',
    closable: false,
  },
];
const App = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = \`newTab\${newTabIndex.current++}\`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New Tab',
      children: 'Content of new Tab',
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
};
export default App;
`,description:"<p>Only card type Tabs support adding &#x26; closable. +Use <code>closable={false}</code> to disable close.</p>"}},{demo:{id:"components-tabs-demo-card-top"},previewerProps:{compact:!0,background:"grey",debug:!0,title:"Container of card type Tab",filename:"components/tabs/demo/card-top.tsx",jsx:`import { css } from '@emotion/css';
import { Tabs, theme } from 'antd';
const useStyle = () => {
  const { token } = theme.useToken();
  const antdTabsCls = '.ant-tabs';
  return css\`
    \${antdTabsCls}\${antdTabsCls}-card {
      \${antdTabsCls}-content {
        padding: \${token.padding}px;
        background: \${token.colorBgContainer};
      }

      \${antdTabsCls}-nav {
        margin: 0;

        \${antdTabsCls}-nav-wrap > \${antdTabsCls}-nav-list > \${antdTabsCls}-tab {
          background: transparent;
          border-color: transparent;

          &-active {
            background: \${token.colorBgContainer};
            border-color: \${token.colorBorderBg};
          }
        }

        &::before {
          display: none;
        }
      }
    }
  \`;
};
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab Title \${id}\`,
    key: id,
    children: (
      <>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
      </>
    ),
  };
});
const App = () => {
  const style = useStyle();
  return (
    <div className={style}>
      <Tabs type="card" items={items} />
    </div>
  );
};
export default App;
`,description:"<p>Should be used at the top of container, needs to override styles.</p>"}},{demo:{id:"components-tabs-demo-custom-add-trigger"},previewerProps:{title:"Customized trigger of new tab",filename:"components/tabs/demo/custom-add-trigger.tsx",jsx:`import { Button, Tabs } from 'antd';
import { useRef, useState } from 'react';
const defaultPanes = new Array(2).fill(null).map((_, index) => {
  const id = String(index + 1);
  return {
    label: \`Tab \${id}\`,
    children: \`Content of Tab Pane \${index + 1}\`,
    key: id,
  };
});
const App = () => {
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [items, setItems] = useState(defaultPanes);
  const newTabIndex = useRef(0);
  const onChange = (key) => {
    setActiveKey(key);
  };
  const add = () => {
    const newActiveKey = \`newTab\${newTabIndex.current++}\`;
    setItems([
      ...items,
      {
        label: 'New Tab',
        children: 'New Tab Pane',
        key: newActiveKey,
      },
    ]);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={add}>ADD</Button>
      </div>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        items={items}
      />
    </div>
  );
};
export default App;
`,description:"<p>Hide default plus icon, and bind event for customized trigger.</p>"}},{demo:{id:"components-tabs-demo-custom-tab-bar"},previewerProps:{title:"Customized bar of tab",filename:"components/tabs/demo/custom-tab-bar.tsx",jsx:`import { Tabs, theme } from 'antd';
import StickyBox from 'react-sticky-box';
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab \${id}\`,
    key: id,
    children: \`Content of Tab Pane \${id}\`,
    style:
      i === 0
        ? {
            height: 200,
          }
        : undefined,
  };
});
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const renderTabBar = (props, DefaultTabBar) => (
    <StickyBox
      offsetTop={0}
      offsetBottom={20}
      style={{
        zIndex: 1,
      }}
    >
      <DefaultTabBar
        {...props}
        style={{
          background: colorBgContainer,
        }}
      />
    </StickyBox>
  );
  return <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />;
};
export default App;
`,description:'<p>Use <a href="https://www.npmjs.com/package/react-stickynode">react-sticky-box</a> and <code>renderTabBar</code>.</p>'}},{demo:{id:"components-tabs-demo-custom-tab-bar-node"},previewerProps:{title:"Draggable Tabs",filename:"components/tabs/demo/custom-tab-bar-node.tsx",jsx:`import { Tabs } from 'antd';
import { useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const type = 'DraggableTabNode';
const DraggableTabNode = ({ index, children, moveNode }) => {
  const ref = useRef(null);
  const [{ isOver }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
      };
    },
    drop: (item) => {
      moveNode(item.index, index);
    },
  });
  const [, drag] = useDrag({
    type,
    item: {
      index,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));

  // Style
  const style = {
    marginRight: 24,
  };
  if (isOver) {
    style.transition = 'all 0.3s';
  }
  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};
const DraggableTabs = (props) => {
  const { items = [] } = props;
  const [order, setOrder] = useState([]);
  const moveTabNode = (dragKey, hoverKey) => {
    const newOrder = order.slice();
    items.forEach((item) => {
      if (item.key && newOrder.indexOf(item.key) === -1) {
        newOrder.push(item.key);
      }
    });
    const dragIndex = newOrder.indexOf(dragKey);
    const hoverIndex = newOrder.indexOf(hoverKey);
    newOrder.splice(dragIndex, 1);
    newOrder.splice(hoverIndex, 0, dragKey);
    setOrder(newOrder);
  };
  const renderTabBar = (tabBarProps, DefaultTabBar) => (
    <DefaultTabBar {...tabBarProps}>
      {(node) => (
        <DraggableTabNode key={node.key} index={node.key} moveNode={moveTabNode}>
          {node}
        </DraggableTabNode>
      )}
    </DefaultTabBar>
  );
  const orderItems = [...items].sort((a, b) => {
    const orderA = order.indexOf(a.key);
    const orderB = order.indexOf(b.key);
    if (orderA !== -1 && orderB !== -1) {
      return orderA - orderB;
    }
    if (orderA !== -1) {
      return -1;
    }
    if (orderB !== -1) {
      return 1;
    }
    const ia = items.indexOf(a);
    const ib = items.indexOf(b);
    return ia - ib;
  });
  return (
    <DndProvider backend={HTML5Backend}>
      <Tabs renderTabBar={renderTabBar} {...props} items={orderItems} />
    </DndProvider>
  );
};
const App = () => (
  <DraggableTabs
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: \`tab \${id}\`,
        key: id,
        children: \`Content of Tab Pane \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>Use <code>react-dnd@15+</code> to make tabs draggable.</p>",style:`.dropping {
  transition: all 0.3s;
}`}},{demo:{id:"components-tabs-demo-animated"},previewerProps:{debug:!0,title:"Animated",filename:"components/tabs/demo/animated.tsx",jsx:`import { Space, Switch, Tabs } from 'antd';
import React from 'react';
const App = () => {
  const [inkBar, setInkBar] = React.useState(true);
  const [tabPane, setTabPane] = React.useState(true);
  return (
    <>
      <Space>
        <Switch
          checkedChildren="inkBar"
          unCheckedChildren="inkBar"
          checked={inkBar}
          onChange={() => setInkBar(!inkBar)}
        />
        <Switch
          checkedChildren="tabPane"
          unCheckedChildren="tabPane"
          checked={tabPane}
          onChange={() => setTabPane(!tabPane)}
        />
      </Space>

      <Tabs
        animated={{
          inkBar,
          tabPane,
        }}
        items={[
          {
            label: \`Bamboo\`,
            key: '1',
            children: \`Hello Bamboo!\`,
            style: {
              height: 200,
              boxShadow: '0 0 3px rgba(255, 0, 0, 0.5)',
            },
          },
          {
            label: \`Little\`,
            key: '2',
            children: \`Hi Little!\`,
            style: {
              height: 300,
              boxShadow: '0 0 3px rgba(0, 255, 0, 0.5)',
            },
          },
          {
            label: \`Light\`,
            key: '3',
            children: \`Welcome Light!\`,
            style: {
              height: 100,
              boxShadow: '0 0 3px rgba(0, 0, 255, 0.5)',
            },
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>Animated of Tab Pane.</p>"}},{demo:{id:"components-tabs-demo-nest"},previewerProps:{debug:!0,title:"Nest",filename:"components/tabs/demo/nest.tsx",jsx:`import { Select, Tabs } from 'antd';
import { useState } from 'react';
const { Option } = Select;
const positionList = ['left', 'right', 'top', 'bottom'];
const App = () => {
  const [parentPos, setParentPos] = useState(undefined);
  const [childPos, setChildPos] = useState(undefined);
  const [parentType, setParentType] = useState(undefined);
  const [childType, setChildType] = useState(undefined);
  return (
    <div>
      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setParentPos(val);
        }}
      >
        {positionList.map((pos) => (
          <Option key={pos} value={pos}>
            Parent - {pos}
          </Option>
        ))}
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setChildPos(val);
        }}
      >
        {positionList.map((pos) => (
          <Option key={pos} value={pos}>
            Child - {pos}
          </Option>
        ))}
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setParentType(val);
        }}
      >
        <Option value="line">Parent - line</Option>
        <Option value="card">Parent - card</Option>
        <Option value="editable-card">Parent - card edit</Option>
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setChildType(val);
        }}
      >
        <Option value="line">Child - line</Option>
        <Option value="card">Child - card</Option>
        <Option value="editable-card">Parent - card edit</Option>
      </Select>

      <Tabs
        defaultActiveKey="1"
        tabPosition={parentPos}
        type={parentType}
        items={[
          {
            label: 'Tab 1',
            key: '1',
            children: (
              <Tabs
                defaultActiveKey="1"
                tabPosition={childPos}
                type={childType}
                style={{
                  height: 300,
                }}
                items={new Array(20).fill(null).map((_, index) => {
                  const key = String(index);
                  return {
                    label: \`Tab \${key}\`,
                    key,
                    children: \`TTTT \${key}\`,
                  };
                })}
              />
            ),
          },
          {
            label: 'Tab 2',
            key: '2',
            children: 'Content of Tab Pane 2',
          },
        ]}
      />
    </div>
  );
};
export default App;
`,description:"<p>Default activate first tab.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"tabs"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tabs"},(0,n.tZ)("span",{className:"icon icon-link"})),"Tabs"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[6].value),(0,n.tZ)("th",null,e[7].value),(0,n.tZ)("th",null,e[8].value),(0,n.tZ)("th",null,e[9].value),(0,n.tZ)("th",null,e[10].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value,(0,n.tZ)("code",null,e[22].value)),(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null,e[29].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value,(0,n.tZ)("code",null,e[32].value),e[33].value),(0,n.tZ)("td",null,e[34].value),(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[36].value),(0,n.tZ)("td",null,e[37].value,(0,n.tZ)("code",null,e[38].value)),(0,n.tZ)("td",null,e[39].value),(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[41].value),(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,(0,n.tZ)(a.rU,{to:"#tabitemtype"},e[43].value)),(0,n.tZ)("td",null,e[44].value),(0,n.tZ)("td",null,e[45].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[46].value),(0,n.tZ)("td",null,e[47].value),(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[51].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[52].value),e[53].value),(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null,e[60].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[61].value),(0,n.tZ)("td",null,e[62].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[63].value),e[64].value,(0,n.tZ)("code",null,e[65].value),e[66].value,(0,n.tZ)("code",null,e[67].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[68].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[69].value),(0,n.tZ)("td",null,e[70].value),(0,n.tZ)("td",null,e[71].value),(0,n.tZ)("td",null,e[72].value),(0,n.tZ)("td",null,e[73].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[74].value),(0,n.tZ)("td",null,e[75].value),(0,n.tZ)("td",null,e[76].value),(0,n.tZ)("td",null,e[77].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[78].value),(0,n.tZ)("td",null,e[79].value),(0,n.tZ)("td",null,e[80].value),(0,n.tZ)("td",null,e[81].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[82].value),(0,n.tZ)("td",null,e[83].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[84].value),e[85].value,(0,n.tZ)("code",null,e[86].value),e[87].value,(0,n.tZ)("code",null,e[88].value),e[89].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[90].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[91].value))),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[92].value),(0,n.tZ)("td",null,e[93].value),(0,n.tZ)("td",null,e[94].value),(0,n.tZ)("td",null,e[95].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[96].value),(0,n.tZ)("td",null,e[97].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[98].value),e[99].value,(0,n.tZ)("code",null,e[100].value),e[101].value,(0,n.tZ)("code",null,e[102].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[103].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[104].value),(0,n.tZ)("td",null,e[105].value),(0,n.tZ)("td",null,e[106].value),(0,n.tZ)("td",null,e[107].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[108].value),(0,n.tZ)("td",null,e[109].value,(0,n.tZ)("code",null,e[110].value)),(0,n.tZ)("td",null,e[111].value),(0,n.tZ)("td",null,e[112].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[113].value),(0,n.tZ)("td",null,e[114].value),(0,n.tZ)("td",null,e[115].value),(0,n.tZ)("td",null,e[116].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[117].value),(0,n.tZ)("td",null,e[118].value),(0,n.tZ)("td",null,e[119].value,(0,n.tZ)("code",null,e[120].value),e[121].value,(0,n.tZ)("code",null,e[122].value),e[123].value,(0,n.tZ)("code",null,e[124].value),e[125].value,(0,n.tZ)("code",null,e[126].value),e[127].value),(0,n.tZ)("td",null,e[128].value),(0,n.tZ)("td",null,e[129].value)))),(0,n.tZ)("p",null,e[130].value,(0,n.tZ)("a",{href:"https://github.com/react-component/tabs#tabs"},e[131].value)),(0,n.tZ)("h3",{id:"tabitemtype"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tabitemtype"},(0,n.tZ)("span",{className:"icon icon-link"})),"TabItemType"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[132].value),(0,n.tZ)("th",null,e[133].value),(0,n.tZ)("th",null,e[134].value),(0,n.tZ)("th",null,e[135].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[136].value),(0,n.tZ)("td",null,e[137].value,(0,n.tZ)("code",null,e[138].value)),(0,n.tZ)("td",null,e[139].value),(0,n.tZ)("td",null,e[140].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[141].value),(0,n.tZ)("td",null,e[142].value),(0,n.tZ)("td",null,e[143].value),(0,n.tZ)("td",null,e[144].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[145].value),(0,n.tZ)("td",null,e[146].value),(0,n.tZ)("td",null,e[147].value),(0,n.tZ)("td",null,e[148].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[149].value),(0,n.tZ)("td",null,e[150].value),(0,n.tZ)("td",null,e[151].value),(0,n.tZ)("td",null,e[152].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[153].value),(0,n.tZ)("td",null,e[154].value),(0,n.tZ)("td",null,e[155].value),(0,n.tZ)("td",null,e[156].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[157].value),(0,n.tZ)("td",null,e[158].value),(0,n.tZ)("td",null,e[159].value),(0,n.tZ)("td",null,e[160].value)))))))}l.default=s}}]);
