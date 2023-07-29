import PropTypes from 'prop-types';
import './styles.scss'

const H3 = ({ children }) => {

    return (
        <h3>{children}</h3>
    )
}

H3.propTypes = {
    children: PropTypes.node,
}

H3.defaultProps = {
    children: 'Children tag H3 berisi text',
};

export default H3