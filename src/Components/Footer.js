import Location from './Location';
import Hours from './Hours';
import FooterContact from './FooterContact';



function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__left">
          <Location />
          <Hours />
        </div>
        <div className="footer__container__right">
          <FooterContact />
        </div>
      </div>
    </div>
  );
}






export default Footer;


