import React from 'react';
import FullscreenDialogFrame from './dialogFrame';

export default function FullscreenDialog(props, { muiTheme }) {
  const { children, containerClassName, containerStyle, open, style } = props;

  return (
    <FullscreenDialogFrame
      open={open}
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        className={containerClassName}
        style={{
          flex: 1,
          overflow: 'auto',
          overflowX: 'hidden',
          ...containerStyle,
        }}
      >
        {children}
      </div>
    </FullscreenDialogFrame>
  );
}
