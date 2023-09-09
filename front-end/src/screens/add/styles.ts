import { StyleSheet } from 'react-native'
import { defaultColors } from '../../theme'


export const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultColors.backgroundColor
    },
    title: {
        fontSize: 30,
        color: '#000',
        margin: 10,
        opacity: 500
    },
    plus: {
        width: 40,
        height: 40,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    
    square: {
    width: 50,
    height: 50,
    // backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1, 
    borderStyle: 'dashed',
    },

    item: {
        
        width: 100, 
        height: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        // borderColor: '#ccc',
        margin: 4,
        borderRadius: 5,
        backgroundColor: 'green',
        marginBottom: 30
      },

    lastEntriesHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginBottom: 20
      },
    
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
      },

    dots: {
        width: 24, 
        height: 24,
      },

    add: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
      tintColor: defaultColors.text_white,
    },

    overviewItem: {
      height: 200,
      backgroundColor: defaultColors.flatListItem,
      minWidth: 150,
      paddingHorizontal: 20,
      paddingVertical: 25,
      marginRight: 15,
      justifyContent: 'space-between',
      borderRadius: 10,}


    
})