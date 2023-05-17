import Layout from 'components/common/layout';
import 'styles/globals.css'

// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

/* 
  全ページに反映させたい内容はカスタムAPPコンポーネント(_app.js)を使う
  ヘッダ、フッタを表示させるLayoutコンポーネントを使ってページコンポーネントを囲む
 */
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
