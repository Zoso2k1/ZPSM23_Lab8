// styles.tsx

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  head: {
    flex: 1,
    backgroundColor: 'white'
  },

  body: {
    flex: 1,
    backgroundColor: '#7DB4FF',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },

  difficulty: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#338AFF',
    fontStyle: 'italic',
  },

  text: {
    fontSize: 16,
    marginTop: 10,
  },

  menuText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },

  listQuiz: {
    flex: 1,
    zIndex: -1,
    paddingRight: 15,
    paddingLeft: 15,
  },

  quizBox: {
    flex: 1,
    backgroundColor: '#C7DFFF',
    margin: 10,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    padding: 10,
  },

  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  titleText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  footer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
  },

  footerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },

  footerButton: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#338AFF',
    padding: 20,
    borderRadius: 100,
    width: 'auto',
    height: '100',
    minWidth: 300,
    textAlign: 'center',
  },

  enterButton: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#338AFF',
    width: 'auto',
    height: '100',
    minWidth: 100,
    padding: 30,
    borderRadius: 40,

  },

  menuBar: {
    flex: 0.1,
    backgroundColor: '#338AFF',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },

  menuImg: {

  },

  menuSelect: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  menu: {
    backgroundColor: '#C7DFFF',
    borderRadius: 15,
    padding: 10,
    elevation: 3,
    zIndex: 1,
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    width: 'auto',
    height: 'auto',
    minWidth: 300,
    alignItems: 'center',
  },

  menuItem: {
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  landscapeHead: {
    flex: 1
  },
  landscapeBody: {
    flex: 1
  },
});
