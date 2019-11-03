import React, { Component } from 'react'

export class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            imgPath:""
        }
    }

    handleChange = (field, e) => {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
        // console.log(fields)  
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {}
        let formIsValid = true;

        if (!fields["title"]) {
            console.log("Empty")
            formIsValid = false;
            errors["title"] = "Title cannot be empty";
        }

        if (typeof fields["title"] !== "undefined") {
            if (!fields["title"].match(/^[a-zA-Z]+$/)) {
                console.log("Hi")
                formIsValid = false;
                errors["title"] = "Only letters";
            }
        }
        if (!fields["description"]) {
            console.log("Empty")
            formIsValid = false;
            errors["description"] = "Discription cannot be empty";
        }
        if (typeof fields["description"] !== "undefined") {
            if (!fields["description"].match(/^[a-zA-Z]+$/)) {
                console.log("Hi")
                formIsValid = false;
                errors["description"] = "Discription is Only letters";
            }
        }
        this.setState({
            errors: errors,
        })
        return formIsValid
    }


    saveTask = (e) => {
        // e.preventDefaulf()
        if (this.handleValidation()) {
            console.log(this.state.fields['title'])
            console.log(this.state.fields['description'])

            let newTaskObj = {
                title: this.state.fields['title'],
                content: this.state.fields['description'],
                categories: document.getElementById('setPriority').value,
                id: new Date().valueOf()
            }
            this.props.saveTask(newTaskObj);
            this.setState({
                fields: {}
            })
        }

        document.getElementById('txtTitle').value = ''
        document.getElementById('txtDesc').value = ''
        document.getElementById('setPriority').value = 'High'

    }

    uploadImage = () =>{

    }

    render() {
        return (
            <div className={'panel panel-default'}>
                <div className="panel-heading">
                    Add Task
                </div>
                <div className="panel-body">
                    <div className='form-group'>
                        <div className={"col-sm-2"}>
                            <input
                                refs="title"
                                className={'form-control'}
                                id='txtTitle'
                                onChange={this.handleChange.bind(this, "title")}
                                value={this.state.fields['title']}
                                placeholder={'Title'}
                                type={'text'}
                                required
                            />
                            <span style={{ color: 'red' }}>
                                <small>{this.state.errors["title"]}</small>
                            </span>
                        </div>
                        <div className={"col-sm-4"}>
                            <input
                                className={'form-control'}
                                id='txtDesc'
                                onChange={this.handleChange.bind(this, "description")}
                                placeholder={'Description'}
                                value={this.state.fields['description']}
                                type={'text'}
                                required
                            />
                            <span style={{ color: 'red' }}>
                                <small>{this.state.errors["description"]}</small>
                            </span>
                        </div>
                        <div className="col-sm-2">
                            <select id={"setPriority"} className={'form-control'}>
                                <option value={'High'}>High</option>
                                <option value={'Medium'}>Medium</option>
                                <option value={'Low'}>Low</option>
                            </select>
                        </div>
                        <div className={"col-sm-4"} style={{border:1}}>
                            <button
                                className={'btn btn-info'}
                                style={{marginRight:30}}
                                onClick={() => { this.saveTask(this) }}>Add Task</button>

                            <button
                                className={'btn btn-danger'}
                                style={{marginRight:30}}
                                onClick={() => { this.saveTask(this) }}>Add Photo</button>
                            <img
                                width={100}
                                height={100}
                                src={this.state.imgPath}
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask