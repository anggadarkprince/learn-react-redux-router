import {Component} from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('modal-root');
const body = document.getElementsByTagName('body')[0];

class Modal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.classList.add('modal-overlay');
    }

    componentDidMount() {
        body.style.overflow = 'hidden';
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        body.style.overflow = 'scroll';
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

export default Modal;