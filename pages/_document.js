import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height,shrink-to-fit=no" />
                    <meta name="description" content="Dev.log"/>
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/railscasts.min.css" />
                    {/* 네이버 웹마스터도구 인증용 */}
                    <meta name="naver-site-verification" content="e596132adfe7fc65500d2dab38055a95f1f45126" />
                    {/* 구글 서치 콘솔 인증 */}
                    <meta name="google-site-verification" content="ZYUljzV-2xliIectfEvmRB0hSBicse5UvhgEaDBv1WU" />
                 

                </Head>               
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}