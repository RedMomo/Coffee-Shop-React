import Location from './Location';
import Hours from './Hours';
import FooterContact from './FooterContact';



function Footer() {
  return (
    <footer className="">
      <div className="">
        <div className="">
          <Location />
        </div>
        <div className="">
        <Hours />
        </div>
        <div className="">
          <FooterContact />
        </div>
      </div>
    </footer>
  );
}






export default Footer;


