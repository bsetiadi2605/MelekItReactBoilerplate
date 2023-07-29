import PropTypes from 'prop-types';
import './styles.scss'

const H1 = ({ children }) => {

    return (
        <h1>{children}</h1>
    )
}

H1.propTypes = {
    children: PropTypes.node,
}

H1.defaultProps = {
    children: 'Children tag H1 berisi text',
};

export default H1