import React from 'react'
import Home from "./Home";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact"
import Faqs from "./Faqs"
import Footer from "../Footer";
import HomeCourse from './HomeCourse';

const LandingPage = () => {
    return (
        <div>
            <section id="home"><Home /></section>
            <section id="about"><HomeAbout /></section>
            <section id="courses"><HomeCourse/></section>
            <section id="contact"><HomeContact /></section>
            <section id="faqs"><Faqs /></section>
            <Footer/>
        </div>
    )
}

export default LandingPage
