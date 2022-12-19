import './Footer.css';

function Footer (props) {
  return (
    <div className='footerContainer'>
      <hr/>
      <div className='footerContentContainer'>
        <div className='footerInfoContainer'>
          <p className='openSource'>Made by the amazing people at d2planner (<a href='https://github.com/d2planner/skills'>view</a>).</p>
          <p className='openSource'>Any modified code is available <a href='https://github.com/lexicongaming/d2planner-skills'>here</a>.</p>
          <p className='copyRight'>© Copyright 2021, D2 Planner Developers</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
