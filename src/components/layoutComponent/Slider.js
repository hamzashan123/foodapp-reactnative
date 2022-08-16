import React from 'react';
import {View, Image} from 'react-native';
import img1 from '../../assets/images/banner/banner_1.png';
import img2 from '../../assets/images/banner/banner_2.png';

import {ImageSlider} from 'react-native-image-slider-banner';

const Slider = () => {
  const Data = [
    {
      id: 1,
      img: Image.resolveAssetSource(img1).uri,
    },
    {
      id: 2,
      img: Image.resolveAssetSource(img2).uri,
    },
  ];

  return (
    <View style={{height: '80%', flex: 1, padding: 5, borderRadius: 20}}>
      <ImageSlider
        data={Data}
        autoPlay={true}
        showIndicator={false}
        closeIconColor="#fff"
        onClick={item => console.log(item)}
        caroselImageStyle={{
          height: 170,
          borderRadius: 20,
          resizeMode: 'contain',
        }}
        caroselImageContainerStyle={{borderRadius: 20}}
      />
    </View>
  );
};

export default Slider;
