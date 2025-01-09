
import PropTypes from 'prop-types';


function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
}

ResetButton.propTypes = {
  reset: PropTypes.func.isRequired,
};

export default ResetButton;


