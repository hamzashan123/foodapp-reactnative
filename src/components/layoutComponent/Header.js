import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {colors} from '../../assets/Colors';
import ratingImg from '../../assets/images/banner/paragraph.png';
import glass from '../../assets/images/banner/glass.png';
import notification from '../../assets/images/banner/notification.png';
const Header = ({onPress}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={{width: 20, height: 25, marginTop: 5}}
            source={ratingImg}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 5}}>
        <TextInput
          style={{
            backgroundColor: '#DCDCDC',
            color: 'black',
            height: 40,
            borderRadius: 30,
            width: '100%',
            paddingStart: 10,
          }}
          placeholder="Search..."
        />
        <Image
          style={{
            width: 15,
            height: 15,
            position: 'absolute',
            right: 15,
            top: 11,
          }}
          source={glass}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'flex-end',
          marginTop: 5,
        }}>
        {/* <Image
          style={{width: 25, height: 25, marginRight: 10}}
          source={scanner}
        /> */}
        <Image
          style={{width: 25, height: 25, marginEnd: 10}}
          source={notification}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    // flex:1,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    padding: 15,
    width: '100%',
    alignSelf: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },
});
