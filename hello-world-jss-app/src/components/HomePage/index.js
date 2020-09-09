import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HomePage = (props) => (
  <div>
    <p>HomePage Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default HomePage;
