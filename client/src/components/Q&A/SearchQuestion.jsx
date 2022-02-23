import React from 'react';

class SearchQuestion extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm : ''
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }
  // Create an input field
  // add icons
  // add the state so it can store the search item
  // pass in all the questions as props so we can search each question
  // Update the visible question
  onChange  = (e) => {
    console.log('The term searched is = ', e.target.value);
    this.setState({
      searchTerm: e.target.value
    })
  }
  search = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm)
  }
  render() {
    return (
      //Fragments let you group a list of children without adding extra nodes to the DOM.
     <div>
     {/* {console.log('SearchProps = ', this.props.questions)}; */}
       <div className="searchbar">
         <form>
         <p className="searchbartitle"> QUESTIONS & ANSWERS
         <br />
         <input
           type="text"
           onChange={this.onChange} //invoke onChange
           className="searchfield search largefont"
           placeholder="Have a question? Search for answers"
        // value={}
        // onChange={this.onChange}
        />
         </p>
         </form>
       </div>
     </div>

    );
      }
  }
export default SearchQuestion;