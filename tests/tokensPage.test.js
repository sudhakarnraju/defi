import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TokensPage from '../pages/tokens'
jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      asPath: '/'
    })
  }
})

describe('TokensPage', () => {
  test('renders TokensPage', () => {
    render(<TokensPage />)
  })
})
