
import PropTypes from 'prop-types';

function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  );
}

IncreaseButton.propTypes = {
  increase: PropTypes.func.isRequired,
};

export default IncreaseButton;