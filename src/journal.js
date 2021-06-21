//Utility Logic
function noInputtedWord(word, text ) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Object Constructor for Journal
export default function Journal() {
  let journalEntry = {
    title: "",
    body: "",
    wordCount: 0
  };
  return journalEntry;
}
function finalEntry(title, body) {
  Title(journalEntry, title);
  Body(journalEntry, body);
  
  const finalResult = wordCounter(journalEntry);

  return finalResult;
}
function Title (journalEntry, title) {
  journalEntry.title = title;
}

function Body (journalEntry, body){
  journalEntry.body = body;
}

// method for finding the number of words within journal
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