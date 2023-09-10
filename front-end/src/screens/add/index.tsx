import { View, Text, StatusBar, Image, ScrollView, FlatList, StyleSheet} from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '../../components/header'
import Entry from '../../components/entry'
import { defaultColors } from '../../theme'


const Activity = () => {
    const items = [
        { id: '1', title: 'Add Income', color:'#708090' , imageSource: require('../../../assets/images/icon/add.png')},
        { id: '2', title: 'Add Expense', color: '#00CCFF' , imageSource: require('../../../assets/images/icon/add.png') },
      ];
    
      const renderItem = ({ item }) => (
        <View style={[styles.item, { backgroundColor: item.color}]}>
          <Image
            source={item.imageSource}
            style={{
              height: 25,
              width: 25,
              resizeMode: 'contain',
              tintColor: defaultColors.text_white,
           }}
          />
          <Text style={{ color: 'white' }}>{item.title}</Text>
        </View>
      );

    return (
        <View>
      <StatusBar />
      <ScrollView style={styles.container}>
        {/* background */}
           
           <Image
        source={require('../../../assets/images/background1.png')}
        style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
          }}
        />
        

        {/* header */}
        <Header title='Add' isBack={true} />

        <View style={styles.row}>
            <View style={styles.square}>
            <Image 
               source={require('../../../assets/images/tabs/ic_activity.png')}
               style={styles.plus}
            />
        </View>

        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          
        />
        </View>

        {/* last entries */}
        <View style={styles.lastEntriesHeader}>
        <Text style={styles.title}>Latest Entries</Text>
          <View style={styles.dotsContainer}>
              <Image
                source={require('../../../assets/images/icon/3cham.png')}
                style={styles.dots}
              />
          </View>
          
        </View>

        <Entry title='Salary' time='20 Aug 2023' price='+$1400 + Vat 1%' note='Google Pay' iconSource={require('../../../assets/images/tabs/ic_saving.png')}/>
        <Entry title='Cashback' time='01-09-2023' price='+$20 + Vat 0.5%' note='Cash' iconSource={require('../../../assets/images/tabs/back.png')}/>
        <Entry title='Price Money' time='31-08-2023' price='+$120 + Vat 1%' note='Paytm' iconSource={require('../../../assets/images/tabs/coins.png')}/>

        
        
        
      </ScrollView>
    </View>
  )
}

export default Activity