import React, { Component } from 'react';
import Sidebar from '../sidebar';
import Content from '../content';
import style from "./dashboard.scss";

const Dashboard = () => (

	<div className={style.dashboard}>
		<Sidebar />
		<Content />
	</div>

)

export default Dashboard;