import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PhotoDetail from '../components/photoDetail';

describe(PhotoDetail, () => {
  const file = { "file": "1 Alan Berryhill 2018-04-17 person, outdoors, rain.jpg"};
  const component = shallow(<PhotoDetail photo={file} />);

  it('renders and matches snapshot', () => {
    const tree = renderer
      .create(<PhotoDetail photo={file} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the Name of the photographer', () => {
    const name = component.find('h2');
    expect(name.contains("Alan Berryhill")).toEqual(true);
  });
});
