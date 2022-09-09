import React from 'react'

export default function C() {
  return (
    <div>
      <div className="content-wrapper bg-black">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Home</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        {/* /.content */}
        <div className="image">
        <img src="dist/img/mor3.jpg"  alt="User Image" />
        </div>

      </div>
    </div>
  )
}
