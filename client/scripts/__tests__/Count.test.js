import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Count from '../Components/Count';

const MOCK_DATA = [{ size: 300 }, { size: 200 }, { size: 500 }];

describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const count = renderer.create(<Count />).toJSON();
    expect(count).toMatchSnapshot();
  });

  it('displays the correct number of files', () => {
    const count = shallow(<Count data={MOCK_DATA} total={MOCK_DATA.length} />);
    expect(count.find('.purple').text()).toBe('3 files');
  });

  it('displays the correct number of files and teamname', () => {
    const count = shallow(<Count data={MOCK_DATA} total={MOCK_DATA.length} />);
    expect(
      count
        .find('.Count__Text')
        .at(0)
        .text()
    ).toBe('There are 3 files you can delete from your workspace.');
  });

  it('displays the right file size', () => {
    const count = shallow(<Count data={MOCK_DATA} total={MOCK_DATA.length} />);
    expect(
      count
        .find('.Count__Text')
        .at(1)
        .text()
    ).toBe(`Here are ${MOCK_DATA.length} worth 1000 Bytes`);
  });
});
