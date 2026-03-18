import { View, Text, StyleSheet } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>👤 Meu Perfil</Text>

      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.valor}>Felipe Braunstein</Text>

      <Text style={styles.label}>Curso:</Text>
      <Text style={styles.valor}>Engenharia de Software</Text>

      <Text style={styles.label}>Turma:</Text>
      <Text style={styles.valor}>3ESPG</Text>

      <Text style={styles.subtitulo}>Pedidos recentes:</Text>

      {/* Simulação de pedidos */}
      <View style={styles.card}>
        <Text style={styles.cardTexto}>Coxinha + Café</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTexto}>Pão de Queijo</Text>
      </View>

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

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E83D84'
  },

  valor: {
    fontSize: 16,
    marginBottom: 15
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },

  card: {
    backgroundColor: '#E83D84',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },

  cardTexto: {
    color: '#fff',
    fontWeight: 'bold'
  }

});