import React from 'react';
import styles from './DisplayName.module.scss';
import { IDisplayNameProps } from './DisplayName.props';

class DisplayName extends React.Component<IDisplayNameProps> {
  render() {
    return (
      <h2 className={styles.name}>
        {this.props.name
          ? `Hello "${this.props.name}"`
          : `Pass 'name' as props to <DisplayName name={name}/>`}
      </h2>
    );
  }
}

export default DisplayName;
