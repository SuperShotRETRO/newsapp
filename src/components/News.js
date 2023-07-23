import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  fetchData = async (loading) => {
    if (loading) {
      this.props.setProgress(40);
    }
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading: false,
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    if (loading) {
      this.props.setProgress(100);
    }
  };

  fetchMoreData = () => {
    this.fetchData(false);
  };

  async componentDidMount() {
    this.fetchData(true);
  }

  render() {
    let { theme } = this.props;
    return (
      <div className="container my-3">
        <h2
          style={{
            color: `${theme === "light" ? "black" : "white"}`,
          }}
        >
          Top Headlines
        </h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="row">
            {this.state.articles.map((item) => {
              return (
                <div
                  key={item.url}
                  className="col-md-3"
                  style={{ paddingTop: "20px" }}
                >
                  <NewsItem
                    title={item.title}
                    description={item.description}
                    image={item.urlToImage}
                    url={item.url}
                    theme={theme}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
