import React from 'react';


interface ButtonProps
{
    name:string
}
interface ButtonContent
{
    clicks:number
}
class Button extends React.Component<ButtonProps,ButtonContent>
{
    constructor(props:ButtonProps)
    {
        super(props)
        this.state = {
            clicks : 0,
        };
    }


    handleChange=()=>{
        const{ clicks } = this.state
        this.setState({clicks:clicks+1});
    }
    
    render()
    {
        const{ name } = this.props
        const{ clicks } = this.state

        return(
            <React.Fragment>
                <h1>{name} counter</h1>
                <button onClick={this.handleChange}>count : {clicks}</button>
            </React.Fragment>
        )
    }
}

export default Button;