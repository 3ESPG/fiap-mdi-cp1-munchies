import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Home() {

  const [mensagem, setMensagem] = useState('');

  function adicionarItem(nome) {
    setMensagem(nome + " adicionado ao carrinho!");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>🍔 Munchies</Text>
      <Text style={styles.subtitulo}>Cardápio</Text>

      {/* Produto 1 */}
      <View style={styles.card}>
        <Text style={styles.nome}>Coxinha</Text>
        <Text style={styles.preco}>R$ 6,00</Text>

        <TouchableOpacity 
          style={styles.botao}
          onPress={() => adicionarItem('Coxinha')}
        >
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Produto 2 */}
      <View style={styles.card}>
        <Text style={styles.nome}>Café</Text>
        <Text style={styles.preco}>R$ 4,00</Text>

        <TouchableOpacity 
          style={styles.botao}
          onPress={() => adicionarItem('Café')}
        >
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Produto 3 */}
      <View style={styles.card}>
        <Text style={styles.nome}>Pão de Queijo</Text>
        <Text style={styles.preco}>R$ 5,00</Text>

        <TouchableOpacity 
          style={styles.botao}
          onPress={() => adicionarItem('Pão de Queijo')}
        >
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Feedback (diferencial ⭐) */}
      {mensagem !== '' && (
        <Text style={styles.feedback}>{mensagem}</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },

  subtitulo: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  preco: {
    fontSize: 16,
    marginBottom: 10
  },

  botao: {
    backgroundColor: '#E83D84',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold'
  },

  feedback: {
    marginTop: 20,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold'
  }
});