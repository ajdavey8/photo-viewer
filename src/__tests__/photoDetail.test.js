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
    expect(component.find('h2').text()).toContain("Alan Berryhill");
  });

  it('contains the Date the Photo was taken', () => {
    expect(component.find('h3').text()).toContain("17.04.2018");
  });

  it('contains the Tags for the photo', () => {
    expect(component.find('#tag').text()).toContain("Tags: person, outdoors, rain");
  });
});
