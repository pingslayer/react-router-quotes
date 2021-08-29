import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Mugabe",
    text: "If you're ugly, you're ugly.",
  },
  {
    id: "q2",
    author: "Slim shady",
    text: "Palms are sweaty, knees weak arms are heavy.",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
