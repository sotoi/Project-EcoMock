import React from 'react';
import axios from 'axios';
import SearchQuestion from './SearchQuestion.jsx';
class QuestionAnswerState extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionResults: [],
      searchTerm: ''
    }

    this.onSearch = this.onSearch.bind(this);
   // this.getQuestionsApi = this.getQuestionsApi.bind(this);
  };
  componentDidMount() {
    // axios.get(`qa/questions?product_id=${this.props.productId}`)
    // .then((data) => {
    // console.log('get request = ', data.results);
    // });
  }

  onSearch (text) {
    this.setState (() => ({
      searchTerm: '',
     // productId: this.props.productId
    }));
  }

  render () {
    return (
      <div>
      {console.log("this.props = ", this.props)};
      <div className="search">
        <SearchQuestion
          onSearch={this.onSearch}
        />
      </div>
      <div>

      </div>
      </div>
    )
  }
}
export default QuestionAnswerState;