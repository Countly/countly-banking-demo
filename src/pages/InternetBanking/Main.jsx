import React from 'react';
import { withTranslation } from 'react-i18next';

class Main extends React.Component {
  componentDidMount() {
    document.title = 'Internet Banking';
  }

  render() {
    return (
      <div />
    );
  }
}


export default withTranslation()(Main);
