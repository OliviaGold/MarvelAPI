import './styles/main.scss';
import Layout from './Layout/Layout';
import ComicsPage from './page/ComicsPage';
import CharactersPage from './page/CharactersPage';
import Homepage from './page/Homepage'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='characters' element={ <CharactersPage /> }/>
        <Route path='comics' element={ <ComicsPage /> }/>
      </Routes>
    </Layout>
  );
}

export default App;