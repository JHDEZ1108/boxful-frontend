// src/pages/step1.tsx
import React from 'react';
import { Button, Form, Input, DatePicker, Row, Col, Card } from 'antd';
import { useRouter } from 'next/router';

const Step1: React.FC = () => {
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    router.push('/step2');
  };

  return (
    <Card bordered={false} style={{ margin: "16px" }}>
      <Form
        layout="vertical"
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="pickupAddress"
              label="Dirección de recolección"
              rules={[{ required: true, message: 'Por favor ingrese la dirección de recolección!' }]}
            >
              <Input placeholder="Ingresa la dirección de recolección" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="scheduledDate"
              label="Fecha Programada"
              rules={[{ required: true, message: 'Por favor seleccione una fecha!' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label="Nombres"
              rules={[{ required: true, message: 'Por favor ingresa tus nombres!' }]}
            >
              <Input placeholder="Nombres" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label="Apellidos"
              rules={[{ required: true, message: 'Por favor ingresa tus apellidos!' }]}
            >
              <Input placeholder="Apellidos" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Siguiente
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Step1;