import React from 'react'
import styles from './subHeader.module.css'

const SubHeader = ( props ) => {
  return (
    <div className={ styles.main }>
      <h2>{ props.title }</h2>
      <p>{ props.subTitle }</p>
    </div>
  );
}

export default SubHeader;
