import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useParams } from 'react-router-dom';

function PdfComponent() {
  // const pdfComponent = useLoaderData();

  const [pdfFile, setPdfFile] = useState([]);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const { _id } = useParams();
  const details = pdfFile.find(details => details._id == _id);
  console.log(details);


  useEffect(() => {
    fetch("https://online-group-study-server-khaki.vercel.app/report")
      .then(res => res.json())
      .then(data => setPdfFile(data))
  }, [])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="/public/dhaka.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
      {/* <p>Page {pageNumber} of {numPages}</p> */}



    </div>
  );
}

export default PdfComponent;