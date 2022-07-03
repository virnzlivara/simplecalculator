/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 
import React, {type PropsWithChildren, useState, useEffect} from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Switch,  
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Button from '../component/Buttons';
import { Converter } from '../utils/converter';

  

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'; 
  const [display, setDisplay] = useState('');  
  const [answer, setAnswer] = useState(''); 
  const [isRoman, setIsRoman] = useState(false);  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(()=> { 
    if (isRoman) {
       setDisplay(Converter.convertToRoman(parseInt(display)))
    } else {
      setDisplay(Converter.convertToNumber(display))
    }
  }, [isRoman]);
  const handlePressDigit = (digit: string)=> { 
    const convertedDigit = isRoman ? Converter.convertToRoman(parseInt(digit)): digit;
    if (answer !== '') {
      setDisplay(convertedDigit);
      setAnswer('')
    } else {
      setDisplay(`${display}${convertedDigit}`)
    }
  }
  const handleCancel = ()=> {
    const editedText = display.slice(0, -1)
    setDisplay(editedText);
    
  }

  const handleClear = ()=> {
    setDisplay('');
    setAnswer('');
  }

  const handleOperator = (operator: string)=> {
    if (answer !== ''){
      setDisplay(`${answer}${operator}`)
      setAnswer('');
    } else if (display !== ''){
      setDisplay(`${display}${operator}`)
    }
    
  }

  const calculate = ()=> {
    try{
      const equation = eval(display); 
      setDisplay(equation.toString())
      setAnswer(equation.toString());
    }catch(error){
      console.log(error)
      handleClear();
    }
    
  }
 


  return ( 
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header />  */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <TextInput style ={styles.textInput} placeholder="0" keyboardType="numeric" value ={display || answer} onChangeText={text => setDisplay(text)} />
            <Switch value={isRoman} onValueChange={text => setIsRoman(text)}/>
            <View style={styles.row}>
              <Button label='7' onPress={()=>handlePressDigit('7')} isRoman={isRoman}/>
              <Button label='8' onPress={()=>handlePressDigit('8')} isRoman={isRoman}/>
              <Button label='9' onPress={()=>handlePressDigit('9')} isRoman={isRoman}/>
              <Button label='+' onPress={()=>handleOperator('+')} />
              <Button label='C' onPress={()=>handleCancel()}/>
            </View>
           
            <View style={styles.row}>
              <Button label='4' onPress={()=>handlePressDigit('4')} isRoman={isRoman}/>
              <Button label='5' onPress={()=>handlePressDigit('5')} isRoman={isRoman}/>
              <Button label='6' onPress={()=>handlePressDigit('6')} isRoman={isRoman}/>
              <Button label='-' onPress={()=>handleOperator('-')}/>
              <Button label='Clear' onPress={()=>handleClear()}/>
            </View>

            <View style={styles.row}>
              <Button label='1' onPress={()=>handlePressDigit('1')} isRoman={isRoman}/>
              <Button label='2' onPress={()=>handlePressDigit('2')} isRoman={isRoman}/>
              <Button label='3' onPress={()=>handlePressDigit('3')} isRoman={isRoman}/>
              <Button label='*' onPress={()=>handleOperator('*')}/>
            </View>

            <View style={styles.row}>
              <Button label='0' onPress={()=>handlePressDigit('0')}/> 
              <Button label='=' onPress={()=>calculate()}/>
              <Button label='/' onPress={()=>handleOperator('/')}/>
            </View>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%'
  },
  textInput: {
    height: 82,
    fontSize: 18,
    borderRadius:15,
    marginTop:10,
    marginBottom:10,
    borderWidth:0,
    fontFamily: 'Poppins-Regular'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
