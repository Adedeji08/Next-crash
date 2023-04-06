/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 03/04/2023 - 16:04:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/04/2023
    * - Author          : 
    * - Modification    : 
**/
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument