import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
          
          {/* Add the Google Fonts */}
          <link 
            href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&family=Oleo+Script:wght@400;700&family=SUSE:wght@100..800&display=swap" 
            rel="stylesheet" 
          />
          
          {/* Add FontAwesome CDN link */}
          <link 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
            rel="stylesheet" 
          />
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
