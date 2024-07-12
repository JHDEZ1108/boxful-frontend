// src/components/shared/Layout.tsx
import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';

const { Header, Content, Footer } = Layout;

interface LayoutProps {
  children: ReactNode;
}

const MyLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#F3F5F9' }}>
      <Header style={{ padding: 0 }}>
        <Navbar />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ padding: 24, minHeight: 380, color: '#7682A0' }}> 
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', color: '#7682A0' }}> 
        Creado con ❤️ por <span style={{ fontWeight: 'bold' }}>Josué Hernández</span> 
      </Footer>
    </Layout>
  );
};

export default MyLayout;
