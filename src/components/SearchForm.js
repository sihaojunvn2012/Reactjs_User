import React, { Component } from 'react';
import EditUser from './EditUser';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            TempValue:''
        }
    }
    DisplayFormEdit =()=>{
        if(this.props.stateForm ===true){
            return <EditUser SaveFormEdit={(info)=>this.props.GetTextEditUserProps(info)}           
            UserEditOjectProps={this.props.UserEditOject}
            />
        }        
    }
    IsChange = (event) => {
        this.setState({
            TempValue: event.target.value
        })
    //    this.props.CheckConectProps(this.state.TempValue); 
    }
    DisplayButton = () => {
        if (this.props.state === true) {
            return <button className="btn btn-block btn-outline-secondary mb-3 " onClick={() => this.props.Result()}>Close</button>;
        }
        else {
            return <button className="btn btn-block btn-outline-info mb-3" onClick={() => this.props.Result()} >Add New</button>;
        }
    }
    render() {

        return (
            <div>
                {/*Begin Search */}
                <div className="Search">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <div className="btn-group w-100">
                                        <input type="text" name="Search" onChange={(event) => this.IsChange(event)} className="w-50 form-control Search" placeholder="Import Keywords" />
                                        <button type="button" onClick={(dl)=>this.props.CheckConectProps(this.state.TempValue)} className="btn btn-primary h-25 ">Search </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <hr />
                            </div>
                            <div className="col-12">
                                {this.DisplayFormEdit()}
                                {this.DisplayButton()}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Search */}

            </div>
        );
    }
}

export default SearchForm;