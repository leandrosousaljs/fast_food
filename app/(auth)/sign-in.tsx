import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';

import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { signIn } from '@/lib/appwrite';

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const submit = async () => {
    const { email, password } = form;

    if (!email || !password) return Alert.alert('Erro', 'Por favor, insira um email e senha válidos.');

    setIsSubmitting(true);

    try {
      await signIn({ email, password });

      router.replace('/');
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Ocorreu um erro ao entrar. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Insira seu email"
        value={form.email}
        onChangeText={text => setForm(prev => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Insira sua senha"
        value={form.password}
        onChangeText={text => setForm(prev => ({ ...prev, password: text }))}
        label="Senha"
        secureTextEntry={true}
      />
      <CustomButton title="Entrar" isLoading={isSubmitting} onPress={submit} />

      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">Não tem uma conta?</Text>
        <Link href="/sign-up" className="base-bold text-primary">
          Criar conta
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
