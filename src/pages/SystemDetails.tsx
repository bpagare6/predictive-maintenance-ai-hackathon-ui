import NavBar from '@src/layouts/NavBar';
import { FileUpload } from 'primereact/fileupload';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import "primereact/resources/primereact.min.css";
import './systemDetails.scss'
import "src/utils/reduced-master-dataset-without-4features.csv"

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
                <FileUpload name="demo[]" url={'/api/upload'} multiple accept=".csv" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
 
            </div>
		</div>
	);
}

export default SystemDetails



