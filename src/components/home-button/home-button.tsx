import pokeball from '../../assets/pokeball.svg';

function HomeButton() {
  return (
    <div>
        <a href="#">
          <img src={pokeball} className="logo" alt="pokeball" width={50} height={50}/>
        </a>
    </div>
  );
}

export default HomeButton;