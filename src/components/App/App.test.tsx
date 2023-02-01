import { render } from '@testing-library/react';
import App from './App';

test('App Default snapshoot test', () => {
  const { container } = render(<App />);
  expect( container ).toMatchSnapshot();
})

test('App Enlarged snapshoot test', () => {
  const { container } = render(<App vertCellCount={11} horizCellCount={13} />);
  expect( container ).toMatchSnapshot();
})