import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from '../../../../theme'

export const styles = StyleSheet.create({
  container: {
    minHeight: SCREEN_HEIGHT,
    backgroundColor: defaultColors.backgroundColor,
    position: 'relative',
  },
  imageBack: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // tintColor: defaultColors.backgroundImg
  },
    
  input: {
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    margin: 5,
    width: '100%',
  }, 

  title: {
    borderWidth: 1,
    // borderBlockColor: 'blue',
     borderColor: '#fff', 
     padding: 10, 
     marginBottom: 10,
     margin: 5,
     right: 0,
    //  left: 0,
     width: '100%',
     color: defaultColors.text_1,
        fontSize: 16,
        fontWeight: '600',
}, 

  back:{
  // flex: 1, 
  // justifyContent: 'center', 
  alignItems: 'center' ,
  flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    // marginVertical: 100
    margin: 15
  },

  item: {
    flex: 1,
    margin: 10,
    marginTop: 50,
    right: 10,

    

  },
  
  itemm:{
    flex: 1,
    margin: 10,
    marginTop: 100,
    left: 40
    

  }, 

  fullscreen: {
    flex: 1,
    marginVertical: 10
  },

  calen: {
   
      borderWidth: 0.5,
      borderColor: 'green',
      borderRadius: 30,
  
  },
    label: {
        marginVertical: 5,
        borderRadius: 10,
        margin: 10,
        fontSize: 20,
        right: 100,
        color: defaultColors.text_3,

  },
  price: {
    marginVertical: 5,
    borderRadius: 10,
    margin: 10,
    fontSize: 20,
    right: 120,
    color: defaultColors.text_3,


},
reset: {
  flexDirection: 'row-reverse',
},
moneyIcon: {
  width: 20, 
  height: 20, 
  marginRight: 10, 
  left: 250,


},

moneyInput: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#fff', 
  right: 20,
  width: '100%',
  color: defaultColors.text_1,
        fontSize: 16,
        fontWeight: '600',
},
 cate: {
        marginVertical: 5,
        borderRadius: 10,
        margin: 10,
        fontSize: 20,
        right: 80,
        color: defaultColors.text_3,


 },
 itemIcon: {
  height: 25,
  width: 25,
  marginBottom: 10,
  margin: 5,
  alignSelf: 'center'
  

},

  squareIcon: {
    width: 50, 
    height: 50, 
    backgroundColor: '#fff',
    marginRight: 10, 
    borderStyle: 'dashed',
    borderColor: 'gray',
    borderWidth: 1,
    right: 130,
    alignItems: 'center', 
    justifyContent: 'center',
    marginLeft: 60
}, 
square:{
  width: 90, 
  height: 50, 
  backgroundColor:'#00CCCC',
  marginRight: 20, 
  borderRadius: 5,
  borderColor: 'gray',
  borderWidth: 1,
  right: 130,
  alignItems: 'center', 
  justifyContent: 'center',
  marginLeft: 30,
},
squaree:{
  width: 80, 
  height: 50, 
  backgroundColor:'#97FFFF',
  marginRight: 20, 
  borderRadius: 5,
  borderColor: 'gray',
  borderWidth: 1,
  right: 130,
  alignItems: 'center', 
  justifyContent: 'center',
  marginLeft: 30,
  

},

itemPrice: {
  flexDirection: 'row',
  marginLeft: 40,
  right: -80,
  marginTop: 10

},
resit: {
        marginVertical: 10,
        borderRadius: 10,
        margin: 10,
        fontSize: 20,
        right: 70,
        color: defaultColors.text_3,
        marginBottom: 20,
        marginTop: 20
        
},
photo: {
  flexDirection: 'row', 
    alignItems: 'center',

},
camera: {
  width: 30, 
    height: 30, 
    marginRight: 10,
},
itemcamera: {
  flexDirection: 'row', 
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: 'gray',
    borderWidth: 1,
    width: 300, 
    height: 50, 
    backgroundColor: '#fff',
    borderRadius: 5,
    
    right: 30,
    justifyContent: 'center',
    marginLeft: 60
},
textcamera: {
  color: defaultColors.text_1,

}
  
  
  


  })