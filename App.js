import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View,SafeAreaView ,TextInput,TouchableHighlight} from 'react-native';

export default class App extends  React.Component {
 // const handlePress=()=>console.log("click");
 state = {
  inputquery: '',
  tempmainQuery:'',
  finalResult:'',
  isEqualscliked:false,
  tempResult:'',
  operatorinUse:['+','-','x','/','.','%'],
  operatorinUseexeption:['+','-','x','/','%']
 
};
  onPressButton(e,data){ 
    let lastcharcter=String(this.state.inputquery).charAt(String(this.state.inputquery)?.length-1)
    if(this.state.operatorinUse.includes(lastcharcter) && this.state.operatorinUse.includes(data)){
      }
    else{
    if(this.state.isEqualscliked==true && !(this.state.operatorinUseexeption.includes(data))){
      this. clearQuery()
    }
    this.state.isEqualscliked=false;
    this.state.inputquery += data;
    if(isNaN(data) && data !='.'){
      this.state.tempmainQuery += ' ';
    }
    this.state.tempmainQuery += data;
    this.setState({inputquery: this.state.inputquery})
    this.calculateResult(e,data,'0')
  }
  }
  onPressbackspace(e,data){
    this.state.isEqualscliked=false;
    this.state.inputquery=this.state.inputquery.substring(0,this.state.inputquery?.length-1)
    let lastChar=this.state.tempmainQuery.charAt(String(this.state.tempmainQuery)?.length-1)
    if(this.state.operatorinUseexeption.includes(lastChar)){
      this.state.tempmainQuery=this.state.tempmainQuery.substring(0,this.state.tempmainQuery?.length-2)
    }else{
      this.state.tempmainQuery=this.state.tempmainQuery.substring(0,this.state.tempmainQuery?.length-1)
    }
    this.setState({inputquery: this.state.inputquery});
    this.calculateResult(e,data,'0')
  }
  onEqualClick(e,data){
    this.state.isEqualscliked=true;
    this.calculateResult(e,data,'1')
  }

  onPress(){}
  calculateResult(e,data,type){
    let splitData=this.state.tempmainQuery.split(' ')
    let result='';
    if(splitData!=''){

    result=parseFloat(splitData[0])
    for(var i=0;i<splitData.length-1;i++){
      if(splitData[i+1].charAt(0) == '+'){
        result =parseFloat(result) + parseFloat(splitData[i+1].substring(1))
      }
      else if(splitData[i+1].charAt(0) == '-'){
        result = parseFloat(result) - parseFloat(splitData[i+1].substring(1))
      }
      else if(splitData[i+1].charAt(0) == 'x'){
        result = parseFloat(result) * parseFloat(splitData[i+1].substring(1))
      }
      else if(splitData[i+1].charAt(0) == '/'){
        result =parseFloat(result) / parseFloat(splitData[i+1].substring(1))
      }
      else if(splitData[i+1].charAt(0) == '%'){
        result =parseFloat(result) / 100;
      }

    }
    
  }
    if(type==1){
      this.setState({finalResult: parseFloat(result)})
      this.setState({inputquery: parseFloat(result)})
      this.state.tempResult='';
      this.setState({tempResult:  this.state.tempResult})

    }
    else {
      if(!isNaN(result)){
        if(result==''){
          this.setState({tempResult: ''})
        }
        else{
          this.setState({tempResult: parseFloat(result)})
        }
      }
    }
  }
  clearQuery(){
    this.state.tempmainQuery='';
    this.state.inputquery='';
    this.state.finalResult='';
    this.state.tempResult='';
    this.setState({inputquery: this.state.inputquery});
    this.setState({finalResult: this.state.finalResult});
    this.setState({tempResult:  this.state.tempResult})


  }
  render() {
  return (
    <SafeAreaView style={styles.displayback} >
      <View style={styles.resultsBox}>
      <Text style={[styles.typednumber, this.state.isEqualscliked==true ?styles.numberinputsgreen :'']}> {this.state.inputquery}</Text>
      <Text style={styles.tempresultnumber}>{this.state.tempResult}</Text> 
      </View>


      <View  style={styles.mainflexbox}>
      <View style={styles.flexbox}>
      <TouchableHighlight onPress={(e) =>this.clearQuery(e,'C')}><Text style={[styles.numberinputs,styles.numberinputsred]} >C</Text></TouchableHighlight>
      <TouchableHighlight onPress={(e) =>this.onPressBrutton(e,'()')}><Text style={[styles.numberinputs,styles.numberinputsgreen]}>()</Text></TouchableHighlight>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'%')}><Text style={[styles.numberinputs,styles.numberinputsgreen]} >%</Text></TouchableHighlight>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'/')}><Text style={[styles.numberinputs,styles.numberinputsgreen]} >/</Text></TouchableHighlight>
      </View>

      <View style={styles.flexbox}>
      <TouchableHighlight onPress={(e) =>this.onPressButton(e,'8')}><Text style={styles.numberinputs} >7</Text></TouchableHighlight>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'8')}><Text style={styles.numberinputs} >8</Text></TouchableHighlight>
      <TouchableHighlight onPress={(e) =>this.onPressButton(e,'9')}><Text style={styles.numberinputs}  >9</Text></TouchableHighlight>
      <TouchableHighlight onPress={(e) =>this.onPressButton(e,'x')}><Text style={[styles.numberinputs,styles.numberinputsgreen]}  >x</Text></TouchableHighlight>
      </View>

      <View style={styles.flexbox}>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'4')}><Text style={styles.numberinputs}>4</Text></TouchableHighlight>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'5')}><Text style={styles.numberinputs} >5</Text></TouchableHighlight>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'6')}><Text style={styles.numberinputs} >6</Text></TouchableHighlight>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'-')}><Text style={[styles.numberinputs,styles.numberinputsgreen]} >-</Text></TouchableHighlight>
      </View>

      <View style={styles.flexbox}>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'1')}><Text style={styles.numberinputs}>1</Text></TouchableHighlight>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'2')}><Text style={styles.numberinputs} >2</Text></TouchableHighlight>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'3')}><Text style={styles.numberinputs} >3</Text></TouchableHighlight>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'+')}><Text style={[styles.numberinputs,styles.numberinputsgreen]} >+</Text></TouchableHighlight>
      </View>

      <View style={styles.flexbox}>
      <TouchableHighlight  onPress={(e) =>this.onPressButton(e,'.')}><Text style={styles.numberinputs}>.</Text></TouchableHighlight>
      <TouchableHighlight onPress={(e) =>this.onPressButton(e,'0')}><Text style={styles.numberinputs}  >0</Text></TouchableHighlight>
      <TouchableHighlight onPress={(e) =>this.onPressbackspace(e,'<-')}><Text style={styles.numberinputs}>bs</Text></TouchableHighlight>
      <TouchableHighlight  onPress={(e) =>this.onEqualClick(e,'=')}><Text style={[styles.numberinputs,styles.numberinputsgreen]} >=</Text></TouchableHighlight>
      </View>

      </View>
    </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  displayback:{
    backgroundColor: '#000',
    width:'100%',
    height:'100%',
    marginTop:30
    
  },
  mainflexbox:{
    padding: 10,
    width:'100%',
    display:'flex',
     flexDirection:'column',
    // flexWrap:'wrap',
    flex: 1,
  },
  flexbox:{
    flex: 1,
    flexDirection:'row',   
    justifyContent: 'space-between',
    width:'100%',
    // flexWrap:'wrap',
    // alignItems:'flex-start'
  },
  numberinputs:{
    color: '#fff',
    width: 60,
    height: 60,
    borderRadius: 60/2,
    backgroundColor:'#2b2b2b',
    justifyContent: 'center',
    display:'flex',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '900',
    borderWidth: 1,
    borderColor: '#fff',
    textAlign:'center',
    textAlignVertical:'center'
  },
  numberinputsgreen:{
    color:'#00dc00'
  },
  numberinputsred:{
    color:'#c84f4f'
  },
  resultsBox:{
    height:'35%',
    borderBottomColor:'#fff',
    borderBottomWidth:1,
    justifyContent:'center'
  },
  typednumber:{
    display:'flex',
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    height:'70%',
   textAlignVertical:'center',
   alignItems:'center',
   textAlign:'right',
   justifyContent: 'center',
  },
  
  tempresultnumber:{
    display:'flex',
    color: '#cccccc',
    fontSize: 22,
    height:'50%',
   textAlignVertical:'center',
   textAlign:'right',
   alignItems:'center',
   justifyContent: 'center',
  }
});
