import React from 'react'; 
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Converter } from '../utils/converter';
interface IProps {
    onPress: Function;
    label: string;
    isRoman?: boolean
    
} 
const Button = (props: IProps) => {
    const {onPress, label, isRoman} = props;
    return (
        <View>
            <TouchableOpacity style = {styles.btn} onPress={()=> onPress(parseInt(label))}>
                <Text style = {styles.txt}>{isRoman ? Converter.convertToRoman(parseInt(label)) : label}</Text>
            </TouchableOpacity>
        </View>
        )
}

const styles = StyleSheet.create({
    btn  : { 
        height: 80,
        width: 80,
        margin: 1,
        justifyContent: 'center', 
        backgroundColor: '#8114B5',
        borderRadius:12,
        borderWidth: 1,
        borderColor: '#fff',  
    },
    txt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default Button;