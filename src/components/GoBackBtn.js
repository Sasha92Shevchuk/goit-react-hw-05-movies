import PropTypes from 'prop-types';
import { BackLink } from './GoBackBtn.styled';

export const GoBackBtn = ({ path }) => {
  return <BackLink to={path}> &larr; Go Back</BackLink>;
};

GoBackBtn.propTypes = {
  path: PropTypes.object.isRequired,
};
