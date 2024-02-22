import { useState } from 'react'
import './App.css'
import { Anime } from './component/Anime'
import data from './data.json'

function App() {
  let [dataFilter, setDataFilter] = useState([]);
  const [mainImg, setMainImg] = useState("1");

  dataFilter = data.data.filter((item) => item.id !== mainImg);

  const handleClick = (img) => {
    setMainImg(img);
    dataFilter = data.data.filter((item) => item.id !== mainImg);
    setDataFilter(dataFilter);
    console.log("img: ",img, "data", dataFilter, "mainImg:", mainImg);
    // console.log("alo alo", data.data.find(item => {
    //   if (item.id = mainImg) {
    //     return item.image
    //   }
    // }));
  }

  return (
    <div className='container'>
      <div className="header">
        <div className="header-left">
          <span className="logo">Anonime</span>
          <div className="nav">
            <span className="tab">Home</span>
            <span className="tab">List anime</span>
          </div>
        </div>
        <input type="text" className="search" placeholder='Search anime or movie' />
      </div>
      <div className="main">
        <div className="content">
          <div className="info">
            <p className='title'>Explore</p>
            <p className='welcome'>What are you gonna watch today ?</p>
            <div className='background-img'>
              <div className="info-main">
                <p className="name-main">{mainImg}</p>
                <p className='desc'>{data.data[0].description}</p>
              </div>
              <div className="main-img">
                <div className="effect"></div>
                <img src={data.data.find((item) => item.id === mainImg)} alt="img ne" />
              </div>
            </div>
          </div>
          <div className="list-movie">
            <p className="title">New release</p>
            <div className="movies">
              {dataFilter.map(item => (
                <Anime data={item} key={item.id} handleClick={handleClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
