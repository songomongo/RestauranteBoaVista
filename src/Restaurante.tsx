import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MenuItem {
    id: string;
    nome: string;
    descripition: string;
    price: string;
    image: any;
}

const dados: MenuItem[] = [
    {
        id: '1',
        nome: 'Carne Grelhada',
        descripition: 'Carne grelhada ao molho tuschê, que é composto por banana, tomate, cebola e sazon',
        price: 'R$168.00',
        image: require('./assets/images/Bifeangus.png'),
    },
    // ... more data objects
];

const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.item}>
        <View style={styles.title}>
            <Text style={styles.textTitle}>{item.nome}</Text>
            <Text style={styles.preco}>{item.price}</Text>
        </View >

        <View style={styles.bordaImage}>
            <Image source={item.image} style={styles.imagem}></Image>
        </View >

        <Text style={styles.text}>{item.descripition}</Text>
    </TouchableOpacity>
);

function Restaurante(): React.JSX.Element {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/images/cinza.png')} style={styles.imagemB}>
                <StatusBar backgroundColor="#262626" barStyle='light-content' />
                <View style={styles.header}>
                    <Image source={require('./assets/images/logo2.png')} style={styles.logoTipo} />
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dados}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </ImageBackground>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Restaurante')}>
                    <Image
                        source={require('../assets/images/agenda.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity >

                <TouchableOpacity onPress={() => navigation.navigate('CadastroCliente')}>
                    <Image
                        source={require('../assets/images/home.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('CadastroProduto')}>
                    <Image
                        source={require('../assets/images/user.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Listagem')}>
                    <Image
                        source={require('../assets/images/menu.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '##C4C3E'

    },


    logoTipo: {
        marginHorizontal: 1,
        width: 360,
        height: 200,


    },

    

    preco: {
       color: 'white',
       borderBottomWidth: 2,
       borderColor: 'white',
       top: 20

    },

    
        bordaImage: {
           
                borderColor: 'white',
                marginTop: 50,
                borderWidth: 2,
                height: 215,
                width: 215,
         
         
        },



    text: {
    
        marginTop: 40,
        marginVertical: 40,
        color: 'white',
        fontSize: 15,
        alignItems: 'center',
        borderColor: 'white',




    },
    textTitle: {
        marginBottom: 8,
        marginTop: 25,
        fontSize: 25,
        textDecorationLine: 'line-through',
        
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
        

    },

    title: {
        alignItems: 'center',
        translateX: 10,
    },
    item: {
        backgroundColor: '#0D0D0D',
        padding: 20,
        marginVertical: 12,
        marginHorizontal: 25,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        opacity: 0.9,
      


    },
    imagem: {
        width: 200,
        height: 200,
        margin: 5,
        

    },
    header: {
        backgroundColor: '#262626',
        alignItems: 'center',

    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'

    },
    footer: {
        borderBottomWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15

    },
    footerIcon: {
        width: 35,
        height: 35

    },
    imagemB: {
        flex: 1,
        justifyContent: 'center'
    }


})

export default Restaurante;