import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { BACKEND } from '../config';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import StarRatings from 'react-star-ratings';

import './assets/styles/AccountReviewRow.css';


const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  
class AccountReviewRow extends Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
        this.state = { 
          rating: this.props.review.rating,
          content: this.props.review.content,
          edit: false,
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
          this.save();
        }else{
          alert('Invalid Form')
        }
      }

    save = () => {
        fetch( `${BACKEND.ADDRESS}/reviews/update`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.props.review.reviewId,
                rating: this.state.rating,
                content: this.state.content
            })
        }).then (response => response.json())
            .then(json => {
                if(json.type === 'error') {
                    alert(json.message);
                } else {
                    this.toggleEdit();
                    alert(json.message);
                }
            })
            .catch(error => alert(error.message));
    }
    
    toggleEdit = () => {
        this.setState ({ edit: !this.state.edit });
    }

    get SaveButton () {
        return <Button 
                    onClick={this.handleSubmit} 
                    variant="contained" color="secondary" 
                    startIcon={<SaveIcon />} 
                    disabled={this.state.errors.content.trim().length > 0}
                    >
                         Save 
                    </Button>;
    }

    get EditButton () {
        return <Button onClick={this.toggleEdit} variant="contained" color="primary" startIcon={<EditIcon />}> Edit </Button>;
    }

    render () {
        const {errors} = this.state;
        return (
            <div className='product__row__container'>
                <div className='product__row__img'>
                <img alt ='row_image' src={this.props.review.url}></img>
                </div>
                <div className='product__row__info'>
                <span className='label'>Product name:{' '}</span>{this.props.review.name}
                <br/>
                <span className='label'>Type:{' '}</span>{this.props.review.display_name}
                <br/>
                <span className='label'>Category:{' '}</span>{this.props.review.category}
                <br/>
                <span className='label'>Rating:{' '}</span>
                <StarRatings
                    rating={this.state.rating}
                    starRatedColor="#C70781"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    starDimension='20px'
                    starSpacing='2px'
                    />
                    <br/>
                <span className='label'>Review:</span>
                <br/>
                <textarea
                    type='content'
                    name='content'
                    disabled={!this.state.edit}
                    value={this.state.content}
                    onChange={this.updateContent}
                    />
                    {errors.content.length > 0 && 
                <div className='error'>{errors.content}</div>}
                <br />
                <div>
                 {
                    this.state.edit ? this.SaveButton : this.EditButton
                 }
                </div>
                
                </div>
                
            </div>
        )
    }
}

export default AccountReviewRow;