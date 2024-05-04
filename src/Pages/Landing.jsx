import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import Card from 'react-bootstrap/Card';
import settingImg from '../assets/feature1.webp'
import categoryImg from '../assets/feature2.png'
import historyImg from '../assets/feature3.webp'

function Landing() {
  return (
    <>
      <div className='landingsection container'>
        <div className="row align-items m-5">
          <div className='col-lg-5'>
            <h3>Welcome to
              <span className='text-warning'> Media Player</span>
            </h3>
            <p style={{textAlign:'justify'}}>
            Media Player App will allow user to add or remove their uploaded videos from YouTube  and also allow them to arrange them in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exporing out site!!!
            </p>
            <Link to={'/home'} className='btn btn-info mt-3'>
              Get Started</Link>
          </div>
          <div className='col'>

          </div>

          
          <div className='col-lg-6'>
            {<img src={landingImg} alt="landing image" /> }
          </div>


        </div>

        <div className="features my-5">
          <h3 className='text-center'>Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem', height:'400px' }}>
      <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={settingImg} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
        Users can upload, view and remove the videos
        </Card.Text>

      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem', height:'400px' }}>
      <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={categoryImg} />
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
        Users can categorise the videos by drag and drop features
        </Card.Text>

      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem', height:'400px' }}>
      <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={historyImg} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
        Users can manage the watch history of all videos
        </Card.Text>

      </Card.Body>
    </Card>
            </div>
           
          </div>

        </div>

        <div className="my-5 row border rounded p-5">
          <div className="col-lg-5">
            <h3 className='text-warning'>
              Simple, Fast and Powerful
            </h3>
            <p><span className='fs-5'>Play Everything: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p><span className='fs-5'>Categorise Videos: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p><span className='fs-5'>Managing History : </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="100%" height="383" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing

