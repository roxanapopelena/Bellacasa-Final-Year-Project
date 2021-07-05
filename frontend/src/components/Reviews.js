import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {BACKEND} from '../config';
import StarRatings from 'react-star-ratings';

import './assets/styles/Reviews.css';

function Reviews() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      fetch(`${BACKEND.ADDRESS}/reviews/${id}`)
       .then(resp => resp.json())
       .then(response => {
          setData(response.reviews);
          setIsLoading(true);
        })
        .catch(error => console.log(error));
    }, [id]);

    const displayReviews = ()=> {
      if (data.length === 0) {
          return (
            <p>No reviews yet.</p>
          )
        }
        return data.map((details, i) => {
                //console.log(details);
            return (
                <div key={i} className='individual__product__review__container'>
                  <i className="far fa-comment"></i>
                    <p className='review__timestamp'><span><small>{details.timestamp}</small></span>
                      </p>
                    <p><span>{details.firstName}{' '}{details.lastName}</span></p>
                    <span className='rating'><small>Rating:{' '} </small>
                    <StarRatings
                      rating={details.rating}
                      starRatedColor="#C70781"
                      isSelectable='false'
                      numberOfStars={5}
                      name='rating'
                      starDimension='15px'
                      starSpacing='2px'
                    />
                      </span>
                      <br/>
                      <br/>
                    <p className='c'>{details.content}</p>
                    
                </div>
            )})
          }
    

      return(
        <div className='product__reviews'>
      <h1>Reviews from our customers:</h1>
            
      {isLoading ? displayReviews() : <p></p>}
        </div>
    );
      }


export default Reviews;