import { useState, useReducer, useEffect, useRef } from 'react';
import axios from '../components/axios';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'API_CALL_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'API_CALL_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'API_CALL_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case 'SET_LOADING_FALSE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      throw new Error();
  }
};

const useTorobAPI = (initialConfig, initialData, firstRun = true) => {
  const [config, setConfig] = useState(initialConfig);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: true,
    isError: false,
    data: initialData,
  });

  const isFirstRun = useRef(!firstRun);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      dispatch({ type: 'SET_LOADING_FALSE' });
      return;
    }
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'API_CALL_INIT' });
      try {
        const result = await axios({
          ...config,
        });
        if (!didCancel) {
          dispatch({ type: 'API_CALL_SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'API_CALL_FAILURE' });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [config]);

  return [state, setConfig];
};

export default useTorobAPI;
