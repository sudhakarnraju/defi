import React, { useState } from 'react';
import LockedValueTile from '../components/stats/LockedValueTile';
import CountTile from '../components/stats/CountTile';
import styles from '../styles/layout.module.scss';

export default function StatsPage() {
  // TODO: API: Get from data source
  const [data] = useState({
    lockedValue: 209876345.9,
    nodes: 25,
    chains: 45,
    tokens: 8901,
  });
  return (
    <div className={styles.statsPage}>
      <LockedValueTile value={data.lockedValue} />
      <div className={styles.countBlock}>
        <CountTile title={data.nodes} subtitle="Nodes securing the network" />
        <CountTile
          title={data.chains}
          subtitle="Chains connected via the bridge"
        />
        <CountTile
          title={data.tokens}
          subtitle="Tokens supported"
          subtitleOnClick={() => {}}
        />
      </div>
    </div>
  );
}
