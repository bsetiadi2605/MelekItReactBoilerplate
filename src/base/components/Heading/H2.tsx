import PropTypes from 'prop-types';
import './styles.scss'

const H2 = ({ children }) => {

    return (
        <h2>{children}</h2>
    )
}

H2.propTypes = {
    children: PropTypes.node,
}

H2.defaultProps = {
    children: 'Children tag H2 berisi text',
};

export default H2