import { CustomInputProps } from '@/type';
import React from 'react';
import { Text, View } from 'react-native';

const CustomInput = ({
  placeholder = 'Insira um texto',
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = 'default',
}: CustomInputProps) => {
  return (
    <View>
      <Text>CustomInput</Text>
    </View>
  );
};

export default CustomInput;
