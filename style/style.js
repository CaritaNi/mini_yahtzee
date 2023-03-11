import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'grey',
    flexDirection: 'row'
  },
  title: {
    color: '#993366',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  TextInput: {
    height : 40,
    borderColor : "black",
    backgroundColor: "white",
    borderwidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    alignSelf: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#660066",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"white",
    fontSize: 20
  }, 
  rules: {
    textAlign: "center",
    fontSize: "30",
    fontWeight: "bold",
  },
  rulesText: {
    color: "#660066",
    marginLeft: 80,
    marginRight: 80,
  }

});