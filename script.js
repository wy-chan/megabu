class MyApp extends React.Component{
    constructor(props){
      super(props);
      this.state={
        charaDirection: 1,
        charaX:35,
        eyeX: 0,
        pose: "stand",
        canWalk: true
      }
      this.handleKeyPress=this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
      }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
      }
    handleKeyPress(event) {
        if(this.state.canWalk == true){
        if(event.keyCode == 39){
            this.setState({
                charaDirection: 1,
            })
            if(this.state.charaX < 1265){
                this.setState({
                    charaX: this.state.charaX + 50,
                    eyeX: this.state.eyeX +0.5,
                })   
            }
        };
        if(event.keyCode == 37){
            this.setState({
                charaDirection: -1,
            })
            if(this.state.charaX > 75){
                this.setState({
                    charaX: this.state.charaX - 50,
                    eyeX: this.state.eyeX -0.5,
            })   
        }}
        if(this.state.pose == "stand"){
            this.setState({
                pose: "walk",
            })
        }else{
            this.setState({
                pose: "stand",
            })
        }
        }
    }
    

    render(){
        let styleChara = {left: this.state.charaX, transform: "scaleX("+this.state.charaDirection+")"};
        let styleEye = {left: this.state.eyeX};
        let imgChara = (this.state.pose == "stand")?"images/stand.png":"images/walk.png";
        return(
            <main>
                <img className="chara-eyes" style={styleEye} src="images/eyes.png"/>
                <div className="upper-bg">
                    <h1>Knight K & <br/> Mega Bu</h1>
                    <div className="main-chara" style={styleChara}>
                        <img  className="main-chara-img" src={imgChara} />
                    </div>
                </div>
            </main>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById('myApp'));