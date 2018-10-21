import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateEdit: false,            
            Name:'',
            Tel:'',
            Permission:''
        }
    }
    IsChange = (event)=>{
        const Name=event.target.name;
        const Text=event.target.value;
        this.setState({

           [Name]:Text 
                       
        });
       
    } 
    DisplayFrom = () => {
        if (this.props.state === true) {
            return (

                <div className="col">
                <form>
                <div className="card text-left">
                    <div className="card boder-primary ">
                        <div className="card-header  ">Add New To User System</div>
                        <div className="card-body text-primary ">
                            <div className="form-group">
                                <label >Name</label>
                                <input type="text" name="Name" onChange={(event)=>this.IsChange(event)} className="form-control" placeholder="Name" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label >Number Phone</label>
                                <input type="text" name="Tel" onChange={(event)=>this.IsChange(event)} className="form-control" placeholder="Number Phone" aria-describedby="helpId" />
                            </div>
                            <div className="form-group" >
                                <label >Manipulation</label>
                                <select className="custom-select" name="Permission" onChange={(event)=>this.IsChange(event)}  >
                                    <option >Premission</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <input type="reset" value="Submit" className="btn btn-primary form-control" onClick={(name,tel,permission)=>this.props.GetTextAddUserProps(this.state.Name,this.state.Tel,this.state.Permission)} />
                        </div>
                    </div>
                </div>
                </form>
                </div>    

            );
        }
    }


    render() {

        return (
            <div>

                {
                    this.DisplayFrom()
                }
            </div>

        );
    }
}

export default AddUser;