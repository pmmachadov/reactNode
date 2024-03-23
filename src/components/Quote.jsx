import { quotePropTypes } from '../utils/CustomPropTypes';

const Quote = ({ text, author }) => (
    <div className="quote-card">
        <p className="quote-text">{ text }</p>
        <p className="quote-author">{ author }</p>
    </div>
);

Quote.propTypes = quotePropTypes;

export default Quote;