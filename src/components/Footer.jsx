import { BsGoogle, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer p-10  md:py-28 md:place-items-center text-white bg-[#151515]">
      <div>
        <img src={logo} alt="" />
        <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br />
          trainer who is also a serial .
        </p>
        <div className="flex gap-2 mt-3">
          <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
            <BsGoogle />
          </div>
          <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
            <BsTwitter />
          </div>
          <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
            <BsInstagram />
          </div>
          <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
            <BsLinkedin />
          </div>
        </div>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
