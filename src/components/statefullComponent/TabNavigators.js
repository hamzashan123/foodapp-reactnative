import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../assets/Colors';

const SliderItem = ({item, index, clickHandler, selectedTab}) => {
  const isActive = 'Breakfast';
  return (
    <TouchableOpacity
      style={{
        width: selectedTab === item.name ? 120 : 100,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => clickHandler(item)}>
      <Text
        style={{
          fontWeight: '700',
          marginBottom: 20,
          fontFamily: 'serif',
          fontSize: selectedTab === item.name ? 20 : 14,
          color: selectedTab === item.name ? 'black' : '#DCDCDC',
          borderBottomWidth: 4,
          borderBottomColor: selectedTab === item.name ? '#FFC61A' : '#fff',
          paddingBottom:5
        }}>
        {item.name}
      </Text>
      {/* {selectedTab === item.name ? (
        <View
          style={{
            position: 'absolute',
            borderTopWidth: 3,
            width:'50%',
            borderColor: '#FFC61A',
          }}
        />
      ) : null} */}
    </TouchableOpacity>
  );
};

const TabNavigators = ({tabHandler, selectedTab}) => {
  const data = [
    {
      name: 'Breakfast',
      id: 1,
    },
    {
      name: 'Lunch',
      id: 2,
    },
    {
      name: 'Snacks',
      id: 3,
    },
    {
      name: 'Dinner',
      id: 4,
    },
  ];

  return (
    <View
      style={{
        width: '100%',
        // backgroundColor: colors.light,
        display: 'flex',
        flexDirection: 'row',

        // paddingVertical: 10,
        paddingHorizontal: 5,
        marginTop: 10,
      }}>
      <FlatList
        // numColumns={3}
        horizontal={true}
        style={styles.FlatListBox}
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <SliderItem
            item={item}
            index={index}
            clickHandler={tabHandler}
            selectedTab={selectedTab}
          />
        )}
        // renderItem={}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TabNavigators;

const styles = StyleSheet.create({});
