import React from 'react';
import styled from 'styled-components';
import AnswerPhoto from './AnswerPhoto.jsx';

const Container = styled.div`
  display: flex;
  /* padding: 10px;
  border: 3px purple solid; */
`;
const Button = styled.button`
  text-decoration: underline;
  background: transparent;
  padding-top: 0px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;

  }
`;
const AnwserDiv = styled.div`
  display: flex;
`;
const AnswerBody = styled.p`
  padding-top: 6px;
  padding-left: 10px;
`;
const Divide = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 0px;

`;
const PhotoDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
// CLASS//
class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedYes: false,
      clickedReport: false,
      helpful: this.props.item.helpfulness
    }
    this.handleClick = this.handleClick.bind(this);
  };
handleClick(event) {
//console.log(event.target.name);
if (!this.state.clickedYes && event.target.name === 'helpful') {
  this.setState({
    clickedYes : true
  });
  axios.put('/qa/questions', {
    answer_id: this.props.item.id,
    type: event.target.name,
  })
    .then((response) => {
      this.setState({
        helpful: this.state.helpful + 1,
      });
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  this.setState({
    clickedReport: true,
  });
  axios.put('/qa/questions', {
    answer_id: this.props.item.id,
    type: event.target.name,
  })
    .then(() => {
      console.log('this answer has been reported.');
    });
}
}

render() {
  const {item} = this.props;
  const {clickedReport, helpful } = this.state;
  return (
    <div>
    <AnwserDiv>
      <h3> Answers : </h3>
      <AnswerBody>
        {item.body}
      </AnswerBody>
    </AnwserDiv>
      <br />
      <PhotoDiv>
        {item.photos.map((photo, i) => (
          <AnswerPhoto photo={photo} key={i} />
        ))}
      </PhotoDiv>
      <Container>
        {item.answerer_name === item.asker_name
        ? (
          <p>
            by
            {' '}
            <b> Seller </b>
            {' '}
            {new Date(item.date).toLocaleDateString(undefined, {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            })}
            {' '}
          </p>
        ) : (
          <p>
            by
            {' '}
            {item.answerer_name}
            {' '}
            {new Date(item.date).toLocaleDateString(undefined, {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            })}
          </p>
        )}
        <Divide className="divider"> | </Divide>
        <p> Helpful? </p>
        <Button name="helpful" onClick={(event)=> { event.preventDefault(); this.handleClick(event);}}> Yes </Button>
        <p>{helpful}</p>
        <Divide className="divider"> | </Divide>
        {!clickedReport ? (
          <Button name="report" onClick={(event)=> { event.preventDefault(); this.handleClick(event);}}> Report </Button>) : (<p>Reported</p>)}
      </Container>
    </div>
  );
}
}
export default Answers;