import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {

        let { title, description, imageUrl, url, author, date, source } = this.props;
        return (
            <div >

                <div className="card my-3" >
                    <img src={!imageUrl ? "https://thumbs.dreamstime.com/b/error-page-file-not-found-illustration-landing-design-can-be-used-websites-pages-ui-mobile-applications-posters-180066142.jpg" : imageUrl} className="card-img-top" alt="......." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">by {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>

                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '85%', zIndex: '1' }} >
                        {source}   
                    </span>
                </div>


            </div>
        )
    }
}

export default NewsItem
