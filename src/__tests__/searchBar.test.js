import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SearchBar from '../components/searchBar';

describe(SearchBar, () => {
  const wrapper = shallow(<SearchBar />);

  it('renders correctly and matches the snapshot', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a search input', () => {
  expect(wrapper.find('input').length).toEqual(1)
 })


});

// it('takes input and search files', () => {
//   wrapper.setProps({files: fakefiles});
//   const test = wrapper.dive().find('input')
//   test.instance().value = "typewriter"
//   test.simulate('change')
//   expect(wrapper.state('query')).toEqual('typewriter');
// });
// const fakefiles = [{ "file":
// "72 Min Shealy 2018-11-22 person, working, hands, typewriter, drinks, leaves, from-above.jpg"},{ "file":
// "75 Nanci Quan 2018-12-13 person, working, hands, typewriter, drinks, from-above.jpg"}, { "file":
// "74 Monet Kopczynski 2018-11-28 person, working, flowers, hands, from-above.jpg"}]
