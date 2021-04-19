import React, { Component } from "react";

class TopMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="menuWrapper">
                <ul className="menu">
                    <li>
                        About
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
            </div>
        );
    }
}

export default TopMenu;