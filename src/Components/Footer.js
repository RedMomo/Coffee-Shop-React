import Location from './Location';
import Hours from './Hours';
import FooterContact from './FooterContact';



function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__left">
          <Location />
        </div>
        <div className="footer__container__center">
        <Hours />
        </div>
        <div className="footer__container__right">
          <FooterContact />
        </div>
      </div>
    </footer>
  );
}






export default Footer;


