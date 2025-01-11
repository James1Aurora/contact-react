import React from 'react';


class MyForm extends React.Component{
    
    constructor(props){
        super(props);

        //initial state
        this.state = {
            name: '',
            email: '',
            gender: 'Male'
        };


        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onNameChangeEventHandler(event){
        this.setState(() => {
            return {
                name: event.target.value
            };
        });
    }

    onEmailChangeEventHandler(event){
        this.setState(() => {
            return {
                email: event.target.value
            };
        });

    }
    onGenderChangeEventHandler(event){
        this.setState(() => {
            return {
                gender: event.target.value
            };
        }
        );
    }
    
    onSubmitEventHandler(event){
        event.preventDefault();
        
        const message = `
        Name: ${this.state.name}
        Email: ${this.state.email}
        Gender: ${this.state.gender}
        `;
        alert(message);
    }



    render() {
        return (
          <div>
            <h1> Register Form</h1>
            <form>
              <label htmlFor="name">Name: </label>
              <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEventHandler} />
              <br />
              <label htmlFor="email">Email: </label>
              <input id="email" type="text" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
              <br />
              <label htmlFor="gender">Gender: </label>
              <select id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
              </select>
              <br />
              <button type="submit">submit</button>
            </form>
          </div>
        );
      }
     }

export default MyForm;