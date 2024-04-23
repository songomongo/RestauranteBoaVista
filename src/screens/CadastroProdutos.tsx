import React, { useState } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

const CadastroProduto: React.FC = () => {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>("");
    const [descricao, setDescricao] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');
    
    const CadastroProduto = async () => {   
        try{
        const formData = new FormData();
        formData.append('nome', nome);   
        formData.append('preco', preco);   
        formData.append('descricao', descricao);   
        formData.append('imagem', {
            uri: imagem,
            type: 'image/jpeg',
            name: new Date() + '.jpg'
        });   

        const response = await axios.post('http://10.137.11.230:8000/api/produtos', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    } catch(error) {
        console.log(error);
    }

    }
    
    const abrirCamera = () =>{
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response=> {
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            }else if(response.error){
                console.log('Erro ao abrir camera')
            }else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri)

            }
            });
        
    }

    const selecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchImageLibrary(options, (response)=>{
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            }else if (response.error) {
                console.log('erro ao abrir a galeria')
            }else{
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
            }
        });
    }


//---------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
    
const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar  backgroundColor="#262626" barStyle="light-content"/>
            <View style={styles.header}>

            <Image source={require('../assets/images/logo2.png')} style={styles.logoTipo} />
        

            
                    <View style ={styles.title}></View >
                    <Text style></Text>


            </View>
            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder="Nome do produto"
                value={nome}
                onChangeText={setNome} />

                <TextInput 
                style={styles.input}
                placeholder="Preço"
                value={preco}
                onChangeText={setPreco} />

<TextInput 
                style={styles.input}
                placeholder="descricao"
                value={descricao}
                onChangeText={setDescricao}
                multiline />
            <View style={styles.alinhamentoImagemSelecionada}>
                {imagem ? <Image source={{uri:imagem}} style={styles.imagemSelecionada}/> :null}

            </View>
            <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                <Text style={styles.imagemButtonText}>Selecionar imagem</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                <Text style={styles.imagemButtonText}>Tirar foto</Text>

             </TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress={CadastroProduto}>
                <Text style={styles.buttonText}>Cadastrar Produto</Text>
             </TouchableOpacity>
            </View>


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
                backgroundColor: '#0D0D0D'
            },

            logoTipo: {
                marginHorizontal: 1,
                width: 360,
                height: 200,
        
        
            },

            

            form: {
                marginTop: 20,
                padding: 25,
                backgroundColor: '#262626',
                marginRight: 30,
                marginLeft: 30,
                borderWidth:3,
             
               
                marginBottom: 1,

            },

            input: {
                height: 40,
                marginTop: 1,
                borderColor: 'grey',
                borderWidth: 1, 
                marginBottom: 20,
                paddingHorizontal: 10,
                borderRadius: 10,
                backgroundColor: '#f0f0f0',

            },
            imageButton: {
                marginTop: 20,
                backgroundColor: '#34baab',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
                marginBottom: 10

            },
            imagemButtonText: {
                color: 'white',
                fontWeight: 'bold',

            },
            imagemSelecionada: {
                width: 200,
                height: 200,
                resizeMode: 'cover',
                borderRadius: 5,
                marginBottom: 10,

            },
            alinhamentoImagemSelecionada: {
                alignItems: 'center'

            },
            button: {
                backgroundColor: '#34baab',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center'                

            },
            buttonText: {
                color: 'white',
                fontWeight: 'bold'
            },
                
      
        
            title: {
                alignItems: 'center',
                translateX: 10,
            },
         
        
            
            header: {
                backgroundColor: '#262626',
                alignItems: 'center',
        
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


export default CadastroProduto;