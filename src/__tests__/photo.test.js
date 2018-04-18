import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Photo from '../components/photo';

describe(Photo, () => {
  const file = { "file": "1 Alan Berryhill 2018-04-17 person, outdoors, rain.jpg"};
  const component = shallow(<Photo image={file} />);

  it('renders and matches snapshot', () => {
    const tree = renderer
      .create(<Photo image={file} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the supplied image', () => {
    const image = component.find('img');
    expect(image.length).toEqual(1);
  });
});
