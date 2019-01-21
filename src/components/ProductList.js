import React , { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import '../assets/css/ProductList.css';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			domain: "http://a.itying.com/"
		};
	}
	requestData = () => {
		let url = this.state.domain + "api/productlist";
		axios.get(url)
			.then((response) => {
				this.setState({
					list: response.data.result
				});
			})
			.catch((error) => {
			});
	}

	componentDidMount() {
		this.requestData();
	}
	render() {
		return (
			<div>
				<header className="nav">
					<ul>
						<li>热销榜</li>
						<li>点过的菜</li>
						<li>搜你喜欢</li>
					</ul>
				</header>
				<div className="list">
					<ul>
						{this.state.list.map((value, key) => {
							return (
								<li key={key}>
									<h3>{value.title}</h3>
									{/*<img src={require('../assets/images/2.jpg')} alt=""/>*/}
									<ul className="item_list">
										{
											value.list.map((v, k) => {
												return (
													<li key={k}>
														<Link to={`/detail/${v._id}`}>
															<div className="item">
																<img src={`${this.state.domain}${v.img_url}`}/>
																<p>{v.title}</p>
																<p>{v.price}元</p>
															</div>
														</Link>

													</li>
												)
											})}
									</ul>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}
}

export default ProductList;