/**
 * Faq Page
 */
import React, { Component, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Offcanvas from '../../../Entryfile/offcanvance';


const Faq = () => {
	const [show, setShow] = useState(false);
	const [scnd, setScnd] = useState(false);
	const [thrd, setThrd] = useState(false);
	const [fourth, setFourth] = useState(false);
	const [fifth, setFifth] = useState(false);


	const handleShow = () => {
		console.log('Click Show')
		setShow(!show);
	}
	const handleShowscnd = () => {
		setScnd(!scnd);
	}

	const showThrd = () => {
		setThrd(!thrd);
	}
	const showFourth = () => {
		setFourth(!fourth);
	}
	const showFifth = () => {
		setFifth(!fifth);
	}
	// const handleClose = () => {
	// 	console.log('Click Hide')

	// 	setShow(false);
	// }

	return (
		<>
			<div className="page-wrapper">
				<Helmet>
					<title>FAQ - HRMS admin Template</title>
					<meta name="description" content="Subscriptions" />
				</Helmet>
				{/* Page Content */}
				<div className="content container-fluid">
					{/* Page Header */}
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">FAQ</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
									<li className="breadcrumb-item active">FAQ</li>
								</ul>
							</div>
						</div>
					</div>
					{/* /Page Header */}
					<div className="faq-card">
						<div className="card">

							<div className="card-header">

								<h4 className="card-title">

									<a className={!show ? "collapsed" : ""} aria-expanded={show ? true : false} data-bs-toggle="collapse" href="#collapseOne" onClick={handleShow}>Anim pariatur cliche reprehenderit?</a>
								</h4>
							</div>

							< div className={`card-body card-collapse collapse ${show ? "show" : ""}`} >
								<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
								<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
							</div>


						</div>

						<div className="card">

							<div className="card-header">

								<h4 className="card-title">

									<a className={!scnd ? "collapsed" : ""} aria-expanded={scnd ? true : false} data-bs-toggle="collapse" href="#collapseTwo" onClick={handleShowscnd}>Parsnip lotus root celery?</a>
								</h4>
							</div>



							< div className={`card-body card-collapse collapse ${scnd ? "show" : ""}`} >
								<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
								<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
							</div>


						</div>


						<div className="card">

							<div className="card-header">

								<h4 className="card-title">

									<a className={!thrd ? "collapsed" : ""} aria-expanded={thrd ? true : false} data-bs-toggle="collapse" href="#collapseThree" onClick={showThrd}>Ad vegan excepteur butcher ?</a>
								</h4>
							</div>



							< div className={`card-body card-collapse collapse ${thrd ? "show" : ""}`} >
								<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
								<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
							</div>


						</div>

						<div className="card">

							<div className="card-header">

								<h4 className="card-title">

									<a className={!fourth ? "collapsed" : ""} aria-expanded={fourth ? true : false} data-bs-toggle="collapse" href="#collapseFour" onClick={showFourth}>Ad vegan excepteur butcher vice lomo?</a>
								</h4>
							</div>



							< div className={`card-body card-collapse collapse ${fourth ? "show" : ""}`} >
								<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
								<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
							</div>


						</div>

						<div className="card">

							<div className="card-header">

								<h4 className="card-title">

									<a className={!fifth ? "collapsed" : ""} aria-expanded={fifth ? true : false} data-bs-toggle="collapse" href="#collapseFive" onClick={showFifth}>Cupidatat skateboard dolor brunch?</a>
								</h4>
							</div>



							< div className={`card-body card-collapse collapse ${fifth ? "show" : ""}`} >
								<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
								<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
							</div>


						</div>


						{/* <div className="card">
							<div className="card-header">
								<h4 className="card-title">
									<a className="collapsed" data-bs-toggle="collapse" href="#collapseTwo">Parsnip lotus root celery?</a>
								</h4>
							</div>
							<div id="collapseTwo" className="card-collapse collapse">
								<div className="card-body">
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<h4 className="card-title">
									<a className="collapsed" data-bs-toggle="collapse" href="#collapseThree">Ad vegan excepteur butcher ?</a>
								</h4>
							</div>
							<div id="collapseThree" className="card-collapse collapse">
								<div className="card-body">
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<h4 className="card-title">
									<a className="collapsed" data-bs-toggle="collapse" href="#collapseFour">Ad vegan excepteur butcher vice lomo?</a>
								</h4>
							</div>
							<div id="collapseFour" className="card-collapse collapse">
								<div className="card-body">
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<h4 className="card-title">
									<a className="collapsed" data-bs-toggle="collapse" href="#collapseFive">Cupidatat skateboard dolor brunch?</a>
								</h4>
							</div>
							<div id="collapseFive" className="card-collapse collapse">
								<div className="card-body">
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
				{/* /Page Content */}
			</div >
			<Offcanvas />
		</>

	)

}

export default Faq;
