import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";

// define a generatePDF function that accepts a tickets argument
const generatePDF = (tickets) => {
  // initialize jsPDF
  tickets.choosenPhotoGrapher && delete tickets.choosenPhotoGrapher;
  tickets.lat && delete tickets.lat;
  tickets.ln && delete tickets.lng;
  const doc = new jsPDF({
    orientation: "landscape",
  });

  // define the columns we want and their titles
  const tableColumn = Object.keys(tickets);
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  const ticketData = Object.keys(tickets).map(function (key) {
    return tickets[key];
  });
  // push each tickcet's info into a row
  tableRows.push(ticketData);

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  //   const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text("Ogaphoto booking details.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`Booking_details.pdf`);
};

export default generatePDF;
