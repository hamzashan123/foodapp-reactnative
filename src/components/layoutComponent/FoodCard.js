import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import img1 from '../../assets/images/food/1.png';
import img2 from '../../assets/images/food/2.png';
import img3 from '../../assets/images/food/3.png';
import img4 from '../../assets/images/food/4.png';
import img5 from '../../assets/images/food/5.png';

const CardItem = ({item, index, navigation}) => {
  return (
    <View
      style={{
        height: 220,
        width: '48%',
        elevation: 6,
        marginHorizontal: 6,
        marginTop: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <View
        style={{
          width: '100%',
          height: 150,
          backgroundColor: '#fff',
          alignItems: 'center',
          borderRadius: 100,
          alignSelf: 'center',
          position: 'absolute',
          paddingTop: 10,
          top: -26,
        }}>
        <Image
          source={item?.img}
          style={{
            width: '100%',
            height: 100,
            borderRadius: 50,
            resizeMode: 'contain',
          }}
        />
        <View
          style={{
            height: 130,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '600',
              color: 'black',
              marginTop: 10,
            }}>
            Daal Chawal
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '400',
              color: 'lightgray',
              marginBottom:20
            }}>
            Indian Food
          </Text>
          <View
            style={{
              backgroundColor: '#fff',
              width: '100%',
              height: 40,
              borderTopColor: '#FFC61A',
              borderTopWidth: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 8,
            }}>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 16}}>
              Price
            </Text>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 15}}>
              $20/ meal
            </Text>
          </View>
        </View>
      </View>
      {/* <View>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 14,
            color: 'black',
            textAlign: 'left',
            marginBottom: 2,
          }}>
          Rich dady{' '}
        </Text>
        <Text
          style={{
            marginStart: 5,
            textAlign: 'left',
            fontWeight: '300',
            fontSize: 10,
            color: 'gray',
          }}>
          AUTHER HERE
        </Text>
      </View> */}
    </View>
  );
};

const FoodCard = () => {
  const Data = [
    {img: img1, id: 1},
    {img: img2, id: 2},
    {img: img3, id: 3},
    {img: img4, id: 4},
    {img: img5, id: 5},
  ];
  return (
    <>
      <FlatList
        numColumns={2}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={({item, index}) => <CardItem item={item} index={index} />}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default FoodCard;

const styles = StyleSheet.create({});
