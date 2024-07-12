import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Preload de la fuente Albert Sans para mejorar el rendimiento */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700&display=swap"
            as="style"
          />
          {/* Importación de la fuente Albert Sans */}
          <link
            href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {/* Meta etiquetas útiles para SEO */}
          <meta charSet="utf-8" />
          <meta name="description" content="Este proyecto es parte de una prueba técnica y consiste en un frontend desarrollado con Next.js y TypeScript." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;