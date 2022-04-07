import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Alert, Modal } from "react-native";
import styles from "../../style";
import ElementoExtra from "../Camera";
import { Picker } from '@react-native-picker/picker'



export default function Formulario() {


    const [isOpen, setIsOpen] = useState(false);
    const [matricula, setMatricula] = useState(null);
    const [codigo, setCodigo] = useState(null);
    const [valorSituacao, setValorSituacao] = useState();

    function validarCampos() {
        if (codigo != null && valorSituacao != "default" && matricula != null) {
            setIsOpen(true)
        } else{
            Alert.alert("Campos são obrigatórios")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.view}>

                {/* Campo da Matricula */}
                <Text style={styles.text}>
                    Insira a Matricula
                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setMatricula}
                    value={matricula} />

                {/* Campo código */}
                <Text style={styles.text}>
                    Insira o código
                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setCodigo}
                    value={codigo} />

                {/*  Picker de valores */}
                <Text style={styles.text}>Selecione a Situação</Text>
                <Picker
                    style={styles.pickerValues}
                    selectedValue={valorSituacao}
                    onValueChange={(itemValue, itemIndex) => setValorSituacao(itemValue)}>

                    <Picker.Item label="Selecione a Situação" value="" />
                    <Picker.Item label="Leitura Implausível" value="1" />
                    <Picker.Item label="Releitura" value="2" />
                    <Picker.Item label="Situação de Risco" value="3" />
                    <Picker.Item label="Suspeita de Fraude" value="4" />
                    <Picker.Item label="Impedimento de leitura" value="5”" />

                </Picker>
                <TouchableOpacity style={styles.button} onPress={() => validarCampos()}>
                    <Text style={styles.buttonText}>Capturar imagem</Text>
                </TouchableOpacity>
            </View>
            <Modal transparent={true} visible={isOpen}>
                <ElementoExtra 
                 matricula={matricula} 
                 codigo={codigo} 
                 valorSituacao={valorSituacao} 
                 />
            </Modal>
        </View>
    );
}