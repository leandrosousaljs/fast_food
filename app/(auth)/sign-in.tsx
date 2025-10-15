import { router } from 'expo-router'
import { Button, Text, View } from 'react-native';

const signIn = () => {
  return (
    <View>
      <Text>Entrar</Text>
      <Button title='Sign Up' onPress={() => router.push('/sign-up')} ></Button>
    </View>
  );
};

export default signIn;
