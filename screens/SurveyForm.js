import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, Slider, Platform, KeyboardAvoidingView} from 'react-native';
import { Card, ProgressBar, RadioButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../FirebaseConfig'
import Toast from 'react-native-toast-message';
import ExplorePlaces from './ExplorePlaces';
import YourPicks from './YourPicks';

// Survey Form Questions
const questions = [
  { id: 1, question: 'What is your name?', type: 'text', responseField: 'response1' },
  { id: 2, question: 'What is your age?', type: 'multiple-choice', options:['18-21','21-24','24-27','27-30','30-33','33-36','36-39','40 and above'],responseField: 'response2' },
  { id: 3, question: 'Where are you located?', type: 'text', responseField: 'response3' },
  { id: 4, question: 'Now time for the real fun ones! Pizza or Tacos: In the epic battle of cheesy goodness and mouth-watering toppings, which one steals a pizza your heart?', type: 'multiple-choice', options: ['🌮 Tacos', '🍕 Pizzas', 'None'], responseField: 'response4' },
  { id: 5, question: 'How would you like to explore new places?', type:'multiple-choice',options:['Alone','With Friends','New Friends'],responseField:'response5'},
  { id:6 , question: 'Sushi or Tikka: Raw or Grilled? Indulge your cravings!', type:'multiple-choice',options:['None','🍣 Sushi','Tikka'],responseField:'response6'},
  { id:7, question: 'Coffee or Chai: Choose one bhai!',type:'multiple-choice',options:['🧋 Coffee','☕️ Tea'],responseField:'response7'},
  { id:8, question: 'What kind of Khiladi are you?',type:'multiple-choice', options:['⚽️ Football','🏀 Basketball','🏓 Table-Tennis','🏌️‍♂️ Golf','Squash','Baddy','🎾 Tennis','Others'],responseField:'response8'},
  { id:9, question: 'How interested are you in unique tourist outings', type:'slider-2',responseField:'response9'},
  { id:10, question: 'Mountains or Beaches', type:'multiple-choice', options:['🏖️ Beach','🏔️ Mountains'],responseField:'response10'},
  { id:11, question: 'Board Games or Movies: Roll the Dice or Watch something fun! ?',type:'multiple-choice',options:['🎬 Movies','Both','🎲 Board-games'],responseField:'response11'},
  { id:12, question: 'Baking or Hosting a party', type:'multiple-choice',options:['🧑‍🍳 Bake','🎉 Create'],responseField:'response12'},
  { id:13, question:'Which Ball? Paintball or Bowling ball', type:'multiple-choice',options:['☄️ Paintball','🎳 Bowling'], responseField:'response13'},
  { id:14, question: 'Books 📚 or Podcasts 🎧: Pages or Voices', type:'multiple-choice',options:['📚 Books','🎧 Podcasts'],responseField:'response14'},
  { id:15, question: 'Roller Coaster or Skydiving: Upside-down or Frefall:', type:'multiple-choice',options:['🎢 Roller Coaster','🪂 Sky-Diving'],responseField:'response15'},
  { id:16, question: 'Art Gallery or Street Festivals: MasterPieces or Street Vibes', type:'multiple-choice', options:['🎨 Art All the Way','🖼️ Street Stuff'],responseField:'response16'},
  { id:17, question: 'Opera or Comdedy Show: Drama or Laughter',type:'multiple-choice',options:['🎤 Opera','🎭 Comedy'],responseField:'response17'},
  { id:18, question: 'Is there anything else you would like to share with us about your activity preferences? (Optional)',type:'text',responseField:'response18'},
  // Add more questions as needed
];


const SurveyForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [isTextInputEmpty, setIsTextInputEmpty] = useState(false);
  const navigation = useNavigation();
  const progress =   (currentQuestionIndex / (questions.length-1)) * 100;


  const showToast = (message) => {
    Toast.show({
      text1: message,
      position: "bottom",
      type: "success",
    });
  };

  const handleNextQuestion = (navigation) => {
    // Add the navigation parameter
    const currentQuestion = questions[currentQuestionIndex];
    const { id, responseField } = currentQuestion;
    if (currentQuestionIndex === questions.length - 1) {
      // Save the responses to the Firebase Realtime Database
      firebase
        .database()
        .ref("surveyResponses")

        .push(responses)
        .then(() => {
          // Show toast message
          showToast("Responses Saved Successfully");

          // Clear the form
          setCurrentQuestionIndex(0);
          setResponses({});

          // Navigate to the next screen
          navigation.navigate("SliderScreen");
        })
        .catch((error) => {
          console.log("Error saving responses to Firebase:", error);
          // Handle error if needed
        });
    } else {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      }
    }
  };

  const handlePreviousQuestion = () => {
    const previousQuestionIndex = currentQuestionIndex - 1;
    if (previousQuestionIndex >= 0) {
      setCurrentQuestionIndex(previousQuestionIndex);
    }
  };
  const renderQuestionInput = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const { type, responseField, options } = currentQuestion;

    if (type === "text") {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            onChangeText={(text) => {
              setResponses({ ...responses, [responseField]: text });
            }}
            value={responses[responseField] || ""}
            placeholder="Enter your response"
            placeholderTextColor="gray"
            style={styles.textInput}
          />
          {isTextInputEmpty && (
            <Text style={styles.errorText}>This field is required</Text>
          )}
        </KeyboardAvoidingView>
      );
    } else if (type === "multiple-choice") {
      return (
        <>
          {options.map((option, index) => (
            <View key={index} style={styles.radioButtonContainer}>
              <RadioButton
                value={option}
                status={
                  responses[responseField] === option ? "checked" : "unchecked"
                }
                onPress={() => {
                  setResponses({ ...responses, [responseField]: option });
                }}
              />
              <Text style={styles.radioButtonLabel}>{option}</Text>
            </View>
          ))}
        </>
      );
    } else if (type === "slider") {
      return (
        <View>
          <Text style={styles.sliderLabel}>Age Range: 18 - 40</Text>
          <Text style={styles.sliderValue}>
            {responses[responseField] || 18}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={18}
            maximumValue={40}
            minimumTrackTintColor="#9c46e9"
            step={1}
            value={responses[responseField] || 18}
            onValueChange={(value) => {
              setResponses({ ...responses, [responseField]: value });
            }}
          />
        </View>
      );
    } else if (type === "slider-2") {
      return (
        <View>
          <Text style={styles.sliderLabel}>On Scale of 0 to 10</Text>
          <Text style={styles.sliderValue}>
            {responses[responseField] || 0}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#9c46e9"
            step={1}
            value={responses[responseField] || 0}
            onValueChange={(value) => {
              setResponses({ ...responses, [responseField]: value });
            }}
          />
        </View>
      );
    }
  };

  return (
    <ImageBackground
      source={require("../assets/Background1x.jpg")}
      style={styles.backgroundImage}
    >
            <ProgressBar style={styles.progressBar} progress={progress/120} color="#9c46e9" />
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={styles.questionText}>
            {questions[currentQuestionIndex].question}
          </Text>
          {renderQuestionInput()}
          <View style={styles.buttonContainer}>
            {currentQuestionIndex !== 0 && (
              <TouchableOpacity
                style={styles.button}
                onPress={handlePreviousQuestion}
              >
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>
            )}
            {currentQuestionIndex !== questions.length - 1 ? (
              <TouchableOpacity
                style={styles.button}
                onPress={handleNextQuestion}
                disabled={
                  !responses[questions[currentQuestionIndex].responseField]
                }
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleNextQuestion(navigation)} // Pass navigation object
                disabled={
                  !responses[questions[currentQuestionIndex].responseField]
                }
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            )}
          </View>
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderColor: "white",
    borderWidth: 0.5,
  },
  questionText: {
    color: "white",
    fontSize: 22,
    margin: 20,
    fontWeight: "bold",
    //marginBottom:30
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 30,
  },
  button: {
    padding: 10,
    bottom: 5,
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9c46e9",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight:"bold"
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    left: 10,
  },
  radioButtonLabel: {
    color: "white",
    marginLeft: 10,
    fontSize:16,
    fontWeight:"normal"
  },
  backgroundImage: {
    flex: 1,
  },
  slider: {
    fontSize: "100%",
    width: "80%",
    alignSelf: "center",
  },
  sliderLabel: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
  sliderValue: {
    color: "white",
    alignSelf: "center",
    margin: 10,
  },
  textInput: {
    color: "white",
    padding: 20,
  },
  progressBar:{
    height:20,
    top:100,
    width:"80%",
    alignSelf:"center",
    borderRadius:10,
    margin:20
  }
};

export default SurveyForm;
