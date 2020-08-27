import axios from 'axios';

const fetchData = async (enteredText) => {
  try {

    const response = await axios.get(`http://samples.openweathermap.org/data/2.5/forecast?zip=${enteredText}&appid=b6907d289e10d714a6e88b30761fae22/posts`);
    const weatherData = response.data.list.reduce((listData, item) => {
      (listData[item.dt_txt.split(" ")[0]] = listData[item.dt_txt.split(" ")[0]] || []).push(item);
      return listData;
    }, {});
    const weatherArray = [];
    for (const key in weatherData) {
      const dict = {
        "key": key,
        "data": weatherData[key]
      };
      weatherArray.push(dict);
    }
    return weatherArray;
  } catch (e) {
    console.log(e); 
  }
};

export default fetchData; 