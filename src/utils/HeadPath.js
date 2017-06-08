import React from 'react';
import PropTypes from 'prop-types';
const HeadPath = ({title}) => (
  <p style={styles.path}>E路通智能平台 &gt; {title}</p>
);

HeadPath.PropTypes = {
  title: PropTypes.string.isRequired,
}

const styles = {
  path: {
    height: 20,
    color: '#777'
  }
}
export default HeadPath;