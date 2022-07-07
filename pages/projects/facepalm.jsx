import React from 'react'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import Image from 'next/image'
import { FaReact } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import Head from 'next/head'

const data = [

  {
    id: 1,
    image: '/assets/facepalm-login.jpg',
    title: 'Login Section',
    description: <h3 className='text-light'>Here you can Login with Email and Password <br /> Login based on Firebase Authentication. </h3>,
  },
  {
    id: 2,
    image: '/assets/facepalm-sign-up.jpg',
    title: 'Sign-Up Section',
    description: <h3 className='text-light'>Here you can create a new account. A Username, Email, and Password are required. Background and Profile Image are optional. In case there&apos;s no image chosen, a default image takes place.</h3>,
  },
  {
    id: 3,
    image: '/assets/facepalm-feed.jpg',
    title: 'Main Tab - App Feed',
    description: <h3 className='text-light'>Here in the App Feed, you can see the most recent Posts.</h3>,
  },
  {
    id: 4,
    image: '/assets/facepalm-post-detail.jpg',
    title: 'Post Details | Post Comments',
    description: <h3 className='text-light'>Here you can see the Post in more detail and other users&apos; comments. You can also add your own comment.</h3>,
  },
  {
    id: 5,
    image: '/assets/facepalm-new-post.jpg',
    title: 'New Post Tab',
    description: <h3 className='text-light'>Here you can create a new post with an image and a description. Both are optional, but at least one field is required.</h3>,
  },
  {
    id: 6,
    image: '/assets/facepalm-users.jpg',
    title: 'Users Tab',
    description: <h3 className='text-light'>Here you can see all the users. You can also Add/Remove a Friend and Accept/Decline a Friend Request.</h3>,
  },
  {
    id: 7,
    image: '/assets/facepalm-user-profile.jpg',
    title: 'User Profile',
    description: <h3 className='text-light'>Here you can see a User Profile in more detail, which includes personal info, posts and friends. You can also Add/Remove a Friend and Accept/Decline a Friend Request.</h3>,
  },
  {
    id: 8,
    image: '/assets/facepalm-profile.jpg',
    title: 'Profile Tab',
    description: <h3 className='text-light'>Here you can see your own Profile, which includes personal info, posts and friends. You also can change your Background and Profile Images.</h3>,
  },
  {
    id: 9,
    image: '/assets/facepalm-chat.jpg',
    title: 'Chat Tab',
    description: <h3 className='text-light'>Here you can see your available Chats. You can only chat with friends</h3>,
  },
  {
    id: 10,
    image: '/assets/facepalm-chat-messages.jpg',
    title: 'Chat Messages',
    description: <h3 className='text-light'>Here you can have Real-Time conversations with your friends.</h3>,
  },

]

const Facepalm = () => {

  return (
    <section id='projects'>
      <div className='project-header'>
        <div className='image-wrapper'>
          <Image src="/assets/facepalm_logo.png" alt="Facepalm Logo" data-aos="fade-up" layout='fill' />
        </div>
        <h3 data-aos="fade-up" data-aos-delay="100">Academic Project - Facepalm</h3>
        <h2 data-aos="fade-up" data-aos-delay="200">Social Media App</h2>
        <div className='project-icons-container'>
          <FaReact className='project-icon' data-aos="fade-up" data-aos-delay="300" />
          <SiFirebase className='project-icon' data-aos="fade-up" data-aos-delay="350" />
        </div>
        <h3 data-aos="fade-up" data-aos-delay="400" className='text-light-alt'>Built for Android</h3>
        <a data-aos="fade-up" data-aos-delay="550" href="https://github.com/voydd9/Facepalm" className="btn" target="_blank" rel="noreferrer">GitHub</a>

        <div id="scroll-down-animation">
          <span className='mouse' data-aos="fade-up" data-aos-delay="600">
            <span className='move'></span>
          </span>
          <h5 className='scroll-down-text' data-aos="fade-up" data-aos-delay="700">Scroll down</h5>
        </div>
      </div>

      <div className="projects-container">

        {
          data.map(({ id, image, title, description }) => {
            return (
              <div key={id} className='project-item'>
                <div className='project-description' data-aos="fade-up">
                  <div className='project-description-content'>
                    <h2>{title}</h2>
                    {description}
                  </div>
                </div>
                <div className='project-image' data-aos="fade-up">
                  <div className='image-wrapper'>
                    <Image src={image} alt={title} layout='fill' objectFit='contain' />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <Nav />
      <Footer />
    </section>
  )
}

export default Facepalm