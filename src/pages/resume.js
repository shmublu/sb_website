import './resume.css'
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <>
    
    <div className="CV">
    <Document file='./resume.pdf' onLoadError={console.error} >
    <Page pageNumber={1} />
    </Document>
    </div>
    </>

  );
}

export default App;
