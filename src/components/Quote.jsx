const Quote = ({ text, author }) => (
    <div className="quote-card">
        <p className="quote-text">{ text }</p>
        <p className="quote-author">{ author }</p>
    </div>
);

export default Quote;