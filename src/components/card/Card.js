import React from 'react';
import PropTypes from 'prop-types';
import './Style.css';

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title"></h4>
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button 
        className="button button-primary"     
        >
        <i className="fa fa-chevron-right"></i>Find out more
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">{this.props.date}</p>
        
        <h2>{this.props.title}</h2>
        
        <p className="body-content">{this.props.text}</p>
        
        <Button />
      </div>
    )
  }
}

CardBody.propTypes = {
    date: PropTypes.string,
    text: PropTypes.string
}

class Card extends React.Component {
  render() {
    return (
      <article className="card" onClick={(e) => {
        e.preventDefault();
        window.location.href=this.props.link;
        }}>
        <CardHeader image={this.props.imageUrl}/>
        <CardBody title={this.props.title} text={this.props.text} date={this.props.date}/>
      </article>
    )
  }
}

Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.string,
};

export default Card;
