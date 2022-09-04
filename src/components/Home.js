import React from 'react'
import Header from './Header'
import Section from './Section'

const Home = () => {
  return (
    <>
        <Header />
        <Section 
          title="Model S"
          desc="Order Online for Touchless Delivery"
          btn1_text="custom order"
          btn2_text="Existing Inventory"
          bgImg="./images/model-s.jpg"
        />
        <Section 
          title="Model S"
          desc="Order Online for Touchless Delivery"
          btn1_text="custom order"
          btn2_text="Existing Inventory"
          bgImg="./images/model-y.jpg"
        />
        <Section 
          title="Model S"
          desc="Order Online for Touchless Delivery"
          btn1_text="custom order"
          btn2_text="Existing Inventory"
          bgImg="./images/model-3.jpg"
        />
        <Section 
          title="Model S"
          desc="Order Online for Touchless Delivery"
          btn1_text="custom order"
          btn2_text="Existing Inventory"
          bgImg="./images/model-x.jpg"
        />
        <Section 
          title="Solar Panels"
          desc="Lowest Cost Solar Panels in America"
          btn1_text="order now"
          btn2_text="learn more"
          bgImg="./images/solar-panel.jpg"
        />
        <Section 
          title="Solar Roof"
          desc="Produce Clean Energy From Your Roof"
          btn1_text="order now"
          btn2_text="learn more"
          bgImg="./images/solar-panel.jpg"
        />
        <Section 
          title="Accessories"
          btn1_text="shop now"
          bgImg="./images/accessories.jpg"
        />
    </>
  )
}

export default Home