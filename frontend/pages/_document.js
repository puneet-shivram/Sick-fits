import Document, { Html, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}