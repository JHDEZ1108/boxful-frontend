// src/pages/step2.tsx
import React from 'react';
import CardFormStep2 from '../components/step2/CardFormStep2';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Step2: React.FC = () => {
  return (
    <div>
      <Title level={2} style={{ color: "#4D5568" }}>Crea una orden</Title>
      <Text style={{ display: 'block', color: "#7682A0", marginBottom: '30px' }}>
        Dale una ventaja competitiva a tu negocio con entregas <strong>el mismo día</strong> (Área Metropolitana) y <strong>el día siguiente</strong> a nivel nacional.
      </Text>
      <CardFormStep2 />
    </div>
  );
};

export default Step2;
