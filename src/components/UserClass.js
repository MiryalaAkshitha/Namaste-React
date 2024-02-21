 import React from "react";
 
 class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           userInfo :{
            name :"Dummy",
            Followers:"Default"
           }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Miryalaakshitha");
const json = await data.json()
console.log(json)
this.setState({
    userInfo:json
})
    }
    render(){
        const {name,location} = this.props;
        return(
            
            <div className="user-card" style={{borderRadius:"0.5px",justifyContent:"center",alignItems:"center",height:"100vh",display:"flex",flexDirection:"column"}}>
                <img src={this.state.userInfo?.avatar_url} height="300px" width="300px" borderRadius={"3px"}/>
                <div>
           <h2 className="">Name :  {this.state.userInfo.name}</h2>
           <h3>Followers:   {this.state.userInfo.followers}</h3>
           <h4>Twitter :  {this.state.userInfo.twitter_username}</h4>
           </div>


            </div>
        )
    }
 }

 export default UserClass;