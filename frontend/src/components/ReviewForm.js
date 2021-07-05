import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { BACKEND } from '../config';
import SendIcon from '@material-ui/icons/Send';
import StarRatings from 'react-star-ratings';

import './assets/styles/ReviewForm.css';


const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        
      
        this.changeRating = this.changeRating.bind(this);
        this.state = { 
          rating: 1,
        content: '',
        errors: {
            content: ''
          }
        };
      }
    
      changeRating(rating) {
        this.setState({
          rating: rating
        })
      }

    updateContent = event => {
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'content':
              var format = /[`@#$%^&*()_+\-=[\]{}'\\|<>~]/;
            if (format.test(value))
                errors.content = 'Special characters are not supported'
                //console.log(errors.content)
                else if(value.length <30)
                errors.content = 'Kepp typing, the comment must be at least 30 characters long'
            else
                errors.content=''
              break;
            default:
              break;
          }
        
          this.setState({errors, [name]: value}, ()=> {
              //console.log(errors)
          })
    }
    
  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      //alert('Review submitted. Thank you for sharing your experience with us!')
      this.postReview();
    }else{
      alert('Invalid Form')
    }
  }

    postReview = () => {
        fetch( `${BACKEND.ADDRESS}/reviews/new`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                productId: this.props.details.id,
                content: this.state.content,
                rating: this.state.rating
            })
        }).then (response => response.json())
        .then(json => {
            if(json.type === 'error') {
                alert(json.message);
            }else {
                
            alert('Review submitted. Thank you for sharing your experience with us!')
            }
        })

            .catch(error => alert(error.message));
    }

    render () {
        const {errors} = this.state;
        return (
            <div className='review__form__container'>
                <h1>Leave a review</h1>
                <p>Tell us what you thought about our product</p>
                <StarRatings
                    rating={this.state.rating}
                    starRatedColor="#C70781"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    />
                
                <textarea
                    className='content__textarea'
                    name='content'
                    placeholder='Review...'
                    type='text'
                    onChange={this.updateContent}
                    noValidate
                    />
                    {errors.content.length > 0 && 
                <div className='error'>{errors.content}</div>}
                <br />
                <div>
                <Button 
                    disabled={errors.content.trim().length > 0 || this.state.content.trim().length === 0}
                    onClick={this.handleSubmit} 
                    variant="contained" 
                    color="secondary" 
                    startIcon={<SendIcon />}> 
                    Submit 
                </Button>
                </div>
                
                
            </div>
        )
    }
}

export default ReviewForm;