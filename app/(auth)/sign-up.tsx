import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

const signUp = () => {
  return (
    <View>
      <Text>Cadastrar-se</Text>
      <Button title="Sign In" onPress={() => router.push('/sign-in')}></Button>
    </View>
  );
};

export default signUp;
