import React from 'react'
import Footer from './Pages/Footer'
import Navbar from './Pages/Navbar'
import SideBar from './Pages/SideBar'

function Dashboard() {
    return (
        <>
            <Navbar />
            <SideBar />
            <div className="content-wrapper">
                {/* <!-- Content Header (Page header) --> */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Fixed Layout</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Layout</a></li>
                                    <li className="breadcrumb-item active">Fixed Layout</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.container-fluid --> */}
                </section>

                {/* <!-- Main content --> */}
                <section className="content">

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Title</h3>

                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        WelCome Your are Login
                                    </div>
                                    <div className="card-footer">
                                        Footer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- /.content --> */}
            </div>
            <Footer />
        </>
    )
}

export default Dashboard