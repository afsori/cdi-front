import React, { Component } from 'react'
import { connect } from "react-redux"; //higher order component (HOC)

import {getAllData} from "../../config/Redux/Actions/post"


class ContentRedux extends Component {
    state={
        getData:[]
    }
   async  componentDidMount(){
      await this.props.dispatch(getAllData())
            .then(response =>{
                // console.log('ini res', response.value.data)
                this.setState({
                    getData:response.value.data
                })
            })

    
        // console.log('ini getAllData',this.state.getData)
    }
render(){
    // console.log('ini data', this.state.getData)
    return (
        <div>
        {
            this.state.getData.length > 0 ?(
                <ul>
                    {this.state.getData.map(result =>{
                        return(
                        <p key={result.id}>{result.title}</p>
                        )
                    })}
              </ul> 
            ) : (
                <p>ini array kosong</p>
            )
        }
        </div>
    )
}
  
}

const mapStateToProps=(state)=>{
    // console.log('state from ', state.getAllData)
    return{
        getData:state.getAllData
    }

}
// console.log(this.props.getAllData)

export default connect(mapStateToProps)(ContentRedux)
