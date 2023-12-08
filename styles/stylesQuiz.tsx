import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const stylesQuiz = StyleSheet.create({
  head: {
    flex: 1,
    backgroundColor: 'white',
  },

  quizTestBox: {
    flex: 1,
    backgroundColor: '#C7DFFF',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    padding: 20,
    margin: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  quizTestTimerBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  quizTestTimer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  quizTestTimerText: {
    color: 'black',
    fontSize: windowHeight * 0.04,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  quizTestAnserwsBody: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight * 0.02,
  },

  quizTextButton: {
    fontSize: windowHeight * 0.02,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 50,
    color: 'black',
    backgroundColor: '#338AFF',
    padding: windowHeight * 0.025,
    margin: windowHeight * 0.015,
  },

  quizTextButtonCorrect: {
    backgroundColor: 'green',
  },

  quizTextButtonIncorrect: {
    backgroundColor: 'red',
  },

  quizButtonText: {
    fontSize: windowHeight * 0.02,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 50,
    color: 'black',
  },

  quizHeader: {
    fontSize: windowHeight * 0.03,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    top: windowHeight * 0.02,
    margin: windowHeight * 0.02,
    color: 'black',
  },

  quizNextButton: {
    backgroundColor: '#338AFF',
    borderRadius: 10,
    padding: windowHeight * 0.02,
    marginTop: windowHeight * 0.02,
  },
});
