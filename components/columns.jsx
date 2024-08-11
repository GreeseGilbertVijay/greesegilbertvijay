import React from 'react';
import { RiReactjsFill ,RiNextjsLine,RiBloggerLine  } from "react-icons/ri";
import { PiFigmaLogo } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { CiShop } from "react-icons/ci";

export const Columns = () => {
  return (
    <div id='columns' className='columns-body'>
      <div className='columns'>

      <div className="columns-box">
        <CgWebsite className='column-icons'/>
        <h3>Static Websites</h3>
        <p>The website designed to represent a company or organization,
           providing information about products, services,locations
            and contact details.</p>
        </div>

        <div className="columns-box">
        <CiShop className='column-icons' />
        <h3>E-Commerce</h3>
        <p>Created the individual website to share personal information,
           blogs, hobbies, portfolios and contact details.
        </p>
        </div>

        <div className="columns-box">
        <RiReactjsFill className='column-icons'/>
        <h3>React Js</h3>
        <p>The website stores where products or services
           are sold directly to consumers.Detailed descriptions, images, prices,
            and specifications of products or services.
        </p>
        </div>

        <div className="columns-box">
        <RiNextjsLine  className='column-icons'/>
        <h3>Next Js</h3>
        <p>Single web pages designed for a specific marketing campaign,
           often used to capture leads or promote a product or service.
        </p>
        </div>

        <div className="columns-box">
        <PiFigmaLogo className='column-icons'/>
        <h3>UI/UX Development</h3>
        <p>I will take care of the UI/UX design and make sure it works well on mobile devices.
           My goal is to create a user-friendly experience that
           looks great and functions smoothly on all screens.</p>
        </div>

        <div className="columns-box">
        <RiBloggerLine className='column-icons'/>
        <h3>Blog / Landing Pages</h3>
        <p>Create the single page for your blogs and Landing pages. Add meta descriptions
          featured images alt text for images.
        </p>
        </div>
        
      </div>
    </div>
  )
}