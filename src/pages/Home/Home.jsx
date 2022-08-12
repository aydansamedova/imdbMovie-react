import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Search from '../../components/Search/Search';
import './_home.scss';
import Sdk from '../../service/api/SDK';

export default function Home () {
  const [searchKey, setSearchKey] = useState();
  const [datas, setDatas] = useState([]);
  const sdk = new Sdk();

  const data = async () => {
    const res = await sdk.getData(searchKey);
    setDatas(res);
  };

  useEffect(() => {
    data();
  }, []);

  const searchMovie = (e) => {
    e.preventDefault();
    data(searchKey);
  };
  return (
    <>
      <div className="main">
        <Search searchMovie={searchMovie} setSearchKey={setSearchKey} />
        <MovieList datas={datas} />
      </div>
    </>
  );
}
