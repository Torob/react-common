import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Toast from './toast';

const context = React.createContext();

const ToastContainer = (props) => <div className={css(styles.toastContainer)} {...props} />;

const styles = StyleSheet.create({
  toastContainer: {
    position: 'fixed',
    left: 0,
    bottom: 50,
    width: '320px',
    minHeight: '48px',
  },
});

export function NotificationProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const toastCount = useRef(0);

  const add = useCallback(
    (content, variant = 'hint', autoClose = true, closeTime = 2000) => {
      const id = toastCount.current++;
      const toast = { content, id, variant };
      setToasts((oldState) => [...oldState, toast]);
      autoClose && setTimeout(() => remove(id), closeTime);
    },
    [setToasts, toastCount.current]
  );
  const remove = (id) => {
    const newToasts = toasts.filter((t) => t.id !== id);
    setToasts(newToasts);
  };

  const onDismiss = (id) => () => remove(id);

  return (
    <context.Provider value={{ add, remove }}>
      {children}
      <ToastContainer>
        {toasts.map(({ content, id, variant, ...rest }) => (
          <Toast key={id} variant={variant} onDismiss={onDismiss(id)} {...rest}>
            {content}
          </Toast>
        ))}
      </ToastContainer>
    </context.Provider>
  );
}

export const useNotif = () => React.useContext(context);
