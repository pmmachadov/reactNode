const fetchRandomQuote = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'X-Api-Key': 'reGXKiXbdXU4MEf57Sqk1Zz02VCxOpo3xFbGDJH2'
            }
        };
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', options);
        if (!response.ok) throw new Error('Response not ok');
        const data = await response.json();
        const quote = data[0];
        console.log(quote);
        return quote;
    } catch (error) {
        console.error('Error fetching random quote:', error);
        return { quote: '', author: '' };
    }
};

export default fetchRandomQuote;