import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import StatsPage from '../pages/stats'
jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      asPath: '/'
    })
  }
})

describe('StatsPage', () => {
  test('renders Stats Page', () => {
    render(<StatsPage />)
  })
})
