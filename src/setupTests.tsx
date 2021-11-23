import '@testing-library/jest-dom';
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
import reducer from './store/reducer';

interface IWrapperProps {
  children?: React.ReactNode;
}

function render(
  ui: React.ReactElement,
  {
    initialState,
    store = configureStore({ reducer, preloadedState: initialState }),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: IWrapperProps) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
