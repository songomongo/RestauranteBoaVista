import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

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

    

    return (
        <View style={styles.container}>
            <StatusBar  backgroundColor="red" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Restaurante Boa Vista</Text>
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

        </View>
    );
}



     const styles = StyleSheet.create({
            container: {
                flex: 1
            },

            

            form: {
                padding: 10,
                backgroundColor: '#f0f0f0',
                marginBottom: 10

            },

            input: {
                height: 40,
                borderColor: 'grey',
                borderWidth: 1, 
                marginBottom: 10,
                paddingHorizontal: 10,
                borderRadius: 10

            },
            imageButton: {
                backgroundColor: 'red',
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
                backgroundColor: 'red',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center'                

            },
            buttonText: {
                color: 'white',
                fontWeight: 'bold'
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


export default CadastroProduto;