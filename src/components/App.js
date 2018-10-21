import React, { Component } from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateEdit: false,
      data: [],
      TextSearch:'',
      StateButtonEdit:false,
      UserEditOject:{}   
          
    }
  }
  componentWillMount (){
    if(localStorage.getItem('UserData')===null){
      localStorage.setItem('UserData',JSON.stringify(DataUser));      
    }
    else{
      let temp =JSON.parse(localStorage.getItem('UserData'));      
      this.setState ({
        data:temp

      });
    }
  }
  HandleClickButtonEdit= () =>{
    this.setState({

      StateButtonEdit: !this.state.StateButtonEdit

    });   
  }
  GetTextIDFormEdit=(IdUser)=>{
    
    var tempData=this.state.data.filter(item =>item.id !== IdUser);
    this.setState ({
      data:tempData 
    });
    localStorage.setItem('UserData',JSON.stringify(tempData));    
  }
  GetTextSearch = (dl) => {
    this.setState ({
      TextSearch: dl
    });   
  }
  EditUser =(user)=> {
   this.setState ({
    UserEditOject:user
   });  
  }
  GetTextAddUser =(name,tel,permission)=>{
    const code =require('uuid/v3');
    let Item={};
    Item.id=code.DNS;
    Item.name=name;
    Item.tel=tel;
    Item.Permission=parseInt(permission);
    let Items=this.state.data;
    Items.push(Item);
    this.setState({
      data:Items
    });
    localStorage.setItem('UserData',JSON.stringify(Items));    
  }
  GetTextEditUser =(info)=>{
    this.HandleClickButtonEdit();
    console.log(info.Permission);
    this.state.data.forEach((value,key)=>{
      
       if(value.id === info.id)
       {         
         value.name=info.name;
         value.tel=info.tel;
         value.Permission=parseInt(info.Permission);
       }
    });
    localStorage.setItem('UserData',JSON.stringify(this.state.data)); 
  }
  
  HandleClick = () => {
    this.setState({

      StateEdit: !this.state.StateEdit

    });
    
}

  render() {     
   console.log(this.state.data);
    let ketqua = [];
    this.state.data.forEach((value) => {
      if (value.name.indexOf(this.state.TextSearch) !== -1) {
        ketqua.push(value);
      }     
    });    
    return (  
      <div>
        <Header/>
        <SearchForm Result={() => this.HandleClick()}
         state={this.state.StateEdit} CheckConectProps={(dl) => this.GetTextSearch(dl)}
          stateForm={this.state.StateButtonEdit} 
          // HandleClickButtonEditProps={()=>this.HandleClickButtonEdit()}
          GetTextEditUserProps={(info)=>this.GetTextEditUser(info)}
          UserEditOject={this.state.UserEditOject} />
        <div className="Data-Table">
          <div className="container">
            <div className="row">
              <TableData DataUserProps={ketqua} EditUserProps={(user)=>this.EditUser(user)}  HandleClickButtonEditProps={()=>this.HandleClickButtonEdit()} 
              GetTextIDFormEditProps={(IdUser)=>this.GetTextIDFormEdit(IdUser)} 
              />
              <AddUser state={this.state.StateEdit} GetTextAddUserProps={(name,tel,permission)=>this.GetTextAddUser(name,tel,permission)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
