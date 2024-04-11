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
    {
        id: '2',
        nome: 'Macarronada alho e oleo',
        descripition: 'macarrão com alho e oleo cozido com bacon',
        price: 'R$160.00',
        image: require('./assets/images/images.png'),
    },
    {
        id: '3',
        nome: 'Frango assado',
        descripition: 'frango assado no forno com pequenas folhas de eucalipito verde',
        price: 'R$65.00',
        image: require('./assets/images/images(2).png'),
    },
    {
        id: '4',
        nome: 'Picanha de ângus',
        descripition: 'picanha de ângus assada na lenha com sal do topo do imalaia',
        price: 'R$120.00',
        image: require('./assets/images/images(3).png'),
    },
    {
        id: '5',
        nome: 'Bolinho de arroz',
        descripition: 'arroz, sal, pimenta do reino, e folhas de hortlã',
        price: 'R$50.00',
        image: require('./assets/images/images(4).png'),
    },
    {
        id: '6',
        nome: 'Sopa tailandesa',
        descripition: 'sopa da tailandia com tempero',
        price: 'R$89.00',
        image: require('./assets/images/images(5).png'),
    },
    {
        id: '7',
        nome: 'Lagostinha',
        descripition: 'lagosta ao molho madeira, com frutos do mar',
        price: 'R$125.00',
        image: require('./assets/images/images(6).png'),
    },
    {
        id: '8',
        nome: 'Frango frito',
        descripition: 'frango frito com tempero da casa',
        price: 'R$90.00',
        image: require('./assets/images/images(7).png'),
    },
    {
        id: '9',
        nome: 'Camarão com feijão',
        descripition: 'camarão ao feijão preto com tempero especial',
        price: 'R$235.00',
        image: require('./assets/images/images(8).png'),
    },
    {
        id: '10',
        nome: 'Caldo de Peixe',
        descripition: 'Caldo de frutos dor mar com molho especial',
        price: 'R$219.00',
        image: require('./assets/images/images(9).png'),
    },
    {
        id: '11',
        nome: 'Chiclte de Camarão',
        descripition: 'Camarão com 6 tipos de queijo diferente queijo',
        price: 'R$147.00',
        image: require('./assets/images/images(10).png'),
    },
    {
        id: '12',
        nome: 'Bolinho de Carne Porco',
        descripition: 'Carne de porco levemente assada e cozida com tempero completo',
        price: 'R$150.00',
        image: require('./assets/images/frangobranco.png'),
    },
    {
        id: '13',
        nome: 'Polvo Polvilhado',
        descripition: 'Polvo, tomate e macarronada com tempero especial',
        price: 'R$300.00',
        image: require('./assets/images/images1.png'),
    },
    {
        id: '14',
        nome: 'Carne Seca com Mandioca',
        descripition: 'Carne seca especial, com mais de 100 anos, e mandioca do himalaia',
        price: 'R$129.00',
        image: require('./assets/images/macarronada.png'),
    },
    {
        id: '15',
        nome: 'Ostra com Batata',
        descripition: 'Ostra com batata cozida',
        price: 'R$270.00',
        image: require('./assets/images/pancetapure.png'),
    },


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



//barra inferior-------------------------------------------------------------------------


function Restaurante(): React.JSX.Element {
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
                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/agenda.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/home.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/user.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/menu.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>



            </View>

        </View>

//-------------------------------------------------------------------------------------------------------
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