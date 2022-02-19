import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeFiApp from '../pages/_app';
jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      asPath: '/',
    }),
  };
});
describe('DeFiApp', () => {
  test('renders DeFiApp', () => {
    const Component = jest.fn(() => 'Test');
    render(<DeFiApp Component={Component} />);
    expect(Component).toBeCalled();
  });
});
