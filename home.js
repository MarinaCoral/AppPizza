import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
        <Text style={styles.paragraph}>
          Pizzas
        </Text>
      <Text></Text>

      <ScrollView>

        <View style={styles.fotos1}>
          <Text style={styles.nome}>Mussarela</Text>
          <Image style={styles.img} resizeMode = "center" source={require("./mussarela.jpg")} />
          <Text style={styles.descricao}>Ingredientes: molho de tomate, mussarela.</Text>
          <Text style={styles.preco}>Preço: R$55,00</Text>
        </View>

        <View style={styles.fotos2}>
          <Text style={styles.nome}>Calabresa</Text>
          <Image style={styles.img} resizeMode = "center" source={require("./calabresa.jpg")} />
          <Text style={styles.descricao}>Ingredientes: molho de tomate, calabresa em rodelas.</Text>
          <Text style={styles.preco}>Preço: R$55,00</Text>
        </View>

        <View style={styles.fotos3}>
          <Text style={styles.nome}>Frango com catupiry</Text>
          <Image style={styles.img} resizeMode = "center" source={require("./frango.jpg")} />
          <Text style={styles.descricao}>Ingredientes: molho de tomate, frango desfiado, requeijão, cebolinha, azeitonas.</Text>
          <Text style={styles.preco}>Preço: R$55,00</Text>
        </View>

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#3B5196'
  },

  paragraph: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#859CE2' 
  },

  img: {
    width: 300,
    height: 200,
    borderRadius: 10,
    padding: 10
  },

  nome: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center'
  },

  descricao: {
    fontSize: 20,
    fontStyle: 'italic'
  },

  preco: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center'

  },

  fotos1: {
    flex: 1,
    backgroundColor: "#887DA2",
    margin: 12,
    justifyContent: 'center',
    padding: 10,
    alignItems: "center",
    borderRadius: 15
  },

  fotos2: {
    flex: 1,
    backgroundColor: "#887DA2",
    margin: 12,
    justifyContent: 'center',
    padding: 10,
    alignItems: "center",
    borderRadius: 15
  },

    fotos3: {
    flex: 1,
    backgroundColor: "#887DA2",
    margin: 12,
    justifyContent: 'center',
    padding: 10,
    alignItems: "center",
    borderRadius: 15
  },


});
