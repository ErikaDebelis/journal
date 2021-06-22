import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Journal, { finalEntry } from './journal';
// import Journal from './journal.js';

let journalObject = Journal();
let journal = finalEntry(journalObject, 'some title', 'text')
console.log('stuff here?', journal)


$('button').click(function() {
  console.log('we clicked!')
  let journalObject = Journal();
  let entryTitle = $("input#title").val();
  let entryBody = $("textarea#text-area").val();

  let journal = finalEntry(journalObject, entryTitle, entryBody);

  console.log(journal, 'sanity check');

  $("#output-count-total").text(journal.wordCount);
});