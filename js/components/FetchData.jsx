import React from 'react';
import SearchBox from './SearchBox.jsx';
export default class FetchData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchWord:'',
            render: false,
        }
        
    }

    handleInputChange=(event)=>{
        this.setState({
            searchWord: event.target.value,
        })
    }
    handleQuerySearch=(event)=>{
        event.preventDefault()
        this.setState({
            render: false,
        })
    this.handleFetchData()
    }

    handleFetchData = () => {
        const apiURL=`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.searchWord}`;
        console.log (apiURL)
        return fetch(apiURL)
             .then(r=>r.json())
             .then(data=>{
                 
                 const cities=(data.map(a=>a.name))
                 if ((!cities.includes(this.state.cityName))){
                   
                    this.setState({
                        alertDisplay: true,
                    })
                }else{    
                return fetch()
                   .then(r=>r.json())
                   .then(data=>{
                  console.log ('fetch')
                    this.setState({

                    render: true,})  
            })}})}
            


    render(){
        const {searchWord, handleInputChange, handleQuerySearch}=this.state
        return <div>
               <SearchBox searchWord={searchWord}
                          handleInputChange={this.handleInputChange} 
                          handleQuerySearch={this.handleQuerySearch} />
               </div>

    }
}