import React, { Component } from 'react';

class TableDataRow extends Component {
    constructor(props) {
        super(props);
     
    }

    ClickButtonRemove =(IdUser)=>{
        this.props.ClickButtonRemove(IdUser);        
    }
    
    CheckConectEditUserProps =()=>{        

        this.props.ConectEditUserProps();
        this.props.ConectHandleClickButtonEditProps();

    }
    PermissionShow =()=>{
        if (this.props.Permission===1){
            return "Admin";
        }
        else if (this.props.Permission===2){
             return "Moderator";
        }
        else{
            return "Normal";
        }
    }
    render() {
       
        return (
            <tr className="text-center">
                <td >{this.props.stt+1}</td>
                <td>{this.props.Name}</td>
                <td>{this.props.Tel}</td>
                <td>{this.PermissionShow()}</td>
                <td>
                    <div className="btn-group text-center">
                        <button type="button" className="btn btn-warning Edit"   onClick={()=>this.CheckConectEditUserProps()}  >
                            <i className="fas fa-edit" />Edit</button>
                        <button type="button" className="btn btn-danger Remove" onClick={()=>this.ClickButtonRemove(this.props.Id)}>
                            <i className="fas fa-eraser" />Remove</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;