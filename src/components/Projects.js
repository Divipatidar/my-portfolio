import React from 'react'
import './Projects.css'
import todo from './todo.png'
import portfolio from './portfolio.png'
import Dkarts from './Dkarts.png'
import brewery from './brewery.png'
import calculator from './calculator.png'
import survey from './survey.png'
function Projects() {
  return (
   <section  id='project'>
     <h5>My Recent Work</h5>
     <h2>Projects</h2>
     <div className='container project_container'>
        <article className='project_item'>
           <div className='project_img'>
              <img src={Dkarts} alt='img'/>
           </div>
           <h3>E-commerce Website : Dkarts</h3>
          <div className='item_cta'>
          <a href='https://github.com/Divipatidar/E-commerce-website-Dkarts' className='btn' target='_blank'>Github</a>
           <a href='https://github.com/Divipatidar/E-commerce-website-Dkarts' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project_item'>
           <div className='project_img'>
              <img src={portfolio} alt='img'/>
           </div>
           <h3>My-Portfolio</h3>
           <div className='item_cta'>
           <a href='https://github.com/Divipatidar/my-portfolio' className='btn' target='_blank'>Github</a>
           <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='project_item'>
           <div className='project_img'>
              <img src={todo} alt='img'/>
           </div>
           <h3>Multi-User TODO</h3>
           <div className='item_cta'>
           <a href='https://github.com/Divipatidar/multiuser-todo' className='btn' target='_blank'>Github</a>
           <a href='https://multiuser-todo-by-divyapatidar.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='project_item'>
           <div className='project_img'>
              <img src={brewery} alt='img'/>
           </div>
           <h3>Brewery-Review-System</h3>
           <div className='item_cta'>
           <a href='https://github.com/Divipatidar/Brewery-review-system' className='btn' target='_blank'>Github</a>
           <a href='https://brewery-review-system-by-divya.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='project_item'>
           <div className='project_img'>
              <img src={calculator} alt='img'/>
           </div>
           <h3>Calculator</h3>
           <div className='item_cta'>
           <a href='https://github.com/Divipatidar/calculator' className='btn' target='_blank'>Github</a>
           <a href='https://calculator-by-divya.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='project_item'>
           <div className='project_img'>
              <img src={survey} alt='img'/>
           </div>
           <h3>Survey-Form</h3>
           <div className='item_cta'>
           <a href='https://github.com/Divipatidar/Surveyform' className='btn' target='_blank'>Github</a>
           <a href='https://survey-form-by-divya.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
     </div>
   </section>
  )
}

export default Projects
