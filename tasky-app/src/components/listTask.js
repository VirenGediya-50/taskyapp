import React, { Component } from 'react'

import ListComponent from './listComponent'


class ListTask extends Component {
    render() {
        //   console.log(this.props.list)
        return (
            <div>
                <div className='panel panel-default'>
                    <div className="panel-heading">Tasks</div>
                    <div className="panel-body">
                        {
                            this.props.list.map((task, index) => {
                                return <div key={index} className={'list-group-item col-sm-12'}>
                                    <ListComponent index={index} deleteTask={this.props.deleteTask} currentPage={this.props.currentPage} editTask={this.props.editTask} task={task} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTask