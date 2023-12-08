import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { styles } from '../styles/styles';

const ResultsView: React.FC = () => {
  const [results, setResults] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Przykładowe dane wyników
  const initialResults = [
    {
      nick: 'Marek',
      score: 18,
      total: 20,
      type: 'historia',
      date: '2022-11-22',
    },
    // Dodaj więcej obiektów do tablicy wyników
//     {
//       nick: 'Jacek',
//       score: 14,
//       total: 20,
//       type: 'geografia',
//       date: '2022-10-21',
//     },
//     {
//       nick: 'Ania',
//       score: 19,
//       total: 20,
//       type: 'Matematyka',
//       date: '2021-01-12',
//     },
  ];

  useEffect(() => {
    // Pobierz dane z serwera lub innego źródła danych
    // W tym przypadku używamy przykładowych danych
    setResults(initialResults);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);

    // Tutaj możesz zaimplementować logikę odświeżania danych z serwera
    // Na razie używamy ponownie przykładowych danych
    setResults(initialResults);

    setRefreshing(false);
  };

  const renderResultItem = ({ item }) => (
    <View style={styles.quizBox}>
      <Text style={{ flex: 1 }}>Nick: {item.nick}</Text>
      <Text style={{ flex: 1 }}>Score: {item.score}</Text>
      <Text style={{ flex: 1 }}>Total: {item.total}</Text>
      <Text style={{ flex: 1 }}>Type: {item.type}</Text>
      <Text style={{ flex: 1 }}>Date: {item.date}</Text>
    </View>
  );

  return (
    <FlatList
      data={results}
      renderItem={renderResultItem}
      keyExtractor={(item, index) => index.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    />
  );
};

export default ResultsView;
