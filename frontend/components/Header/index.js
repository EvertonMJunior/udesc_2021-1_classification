import Head from "next/head";

const Header = () => (
  <Head>
    <title>UDESC 2021/1 - Classificação extraoficial</title>

    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-RW16748WEF"
    ></script>

    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RW16748WEF');
        `,
      }}
    />
  </Head>
);

export default Header;
