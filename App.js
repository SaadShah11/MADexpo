import React,{useState} from 'react';
import { StyleSheet, Button ,Text, View,TouchableOpacity } from 'react-native';

export default function App() {

 const [getLabel,setLabel] = useState({Label: ''})

  const input =(value) =>{
  
   setLabel({Label: getLabel.Label+value})
 }

  return (
    <View style={styles.container}>
      <View>
      <Text >React Hooks and States TASK</Text>
      </View>
      <Text style={styles.label}>
        {getLabel.Label}
      </Text>

     <View style={{flexDirection: "row" }}>
      < TouchableOpacity style={styles.buttonoperand} onPress={()=> input('7')} ><Text >7</Text></TouchableOpacity>
      
      < TouchableOpacity style={styles.buttonoperand}  onPress={()=> input('8')}><Text >8</Text></TouchableOpacity>
      
      < TouchableOpacity style={styles.buttonoperand} onPress={()=> input('9')}><Text >9</Text></TouchableOpacity>
      
      < TouchableOpacity style={styles.button} onPress={()=> input('AC')}><Text >+</Text></TouchableOpacity>
      
      </View>

      <View style={{flexDirection: "row"}}>
      
      < TouchableOpacity style={styles.buttonoperand} onPress={()=> input('4')}><Text >4</Text></TouchableOpacity>
      
      < TouchableOpacity style={styles.buttonoperand} onPress={()=> input('5')} ><Text >5</Text></TouchableOpacity>
      
      < TouchableOpacity style={styles.buttonoperand} onPress={()=> input('6')}><Text >6</Text></TouchableOpacity>
      
      < TouchableOpacity style={styles.button} onPress={()=> input('+')} ><Text >-</Text></TouchableOpacity>
      
      </View>
      <View style={{flexDirection: "row"}}>
        
      < TouchableOpacity style={styles.buttonoperand} onPress={()=> input('1')}><Text >1</Text></TouchableOpacity>
      
      < TouchableOpacity style={styles.buttonoperand} onPress={()=> input('2')}><Text >2</Text></TouchableOpacity>
      
      < TouchableOpacity style={styles.buttonoperand} onPress={()=> input('3')}><Text >3</Text></TouchableOpacity>
           
      < TouchableOpacity style={styles.button} onPress={()=> input('-')}><Text >/</Text></TouchableOpacity>
       </View>

       <View style={{flexDirection: "row"}}>
        
      < TouchableOpacity style={styles.buttonoperand} onPress={()=> input('0')}><Text >0</Text></TouchableOpacity>
      
      < TouchableOpacity style={styles.buttonoperand} onPress={()=> input('=')}><Text >=</Text></TouchableOpacity>
      
      < TouchableOpacity style={styles.buttonoperand} onPress={()=> input('*')}><Text >*</Text></TouchableOpacity>
           
      < TouchableOpacity style={styles.button} onPress={()=> input('/')}><Text >/</Text></TouchableOpacity>
       </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    padding: 20,
    width: 60,
    backgroundColor: '#246D5E',
    borderWidth:0.5,
    borderColor:'black',
    alignItems: 'center'
  },
  buttonoperand:{
    padding: 20,
    width: 60,
    backgroundColor: 'white',
    borderWidth:0.5,
    borderColor:'black',
    alignItems: 'center'
  },
  textstyles:{
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  label:{
    backgroundColor: "grey",
    width: 240,
    height: 50,
    color: 'white',
    alignItems: 'center',
    textAlign: 'right'
    
  }
}
);
