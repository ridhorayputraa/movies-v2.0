import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='footer-wrapper'>
          <div className='footer_content_left'>
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Contact us</p>
            <p className='service_code'>Servie Code</p>
            <p>&copy; 2022 MovieFlix, All Right Reserved</p>
          </div>

          <div className='footer_content_left_middle'>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Provisions</p>
           
          </div>

          {/* footer_content_right_middle */}
           
          <div className='footer_content_right_middle'>
            <p>Help center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
           
          </div>

          {/* .footer_content_right */}
          
          <div className='footer_content_right'>
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
           
          </div>


    </div>
    </>
  )
}
