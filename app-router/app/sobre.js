import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>🍔 Sobre o Munchies</Text>

      <Text style={styles.texto}>
        O Munchies é um aplicativo desenvolvido para melhorar a experiência dos alunos da FIAP na cantina.
      </Text>

      <Text style={styles.texto}>
        O principal problema identificado foi o grande número de filas, principalmente nos horários de pico.
      </Text>

      <Text style={styles.texto}>
        Com o app, o aluno pode fazer seu pedido diretamente pelo celular, pagar e apenas retirar no balcão, sem precisar enfrentar filas.
      </Text>

      <Text style={styles.subtitulo}>🎯 Objetivo</Text>

      <Text style={styles.texto}>
        Reduzir filas, otimizar o tempo dos alunos e melhorar o atendimento da cantina.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#E83D84'
  },

  texto: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555'
  }

});