import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroCliente: React.FC = () => {

    const [Clientes, setClientes] = useState<Cliente[]>([]);
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>("");
    const [numero, setNumero] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');
    
    const cadastrarCliente = async () => {   
        try{
        const formData = new FormData();
        formData.append('nome', nome);   
        formData.append('email', email);   
        formData.append('numero', numero);   
        formData.append('endereco', endereco);   
        formData.append('telefone', telefone);   
        formData.append('cpf', email);   
        formData.append('password', password);   
        formData.append('imagem', {
            uri: imagem,
            type: 'image/jpeg',
            name: new Date() + '.jpg'
        });   

        const response = await axios.post('http://10.137.11.230:8000/api/clientes', formData, {
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
                placeholder="Nome do Cliente"
                value={nome}
                onChangeText={setNome} />

                <TextInput 
                style={styles.input}
                placeholder="Nome do Cliente"
                value={nome}
                onChangeText={setNumero} />

                <TextInput 
                style={styles.input}
                placeholder="email"
                value={email}
                onChangeText={setEmail} />


                <TextInput 
                style={styles.input}
                placeholder="telefone"
                value={telefone}
                onChangeText={setTelefone} />

                <TextInput 
                style={styles.input}
                placeholder="endereco"
                value={endereco}
                onChangeText={setEndereco} />

                <TextInput 
                style={styles.input}
                placeholder="cpf"
                value={cpf}
                onChangeText={setCpf}
                multiline />

                <TextInput 
                style={styles.input}
                placeholder="password"
                value={password}
                onChangeText={setPassword}
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
             <TouchableOpacity style={styles.button} onPress={cadastrarCliente}>
                <Text style={styles.buttonText}>Cadastrar Cliente</Text>
             </TouchableOpacity>
            </View>

        </View>
    );
}



     const styles = StyleSheet.create({
            container: {
                flex: 1
            },

            header: {
                backgroundColor: 'red',
                paddingVertical: 30,
                alignItems: 'center'

            },

            headerText: {
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
                

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
            }


     })


export default CadastroCliente;