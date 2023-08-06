/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { TextEditor } from "text-editor-react";

// import ReactSummernote from 'react-summernote';
import Offcanvas from '../../../../Entryfile/offcanvance';
import { DefaultEditor } from 'react-simple-wysiwyg';
// import 'react-summernote/dist/react-summernote.css'; // import styles
// import "../../../../../node_modules/react-summernote/dist/react-summernote.css";

import "../../../index.css";

const Compose = () => {
  // const id = "my-unique-id";
  const [html, setHtml] = React.useState('my <b>HTML</b>');

  function onChange(e) {
    setHtml(e.target.value);
  }
  const onImageUpload = (fileList) => {

    const reader = new FileReader();
    reader.onloadend = () => {
      ReactSummernote.insertImage(reader.result);
    }
    reader.readAsDataURL(fileList[0]);

  }
  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Compose - Capstone Reactjs Jira</title>
          <meta name="description" content="Compose" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Compose</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                  <li className="breadcrumb-item active">Compose</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <input type="email" placeholder="To" className="form-control" />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" placeholder="Cc" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" placeholder="Bcc" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Subject" className="form-control" />
                    </div>

                    <div className="form-group">
                      {/* <ReactSummernote
                        value="Default value"
                        options={{
                          lang: 'ru-RU',
                          height: 350,
                          dialogsInBody: true,
                          toolbar: [
                            ['style', ['style']],
                            ['font', ['bold', 'underline', 'clear']],
                            ['fontname', ['fontname']],
                            ['para', ['ul', 'ol', 'paragraph']],
                            ['table', ['table']],
                            ['insert', ['link', 'picture', 'video']],
                            ['view', ['fullscreen', 'codeview']]
                          ]
                        }}
                        // onChange={this.onChange}
                        onImageUpload={onImageUpload}
                      /> */}
                      <DefaultEditor value={html} onChange={onChange} />

                      {/* <textarea rows={4} className="form-control summernote" placeholder="Enter your message here" defaultValue={""} /> */}
                    </div>
                    <div className="form-group mb-0">
                      <div className="text-center">
                        <button className="btn btn-primary"><span>Send</span> <i className="fa fa-send m-l-5" /></button>&nbsp;&nbsp;
                        <button className="btn btn-success m-l-5" type="button"><span>Draft</span> <i className="fa fa-floppy-o m-l-5" /></button>&nbsp;&nbsp;
                        <button className="btn btn-success m-l-5" type="button"><span>Delete</span> <i className="fa fa-trash-o m-l-5" /></button>&nbsp;&nbsp;
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <Offcanvas />
    </>

  );

}

export default Compose;
