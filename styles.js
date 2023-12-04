import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
   container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    input:{
      borderWidth:1,
      borderColor:'#777',
      padding:8,
      margin:10,
      width:200,
       },
    inputStyle5: {
       color: '#000',
  paddingRight: 5,
  paddingLeft: 5,
  fontSize: 18,
  lineHeight: 23,
  flex: 2,
  placeholderTextColor: '#333'
      },

  button: {
    backgroundColor: '#daa520',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5
  },
  bottomContainer: {
    justifyContent: 'center',
    height: height / 3,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10
  },
  formButton: {
    backgroundColor:'#daa520',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formInputContainer: {
    marginBottom: 70,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: 'center',
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    top: -20
  },
  mainContainer:{
    height:"100%",
    paddingHorizontal:30,
    paddingTop:30,
    backgroundColor:'#fff',
  },
  mainHeader:{
    fontSize:25,
    fontWeight:"500",
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:'#fff',
    },
    inputStyle:{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.3)',
      paddingHorizontal:10,
      paddingVertical:7,
      borderRadius:1,
      fontSize:18,
      },
      inputStyle2:{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.3)',
      paddingHorizontal:10,
      paddingVertical:7,
      borderRadius:1,
      fontSize:18,
      },
      input12:{
        height:500,
        padding:10,
        borderWidth: 1,
      paddingHorizontal:10,
      paddingVertical:7,
      borderRadius:1,
      fontSize:18,
      },
      applyleave:{
    backgroundColor: 'rgba(143,194,228,0.9)',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal:0,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,}
      },
   
    });

export default styles;