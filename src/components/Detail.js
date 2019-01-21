import React , { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../assets/css/ProductList.css';

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			domain: "http://a.itying.com/"
		};
	}
	requestData = (id) => {
		let url = this.state.domain + "api/productcontent?id="+id;
		axios.get(url)
			.then((response) => {
				this.setState({
					list: response.data.result[0]
				});
			})
			.catch((error) => {
			});
	}

	componentDidMount() {
		let id = this.props.match.params.id;
		this.requestData(id);
	}
	render() {
		return (
			<div>
				{console.log(this.state.list)}
				<div>
					<Link to='/'>返回</Link>
				</div>
				<div>
					<div>
						<div className="item">
							<img src={`${this.state.domain}${this.state.list.img_url}`}/>
							<p>{this.state.list.title}</p>
							<p>{this.state.list.price}元/份</p>
						</div>

						<div>
							<h3>商品详情</h3>
							<div dangerouslySetInnerHTML={{__html:  this.state.list.content}} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Detail;