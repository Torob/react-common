import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent = ({ title }) => {
  var defaultTitle = 'پنل جمع سپاری ترب';
  return (
    <Helmet>
      <title>{title ? title + ' | ' + defaultTitle : defaultTitle}</title>
    </Helmet>
  );
};

// withTitle function
const withTitle = ({ component: Component, title }) => {
  return class Title extends React.Component {
    render() {
      return (
        <>
          <TitleComponent title={title} />
          <Component {...this.props} />
        </>
      );
    }
  };
};

export { TitleComponent, withTitle };
