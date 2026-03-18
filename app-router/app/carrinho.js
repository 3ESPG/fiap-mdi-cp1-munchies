import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Carrinho() {

  const [itens, setItens] = useState(['Coxinha', 'Café']);

  function finalizarPedido() {
    setItens([]);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>🛒 Carrinho</Text>

      {/* Estado vazio (diferencial ⭐) */}
      {itens.length === 0 && (
        <Text style={styles.vazio}>Seu carrinho está vazio</Text>
      )}

      {/* Lista de itens */}
      {itens.map((item, index) => (
        <Text key={index} style={styles.item}>
          {item}
        </Text>
      ))}

      {/* Botão finalizar */}
      {itens.length > 0 && (
        <TouchableOpacity 
          style={styles.botao}
          onPress={finalizarPedido}
        >
          <Text style={styles.botaoTexto}>Finalizar Pedido</Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  item: {
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8
  },

  vazio: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#999'
  },

  botao: {
    backgroundColor: '#E83D84',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold'
  }
});