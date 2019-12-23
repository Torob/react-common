import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const DelayedRedirect = ({ to, delay, history }) => {
  const [timeToRedirect, setTimeToRedirect] = useState(false);
  useEffect(() => {
    let redirectTimer = setTimeout(() => {
      setTimeToRedirect(true);
    }, delay);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, []);

  if (timeToRedirect) history.push(to);
  return <p>{'redirecting ...'}</p>;
};

export default withRouter(DelayedRedirect);

