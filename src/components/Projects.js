import React from 'react'
import './Projects.css'
import todo from './todo.png'
import portfolio from './portfolio.png'
import amazone from './amazone.png'
function Projects() {
  return (
   <section  id='project'>
     <h5>My Recent Work</h5>
     <h2>Projects</h2>
     <div className='container project_container'>
        <article className='project_item'>
           <div className='project_img'>
              <img src={amazone} alt='img'/>
           </div>
           <h3>Amazone-Clone</h3>
          <div className='item_cta'>
          <a href='https://github.com/Divipatidar/Amazone-clone' className='btn' target='_blank'>Github</a>
           <a href='https://github.com/Divipatidar/Amazone-clone' className='btn btn-primary' target='_blank'>Live Demo</a>
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
     </div>
   </section>
  )
}

export default Projects
