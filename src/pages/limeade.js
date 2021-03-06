import React from "react"

import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Description from "../components/description"
import Intro from "../components/intro"
import Tools from "../components/tools"
import Overview from "../components/overview"
import Takeaway from "../components/takeaway"
import BeaconCard from "../components/cards/beaconCard"
import CharadeCard from "../components/cards/charadeCard"

const Limeade = ({ data }) => (

  <Layout>
    <SEO title="Limeade" />
    <Img className="bannerImg" fluid={data.limeadeBanner.childImageSharp.fluid} alt="Limeade Image Banner" />
    <Description title="Limeade" date="Summer 2019" position="Mobile Developer Intern" />
    <Intro paragraph= {["I recently took on an internship position as a Mobile Developer for ", <a href = "https://www.limeade.com/en/">Limeade</a>, ", a software engineering company based in Bellevue, WA. Within my three months, I was able to experience working in the mobile development industry and gained insight for future work."]} />
    <Tools test={["Xcode", "Android Studio", "Azure", "Git", "Postman", "Sourcetree", "Android", "iOS"]} />
    <Overview 
    paragraph= {["During my time at Limeade, I was a part of the ", <i>"listening tools"</i>, " team which focused on the limeade survey experience. My task was to improve survey experiences for both native IOS and Android mobile users. Within this taskforce, I was exposed to not only the industry's agile environment, but also to crucial research & developmental practices and their overall software architecture. Although I was an intern, I took on several projects alongside full-time employees. I was frequently involved in sprint meetings where I reported back on the progress of work. I also had the opportunity to demo my implementations which were real solutions for the product."]} 
    par2 = {["This internship required me to learn various things on the job and also provided me a platform to apply the skills I already had. Before working at Limeade, my most relevant experience with mobile development were Android, ", <a href = "https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">MVC </a>,  " architecture, and some hybrid platforms. However, I was able to learn iOS and ", <a href = "https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel">MVVM</a>, " on the job which I adapted and implemented in my work. Aside from coding projects, I also took part in other aspects of the developmental process. I was able to help test and review the code for other developers in order to verify whether it was suitable to be merged into production or not. This internship exposed me to several new key practices that I have adapted into my skill set and it ultimately taught me a great amount that I will be able to apply to future works and I also made some cool friends along the way. Thank you Limeade!"]} 
    //   
    img={data.limeadeInterns.childImageSharp.fluid} alt="Group Picture of Limeade Interns" />

    <div className="contained section-spacing">
      <h2 style={{ fontWeight: "300" }}>Take Aways</h2>
      <div className="row content-spacing">
        <Takeaway title = "Share your interests" paragraph = "At my internship, I shared my curiosity about product management and I was given the chance to help out with a project alongside full-time PMs. This opportunity would most likely not have been made available to me if I hadn???t mentioned it first. Expressing your interests to others will help keep you in mind when relevant opportunities pop up. If you???re open about your interests, opportunities will appear."/>
        <Takeaway title = "Give it a shot" paragraph = "When there's an opportunity to work on something you are interested, but don't necessarily have the experience, give it a shot. You will certainly learn something from the experience and find out whether to pursue it or not. The PM project I participated in allowed me to communicate with real clients that used the application. I learned how the product affected users and that I needed to improve my communication with clients by building rapport."/>
        <Takeaway title = "Try before you ask" paragraph = "During this internship, I learned the balance between independence and asking for help. I delved deeply into the possible solutions to a problem until I felt certain I have exhausted my options. I found this helpful because when I would ask for help, I could explain my previous attempts at solving the issue. This would help form a baseline that would narrow down which options we had left. It is always great practice to find a solution to a problem by yourself, but sometimes it???s more practical to simply ask someone for hand."/>
      </div>
    </div>

    <section id="work" className="workSection ">
      <div className="contained section-spacing" >
        <h4 className="content-spacing">Similar Work</h4>
        <div className="card-grid">
          <CharadeCard/>
          <BeaconCard/>

        </div>
      </div>
    </section>
  </Layout>
)

Limeade.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
{
  limeadeInterns : file(relativePath : {eq: "interns.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  limeadeBanner : file(relativePath : {eq: "limeadeBanner.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default Limeade
