import { answerQuestion } from "./../../redux/actions/action_creators";
import {connect} from "react-redux";
import Quiz from "./../presenters/Quiz";

const mapStateToProps = state => {
  return { store: state };
};

const mapDispatchToProps = dispatch => {
  return {
    onAnswerClick: (id, answer) => {
      dispatch(answerQuestion(id, answer));
    }
  };
};

//mapstatetoprops and mapdispach to props combines them into one prop

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

export default App;