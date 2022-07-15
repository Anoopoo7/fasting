import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firstUsingApp from '../localStorage/firstUsingApp';

function EmptyPage({ first }) {
    const history = useHistory();
    useEffect(() => {
        first && history.push("/home")
    }, [first])
    const start = () => {
        firstUsingApp.setFirstOpeingApp();
        window.location.reload("/home")
    }
    return (
        <div id="demo" class="carousel slide" data-ride="carousel" >
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active empty-carousal">
                    <img src="/images/flas_01.jpg" className='img-fluid' alt="Los Angeles" />
                    <div class="carousel-caption">
                        <small className='text-light'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis harum doloribus
                            maxime autem provident. Sint laudantium, ad voluptates quidem officiis harum beatae soluta?
                        </small>
                    </div>
                </div>
                <div class="carousel-item empty-carousal">
                    <img src="/images/flas_02.jpg" className='img-fluid' alt="Chicago" />
                    <div class="carousel-caption">
                        <small className='text-light'>
                            Lorem ipsum dolor,Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error ut
                            fugit officia id, non illo sed mollitia quod quia corporis reprehenderit dolore a
                            doloribus ipsa sunt voluptas fugiat vel. Nihil animi eveniet, esse, quos inventore aliquam
                            similique tempore ex harum voluptatum mollitia consequatur amet! sit amet consectetur
                            adipisicing elit. Corporis harum doloribus maxime autem provident. Sint laudantium,
                            ad voluptates quidem officiis harum beatae soluta?
                        </small>
                    </div>
                </div>
                <div class="carousel-item empty-carousal">
                    <img src="/images/flas_03.jpg" className='img-fluid' alt="New York" />
                    <div class="carousel-caption">
                        <button className='btn' onClick={start}>Lets Start</button>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
    );
}

export default EmptyPage;