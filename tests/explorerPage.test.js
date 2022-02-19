import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Explorer from '../pages/explorer'
// Ref:https://stackoverflow.com/questions/65190123/referenceerror-jest-is-not-defined-when-running-unit-test
// import { jest } from "@jest/globals";
jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      asPath: '/'
    })
  }
})

describe('Explorer', () => {
  test('renders explorer', () => {
    render(<Explorer />)
  })
})
