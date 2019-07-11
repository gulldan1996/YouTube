import { connect } from 'react-redux';
import { handleSubmit, handleChange } from "../redux/action";
import YouTube from './YouTube'

function mapStateToProps(state) {
  const lang = state[state.lang];
  if (lang !== undefined) {
    return {
      lang: lang,
      term: state.term
    };
  } else {
    return {
      lang: true
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange: event => dispatch(handleChange(event)),
    handleSubmit: () => dispatch(handleSubmit())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(YouTube);
