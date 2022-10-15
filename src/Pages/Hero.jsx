import React from 'react'
import HeroComp from '../Components/Elements/HeroComp'
import NFTs from '../Components/Elements/NFTs'
import PovoFetures from '../Components/Elements/PovoFetures'
import StakingPlatform from '../Components/Elements/StakingPlatform'
import StakingWork from '../Components/Elements/StakingWork'
import Videos from '../Components/Elements/Videos'
import BenefitPovo from '../Components/Elements/BenefitPovo'
import PlatformGoing from '../Components/Elements/PlatformGoing'
import PovoMission from '../Components/Elements/PovoMission'
import PovoTokenomics from '../Components/Elements/PovoTokenomics'
import PovoRoadmap from '../Components/Elements/PovoRoadmap'
import RugpulProtected from '../Components/Elements/RugpulProtected'
import FAQs from '../Components/Utils/FAQs'

const Hero = () => {
  return (
    <div>
      <HeroComp/>
      <StakingPlatform/>
      <NFTs/>
      <PovoFetures/>
      <Videos/>
      <StakingWork/>
      <BenefitPovo/>
      <PlatformGoing/>
      <PovoMission/>
      <PovoTokenomics/>
      <PovoRoadmap/>
      <RugpulProtected/>
      <FAQs/>
    </div>
  )
}

export default Hero
