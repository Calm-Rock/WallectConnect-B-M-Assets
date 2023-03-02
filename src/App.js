import React from "react";
import "./App.css";
import assetPath from "./paths.json";
import AssetComponent from "./Components/AssetComponent";
import Header from "./Components/Header";
import Title from "./Components/Title";
import styled from 'styled-components';
import ColorBox from "./Components/Colors";
import Footer from "./Components/Footer";

const Divider = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    margin-top:20px;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right, transparent, #ccc, transparent);
    transform: translateY(-50%);
  }
`;

function App() {
  return (
    <div className="App">
      <Header/>
      <Title title="Primary Color"/>
      <div className="assets">
        <div>
        <ColorBox color="#3B99FC"/>
        <h5 className='glass-colorbox'>#3B99FC</h5>
        </div>
        <div>
        <ColorBox color="#19C6FF"/>
        <h5 className='glass-colorbox'>#19C6FF</h5>
        </div>
        <div>
        <ColorBox color="#2BEE6C"/>
        <h5 className='glass-colorbox'>#2BEE6C</h5>
        </div>
        <div>
        <ColorBox color="#FF974C"/>
        <h5 className='glass-colorbox'>#FF974C</h5>
        </div>

      </div>
      <Divider/>
      <br /><br />
      <Title title="Badges"/>
      <div className="assets">
    <AssetComponent class = "badges" filename={assetPath.SVG_BADGE_WHITE} tooltip="White Badge SVG"></AssetComponent>
    <AssetComponent class = "badges" filename={assetPath.SVG_BADGE_BLUE} tooltip="Blue Badge SVG"></AssetComponent>
    <AssetComponent class = "badges"filename={assetPath.SVG_BADGE_BLACK} tooltip="Black Badge Png"></AssetComponent>
    </div>
    <div className="assets">
    <AssetComponent class = "badges" filename={assetPath.PNG_BADGE_WHITE} tooltip="White Badge PNG"></AssetComponent>
    <AssetComponent class = "badges" filename={assetPath.PNG_BADGE_BLUE} tooltip="Blue Badge PNG"></AssetComponent>
    <AssetComponent class = "badges" filename={assetPath.PNG_BADGE_BLACK} tooltip="Black Badge PNG"></AssetComponent>
    <AssetComponent class = "badges" filename={assetPath.PNG_BADGE_GRADIENT} tooltip="Gradient Badge PNG"></AssetComponent>
      </div>
      <Divider/>
      <br /><br />
      <Title title="Logo"/>
      <div className="assets">
    <AssetComponent class="logos" filename={assetPath.SVG_LOGO_WHITE} tooltip="White Logo SVG"></AssetComponent>
    <AssetComponent class="logos" filename={assetPath.SVG_LOGO_BLUE} tooltip="Blue Logo SVG"></AssetComponent>
    <AssetComponent class="logos" filename={assetPath.SVG_LOGO_BLACK} tooltip="Black Logo SVG"></AssetComponent>
    </div>
    <div className="assets">
    <AssetComponent class="logos" filename={assetPath.PNG_LOGO_WHITE} tooltip="White Logo PNG"></AssetComponent>
    <AssetComponent class="logos" filename={assetPath.SVG_LOGO_BLUE} tooltip="Blue Logo PNG"></AssetComponent>
    <AssetComponent class="logos" filename={assetPath.PNG_LOGO_BLACK} tooltip="Black Logo PNG"></AssetComponent>
    <AssetComponent class="logos" filename={assetPath.PNG_LOGO_GRADIENT} tooltip="Gradient Logo PNG"></AssetComponent>
      </div>
      <Divider/>
      <br /><br />
      <Title title="Icons"/>
      <div className="assets">
    <AssetComponent class="svg-icon" filename={assetPath.SVG_ICON_WHITE} tooltip="White Icon SVG"></AssetComponent>
    <AssetComponent class="svg-icon" filename={assetPath.SVG_ICON_BLUE} tooltip="Blue Icon SVG"></AssetComponent>
    <AssetComponent class="svg-icon" filename={assetPath.SVG_ICON_BLACK} tooltip="Black Icon SVG"></AssetComponent>
    </div>
    <div className="assets">
    <AssetComponent class="png-icon" filename={assetPath.PNG_ICON_WHITE}  tooltip="White Icon PNG"></AssetComponent>
    <AssetComponent class="png-icon" filename={assetPath.PNG_ICON_BLUE} tooltip="Blue Icon PNG"></AssetComponent>
    <AssetComponent class="png-icon" filename={assetPath.PNG_ICON_BLACK} tooltip="Black Icon PNG"></AssetComponent>
    <AssetComponent class="png-icon" filename={assetPath.PNG_ICON_GRADIENT} tooltip="Gradient Icon PNG"></AssetComponent>
      </div>
      <Divider/>
      <br /><br />
      <Title title="Lockup"/>
      <div className="assets">
    <AssetComponent class="lockup" filename={assetPath.SVG_LOCKUP_WHITE} tooltip="White Lockup SVG"></AssetComponent>
    <AssetComponent class="lockup" filename={assetPath.SVG_LOCKUP_BLUE} tooltip="Blue Lockup SVG"></AssetComponent>
    <AssetComponent class="lockup" filename={assetPath.SVG_LOCKUP_BLACK} tooltip="Black Lockup SVG"></AssetComponent>
    </div>
    <div className="assets">
    <AssetComponent class="lockup" filename={assetPath.SVG_LOCKUP_WHITE} tooltip="White Lockup PNG"></AssetComponent>
    <AssetComponent class="lockup" filename={assetPath.PNG_LOCKUP_BLUE} tooltip="Blue Lockup PNG"></AssetComponent>
    <AssetComponent class="lockup" filename={assetPath.PNG_Lockup_BLACK} tooltip="Black Lockup PNG"></AssetComponent>
      </div>
      <Divider/>
      <br /><br />
      <Title title="Visuals"/>
      <div className="assets">
    <AssetComponent class="visual" filename={assetPath.JPG_VISUALS_HERO_HORIZONTAL} tooltip="Hero Horizontal Visual PNG"></AssetComponent>
    <AssetComponent class="visual" filename={assetPath.JPG_VISUALS_HERO_VERTICAL} tooltip="Hero Vertical Visual PNG"></AssetComponent>
    <AssetComponent class="visual" filename={assetPath.JPG_VISUALS_HEADER} tooltip="Header Visual PNG"></AssetComponent>

    </div>
      <Divider/>
      <br /><br />
      <Footer/>
    </div>
  );
}

export default App;
