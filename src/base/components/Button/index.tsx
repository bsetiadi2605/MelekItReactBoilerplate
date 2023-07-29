import PropTypes from 'prop-types';
import './styles.scss'

const Button = ({ children, onClick }) => {

    return (
        <>
            <button type="button" onClick={onClick}>{children}</button>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
}

Button.defaultProps = {
    children: 'Button',
    onClick: null
};

export default Button