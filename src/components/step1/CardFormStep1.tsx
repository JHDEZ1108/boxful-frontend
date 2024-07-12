import React from 'react';
import { Button, Form, Input, DatePicker, Row, Col, Card, Select } from 'antd';
import { ArrowRightOutlined, EnvironmentFilled, CalendarFilled } from '@ant-design/icons';
import styles from '../../styles/form.module.css';
import { Step1FormValues } from '../../types/step1Types';

const { TextArea } = Input;
const { Option } = Select;


interface CardFormStep1Props {
  onFinish: (values: Step1FormValues) => void;
}

const CardFormStep1: React.FC<CardFormStep1Props> = ({ onFinish }) => {
  return (
    <Card bordered={false}>
      <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
        <Row gutter={16}>
          <Col xs={24} md={12}> 
            <Form.Item
              name="pickupAddress"
              label={<span style={{ fontWeight: 600, color: '#7682A0' }}>📍 Dirección de recolección</span>}
              className={styles.customLabel}
              rules={[{ required: true, message: 'Por favor ingrese la dirección de recolección!' }]}
            >
              <Input placeholder="Colonia Las Magnolias Calle ruta militar #1, San Miguel, San Miguel." />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="scheduledDate"
              label={<span style={{ fontWeight: 600, color: '#7682A0' }}>📅 Fecha Programada</span>}
              rules={[{ required: true, message: 'Por favor seleccione una fecha!' }]}
              style={{ marginBottom: 0 }}
            >
              <div style={{ display: 'flex' }}>
                <Input
                  style={{
                    width: '40px',
                    borderRight: 0,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    pointerEvents: 'none',
                    backgroundColor: '#F3F5F9'
                  }}
                  prefix={<CalendarFilled style={{ color: '#7682A0', marginRight: 12 }} />}
                  disabled
                />
                <DatePicker
                  style={{
                    flexGrow: 1,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  suffixIcon={null}
                  format="DD/MM/YYYY"
                />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} md={8}>
            <Form.Item
              name="firstName"
              label={<span style={{ fontWeight: 600, color: '#7682A0' }}>Nombres</span>}
              rules={[{ required: true, message: 'Por favor ingresa tus nombres!' }]}
            >
              <Input placeholder="Gabriela Reneé" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}> 
            <Form.Item
              name="lastName"
              label={<span style={{ fontWeight: 600, color: '#7682A0' }}>Apellidos</span>}
              rules={[{ required: true, message: 'Por favor ingresa tus apellidos!' }]}
            >
              <Input placeholder="Díaz López" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}> 
            <Form.Item
              name="email"
              label={<span style={{ fontWeight: 600, color: '#7682A0' }}>Correo Electrónico</span>}
              rules={[{ required: true, message: 'Por favor ingrese un correo electrónico!' }]}
            >
              <Input placeholder="gabbydiaz@gmail.com" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="phoneNumber"
              label={<span style={{ fontWeight: 600, color: '#7682A0' }}>Teléfono</span>}
              rules={[{ required: true, message: 'Por favor ingresa tu número de teléfono!' }]}
            >
              <Input addonBefore="+503" placeholder="6962 8383" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="destinationAddress"
              label={<span style={{ fontWeight: 600, color: '#7682A0' }}>Dirección del destinatario</span>}
              rules={[{ required: true, message: 'Por favor ingrese la dirección del destinatario!' }]}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <EnvironmentFilled style={{ marginRight: 8, fontSize: '24px', color: '#ACB3C5' }} />
                <Input
                  placeholder="Final 49 Av. Sur y Bulevar Los Próceres, Smartcenter, Bodega #8, San Salvador"
                />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} md={8}> 
            <Form.Item
              name="department"
              label={<span style={{ fontWeight: 600, color: '#7682A0' }}>Departamento</span>}
              rules={[{ required: true, message: 'Por favor seleccione un departamento!' }]}
            >
              <Select placeholder="San Salvador">
                <Option value="San Salvador">San Salvador</Option>
                {/* Otras opciones */}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={8}> 
            <Form.Item
              name="municipality"
              label={<span style={{ fontWeight: 600, color: '#7682A0' }}>Municipio</span>}
              rules={[{ required: true, message: 'Por favor seleccione un municipio!' }]}
            >
              <Select placeholder="San Salvador">
                <Option value="San Salvador">San Salvador</Option>
                {/* Otras opciones */}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item
              name="referencePoint"
              label={<span style={{ fontWeight: 600, color: '#7682A0' }}>Punto de referencia</span>}
              rules={[{ required: true, message: 'Por favor ingrese un punto de referencia!' }]}
            >
              <Input placeholder="Cerca de redondel Árbol de la Paz" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="instructions"
          label={<span style={{ fontWeight: 600, color: '#7682A0' }}>Indicaciones</span>}
          rules={[{ required: true, message: 'Por favor ingrese indicaciones!' }]}
        >
          <TextArea rows={1} placeholder="Llamar antes de entregar." />
        </Form.Item>
        <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ 
            float: 'right',
            height: '60px', 
            backgroundColor: '#2F5CDF'
          }}
        >
          <span style={{ marginRight: '30px', fontWeight: 600 }}>Siguiente</span>
          <ArrowRightOutlined />
        </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CardFormStep1;
