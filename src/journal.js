// Constructor for Journal
export default function Journal(title, body) {
  this.title = title;
  this.body = body;  
}
// prototype for finding the number of words within journal
function noInputtedWord(journal, ) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}