import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
    <div className="heading">
      <h1 className="hero-header">FanCloud CDN network revolutionizes video infrastructure <br/>with community-driven Innovation</h1>
      <p className="hero-para">FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN), leveraging a global network of community-powered nodes. By harnessing a decentralised architecture, dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s dCDN network and experience the future of seamless, secure and community- driven consumption</p>

    </div>

    
    <div className="services">
      <div className="service-item1">
      <div className="content">
        <h1>Content Nodes</h1>
        <p>
          Content Nodes, Earn rewards for supplying their GPU, Storage and
          bandwidth for dCDN
        </p>
       
        </div>
        <div className="deploy">
          <lable>Deploy</lable>        
          </div>
      </div>
      <div className="service-item2">
      <div className="content">
        <h1>Orchestrators</h1>
        <p>
          Orchestrators will be responsible for connecting the client with the
          content node for seamless streaming. Traffic distribution will be
          based on multiple factors like job type, performance
        </p>
        </div>
        <div className="Comming-soon1">
          <lable>Comming soon</lable>        
          </div>
      </div>
      <div className="service-item3">
      <div className="content">
        <h1>Validators</h1>
        <p>
          Validators will be responsible for validating the execution of dCDN
          Network. Validators will earn rewards from Staking and earn a cut on
          the executions validated.
        </p>
        </div>
        <div className="Comming-soon2">
          <lable>Comming soon</lable>        
          </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
