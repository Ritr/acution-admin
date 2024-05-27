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


export default function AdvancedDropzoneDemo({ defaultFiles, maxFiles = 3, onChange }) {
    // const sampleFileProps = {
    //     id: ":0:",
    //     size: 28 * 1024 * 1024,
    //     type: "text/plain",
    //     name: "file created from props.jsx",
    //   };
    const sampleFileProps = {
        id: 18,
        name: "hover.png",
        size: 6772,
        type: "image/png",
        uploadStatus: "success",
        imageUrl: "https://auction-1311516012.cos.ap-beijing.myqcloud.com/hover.png",
        valid: true,
        file: {
            name: "hover.png",
            size: 6772,
            type: "image/png",
        }
    };

    // const sampleFileProps =[
    //     {
    //         "id": 5,
    //         "file": {},
    //         "name": "kk.png",
    //         "size": 9922,
    //         "type": "image/png",
    //         "valid": true,
    //         "xhr": {}
    //     }
    // ]
    const [extFiles, setExtFiles] = useState([]);
    const [imageSrc, setImageSrc] = useState();
    const [videoSrc, setVideoSrc] = useState();

    const updateFiles = (incommingFiles) => {
        console.log("incomming files", incommingFiles);
        setExtFiles(incommingFiles);
    };
    const onDelete = (id) => {
        setExtFiles(extFiles.filter((x) => x.id !== id));
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
                //item.id 标识符
                // item.serverResponse.payload 返回值
                // item.serverResponse.payload.url 图片地址
                // item.imageUrl = item.serverResponse.payload.url;
                files.map((ef) => {
                    if (ef.id === item.id) {
                        ef.imageUrl = item.serverResponse.payload.url;
                        ef.uploadStatus = "success";
                    }
                })
                // onUploadFinish(files.map(item => {
                //     return {
                //         id: item.id,
                //         imageUrl: item.imageUrl,
                //         name: item.nam,
                //         size: item.size,
                //         type: item.type,
                //         uploadStatus: "success"
                //     }
                // }));
            }
        });
        setExtFiles(files);
    };
    useEffect(() => {
        onChange && onChange(extFiles.map(item => {
            if (item.uploadStatus == "success") {
                return {
                    id: item.id,
                    imageUrl: item.imageUrl,
                    name: item.nam,
                    size: item.size,
                    type: item.type,
                    uploadStatus: "success"
                }
            }
        }));
    }, [extFiles])
    useEffect(() => {
        setExtFiles([sampleFileProps]);
    }, [])
    return (
        <>
            <Dropzone
                onChange={updateFiles}
                value={extFiles}
                accept="image/*"
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
                {extFiles.map((file) => (
                    <FileMosaic
                        {...file}
                        key={file.id}
                        onDelete={onDelete}
                        onSee={handleSee}
                        onWatch={handleWatch}
                        alwaysActive
                        smartImgFit="center"
                        preview
                    />
                ))}
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