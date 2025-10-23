import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';

export class News extends Component {
  static defaultProps = {
      pageSize: 5,
      category: 'general',
   }

  //  static propTypes = {
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  //  }
  


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.props.category.toUpperCase()} - NewsMonkey`;
    
  }
   
  async updateNews(){
     try {
      this.setState({loading: true});
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      // console.log(parseData);
      this.setState({ 
        articles: parseData.articles, 
        loading: false, 
        totalResults: parseData.totalResults,
        page: this.state.page
     });  

    } catch (error) {
      console.error("Error fetching news articles:", error);
    }
  }

  async componentDidMount() {
    console.log("componentDidMount   page no: "+this.state.page);
    this.updateNews();
  }  
// Previous button handler
  handelprevious = async () => {
              if(this.state.page <= 1){ return; } 
              this.setState({page: this.state.page - 1});

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});  
    let data = await fetch(url);
    let parseData = await data.json();
      // console.log(parseData);

    this.setState({
      articles: parseData.articles,
      loading: false
    });
  }


//  Next button handler
  handelnext = async () => {
         this.setState({page: this.state.page + 1});

         let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true}) 
      let data = await fetch(url);
      let parseData = await data.json();
        // console.log(parseData);
  
      this.setState({
        articles: parseData.articles,
        loading: false
      });
  }

 
  render() {
    return (
       
      <div>
        <div className="container my-3">
                <h2>NewsMonkey - Top  {this.props.category.toUpperCase()} Headlines  </h2>
                {this.state.loading &&  <Spin/>}
                <div className="row">
                {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage ? element.urlToImage : ""} url={element.url ? element.url : ""} author={!element.author?"unknown":element.author} date={element.publishedAt} source={element.source.name} />
                               </div>
              })}
              </div>
              <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handelprevious}>&larr; previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handelnext}>Next &rarr;</button>
              </div>
               </div>     

      </div> 
    )
  }
}

export default News

