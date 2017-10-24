import React from 'react';
export default class SearchBox extends React.Component{
   
    

    render(){
        
        return <div>
                   <form>
                        <label>
                            <input type="text"
                                   value={this.props.searchWord}
                                   onChange={this. props.handleInputChange}/>           
                        </label>
                        <span>
                            <button type='submit' onClick={this.props.handleQuerySearch}> Search</button>
                        </span>
                   </form>
               </div>
    }
}