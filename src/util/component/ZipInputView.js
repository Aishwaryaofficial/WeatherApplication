import React, { useState } from 'react';
import { View,TextInput, Alert ,Button} from 'react-native';
import AppStyle from '../AppStyle';
import AppConstant from '../AppConstant';


const ZipInputView = props => {

    const [enteredText, setEnteredText] = useState('');
    
    const zipInputHandler = (enteredText) => {
        setEnteredText(enteredText);
    }
    const submitHandler = () => {
        const zipCode = enteredText.trim();
        if (zipCode == '') {
            Alert.alert(
                'Zip Code Error!',
                'Zip Code cannot be left blank.'
            );
            return;
        } else if (zipCode.length != 6) {
            Alert.alert(
                'Zip Code Error!',
                'Please enter 6 digit Zip Code to continue.'
            );
            return;
        }
        props.onClick(enteredText);
    }
    return (
        <>
            <View style={AppStyle.zipContainer}>
                <TextInput
                    style={AppStyle.textInput}
                    placeholder={'Enter zipcode '}
                    keyboardType={'number-pad'}
                    returnKeyType={'done'}
                    value={enteredText}
                    onChangeText={zipInputHandler}>
                </TextInput>
                <Button
                    style={AppStyle.submit}
                    title={'submit'}
                    onPress={submitHandler}
                >
                </Button>
            </View>
        </>
    );
};

export default ZipInputView;


