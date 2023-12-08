import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, useWindowDimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Dodane
import { styles } from '../styles/styles';
import { stylesQuiz } from '../styles/stylesQuiz';

const QuizView: React.FC = () => {
  const navigation = useNavigation(); // Dodane
  const windowDimensions = useWindowDimensions();
  const isLandscape = windowDimensions.width > windowDimensions.height;
  const landscapeStyles = isLandscape ? { head: styles.landscapeHead, body: styles.landscapeBody } : {};

  const UrgeWithPleasureComponent: React.FC<{ duration: number; onTimeout: () => void }> = ({ duration, onTimeout }) => {
    const [remainingTime, setRemainingTime] = useState(duration);

    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        if (remainingTime === 0) {
          clearInterval(interval);
          onTimeout();
        }
      }, 1000);

      return () => clearInterval(interval);
    }, [remainingTime, onTimeout]);

    return <Text style={stylesQuiz.quizTestTimerText}>{remainingTime}</Text>;
  };

  const QuestionComponent: React.FC<{ question: string; answers: any[]; duration: number }> = ({ question, answers, duration }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleAnswer = (index: number) => {
      if (!isAnswered) {
        setSelectedAnswer(index);
        setIsAnswered(true);

        // Dodaj opóźnienie przed przejściem do następnego pytania (np. 1 sekunda)
        setTimeout(() => {
          handleNextQuestion();
        }, 500);
      }
    };

    const handleNextQuestion = () => {
      setSelectedAnswer(null);
      setIsAnswered(false);

      // Załóżmy, że masz zmienną `currentQuestionIndex` w zakresie tego komponentu
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        // Po odpowiedzi na wszystkie pytania wyświetl powiadomienie i przycisk powrotu
        Alert.alert('Quiz zakończony', 'Gratulacje! Odpowiedziałeś na wszystkie pytania.', [
          { text: 'Powrót do Home', onPress: handleGoHome },
        ]);
      }
    };

    return (
      <View style={[stylesQuiz.quizTestBox, { margin: 20, marginTop: 40, marginBottom: 20 }]}>
        <Text style={stylesQuiz.quizHeader}>{question}</Text>

        <View style={stylesQuiz.quizTestTimerBody}>
          <View style={stylesQuiz.quizTestTimer}>
            <UrgeWithPleasureComponent duration={duration} onTimeout={handleNextQuestion} />
          </View>
        </View>

        <View style={stylesQuiz.quizTestAnserwsBody}>
          {answers.map((answer, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswer(index)}
              style={[
                stylesQuiz.quizTextButton,
                selectedAnswer === index && isAnswered && answer.isCorrect
                  ? stylesQuiz.quizTextButtonCorrect
                  : selectedAnswer === index && isAnswered && !answer.isCorrect
                  ? stylesQuiz.quizTextButtonIncorrect
                  : null,
              ]}>
              <Text style={stylesQuiz.quizButtonText}>{answer.content}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const questions = [
    {
      question: "Który wódz po śmierci Gajusza Mariusza, prowadził wojnę domową z Sullą?",
      answers: [
        { content: "LUCJUSZ CYNNA", isCorrect: true },
        { content: "JULIUSZ CEZAR", isCorrect: false },
        { content: "LUCJUSZ MURENA", isCorrect: false },
        { content: "MAREK KRASSUS", isCorrect: false },
      ],
      duration: 30,
    },
    {
      question: "Który cesarz rzymski był znany ze swojego szaleństwa i okrucieństwa?",
      answers: [
        { content: "CESARZ NERO", isCorrect: true },
        { content: "CESARZ AUGUST", isCorrect: false },
        { content: "CESARZ TRAJAN", isCorrect: false },
        { content: "CESARZ HADRIAN", isCorrect: false },
      ],
      duration: 30,
    },
    {
      question: "W którym roku wybuchło powstanie styczniowe?",
      answers: [
        { content: "1863", isCorrect: true },
        { content: "1848", isCorrect: false },
        { content: "1871", isCorrect: false },
        { content: "1830", isCorrect: false },
      ],
      duration: 30,
    },
    // Dodaj więcej pytań tutaj
    // {
    //   question: "Czwarte pytanie?",
    //   answers: [
    //     // Dodaj tablicę odpowiedzi dla czwartego pytania
    //   ],
    //   duration: 30,
    // },
    // {
    //   question: "Piąte pytanie?",
    //   answers: [
    //     // Dodaj tablicę odpowiedzi dla piątego pytania
    //   ],
    //   duration: 30,
    // },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleGoHome = () => {
    // Przejście do strony Home
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={[styles.head, landscapeStyles.head]}>
      <View style={styles.body}>
        <QuestionComponent {...questions[currentQuestionIndex]} />
      </View>
    </SafeAreaView>
  );
};

export default QuizView;
