import { StyleSheet } from 'react-native';
import AppColor from './AppColor';

const AppStyle = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: AppColor.baseColor,
    },
    zipContainer: {
        backgroundColor: AppColor.baseColor,
        height: 60,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    submit: {
        height: 40,
        backgroundColor: AppColor.theamColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AppColor.baseColor,
        tintColor: AppColor.baseColor
    },

    textInput: {
        fontSize: 16,
        textAlign: 'left',
        backgroundColor: AppColor.baseColor,
        marginHorizontal: 15,
        width: '70%',
        height: '80%',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 5,
    },

    weatherListContainer: {
        flex: 1,
        marginTop: 0,
        width: '100%',
        backgroundColor: 'black',
    },


    header: {
        fontSize: 24,
        backgroundColor: 'yellow',
        color: 'white',
        width: '100%',
        height: 50,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'flex-start',
        textAlign: 'left',
        justifyContent: 'space-between',
    },
    itemContainer: {
        backgroundColor: 'gray',
        padding: 15,
        flexDirection: 'row',
        marginVertical: 5,
    },
    item: {
        backgroundColor: 'gray',
        padding: 15,
        marginVertical: 5,
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        
    },
    temp: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'flex-start',
        textAlign: 'left',
    },
    detailOuterComtainer: {
        flexDirection: 'column',
        paddingLeft: 40,
        alignItems: 'center',
        width:'100%',
        backgroundColor: 'yellow'
    },

    detailInnerContainer: {
        flexDirection: 'row',
        paddingLeft: 0,
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: 'yellow',
        width:'100%'
    },
    detailTextTitle:{ fontSize: 20,
         padding: 15,
          color: 'black',
    },
    detailTextDesc:{ 
        fontSize: 19, 
        color: 'black',
   }
});

export default AppStyle;