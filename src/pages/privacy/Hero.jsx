'use client';
import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import CodeSpace from './CodeSpace';
import HoverCard from './HoverCard';
import CopilotFeature from './CopilotFeature';
import { motion } from "framer-motion";
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import CodeSpace1 from './CodeSpace1';

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);

  return (
    <div className='max-w-[1280px] mx-auto'>
      <ContentWrapper className="contentWrapper">
        
      
      <CodeSpace />
  
          <div className='relative z-[1] mt-4' style={{marginTop: "100px"}}>
         
        </div>

          
           <div className='relative z-[1] mt-4' style={{marginTop: "100px"}}>
           <CopilotFeature />
         </div>
       
        <CodeSpace1 />
        
     
        
     

   
      </ContentWrapper>
    </div>
  );
};

export default Hero;
