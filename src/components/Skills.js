import React from 'react'
import './Skill.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
function Skills() {
  return (
   <section id='skill'>
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>
      <div className='skill_container'>
         <div className='skill_Programming'>
            <h3>Programming Language</h3>
            <div className='skill_content'>
               <article className='skill_detail'>
                   <BsFillPatchCheckFill className='skill_icons'/>
                   <div>
                   <h4>C</h4>
                   <small className='text-light'>Excellent</small>   
                   </div>
               </article>
               <article className='skill_detail'>
               <BsFillPatchCheckFill className='skill_icons'/>
                   <div>
                   <h4>CPP</h4>
                   <small className='text-light'>Intermediate</small>   
                   </div>
               </article>
               <article className='skill_detail'>
               <BsFillPatchCheckFill className='skill_icons'/>
                   <div>
                   <h4>Java</h4>
                   <small className='text-light'>Excellent</small>   
                   </div>
               </article>
               <article className='skill_detail'>
               <BsFillPatchCheckFill className='skill_icons'/>
                   <div>
                   <h4>Python</h4>
                   <small className='text-light'>Intermediate</small>   
                   </div>
               </article>
            </div>
         </div>
         <div className='skill_ frontend'>
         <h3>Frontend Development</h3>
            <div className='skill_content'>
               <article className='skill_detail'>
               <BsFillPatchCheckFill className='skill_icons'/>
                   <div>
                   <h4>HTML</h4>
                   <small className='text-light'>Excellent</small>   
                   </div>
               </article>
               <article className='skill_detail'>
               <BsFillPatchCheckFill className='skill_icons'/>
                  <div>
                  <h4>CSS</h4>
                   <small className='text-light'>Intermediate</small>   
                  </div>
               </article>
               <article className='skill_detail'>
               <BsFillPatchCheckFill className='skill_icons'/>
                   <div>
                   <h4>JavaScript</h4>
                   <small className='text-light'>Intermediate</small>   
                   </div>
               </article>
               <article className='skill_detail'>
               <BsFillPatchCheckFill className='skill_icons'/>
                   <div>
                   <h4>React</h4>
                   <small className='text-light'>Intermediate</small>   
                   </div>
               </article>
            </div>
         </div>
         <div className='skill_backtend'>
         <h3>Backend Development</h3>
            <div className='skill_content'>
               <article className='skill_detail'>
               <BsFillPatchCheckFill className='skill_icons'/>
                   <div>
                   <h4>NodeJs</h4>
                   <small className='text-light'>Intermediate</small>   
                   </div>
               </article>
               <article className='skill_detail'>
               <BsFillPatchCheckFill className='skill_icons'/>
                   <div>
                   <h4>/MySQL</h4>
                   <small className='text-light'>Intermediate</small>   
                   </div>
               </article>
               <article className='skill_detail'>
               <BsFillPatchCheckFill className='skill_icons'/>
                   <div>
                   <h4>ExpressJs</h4>
                   <small className='text-light'>Beginner</small>   
                   </div>
               </article>
            </div>
         </div>
      </div>
   </section>
  )
}

export default Skills
