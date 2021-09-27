import { StyleSheet } from "react-native";

const css = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
    },

    container2: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
      },
  
    mapa: {
      height: "60%",
      backgroundColor: "black",
    },
  
    caixa: {
      height: "40%",
      backgroundColor: "gray",
    },
    
    darkbg: {
        backgroundColor:"#333"
    },

    login__logomarca: {
        marginBottom:10
    },

    login_msg:(text='none')=> ({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginTop:5,
        marginBottom:15,
        display: text
    }),

    login__form: {
        width:"80%"
    },

    login__input: {
        backgroundColor:"#fff",
        fontSize:19,
        padding:9,
        marginBottom:15
    },

    login__button: {
        padding:12,
        backgroundColor:"#555",
        alignSelf: "center",
        borderRadius:5
    },

    login__buttonText: {
        fontWeight:"bold",
        fontSize:22,
        color:"#333"
    }

  });

  export {css};