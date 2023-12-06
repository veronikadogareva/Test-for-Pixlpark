import './FooterIcon.css';
function FooterIcon({ label }) {
  return (
    <li>
      <a href="#" aria-label={label}><div className={`footer__icon footer__icon_type_${label}`}></div></a>
    </li>
  );
}

export default FooterIcon;
