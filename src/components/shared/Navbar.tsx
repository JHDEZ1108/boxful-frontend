// src/components/shared/Navbar.tsx
import React from 'react';
import { Layout, Divider } from 'antd';
import BoxfulIcon from './BoxfulIcon';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', padding: '0 20px', background: '#FEFEFE' }}>
      <BoxfulIcon />
      <Divider type="vertical" style={{ height: '24px', margin: '0 16px' }} />
    </Header>
  );
};

export default Navbar;