//Utility Logic
export function noInputtedWord(title, body) {
  return ((title.trim().length === 0)  && (body.trim().length === 0));
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

export function finalEntry(journalEntry, title, body) {
  Title(journalEntry, title);
  Body(journalEntry, body);
  
  // journalEntry = { title, body }
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
function wordCounter(journalEntry) {
  console.log('start it', journalEntry)

  if (
    journalEntry.title.trim().length === 0 &&
    journalEntry.body.trim().length === 0
  ) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = journalEntry.title.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });

  const wordArray2 = journalEntry.body.split(" ");
  wordArray2.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });

  console.log('at the end', wordCount)
  journalEntry.wordCount = wordCount
  return journalEntry;
}
// function wordCounterTotal(wordCounterTitle,body) {
//   if (body.trim().length === 0 && ) {
//     return 0;
//   }
//   let wordCount = 0;
//   const wordArray = body.split(" ");
//   wordArray.forEach(function(element) {
//     if (!Number(element)) {
//       wordCount++;
//     }
//   });
//   return wordCount;