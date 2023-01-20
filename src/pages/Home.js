import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import { Content } from '../components/Content/Content'
import Counter from '../components/Counter/Counter'
import Features from '../components/Features/Features'
import Hero from '../components/Hero/Hero'
import { heroOne, heroTwo, heroThree } from '../data/HeroData'
import Form from '../components/Form/Form'
import Test from '../components/image box/Test'
import whyus from "../images/whyus.jpg"
import LISTINGINFOGRAPHICS from "../images/LISTINGINFOGRAPHICS.png"
import Accoridon from "../components/Accoridon/Accoridon"
import { Section } from '../globalStyles'
import "../app.css"

// Hero Feature Content Carousel

const Home = () => {
  return (
    <>
    <Hero />
    <Content {...heroOne}/>
    <Test/>
    <Features />
    <div id='whyus'>
    <img src={whyus} alt="whyus" />
    </div>
    <Counter/>
    <div className='info'>
    <img src={LISTINGINFOGRAPHICS} alt="LISTINGINFOGRAPHICS"  />
    </div>
    <Accoridon/>
    <Carousel/>
    <Form/>
    </>
  )
}

export default Home