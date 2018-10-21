import React, { Component } from 'react';
import TableDataRow from './TableDataRow';


class TableData extends Component {
    GetTextID = (IdUser)=>{
        
        this.props.GetTextIDFormEditProps(IdUser);
    }
    MappingDataUser = () => {
        return( 
        this.props.DataUserProps.map((value, key) => (

            <TableDataRow ConectHandleClickButtonEditProps={()=>this.props.HandleClickButtonEditProps()}
            ConectEditUserProps={(user)=>this.props.EditUserProps(value)} 
            stt={key} Id={value.id} Name={value.name}
            Tel={value.tel} Permission={value.Permission}
            ClickButtonRemove={(IdUser)=>this.GetTextID(IdUser)}
            />            
        ))
    );   
    }
    render() {

        return (

            <div className="col">
                <table className="table table-{1:striped|sm|bordered|hover|inverse} table-inverse">
                    <thead >
                        <tr className="text-center">
                            <th>STT</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Permission</th>
                            <th>Manipulation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.MappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;