"use client";
import {
    Dropzone,
    FileCard,
    FileMosaic,
    FullScreen,
    ImagePreview,
    VideoPreview,
    FileInputButton
} from "@files-ui/react";
import { useEffect, useState } from "react";


export default function AdvancedDropzoneDemo({ defaultValue, maxFiles = 3, accept = "image/*", onChange }) {
    const [extFiles, setExtFiles] = useState([]);
    const [imageSrc, setImageSrc] = useState();
    const [videoSrc, setVideoSrc] = useState();

    const updateFiles = (incommingFiles) => {
        console.log("incomming files", incommingFiles);
        setExtFiles(incommingFiles);
    };
    const onDelete = (id) => {
        const files = extFiles.filter((x) => x.id !== id);
        setExtFiles(files);
        emit(files);
    };
    const handleSee = (imageSource) => {
        setImageSrc(imageSource);
    };
    const handleWatch = (videoSource) => {
        setVideoSrc(videoSource);
    };
    const handleStart = (filesToUpload) => {
        console.log("advanced demo start upload", filesToUpload);
    };
    const handleFinish = (uploadedFiles) => {
        console.log("advanced demo finish upload", uploadedFiles);
        //判断对象的serverResponse值确认是否上传成功
        const files = [...extFiles];
        uploadedFiles.map(item => {
            if (item.serverResponse.payload.message === "success") {
                files.map((ef) => {
                    if (ef.id === item.id) {
                        ef.url = item.serverResponse.payload.url;
                        ef.uploadStatus = "success";
                    }
                })
            }
        });
        setExtFiles(files);
        emit(files);
    };
    const emit = (files) => {
        let files2 = files.map(item => {
            if (item.uploadStatus == "success") {
                return {
                    id: item.id,
                    url: item.url,
                    name: item.name,
                    size: item.size,
                    type: item.type,
                    uploadStatus: "success",
                    valid: true
                }
            }
        })
        console.log("files2", files2);
        if (files2 && files2.length > 0) {
            onChange(files2);
        } else {
            onChange(null);
        }
    }
    useEffect(() => {
        if (!defaultValue) {
            return;
        }
        setExtFiles(defaultValue);
    }, [defaultValue]);

    return (
        <>
            <Dropzone
                onChange={updateFiles}
                value={extFiles}
                accept={accept}
                maxFiles={maxFiles}
                label="Drag'n drop files here or click to browse"
                uploadConfig={{
                    url: "/api/file",
                    cleanOnUpload: true,
                }}
                onUploadStart={handleStart}
                onUploadFinish={handleFinish}
                actionButtons={{
                    position: "after",
                    uploadButton: {},
                }}
            >
                {/* {JSON.stringify(extFiles)} */}
                {extFiles ? extFiles.map((file) => (

                    <FileMosaic
                        {...file}
                        key={file.id}
                        onDelete={onDelete}
                        onSee={handleSee}
                        onWatch={handleWatch}
                        alwaysActive
                        smartImgFit="center"
                        preview
                        imageUrl={file.url}
                    />
                )) : null}
            </Dropzone>
            {
                imageSrc &&
                <FullScreen
                    open={imageSrc !== undefined}
                    onClose={() => setImageSrc(undefined)}
                >
                    <ImagePreview src={imageSrc} />
                </FullScreen>
            }

        </>
    );
}