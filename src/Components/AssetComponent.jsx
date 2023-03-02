import React, { useState } from 'react';
import { HiDownload } from 'react-icons/hi';


const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener", "noreferrer");
  if (newWindow) newWindow.opener = null;
};

const downloadFileAtURL = (url) => {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]));
      const splits = url.split("/");
      const fileName =
        splits[splits.length - 2] + "-" + splits[splits.length - 1];
      const aTag = document.createElement("a");
      aTag.href = blobURL;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    });
};

function AssetComponent(props) {
  return (
    <div className='container' >
      <img
        src={props.filename}
        alt="asset"
        className={props.class}
        onClick={() => openInNewTab(props.filename)}
        title = {props.tooltip}
      />
      <br />
      <button
        className='glassBtn'
        onClick={() => {
          downloadFileAtURL(props.filename);
        }}
      >
        <HiDownload />
      </button>
    </div>
  )
}

export default AssetComponent;
