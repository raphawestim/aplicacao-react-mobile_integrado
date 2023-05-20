/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-gray-950 flex-1 items-center justify-center'>
      <Text className='text-zinc-50 font-bold text-4xl'>Hello World</Text>
      <StatusBar style="light"/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   text: {
//     color: '#fff',
//     fontSize: 48,
//     fontWeight: '700',
//   }
// });
