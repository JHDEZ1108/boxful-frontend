import withTM from 'next-transpile-modules';

// Lista de módulos específicos que deben ser transpilados. Esto es necesario porque algunos módulos, como los de 'antd' y sus dependencias,
// están distribuidos como módulos ES6, que no son totalmente compatibles con el entorno de servidor de Next.js en Node.js.
// Transpilar estos módulos asegura que puedan ser utilizados en el servidor sin problemas de sintaxis como `Unexpected token 'export'`.
const transpileModules = [
  'antd',           // Librería de UI que puede incluir código ES6.
  'rc-util',        // Utilidades comunes usadas por componentes de 'antd' que pueden no estar pre-transpiladas para Node.js.
  '@ant-design/icons', // Iconos de Ant Design que incluyen módulos ES6.
  'rc-pagination',  // Componente de paginación usado por 'antd' que puede incluir módulos ES6.
  'rc-picker',      // Componente de selección de fecha y hora usado por 'antd' que puede incluir módulos ES6.
];

// Configuración básica de Next.js con strict mode activado para capturar problemas potenciales en el código más fácilmente.
const nextConfig = {
  reactStrictMode: true,
};

export default withTM(transpileModules)(nextConfig);