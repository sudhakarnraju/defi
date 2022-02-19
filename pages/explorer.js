import React from 'react';
import TransactionList from '../components/explorer/TransactionList';
import styles from '../styles/layout.module.scss';

export default function ExplorerPage() {
  return (
    <div className={styles.explorerPage}>
      <div className={styles.searchBar}>
        <input
          className={styles.searchToken}
          type="text"
          placeholder="Search Account"
        />
      </div>

      <TransactionList />
    </div>
  );
}
