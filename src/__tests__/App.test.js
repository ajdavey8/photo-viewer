import React from 'React';
import { Shallow } from 'Enzyme';
import renderer from 'react-test-renderer';
import App from '../components/App'

describe(App, () => {
  it('renders and matches snapshot', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
