import React, { Component } from 'react';
class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 
                [{ href:"/", span: "Home" }, { href:"/", span: "services" }, { href:"/", span: "contact" }],
                IsClick:false,
                
            }
         
           }
            handleClick=()=> {
               
               this.setState({
                   
                   IsClick:!this.state.IsClick
               })
              }
    render() { 
                return (<nav className="nav">
                    <ul className="home">{this.state.tab1.map(el =>(el.span!=="services")?<li><a href={el.href}>{el.span}</a></li>:
                   
                    
                        <li onClick={this.handleClick} >{el.span}
                        <ul className={(this.state.IsClick)?"list":"NonList"}>
                            <li>For entrepreneurs</li>
                            <li>For students</li>
                            <li>For hobbyists</li>
                        </ul>
                        </li>
                       

                  )

            }
            </ul>
                </nav>);
            }
        }

        export default File;