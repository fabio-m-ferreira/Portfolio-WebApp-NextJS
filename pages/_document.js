import { Html, Head, Main, NextScript } from 'next/document';
import AOS from "aos";

export default function Document() {
    return (
        <Html lang='en'>
            <Head />
            <body>
                <Main />
                <NextScript />
                {AOS.refresh()}
            </body>
        </Html>
    );
}