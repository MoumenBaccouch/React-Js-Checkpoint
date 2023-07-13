import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
  <section class="home" id="home">
   <div class="home-content">
     <div class="text">
       <div class="text-one">Hello,</div>
       <div class="text-two">I'm Moumen Baccouch</div>
       <div class="text-three">Front-end Developer and Professional Powerlifter Player</div>
       <div class="text-four">From Tunisia  </div>
     </div>
     <div class="button">
       <button>Click Me</button>
     </div>
   </div>
 </section>
 <section class="services" id="services">
   <div class="content">
     <div class="title"><span>My Services</span></div>
     <div class="boxes">
       <div class="box">
         <div class="icon">
           <i class="fas fa-desktop"></i>
       </div>
       <div class="topic">Web Devlopment</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?</p>
     </div>
       <div class="box">
         <div class="icon">
           <i class="fas fa-paint-brush"></i>
       </div>
       <div class="topic">Graphic Design</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?</p>
     </div>
       <div class="box">
         <div class="icon">
           <i class="fas fa-chart-line"></i>
       </div>
       <div class="topic">Trading</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?</p>
     </div>
       <div class="box">
         <div class="icon">
           <i class="fab fa-android"></i>
       </div>
       <div class="topic">Icon Design</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?</p>
     </div>
       <div class="box">
         <div class="icon">
           <i class="fas fa-camera-retro"></i>
       </div>
       <div class="topic">Photography</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?</p>
     </div>
       <div class="box">
         <div class="icon">
           <i class="fas fa-tablet-alt"></i>
       </div>
       <div class="topic">Apps Devlopment</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?</p>
     </div>
   </div>
   </div>
 </section>
<section class="contact" id="contact">
  <div class="content">
    <div class="title"><span>Contact Me</span></div>
    <div class="text">
      <div class="topic">Have Any Project?</div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe totam accusantium temporibus et labore iusto hic earum, quod laboriosam dolore. Quidem delectus consequuntur omnis adipisci vero. Numquam quo quas aliquam?</p>
      <div class="button">
        <button>Let's Chat</button> 
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
export default Home