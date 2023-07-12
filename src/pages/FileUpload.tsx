import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import './FileUpload.scss'
import axios from 'axios'

function FileUpload (){
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = true;

        // upload file
        const formData = new FormData();
        formData.append(
            "csv_file",
            file,
            file.name
        )
        axios.post('https://17c3-2401-4900-1c16-7e94-1583-b3fc-ae4f-33de.ngrok-free.app/system-fault-prediction', formData)
            .then((res) => {
                file.isUploading = false;
                alert(res.data.prediction)
            })
            .catch((err) => {
                // inform the user
                console.error(err)
            });
    }

    return (
        <>
            <div className="file-card">

                <div className="file-inputs">
                    <input type="file" onChange={uploadHandler} />
                    <button>
                        <i>
                            <PlusIcon />
                        </i>
                        Upload
                    </button>
                </div>

                <p className="main">Supported files</p>
                <p className="info">.csv</p>

            </div>
        </>
    )
}

export default FileUpload