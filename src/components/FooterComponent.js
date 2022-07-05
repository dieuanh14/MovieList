import React from "react";
import { Footer,FooterBrand } from "flowbite-react";
import { FooterTitle,FooterIcon,FooterLink } from "flowbite-react/lib/esm/components/Footer/FooterTitle";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import styles from '../css/App.css'

export default function FooterComponent() {
  return (
    <div>
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Movies"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div className="grid-1">
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Watched</Footer.Link>
                  <Footer.Link href="#">Watch List</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="grid-2">
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
           <FacebookIcon/>
		   <InstagramIcon/>
		   <TwitterIcon/>
		   <GitHubIcon/>
		   <GoogleIcon/>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
