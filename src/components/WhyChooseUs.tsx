"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musicContent = [
    {
      title: "Live Collaboration",
      description:
        "Jam with your band in real time, no matter where they are. Collaborate on tracks, share ideas, and make decisions quickly. With our platform, you can streamline your music creation process, enabling seamless integration of different parts, instruments, and vocals. Connect with other musicians worldwide and enhance your creative workflow with instantaneous feedback and synchronized changes.",
    },
    {
      title: "Real-time Changes",
      description:
        "Hear changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your track. Visualize the evolution of your music with instant updates, allowing for a dynamic and fluid creative process. Our system highlights recent changes, making it easy to identify new additions and modifications, ensuring everyone is always on the same page.",
    },
    {
      title: "Track Versions",
      description:
        "Experience real-time updates and never stress about track versions again. Our platform ensures that you're always working on the most recent version of your track, eliminating the need for constant manual updates. Effortlessly manage multiple versions of your tracks, compare different takes, and revert to previous versions if needed. Keep your band aligned, maintain the flow of your music, and reduce the risk of losing important edits or ideas.",
    },
    {
      title: "Creative Flow",
      description:
        "Experience real-time updates and never stress about track versions again. Our platform ensures that you're always working on the most recent version of your track, eliminating the need for constant manual updates. Keep your creative juices flowing with uninterrupted music production. Enjoy a suite of tools designed to inspire creativity, from customizable effects to AI-powered suggestions, helping you stay in the zone and bring your musical visions to life.",
    },
    {
      title: "Seamless Integration",
      description:
        "Integrate with your favorite DAWs and plugins effortlessly. Our platform supports a wide range of digital audio workstations, allowing you to use familiar tools while enjoying enhanced collaborative features. Seamlessly transfer projects, import and export files, and synchronize settings across different environments for a smooth and cohesive production experience.",
    },
    {
      title: "Secure Storage",
      description:
        "Keep your music safe with our secure cloud storage. All your tracks, stems, and project files are securely stored and backed up, ensuring that you never lose your work. Access your music from any device, anywhere, at any time. With robust security measures, your intellectual property is protected, allowing you to focus on creating without worrying about data loss or unauthorized access.",
    },
  ];
  
  
  
  


function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicContent}/>
    </div>
  )
}

export default WhyChooseUs
