import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '../components/layoutComponent/Slider';
import FoodCard from '../components/layoutComponent/FoodCard';
import Header from '../components/layoutComponent/Header';
import TabNavigators from '../components/statefullComponent/TabNavigators';

const Home = () => {
  const [selectedTab, setselectedTab] = useState('Breakfast');
  const [selectedBottomTab, setselectedBottomTab] = useState('');
  const tabHandler = item => {
    setselectedTab(item.name);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <Header onPress={() => alert('Open')} />
      <View style={{height: 140}}>
        <Slider />
      </View>
      <View>
        <View style={{paddingHorizontal: 2, paddingTop: 10}}>
          <TabNavigators tabHandler={tabHandler} selectedTab={selectedTab} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F5F5F5',
          paddingHorizontal: 15,
          paddingTop: 20,
        }}>
        <FoodCard />
      </View>
      <View
        style={{
          height: 70,
          backgroundColor: '#fff',
          width: '100%',
          justifyContent: 'space-around',
          flexDirection: 'row',
          borderTopColor: '#FFC61A',
          borderTopWidth: 1,
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => setselectedBottomTab('Order')}>
          <Icon
            name="cart-outline"
            size={30}
            color={selectedBottomTab === 'Order' ? '#FFC61A' : 'black'}
          />
          <Text
            style={{
              color: selectedBottomTab === 'Order' ? '#FFC61A' : 'black',
            }}>
            Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => setselectedBottomTab('Meal Plans')}>
          <Icon
            name="fast-food-outline"
            size={30}
            color={selectedBottomTab === 'Meal Plans' ? '#FFC61A' : 'black'}
          />
          <Text
            style={{
              color: selectedBottomTab === 'Meal Plans' ? '#FFC61A' : 'black',
            }}>
            Meal Plans
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => setselectedBottomTab('Settings')}>
          <Icon
            name="settings-outline"
            size={30}
            color={selectedBottomTab === 'Settings' ? '#FFC61A' : 'black'}
          />
          <Text
            style={{
              color: selectedBottomTab === 'Settings' ? '#FFC61A' : 'black',
            }}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
      {/* <BookCard /> */}
    </View>
  );
};

export default Home;
