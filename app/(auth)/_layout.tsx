import { Slot } from 'expo-router'
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function _layout() {
  return (
    <SafeAreaView>
      <Text>Auth Layout</Text>
      <Slot />
    </SafeAreaView>
  );
}
