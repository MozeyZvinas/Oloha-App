import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignIn = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 flex justify-center" style={{backgroundColor: "#FEBD2F", alignItems:"center"}}>
      <View>

      </View>
    <View style={styles.container}>
      <Text style={styles.welcomeBackText}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        placeholder="Email or Phone Number"
        onChangeText={setEmailOrPhone}
        value={emailOrPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!isPasswordVisible}
        onChangeText={setPassword}
        value={password}
      />
      {/* Toggle Password Visibility */}
      {/* <TouchableOpacity onPress={() => setPasswordVisibility(!isPasswordVisible)}>
        <Text style={styles.showPasswordText}>
          {isPasswordVisible ? 'Hide Password' : 'Show Password'}
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => navigation.navigate('Forgot Password Page')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Location Page')}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Sign Up Page')}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>  

    
      <Text style={styles.orText}>Or continue with:</Text>

      <View style={styles.buttons}>
      <TouchableOpacity style={styles.appleLoginButton}>
        <Text>Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleLoginButton}>
        <Text>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookLoginButton}>
        <Text>Facebook</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
  },
  welcomeBackText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  messageText: {
    fontSize: 16,
    marginBottom: 2,
  },
  signInText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    alignContent: 'space-between',
  },
  showPasswordText: {
    fontSize: 14,
    color: '#888',
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#888',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#FEBD2F',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  signInButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#FEBD2F',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 10,
  },
  appleLoginButton: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  googleLoginButton: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  facebookLoginButton: {
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default SignIn;
