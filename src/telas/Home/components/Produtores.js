import React, { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

// import { carregaProdutores } from '../../../services/carregaDados';
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({ topo: Topo }) {
  const [titulo, lista] = useProdutores();
  // const [titulo, setTitulo] = useState('');
  // const [lista, setLista] = useState([]);

  // useEffect(() => {
  //   const retorno = carregaProdutores();
  //   setTitulo(retorno.titulo);
  //   setLista(retorno.lista);
  // }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={styles.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      style={styles.fundo}
      data={lista}
      renderItem={({ item }) => <Produtor {...item} />}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  fundo: {
    backgroundColor: '#f6f6f6',
  },
});
