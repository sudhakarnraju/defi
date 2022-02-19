import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import WalletContext from '../framework/WalletContext';

import userEvent from '@testing-library/user-event';

import SwapPage from '../pages/index';
jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      asPath: '/',
    }),
  };
});

describe('Swap page', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  test('renders Swap Page', async () => {
    render(
      <WalletContext.Provider
        value={{ wallet: 'metamask', setWallet: () => {} }}
      >
        <SwapPage />
      </WalletContext.Provider>
    );

    const amountTextBox = screen.getAllByLabelText('amount')[0]; // get first textbox
    userEvent.type(amountTextBox, '345.56');

    const swapButton = screen.getAllByRole('button', {
      name: 'Swap',
    })[0];
    userEvent.click(swapButton);

    await waitFor(() => {
      expect(
        screen.getByText('Bridging', { exact: false })
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText('Success!', { exact: false })
      ).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.getByText('Successfully deposited', { exact: false })
      ).toBeInTheDocument();
    });
  });
});
