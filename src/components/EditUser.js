import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state =({
            id:this.props.UserEditOjectProps.id,
            name:this.props.UserEditOjectProps.name,
            tel:this.props.UserEditOjectProps.tel,
            Permission: this.props.UserEditOjectProps.Permission

        })
    }
    SaveButton=(info)=>{
        info= {};
        info.id = this.state.id;   
        info.name=this.state.name;
        info.tel=this.state.tel;
        info.Permission=this.state.Permission;
        this.props.SaveFormEdit(info);        
    }
    
    
    IsChange=(event)=>{
        const Name=event.target.name;
        const Value=event.target.value;
        this.setState ({
            [Name]:Value
        });       
  }
    render() {
        return (
            <form className="mb-3">
                <div className="card text-left">
                    <div className="card boder-primary ">
                        <div className="card-header text-center  ">Edit User</div>
                        <div className="card-body text-primary ">
                            <div className="form-group">
                                <label >Name</label>
                                <input defaultValue={this.props.UserEditOjectProps.name} type="text" name="name" onChange={(event)=>this.IsChange(event)} className="form-control" placeholder="Name" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label >Number Phone</label>
                                <input defaultValue={this.props.UserEditOjectProps.tel} type="text" name="tel" onChange={(event)=>this.IsChange(event)}  className="form-control" placeholder="Number Phone" aria-describedby="helpId" />
                            </div>
                            <div className="form-group" >
                                <label >Manipulation</label>
                                <select defaultValue={this.props.UserEditOjectProps.Permission} className="custom-select" name="Permission" onChange={(event)=>this.IsChange(event)}>
                                    <option >Permission</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <input type="button" value="Save" className="btn btn-primary form-control" onClick={(info)=>this.SaveButton(info)} />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default EditUser;