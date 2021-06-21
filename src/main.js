import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Journal from './journal';
// import Journal from './journal.js';

$('form#output-count-total').submit(function(event) {
let journalObject = Journal();
let entryTitle = $("input#title").val();
let entryBody = $("textarea#text-area").val();

let journal = finalEntry(journalObject, entryTitle, entryBody);

console.log(journal);

  event.preventDefault();
});