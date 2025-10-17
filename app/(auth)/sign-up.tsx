import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';

import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { createUser } from '@/lib/appwrite';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const submit = async () => {
    const { name, email, password } = form;

    if (!name || !email || !password) return Alert.alert('Erro', 'Por favor, insira um nome, email e senha válidos.');

    setIsSubmitting(true);

    try {
      await createUser({ name, email, password });

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
        placeholder="Insira seu nome completo"
        value={form.name}
        onChangeText={text => setForm(prev => ({ ...prev, name: text }))}
        label="Nome"
      />
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
      <CustomButton title="Criar conta" isLoading={isSubmitting} onPress={submit} />

      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">Já tem uma conta?</Text>
        <Link href="/sign-in" className="base-bold text-primary">
          Entrar
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
