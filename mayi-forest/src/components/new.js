//import React from 'react';
import React,{Component} from 'react';//引入react
import ReactDom from 'react-dom'
export default class News extends Component{
//module.export = React.creatClass({
	render() {
		return (
            <div>
                <div className="news">
                    <h2>
                        <p>最新动态</p>
                        <p><img src="../src/images/see.png" /></p>
                    </h2>
                    <ul>
                        <li>
                            <a href="#">
                                <img src="../src/images/user.png" />
                                <em>1g</em>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../src/images/user.png" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../src/images/user.png" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../src/images/user.png" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../src/images/user.png" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../src/images/user.png" />
                            </a>
                        </li>
                    </ul>
                    <div className="list">
                        <div className="human">
                            <b>全章</b>
                            <span>收取1g.线下支付</span>
                        </div>
                        <div className="time">
                            1天前
                        </div>
                    </div>
                    <div className="list">
                        <div className="human">
                            <b>Arica世龙</b>
                            <span>收取1g</span>
                        </div>
                        <div className="time">
                            1天前
                        </div>
                    </div>
                    <div className="list">
                        <div className="human">
                            <b>浙西</b>
                            <span>收取2g</span>
                        </div>
                        <div className="time">
                            03-10
                        </div>
                    </div>
                    <div className="more">
                        <a href="#/list">
                            查看更多动态
                        </a>
                    </div>
                </div>
            </div>
        );

	}
}