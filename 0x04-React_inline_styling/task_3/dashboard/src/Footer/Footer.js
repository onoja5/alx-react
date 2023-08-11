import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Footer() {
  return (
    <footer className='App-footer'> <p>{getFooterCopy(true)} - {getFullYear()} </p></footer>
      
  );
}

export default Footer;
