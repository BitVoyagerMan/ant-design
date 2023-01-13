import * as React from 'react';
import demoTest, { rootPropsTest } from '../../../tests/shared/demoTest';
import Menu from '..';

demoTest('menu', { testRootProps: false });

rootPropsTest(
  'Menu',
  (props) => (
    <Menu
      {...props}
      mode="vertical"
      openKeys={['lbl2']}
      items={[
        {
          label: 'Label 1',
          key: 'lbl1',
        },
        {
          label: 'Label 2',
          key: 'lbl2',
          children: [
            {
              label: 'Label 3',
              key: 'lbl3',
            },
          ],
        },
      ]}
    />
  ),
  {
    findRootElements: (container) =>
      container.querySelectorAll('.ant-menu-root, .ant-menu-submenu-popup'),
  },
);