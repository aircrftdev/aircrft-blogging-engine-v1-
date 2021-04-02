import React from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby";

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Aircrft Blogging Engine"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Welcome to your new blogging engine! 🚀 Purpose built to make sharing what your working on at the moment, connecting with and growing a global community - a simply wonderful experience. </h2>
                        </header>
                        <p>Blogging is a great way to start learning what appeals to your audience. It is a relatively slow but inexpensive method of aggregating analytic data. Start by listing topics to write about, write consistently, and share your posts, articles, and newsletter across your business social media channels.<br />Harness your new superpowers with our ongoing video series <a href="https://aircrft.com/tv" target="_blank">Aircrft TV</a> Check the Aircrft blog with runs on this very same Blogging Engine your using! <a href="https://aircrft.com" target="_blank">Aircrft Blog Lift-off</a></p>
                        <p>Harness your new blogging superpowers with our ongoing video series <a href="https://aircrft.com/tv" target="_blank">Aircrft TV</a> Check the Aircrft blog which runs on the very same engine your using!  <a href="https://aircrft.com/blog" target="_blank">Aircrft Blog</a></p>
                        <ul className="actions">
                            <li><a href="https://www.aircrft.com" target="_blank" className="button">Get started</a></li>
                            <li><a href="https://www.aircrft.com" target="_blank" className="button">Operating Manual</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Activity Feeds</h2>

                        <ul className="actions">
                            <li><Link to={`blog`} className="button">All Articles</Link></li>
                            <li><Link to={`subscribe`} className="button">All Newsletters</Link></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Need additional support? Get in touch</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Handcrafted with ❤️<br />
                                        Los Angleges CA<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        323-527-8352
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">support@aircrft.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex