import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 md:ml-20 md:mr-20 mt-20 flex flex-col text-black sm:rounded-lg sm:shadow-lg">
      
      
      {/* Mobile Card */}
      <div className="md:hidden bg-yellow-500 sm:rounded-lg sm:shadow-lg">
        <div className="text-center m-4">
          <h3 className="text-lg font-bold">ChannelName</h3>
        </div>

        {/* Follow Us */}
        <div className="flex m-4">
        <h3 className="text-lg font-bold">Follow Us</h3>
        </div>
          <div className="flex mb-4">
            <a href="#" className="text-black mx-2">
              <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
            </a>
            <a href="#" className="text-black mx-2">
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
            <a href="#" className="text-black mx-2">
              <FontAwesomeIcon icon={faTiktok} className="h-6 w-6" />
            </a>
            <a href="#" className="text-black mx-2">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </a>
            <a href="#" className="text-black mx-2">
              <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
            </a>
          </div>
        

        {/* Contact Us */}
        <div className="flex m-4">
          <h3 className="text-lg font-bold">Contact Us</h3>
        </div>
        {/* <div className="flex mb-4"> */}
          <div className='flex m-4'>
            <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 mr-2 text-black" />
            <p>Email to user@mail.com</p>
          </div>
          <div className='flex m-4'>
            <FontAwesomeIcon icon={faPhone} className="h-6 w-6 mr-2 text-black" />
            <p>Call 082143215678</p>
          </div>
        {/* </div> */}

        {/* Address */}
        <div>
          <div className="flex m-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6 mr-2 text-black" />
            <p>Address</p>
          </div>
        </div>

      </div>

      <p className='text-center mt-4 p-2 text-white'>&copy; 2024 Star Wars</p>
    </footer>
  );
};

export default Footer;
