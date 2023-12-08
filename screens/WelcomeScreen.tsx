// WelcomeScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen: React.FC = ({ navigation }) => {
  useEffect(() => {
    // Poniższa linijka resetuje wartość 'termsAccepted' do null przy każdym uruchomieniu aplikacji
    // Odkomentuj ją, jeśli chcesz, aby regulamin wyświetlał się za każdym razem, gdy aplikacja zostanie uruchomiona.
    // AsyncStorage.setItem('termsAccepted', null);
  }, []);

  const acceptTerms = async () => {
    try {
      await AsyncStorage.setItem('termsAccepted', 'true');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (error) {
      console.error('Error saving terms acceptance:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Witaj w naszej aplikacji!</Text>
        <Text style={styles.subHeaderText}>
          Przed rozpoczęciem korzystania, prosimy o przeczytanie i zaakceptowanie naszego regulaminu.
        </Text>
      </View>

      <View style={styles.regulaminContainer}>
        <Text style={styles.regulaminText}>
          <Text style={styles.boldText}>• </Text>
          Bezpieczeństwo: Dbamy o bezpieczeństwo Twoich danych. Nie udostępniamy ich innym użytkownikom ani firmom.
        </Text>
        <Text style={styles.regulaminText}>
          <Text style={styles.boldText}>• </Text>
          Korzystanie z aplikacji: Prosimy o korzystanie z aplikacji zgodnie z jej przeznaczeniem. Nie tolerujemy działań naruszających zasady fair play.
        </Text>
        <Text style={styles.regulaminText}>
          <Text style={styles.boldText}>• </Text>
          Zgłaszanie problemów: Jeśli napotkasz problemy z aplikacją, prosimy o zgłaszanie ich naszemu zespołowi wsparcia.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={acceptTerms}>
        <Text style={styles.buttonText}>Zaakceptuj regulamin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#C7DFFF',
  },
  header: {
    backgroundColor: '#338AFF', // Kolor tła nagłówka
    padding: 20,
    borderBottomLeftRadius: 20, // Zaokrąglenie dolnych krawędzi
    borderBottomRightRadius: 20,
    width: '100%', // Rozciągnięcie na całą szerokość ekranu
  },
  headerText: {
    color: 'black', // Kolor tekstu nagłówka
    fontSize: 24,
    textAlign: 'center', // Wyśrodkowanie tekstu
    marginBottom: 10,
  },
  subHeaderText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  regulaminContainer: {
    padding: 20, // Dodatkowy padding wokół sekcji
    margin: 20, // Margines wokół sekcji
    borderColor: '#338AFF', // Kolor ramki
    borderWidth: 2, // Grubość ramki
    borderRadius: 10, // Zaokrąglenie rogów
  },
  regulaminText: {
    color: 'black', // Kolor tekstu regulaminu
    fontSize: 16,
    textAlign: 'justify', // Wyśrodkowanie tekstu
    lineHeight: 24, // Interlinia dla lepszej czytelności
    marginBottom: 15, // Dodatkowy odstęp na dole tekstu
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#338AFF', // Kolor tła przycisku
    borderRadius: 10, // Zaaokrąglone krawędzie
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15, // Dodatkowy odstęp od dolnego marginesu
  },
  buttonText: {
    color: 'black', // Kolor tekstu przycisku
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
