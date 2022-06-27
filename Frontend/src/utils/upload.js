
import COS from "cos-js-sdk-v5"
import { OBJECTSTORAGE } from "../api/constants"
import { store } from "../redux/store"
import request from "../utils/request-other"

const minioUpload = (uploadData, fileType, snapShot, opid = 'uuid') => {
  const data = new FormData();
  data.append("file", uploadData.file);
  data.append("fileType", fileType);
  data.append("operationID", opid);
  snapShot && data.append("snapShot", snapShot);
  return request.post("/third/minio_upload", data, {
    headers: {
      "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
      token:store.getState().user.token
    },
  });
};

const getCosAuthorization = async () => {
  const url = `/third/tencent_cloud_storage_credential`;
  const { data, errCode } = await request.post(
    url,
    {
      operationID: Date.now().toString(),
    },
    {
      headers: {
        token: localStorage.getItem(`improfile`),
      },
    }
  );
  if (errCode === 0) localStorage.setItem(`cosprofile`, JSON.stringify(data));
};

 const cosUploadNomal = (file, pcb) => {
  const dpcb = () => {};
  return new Promise((resolve, reject) => {
    let cosprofile = localStorage.getItem("cosprofile");
    if (!cosprofile) reject("no cosprofile");
    cosprofile = JSON.parse(cosprofile);

    cos.putObject(
      {
        Bucket: cosprofile.Bucket,
        Region: cosprofile.Region,
        Key: "IMG" + file.lastModified + file.name,
        // StorageClass: 'STANDARD',
        Body: file, 
        onProgress: pcb ?? dpcb,
      },
      function (cerr, cdata) {
        if (cerr) {
          reject(cerr);
        } else {
          cdata.URL = "https://" + cdata.Location;
          const tdata = {
            data: cdata,
          };
          resolve(tdata);
        }
      }
    );
  });
};

 const cosUpload = (data, pcb) => {
  const dpcb = () => {};
  return new Promise((resolve, reject) => {
    let cosprofile = localStorage.getItem("cosprofile");
    if (!cosprofile) reject("no cosprofile");
    cosprofile = JSON.parse(cosprofile);

    cos.putObject(
      {
        Bucket: cosprofile.Bucket,
        Region: cosprofile.Region,
        //@ts-ignore
        Key: data.file.uid + data.file.name,
        // StorageClass: 'STANDARD',
        Body: data.file, 
        onProgress: pcb ?? dpcb,
      },
      function (cerr, cdata) {
        if (cerr) {
          reject(cerr);
        } else {
          cdata.URL = "https://" + cdata.Location;
          const tdata = {
            data: cdata,
          };
          resolve(tdata);
        }
      }
    );
  });
};

const cos = new COS({
  getAuthorization: function (options, callback) {
    let cosprofile = localStorage.getItem("cosprofile");
    if (!cosprofile) return;
    cosprofile = JSON.parse(cosprofile);
    const result = cosprofile.CredentialResult;

    callback({
      TmpSecretId: result.Credentials?.TmpSecretID,
      TmpSecretKey: result.Credentials?.TmpSecretKey,
      SecurityToken: result.Credentials?.SessionToken,
      StartTime: result.StartTime,
      ExpiredTime: result.ExpiredTime,
    });
  },
});

export const switchUpload = async (uploadData, fileType = "1", isNomal = false, snapShot) => {
  if (OBJECTSTORAGE === "minio") {
    return minioUpload(isNomal ? ({ file: uploadData }) : uploadData, fileType);
  } else {
    await getCosAuthorization();
    return isNomal ? cosUploadNomal(uploadData) : cosUpload(uploadData);
  }
};

export const getPicInfo = (file) => {
  return new Promise((resolve, reject) => {
    const _URL = window.URL || window.webkitURL;
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.src = _URL.createObjectURL(file);
  });
};
