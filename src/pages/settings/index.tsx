import * as React from 'react';
import styles from './index.css';
import Leftbar from '../../components/leftbar';

class homepage extends React.Component{
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (

      <div>
        <div className={styles.leftbar}>
          <Leftbar></Leftbar>
        </div>
        <div className={styles.table}>
          here are the settings;
        </div>
      </div>
    );
  }
}

export default homepage;