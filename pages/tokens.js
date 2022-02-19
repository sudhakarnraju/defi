import React from 'react';
import Tokens from '../components/tokens/Tokens';
import styles from '../styles/layout.module.scss';

export default function TokensPage() {
  return (
    <div className={styles.tokensPage}>
      <div className={styles.searchBar}>
        <input
          className={styles.searchToken}
          type="text"
          placeholder="ETH, FTM..."
        />
        <a className={styles.addTokenLink} href="/some/path/to/search/token">
          Cant find a token? request to add it
        </a>
      </div>
      <Tokens />
    </div>
  );
}
