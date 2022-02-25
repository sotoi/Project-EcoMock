
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchQuestion from './SearchQuestion.jsx';
import Question from './Question.jsx';
import QuestionModal from './QuestionModal.jsx';
import getQandA from '../helpers/main_helpers.jsx';

const FlexContainer = styled.div`
display: flex;
justify-content: center;
padding-top: 20px;
padding-bottom: 20px;
`;

const Container = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  max-width: 1280px;
`;
const ButtonA = styled.button`
  height: 60px;
  width: 235px;
  background-color: white;
  padding: 10px;
  margin-left: 25px;
  &:hover {
    background-color: lightgrey;
    border: 1px solid black;
  border-radius: 5px;
  transition: all ease 0.3s;
  }
`;

const ButtonB = styled.button`
  height: 60px;
  width: 175px;
  background-color: white;
  padding: 10px;
  margin-left: 10px;
  &:hover {
    background-color: lightgrey;
    border: 1px solid black;
  border-radius: 5px;
  transition: all ease 0.3s;
  }
`;
const QuestionContainer = styled.div`
  margin: 3px;
  padding: 10px;
  /* border: 3px blue solid; */
  /* box-shadow: 10px 10px 8px grey; */
  position: center;
`;
const SearchDiv = styled.div`
  width: 60%;
  position: relative;
  display: flex;
`;
const SearchBar = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    background-color: none;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    outline: none;
`;

const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid grey;
  background:grey;
  text-align: center;
  color: black;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: lightgrey;
    border: 1px solid black;
  border-radius: 5px;
  transition: all ease 0.3s;
  }
`;

const BtnHolder = styled.div`
display: flex;
flex-direction: row;
`;
///// CLASS ///////
class QuestionMaster extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
      filteredData: [],
      itemsToShow: 4,
      expanded: false,
      modal: false,
      searchText: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.selectModal = this.selectModal.bind(this);
    this.showMore = this.showMore.bind(this);
    this.searchDb = this.searchDb.bind(this);
    this.oldRender = this.oldRender.bind(this);
  };
  componentDidMount() {
      if ( this.props.QA.length > 0) {
        // {console.log("this.props in Qmaster= ", this.props.QA)};
        this.setState({
          questionData: this.props.QA.sort((a, b) => a.helpfulness - b.helpfulness),
          filteredData: this.props.QA.sort((a, b) => a.helpfulness - b.helpfulness)
        });
      }
  }
  componentDidUpdate(prevProps) {
   // const { productID } = this.props.ID;
   // console.log("productID = ", productID)
    // console.log('componentDidUpdate is made', prevProps.ID)
    // console.log('current props ',  this.props.ID)

    if ( prevProps.ID !== this.props.ID) {
      this.oldRender();
    }
  }
  handleSearch () {
    this.setState({
      searchText: event.target.value
    }, ()=> {
      if(event.target.value.length > 2 || event.target.value === '') {
        this.searchDb();
      }
    });
  }
showMore() {
  this.state.itemsToShow === 4 ? (
    this.setState({
      itemsToShow: this.state.filteredData.length,
      expanded: true
    })
  ) : (
    this.setState({
      itemsToShow: 4,
      expanded: false
    })
  )
}
searchDb() {
  const { searchText, filteredData, questionData } = this.state;
  if (searchText.length === 0) {
    this.setState({
      filteredData: questionData
});
  } else {
    const filteredArr = [];
    for (var i = 0; i < filteredData.length; i++) {
      if (filteredData[i].question_body.toLowerCase().includes(searchText)) {
      filteredArr.push(filteredData[i]);
      }
    }
    this.setState({
      filteredData: filteredArr
    });
  }
}
selectModal() {
  const { modal } = this.state;
  this.setState({
    modal: !modal
  });
}
oldRender() {
  const productID = this.props.ID;
  console.log("oldRender method called = ", this.props.ID)
  if(productID !== undefined) {
    axios.get(`/api/qa/questions/?product_id=${this.props.ID}`)
    .then((response) => {
     // console.log('GET REQUEST MADE', response.data.results)
      this.setState({
        questionData: response.data.results.sort((a, b) => a.helpfulness - b.helpfulness),
        filteredData: response.data.results.sort((a, b) => a.helpfulness - b.helpfulness)
      });
    });
  }
}
  render () {
   // const {productID} = this.props.ID;
   // console.log("Render method called = ", this.props.ID)
    const {filteredData, itemsToShow, searchText, expanded, modal} = this.state;
    return (
     <FlexContainer>
       <Container>
         <h1> QUESTIONS & ANSWERS </h1>
         <form onSubmit={(event) => {event.preventDefault();}}>
           <SearchDiv className="searchBar">
             <SearchBar placeholder="Have a question? Search for answers" type="text" value={searchText} onChange={(event) => {event.preventDefault(); this.handleSearch(); }}/>
             <SearchBtn className="fa fa-search" />
           </SearchDiv>
         </form>
         <QuestionContainer>
        {filteredData.slice(0, itemsToShow).map((item) => (
         <Question item={item} key={item.question_id} />
        ))}
      </QuestionContainer>
      {filteredData.length > 4 && !(expanded)? (
        <ButtonA className="Load-Button" onClick={this.showMore}>
        {' '}
        <b> MORE ANSERED QUESTIONS</b>
        {' '}
        </ButtonA>
      )
      : (
        null
      )}
      <ButtonB className="add-Q-button" onClick={this.selectModal}>
        {' '}
        <b>ADD A QUESTION +</b>
        {' '}
      </ButtonB>
      <QuestionModal
        displayModal={modal}
        closeModal={this.selectModal}
        product_id={this.props.ID }
        setQA={this.props.setQA}
      />
       </Container>
     </FlexContainer>

    );
  }
}
export default QuestionMaster;