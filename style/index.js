import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    /* ESTILOS GERAIS */

    container: {
        backgroundColor: "#FFF",
    },

    view: {
        bottom: 90,
    },

    text: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 0,
        color: "black",
        alignSelf: "center",
    },

    textInput: {
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: 'grey',
        color: "black",
        borderRadius: 10,
        margin: 8,
        borderStyle: "solid",
        paddingTop: 15,
        width: 250,
        alignSelf: "center",

    },

    /* ELEMENTO EXTRA */

    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        width: "100%",
        height: "100%",
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
    },
    buttonFlip: {
        position: "absolute",
        bottom: 50,
        left: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 20,
        width: 50,
        height: 50,
        borderRadius: 50,

    },

    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 0,
        color: "black",
        alignSelf: "center",
    },
    buttonTake: {
        position: "absolute",
        bottom: 50,
        right: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 20,
        width: '1%',
        height: '1%',
        borderRadius: 50,

    },

    contentPhoto: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        flex: 1,
    },

    img: {
        width: "100%",
        height: "80%",
    },

    buttonClose: {
        position: "absolute",
        top: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    contentButton: {
        flex: 1,
        flexDirection: "row"
    },

    pickerValues: {
        color: '#000000',
        margin: 5,
        padding: 5,
    },
});

export default styles;