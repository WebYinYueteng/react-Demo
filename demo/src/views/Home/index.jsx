import React, { Component } from "react";
import Header from "@/components/Header";
class View extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Header />
				<h3>首页</h3>
			</div>
		);
	}
}
export default View;
