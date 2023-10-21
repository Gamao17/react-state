import React, {Component} from "react";
import Img from '../img/Mounir.jpg'
import '../App.css'


class Person extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                Person: { fullname: 'Mounir Ismael', bio: "Je mets en place des systèmes de gestion efficaces et mobilise les équipes pour atteindre l'excellence opérationnelle. Passionné par mon métier, je contribue au succès des organisations grâce à mon expertise en gestion de la qualité.", imgSrc: Img , profession: 'Responsable qualité' },
                show : true,
                interval : 0, 
                        }
        }


startInter = ()=>{
    this.setState({interval : 0})
        setInterval(()=>{
                this.setState(prevState => ({interval : prevState.interval + 1}));
            }, 1000);
        }

        
    componentDidMount() {
        this.startInter()
    }


componentDidUpdate(prevProps,prevState){
    if(prevState.show !== this.state.show){
        if(this.state.show){
            this.startInter()}
        else{
            clearInterval(this.interval)
            }
    }
}

componentWillUnmount(){
    clearInterval(this.state.interval)
    
}
    
showOrHide = () => this.setState({ show: !this.state.show });

    render(){
        const {show,interval}=this.state
        const {fullname,bio,imgSrc,profession}=this.state.Person

        return(
    <div className="bg">
        <div>
            <button onClick={this.showOrHide} style={{display:'flex', position :'absolute',
            bottom: 90, right : '45%', padding :10, borderRadius:"5px"}}>Cliquez sur moi</button>
        </div>
            {show && (
            <>
    <div className="card" style={{width : '42rem', background :'white', height : 300, display:'flex',
    flexDirection :'row',overflow:'hidden', boxShadow: '10px 5px 20px rgba(0, 0, 0, 0.2)'}}>

        <img src={imgSrc} alt="" style={{width :'299px', height :'299px', objectFit :'cover'}}/>

        <div style={{background :'', width :'25rem', paddingLeft :'20px', paddingRight :'20px'}}>
            <h3 style={{border :'', padding :'5px',fontWeight :'700',borderRadius:'4px'}}>{fullname}</h3>
            <h5 style={{fontWeight :'900'}}>{profession}</h5>
            <p>{bio}</p> 
            <p style={{border :'solid 1px antiquewhite', padding :'5px', borderRadius : '10px', 
            background :'rgba(177,209,181,1)', width : '300px'}}>temps écoulé : {interval}</p>   
        </div>
    </div>
            </>
)}
    </div>
            )
    }
}
export default Person;


