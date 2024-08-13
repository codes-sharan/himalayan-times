import './Header.css';

function Header() {

  return (
<div className='Header-all'> 

    <div className="Header-image">
    <a href='/' > 
    <img src= 'logo.png' className="Header-image2" alt="logo" /> 
    </a>
    </div> 

<div className= "Nav-bar"> 
  <a href='/HOME' > HOME </a>
  <a href='/KATHMANDU' > KATHMANDU </a>
  <a href='/NEPAL'> NEPAL </a>
  <a href='/COVID-19'> COVID-19 </a>
  <a href='/COVID-CONNECT'> COVID CONNECT</a>
  <a href='/WORLD'> WORLD </a>
  <a href='/OPINION'> OPINION </a>
  <a href='/BUSINESS'> BUSINESS </a>
  <a href='/SPORTS'> SPORTS </a>
  <a href='/ENTERTAINMENT'> ENTERTAINMENT </a>
  <a href='/MORE'> MORE </a> 
  </div> 

</div> 
  );
}

export default Header;
