import React from 'react';
import { Badge } from 'react-bootstrap';

const IndicatorBadges = props => (
  <>
    <Badge pill variant="success">
      تایید شده
    </Badge>
    <Badge pill variant="secondary">
      بلاک شده
    </Badge>
    <Badge pill variant="secondary">
      خارج از دسترس
    </Badge>
  </>
);

export default IndicatorBadges;
