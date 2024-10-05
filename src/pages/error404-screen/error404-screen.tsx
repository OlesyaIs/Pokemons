import './error404-screen.css';

import { Helmet } from "react-helmet-async";
import Header from "../../components/header/header";
import { getPathWithBasePart } from '../../utils/utils';

function Error404Screen() {
  return (
    <div className="page page--404">
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>
      <Header />
      <main className='main main--page-404'>
        <h1 className='page-title'>Not Found</h1>
        <img className="page-404__image" src={getPathWithBasePart('/img/404.webp')} alt="404 - Not Found" width={448} height={256}/>
        <p className="page-404__text">Oops! It seems like you are lost.</p>
      </main>
    </div>
  )
}

export default Error404Screen;
