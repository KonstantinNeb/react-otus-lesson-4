import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Field from './field';

describe("Field snapshot tests", () => {
  it("Default Field snapshot", () => {
    const { container } = render(<Field />)
    expect(container).toMatchSnapshot()
  })

  it("Field snapshot: vertCellCount", () => {
    const { container } = render(<Field vertCellCount={15} />)
    expect(container).toMatchSnapshot()
  })

  it("Field snapshot: horizCellCount", () => {
    const { container } = render(<Field horizCellCount={15} />)
    expect(container).toMatchSnapshot()
  })

  it("Field snapshot: vertCellCount & horizCellCount", () => {
    const { container } = render(<Field vertCellCount={15} horizCellCount={15} />)
    expect(container).toMatchSnapshot()
  })
})

jest.spyOn(window, 'alert').mockImplementation(() => {});

describe("Field events tests", () => {
  it("Mouse move test", async () => {
    const { container } = render(<Field />)
    fireEvent.mouseMove(screen.getByText("33"))
    expect(container).toMatchSnapshot()
  })
})