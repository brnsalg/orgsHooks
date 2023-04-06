import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({
  onPress,
  desabilitada = true,
  preenchida,
  grande = false,
}) {
  const getImage = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };

  const styles = stylesFunction(grande);

  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image style={styles.estrela} source={getImage()} />
    </TouchableOpacity>
  );
}

const stylesFunction = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
    },
  });
