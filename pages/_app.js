/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from './layout';
import WalletContext from '../framework/WalletContext';

import '../styles/globals.scss';

function DeFiApp({ Component, pageProps }) {
  const [wallet, setWallet] = useState(false);
  const value = { wallet, setWallet };
  return (
    <WalletContext.Provider value={value}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </WalletContext.Provider>
  );
}
DeFiApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};
DeFiApp.defaultProps = {
  pageProps: {},
};
DeFiApp.getInitialProps = async ({ ctx }) => {
  let UA;
  if (ctx.req) {
    // if you are on the server and you get a 'req' property from your context
    UA = ctx.req.headers['user-agent']; // get the user-agent from the headers
  } else {
    UA = navigator.userAgent; // if you are on the client you can access the navigator from the window object
  }

  const isMobile = Boolean(
    UA &&
      UA.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
  );
  return { pageProps: { isMobile } };
};
export default DeFiApp;
