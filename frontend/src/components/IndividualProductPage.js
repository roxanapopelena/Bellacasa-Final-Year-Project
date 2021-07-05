import React, {useState, useEffect} from 'react';
import {BACKEND} from '../config';
import {useParams} from "react-router-dom";
import ProductDetails from './ProductDetails';
import SimilarProducts from './SimilarProducts';
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';

function IndividualProductPage() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      window.scrollTo(0, 0)
      fetch(`${BACKEND.ADDRESS}/products/product-details/${id}`)
       .then(resp => resp.json())
       .then(response => {
          setData(response.details);
          setIsLoading(true);
          //console.log(response.details);
        })
        .catch(error => console.log(error));
    }, [id]);

    const displayDetails = ()=> {
      return data.map((details, i) => (<ProductDetails key={i} details={details} />))
    }

    const displaySimilarProducts = ()=> {
      return data.map((details, i) => (<SimilarProducts key={i} details={details} />))
    }
    const displayReviewForm = ()=> {
      return data.map((details, i) => (<ReviewForm key={i} details={details} />))
    }
    const displayReviews = ()=> {
      return data.map((details, i) => (<Reviews key={i} details={details} />))
    }

  return (
    <div>
      {isLoading ? displayDetails() : <p></p>}
      {isLoading ? displaySimilarProducts() : <p></p>}
      {isLoading ? displayReviewForm() : <p></p>}
      {isLoading ? displayReviews() : <p></p>}
    </div>
  );
}




export default IndividualProductPage;