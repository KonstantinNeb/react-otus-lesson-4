import React from 'react';
import { render } from '@testing-library/react';
import Cell from './cell';

describe("simple snapshot tests", () => {
  it("Default cell snapshot", () => {
    const { container } = render(<Cell />)
    expect(container).toMatchSnapshot()
  })

  it("nonDefaultID cell snapshot", () => {
    const { container } = render(<Cell id={123} />)
    expect(container).toMatchSnapshot()
  })
})