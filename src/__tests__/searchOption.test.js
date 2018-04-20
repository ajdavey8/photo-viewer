import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SearchOption from '../components/searchOption';

describe(SearchOption, () => {
  const file = { "file": "1 Alan Berryhill 2018-04-17 person, outdoors, rain.jpg"};
  const component = shallow(<SearchOption result={file} />);

  it('renders correctly and matches snapshot', () => {
    const tree = renderer.create(<SearchOption result={file} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the photographers name', () => {
    expect(component.find('p').text()).toContain("Alan Berryhill");
  })
});
