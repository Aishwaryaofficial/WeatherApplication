import {configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherListView from '../util/component/WeatherListView';
import { SectionList } from 'react-native';
import React from 'react';


const weatherArr = [
   {
    "key":"2020-05-11",
    "data":{"dt":1589220000,"main":{"temp":305.15,"feels_like":301.8,"temp_min":305.15,"temp_max":306.2,"pressure":1007,"sea_level":1007,"grnd_level":983,"humidity":37,"temp_kf":-1.05},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":55},"wind":{"speed":7.34,"deg":314},"rain":{"3h":0.32},"sys":{"pod":"n"},"dt_txt":"2020-05-11 18:00:00"}
   },{
    "key":"2020-05-11",
    "data":{"dt":1589220000,"main":{"temp":305.15,"feels_like":301.8,"temp_min":305.15,"temp_max":306.2,"pressure":1007,"sea_level":1007,"grnd_level":983,"humidity":37,"temp_kf":-1.05},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":55},"wind":{"speed":7.34,"deg":314},"rain":{"3h":0.32},"sys":{"pod":"n"},"dt_txt":"2020-05-11 18:00:00"}
   }
]
configure({adapter: new Adapter()});
describe('Testing DataListSection component', () => {
  it('renders as expected', () => {
    const dataList = shallow(
      <WeatherListView weatherData = {weatherArr} />
    );
    expect(dataList).toMatchSnapshot();
    dataList.setProps({ weatherData: [weatherArr] });
    expect(dataList).toMatchSnapshot();
    const flatList = dataList.find('SectionList');
    const item = flatList.renderProp('renderItem')({ item: weatherArr });
    const item1 = flatList.renderProp('renderSectionHeader')
    const item3 = flatList.renderProp('keyExtractor')({ item: weatherArr });
    
    expect(item3).toMatchSnapshot();
    expect(item).toMatchSnapshot();
    expect(item1).toMatchSnapshot();


  });
});