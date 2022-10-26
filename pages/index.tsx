// import type { NextPage } from 'next';
import type { GetStaticProps } from 'next';
import Link from "next/link";
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
// import styles from '../styles/Home.module.css'
import { PageInfo, Experience, Skill, Project, Social } from "../typings"
import { fetchSocials } from "../utils/fetchSocials";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchpageInfo } from "../utils/fetchpageInfo";



type Props = {
  pageInfo : PageInfo;
  experiences : Experience[];
  skills : Skill[];
  projects : Project[];
  socials : Social[];
}

const Home = ({pageInfo, experiences, skills, projects, socials} : Props) => {
  return (
    // add backround color in the div
    <div className="bg-zinc-800 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-hidden scrollbar-thumb-[#00BCD4]/80 scrollbar-thumb-rounded-full scrollbar-thumb-w-[10px]">
      <Head>
        <title>MohitkrSuman  Portfolio</title>
      </Head>
     <Header socials={socials}/>
     <section id='hero' className='snap-center'>
        <Hero pageInfo={pageInfo}/>
     </section>
    <section id='about' className='snap-center'>
      <About pageInfo={pageInfo}/>
    </section>
    
    <section id='experience' className='snap-center'>
      <WorkExperience experiences= {experiences}/>
    </section>

     <section id='skills' className='snap-start'>
      <Skills  skills={skills}/>
     </section>

     {/* Project */}
     <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
     </section>

     <section id='contact' className='snap-start'>
        <ContactMe />
     </section>
     <a href='#hero'>
       <footer className='sticky bottom-2 w-full cursor-pointer text-center tracking-[3px] text-gray-500'>
        <div><h2>&lt;/&gt;  and Crafted with 💙 by Mohit Kr Suman </h2>
        </div>
       </footer>
     </a>
    </div>
  )
}

export default Home;

export const getStaticProps : GetStaticProps<Props> = async () => {
   const pageInfo : PageInfo = await fetchpageInfo();
   const experiences : Experience[] = await fetchExperiences();
   const skills : Skill[] = await fetchSkills();
   const projects : Project[] = await fetchProjects();
   const socials : Social[] = await fetchSocials();

   return {
      props : {
        pageInfo,
        experiences,
        skills,
        projects,
        socials
      },

      revalidate : 10,
   };
};
 
