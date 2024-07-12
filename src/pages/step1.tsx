// src/pages/step1.tsx
import React from 'react';
import { useRouter } from 'next/router';
import CardFormStep1 from '../components/step1/CardFormStep1';
import { Typography } from 'antd';
import { Step1FormValues } from '../types/step1Types';

const { Title, Text } = Typography;

const Step1: React.FC = () => {
  const router = useRouter();

  const onFinish = (values: Step1FormValues) => {
    console.log('Received values of form: ', values);
    router.push('/step2');
  };

  return (
    <div>
      <Title level={2} style={{ color: "#4D5568" }}>Crea una orden</Title>
      <Text style={{ display: 'block', color: "#7682A0", marginBottom: '30px' }}>
        Dale una ventaja competitiva a tu negocio con entregas <strong>el mismo día</strong> (Área Metropolitana) y <strong>el día siguiente</strong> a nivel nacional.
      </Text>
      <CardFormStep1 onFinish={onFinish} />
    </div>
  );
};

export default Step1;
