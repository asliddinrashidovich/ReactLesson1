import React, { Component } from 'react'
import image from '../../assets/images/IMAGE_2.png';
import image1 from "../../assets/images/IMAGE_1.png"

export class Header extends Component {
  render() {
    return (
      <header  id='header' >
        <nav class="navbar navbar-expand-md  container">
            <div class="container-fluid mt-2">
                <a class="navbar-brand" href="asliddin.uz">
                  <img src={image} alt="navbar" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="asliddin.uz">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="aslidin.uz">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="aslidin.uz">Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="aslidin.uz">Articles</a>
                    </li>
                </ul>
                <form class="d-flex align-items-center" role="search">
                    <p className='d-flex justify-content-center align-items-center'>cart <span>(0)</span></p>
                    <button class="btn btn-primary " type="submit">Get a free quote</button>
                </form>
                </div>
            </div>
        </nav>

        <div className='d-flex container'>
          <div className="header-content ">
            <h1>Quality cleaning for your home</h1>
            <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
          </div>
          <div className='header-img'>
            <img src={image1} alt="" />
          </div>
        </div>
      </header>
    )
  }
}

export default Header