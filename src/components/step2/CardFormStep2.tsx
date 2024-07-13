import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Button, Form, Input, Row, Col, Card } from 'antd';
import BoxIcon from '../BoxIcon';
import { PlusOutlined, ArrowRightOutlined, ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import { BulkyItem, Step2FormValues } from '../../types/step2Types';
import { setStep2Data } from '../../slices/formSlice';

const CardFormStep2: React.FC = () => {
  const [items, setItems] = useState<BulkyItem[]>([]);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddItem = () => {
    form.validateFields().then(values => {
      const newItem = values as BulkyItem;
      setItems([...items, newItem]);
      form.resetFields();
    });
  };

  const handleDeleteItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleFinish = () => {
    const formData: Step2FormValues = { items };
    dispatch(setStep2Data(formData));
    router.push('/success');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Card>
      <div style={{
        backgroundColor: '#F3F5F9',
        borderRadius: '8px',
        padding: '20px',
        border: '2px dotted #E4E8F1'
      }}>
        <Form form={form} layout="vertical" onFinish={handleFinish} requiredMark={false}>
          <Row gutter={5}>
            <Col xs={24} sm={24} md={1}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <BoxIcon />
              </div>
            </Col>
            <Col xs={24} sm={24} md={3}>
              <Form.Item name="length" label={<span style={{ fontWeight: '600', color: '#7682A0' }}>Largo</span>} rules={[{ required: true }]}>
                <Input placeholder='cm' style={{
                  textAlign: 'center',
                  borderTopLeftRadius: '4px',
                  borderBottomLeftRadius: '4px',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  height: '40px',
                  fontWeight: '600'
                }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={3}>
              <Form.Item name="height" label={<span style={{ fontWeight: '600', color: '#7682A0' }}>Alto</span>} rules={[{ required: true }]}>
                <Input placeholder='cm' style={{
                  textAlign: 'center',
                  borderRadius: 0,
                  height: '40px',
                  marginLeft: '-5px',
                  fontWeight: '600'
                }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={3}>
              <Form.Item name="width" label={<span style={{ fontWeight: '600', color: '#7682A0' }}>Ancho</span>} rules={[{ required: true }]}>
                <Input placeholder='cm' style={{
                  textAlign: 'center',
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius: '4px',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  marginLeft: '-10px',
                  height: '40px',
                  fontWeight: '600'
                }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={2}>
              <Form.Item name="weight" label={<span style={{ fontWeight: '600', color: '#7682A0' }}>Peso en libras</span>} rules={[{ required: true }]}>
                <Input placeholder='lb' style={{
                  textAlign: 'center',
                  fontWeight: '600',
                  marginLeft: '-5px',
                  height: '40px',
                }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item name="content" label={<span style={{ fontWeight: '600', color: '#7682A0' }}>Contenido</span>} rules={[{ required: true }]}>
                <Input placeholder='Iphone 14 pro Max' style={{
                  fontWeight: '600',
                  height: '40px',
                }} />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end" style={{ marginTop: '10px' }}>
            <Button
              style={{
                backgroundColor: '#ECEEF1',
                color: '#7682A0',
                fontWeight: '600',
                height: '40px',
                borderRadius: '4px'
              }}
              onClick={handleAddItem}
            >
              Agregar <PlusOutlined style={{ marginLeft: '8px' }} />
            </Button>
          </Row>
        </Form>
      </div>

      {items.map((item, index) => (
        <Card 
          key={index} 
          style={{ 
            marginTop: '16px',
            border: '1px solid #3EBF5B',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#FFFFFF'
          }}
        >
          <Row gutter={5}>
            <Col xs={24} sm={24} md={2}>
              <Form.Item label={<span style={{ fontWeight: '600', color: '#7682A0' }}>Peso</span>} colon={false}>
                <Input value={`${item.weight} lb`} disabled style={{ textAlign: 'center', fontWeight: '600', height: '40px' }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item 
                label={<span style={{ fontWeight: '600', color: '#7682A0' }}>Contenido</span>}
                labelCol={{ span: 24 }}
                colon={false}
              >
                <Input value={item.content} disabled style={{ textAlign: 'center', fontWeight: '600', height: '40px', marginTop: '-9px' }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={1}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <BoxIcon />
              </div>
            </Col>
            <Col xs={24} sm={24} md={3}>
              <Form.Item label={<span style={{ fontWeight: '600', color: '#7682A0' }}>Largo</span>} colon={false}>
                <Input value={`${item.length} cm`} disabled style={{ textAlign: 'center', fontWeight: '600', height: '40px', borderTopRightRadius: 0, borderBottomRightRadius: 0}} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={3}>
              <Form.Item label={<span style={{ fontWeight: '600', color: '#7682A0' }}>Alto</span>} colon={false}>
                <Input value={`${item.height} cm`} disabled style={{ textAlign: 'center', fontWeight: '600', height: '40px', borderRadius: 0, marginLeft: '-5px'}} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={3}>
              <Form.Item label={<span style={{ fontWeight: '600', color: '#7682A0' }}>Ancho</span>} colon={false}>
                <Input value={`${item.width} cm`} disabled style={{ textAlign: 'center', fontWeight: '600', height: '40px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: '-10px' }} />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Button 
                icon={<DeleteOutlined />} 
                style={{ 
                  backgroundColor: '#F85454', 
                  color: 'white', 
                  border: 'none',
                  height: '40px'
                }} 
                onClick={() => handleDeleteItem(index)}
              />
            </Col>
          </Row>
        </Card>
      ))}

      <Row justify="space-between" style={{ marginTop: '16px' }}>
        <Button 
          onClick={handleBack} 
          style={{
            backgroundColor: '#ECEEF1', 
            height: '40px',
            color: '#7682A0', 
            fontWeight: '600',
            border: 'none'
          }}
        >
          <ArrowLeftOutlined style={{ marginRight: '8px' }} />Regresar
        </Button>
        <Button 
          type="primary" 
          htmlType="submit" 
          style={{
            backgroundColor: '#4270F9', 
            color: 'white', 
            height: '40px',
            fontWeight: '600',
            border: 'none'
          }}
        >
          Enviar<ArrowRightOutlined style={{ marginLeft: '30px' }} />
        </Button>
      </Row>

    </Card>
  );
};

export default CardFormStep2;

