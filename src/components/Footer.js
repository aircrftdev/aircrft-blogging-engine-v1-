import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://aircrft.com/subscribe/" target="_blank" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Aircrft Supply Co.</li><li>Aircrft Blogging Engine <a href="http://aircrft.com/blogging-engine">Aircrft Blogging Engine</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
