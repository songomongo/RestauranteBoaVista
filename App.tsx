import React from 'react';
import Restaurante from './src/Restaurante';
import CadastroProduto from './src/screens/CadastroProdutos';
import CadastroCliente from './src/screens/CadastroCliente';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListagemProduto from './src/screens/ListagemProduto';




const Stack = createStackNavigator();

function App(): React.ReactElement {


  return (


    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Restaurante' component={Restaurante}
          options={{ headerShown: false }} />

        <Stack.Screen name='CadastroCliente' component={CadastroCliente}
          options={{ headerShown: false }} />

        <Stack.Screen name='CadastroProduto' component={CadastroProduto}
          options={{ headerShown: false }} />

        <Stack.Screen name='Listagem' component={ListagemProduto}
          options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;