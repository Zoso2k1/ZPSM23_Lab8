import React, {useState, useEffect, Component, useRef} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    useWindowDimensions,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SvgXml } from 'react-native-svg';
import { styles } from '../styles/styles';



function Home(this: any): JSX.Element {
    type RootStackParamList = {
        Home: undefined;
        Results: undefined;
        Quiz: undefined;
      };

    const windowDimensions = useWindowDimensions();
    const [loading, setLoading] = useState(true);
    const [menuVisible, setMenuVisible] = useState(false);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
    const menuItems = ['Home', 'Wyniki'];
    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        // Simulate loading or initialization process
        setTimeout(() => {
          setLoading(false); // Set loading to false when loading is complete
        }, 3000); // Adjust the delay as needed
      }, []);


    const isLandscape = windowDimensions.width > windowDimensions.height;

    const landscapeStyles = isLandscape
        ? {
            head: styles.landscapeHead,
            body: styles.landscapeBody,
        }
        : {};


    return (
        <SafeAreaView style={[styles.head, landscapeStyles.head]}>
        {loading ? (
            <SplashScreen /> // Render the splash screen while loading
        ) : (
            // Render your main content when loading is complete
            
            <View style={styles.body}>

                <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
                <View style={styles.menuBar}>
                    <View style={styles.menuSelect}>

                        <TouchableOpacity>
                            <Text style={styles.menuText}></Text>
                        </TouchableOpacity>



                        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
                        <View style={styles.menuImg}>
                            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
                                <Text style={styles.menuText}>Menu</Text>
                            </TouchableOpacity>
                            {menuVisible && (
                                <View style={styles.menu}>
                                    {menuItems.map((item, index) => (
                                        <TouchableOpacity key={index} onPress={() => navigation.navigate(item as keyof RootStackParamList)}>
                                            <Text style={styles.menuItem}>{item}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </View>
                    </TouchableWithoutFeedback>
                        

                        <TouchableOpacity>
                            <Text style={styles.menuText}></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </TouchableWithoutFeedback>

                

                <View style={styles.listQuiz}>
                    <ScrollView ref={scrollViewRef}>         
                        <View style={styles.quizBox}>
                            <View style={styles.title}>
                                <View style={styles.titleText}>
                                    <Text style={styles.header}>Quiz #1</Text>
                                    <Text style={styles.difficulty}>Poziom: Łatwy</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.enterButton} onPress={() => navigation.navigate('Quiz')}>START</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={styles.text}>Pytanie w quizie</Text>
                        </View>

                        <View style={styles.quizBox}>
                            <View style={styles.title}>
                                <View style={styles.titleText}>
                                    <Text style={styles.header}>Quiz #1</Text>
                                    <Text style={styles.difficulty}>Poziom: Łatwy</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.enterButton} onPress={() => navigation.navigate('Quiz')}>START</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>Pytanie w quizie</Text>
                        </View>

                        <View style={styles.quizBox}>
                            <View style={styles.title}>
                                <View style={styles.titleText}>
                                    <Text style={styles.header}>Quiz #2</Text>
                                    <Text style={styles.difficulty}>Poziom: Średni</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.enterButton} onPress={() => navigation.navigate('Quiz')}>START</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>Pytanie w quizie</Text>
                        </View>

                        <View style={styles.quizBox}>
                            <View style={styles.title}>
                                <View style={styles.titleText}>
                                    <Text style={styles.header}>Quiz #3</Text>
                                    <Text style={styles.difficulty}>Poziom: Średni</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.enterButton} onPress={() => navigation.navigate('Quiz')}>START</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>Pytanie w quizie</Text>
                        </View>

                        <View style={styles.quizBox}>
                            <View style={styles.title}>
                                <View style={styles.titleText}>
                                    <Text style={styles.header}>Quiz #4</Text>
                                    <Text style={styles.difficulty}>Poziom: Trudny</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.enterButton} onPress={() => navigation.navigate('Quiz')}>START</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>Pytanie w quizie</Text>
                        </View>

                    {/*Footer*/}

                        <View style={styles.quizBox}>
                            <Text style={styles.footer}>Sprawdź swoje aktualne wyniki!</Text>
                            <View style={styles.footerButtons}>
                                <TouchableOpacity onPress={() => navigation.navigate('Results')}>
                                    <Text style={styles.footerButton}>WYNIKI</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    

                    </ScrollView>
                </View>

            </View>
            )}
        </SafeAreaView>
    );
}

export default Home;