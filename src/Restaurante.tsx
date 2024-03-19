import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";


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
            nome: 'Carne Grelhada ao molho tuschê', 
            descripition: 'Carne grelhada ao molho tuschê, que é composto por banana, tomate, cebola e sazon', 
            price: 'R$90.00', 
            image: '',
        },
        {
            id: '2', 
            nome: 'Macarronada alho e oleo', 
            descripition: 'macarrão com alho e oleo cozido com bacon', 
            price: 'R$78.00', 
            image: '',
        },
        {
            id: '3', 
            nome: 'Frango assado com folhas de eucalipito', 
            descripition: 'frango assado no forno com pequenas folhas de eucalipito verde', 
            price: 'R$65.00', 
            image: '',
        },
        {
            id: '4', 
            nome: 'Picanha assada de ângus', 
            descripition: 'picanha de ângus assada na lenha com sal do topo do imalaia', 
            price: 'R$120.00', 
            image: '',
        },
        {
            id: '5', 
            nome: 'Bolinho de arroz japonês', 
            descripition: 'arroz, sal, pimenta do reino, e folhas de hortlã', 
            price: 'R$50.00', 
            image: '',
        },
        {
            id: '6', 
            nome: 'Sopa tailandesa', 
            descripition: '', 
            price: 'R$89.00', 
            image: '',
        },
        {
            id: '7', 
            nome: 'Carne Grelhada ao molho da casa', 
            descripition: 'Carne grelhada ao molho da casa, que é composto por banana, tomate, cebola e sazon', 
            price: 'R$78.00', 
            image: '',
        },
        {
            id: '8', 
            nome: 'Carne Grelhada ao molho da casa', 
            descripition: 'Carne grelhada ao molho da casa, que é composto por banana, tomate, cebola e sazon', 
            price: 'R$78.00', 
            image: '',
        },
  

    ];

    const renderItem = ({ item }: { item: MenuItem}) => (
        <TouchableOpacity style={styles.item}>
            <Text>{ item.nome }</Text>
   
        </TouchableOpacity>
    );


function Restaurante(): React.JSX.Element {
    return (
        <View style={ styles.container }>
            <StatusBar backgroundColor="grey" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat list</Text>
            </View>
            <FlatList
             showsVerticalScrollIndicator={false}
             data={dados}
             renderItem={renderItem}
             keyExtractor={(item) => item.id}
            />


            <View  style={styles.footer}>
                <TouchableOpacity>
                    <Image
                    source={require('./assets/images/agenda.png') }
                    style={ styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                     source={require('./assets/images/home.png') }
                     style={ styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                     source={require('./assets/images/user.png') }
                     style={ styles.footerIcon}/>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image 
                     source={require('./assets/images/menu.png') }
                     style={ styles.footerIcon}/>
                </TouchableOpacity>

                

            </View>

        </View>
    );
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },
        item: {
            backgroundColor: 'cyan',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16
            
        },
        header: {
            backgroundColor: 'blue',
            alignItems: 'center',
            paddingVertical: 25
        },
        headerText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white'

        },
        footer: {
            borderBottomWidth:0.2,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingVertical: 10

        },
        footerIcon: {
            width: 40,
            height: 40

        },

    })

    export default Restaurante;