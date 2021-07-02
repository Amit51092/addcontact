import React from 'react';

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
        id: 1
    };
    add = (e) => {
      // console.log(this.props)
      e.preventDefault();
      if(this.state.name === "" || this.state.email === "") {
          alert("ALl the fields are mandatory!");
          return;
        
      }
      var amitG=(JSON.parse(localStorage.getItem("contacts")) && (JSON.parse(localStorage.getItem("contacts")).length) + 1)
      this.state["id"]=amitG
      console.log("fuhsugh",amitG,this.state)
  
      this.props.addContactHandler(this.state);
      this.setState({name:"",email:""});
    };
        
                          
      
    render() {
        return (
            
            <div className="ui main">
            
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
            <div className="field">
            <label>Name</label>
            <input type="text"
             name="name" 
             placeholder="Name"
             value={this.state.name}
              onChange={ (e) => this.setState({ name: e.target.value })}
             />
            </div> <br/><br/>
            <div className="field">
            <label>Email</label>
            <input type="text"
             name="email" 
             placeholder="Email"
             value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
             />
            
            </div>
              <br/>
            <button className="ui button blue">Add</button>
            
            
            </form>
            
               
              
               </div>
        );
    }
}

export default AddContact