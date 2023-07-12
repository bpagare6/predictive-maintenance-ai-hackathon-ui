import NavBar from '@src/layouts/NavBar';
// import { FileUpload } from 'primereact/fileupload';
import FileUpload from './FileUpload';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import "primereact/resources/primereact.min.css";
import './systemDetails.scss';
import axios from 'axios';
 

const HandleUpload= (event) => {
    const formData = new FormData();
    formData.append("csv_file", event.files[0]);
    axios
    .post("https://17c3-2401-4900-1c16-7e94-1583-b3fc-ae4f-33de.ngrok-free.app/system-fault-prediction", formData)
    .then((response) => {
      // handle the response
      alert(response.data.prediction);
      console.log(response);
    })
    .catch((error) => {
      // handle errors
      console.log(error);
    });

};

const uploadedData=(event) => {
    return(
        <div>
            {predictionResponse}
        </div>
    )

}

function SystemDetails() {
	return (
		<div className="w-screen h-full">
			<NavBar />
            <div className='card'>
            {/* <FileUpload
            id="fileupload"
            name="job_opening"
            url=""
            accept=".csv"
            customUpload
            
        ></FileUpload> */}
        <FileUpload/>
                {/* <FileUpload name="demo[]" multiple accept=".csv" maxFileSize={1000000} 
                customUpload
                uploadHandler = {HandleUpload}
                onUpload = {uploadedData}
                emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} /> */}
                {/* <PredictedChart /> */}
            </div>
		</div>
	);
}

export default SystemDetails



