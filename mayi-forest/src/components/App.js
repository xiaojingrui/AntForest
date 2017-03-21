'use strict';


import React from 'react';
import ReactDom from 'react-dom';
import News from './new'
import Rank from './Rank'

import { Router, Route, hashHistory } from 'react-router';


var App = React.createClass({
    getInitialState: function() {
        return {
            give: "give"            //用于添加class
        }
    },
    hideClick:function(index){
        this.setState({
            give:"give shou"
        })
    },
    render: function() {
        return (
            <div>
                <div className="header">
                    <img className="header-img" src="../src/images/header.png" />
                    <div className="my-info">
                        <a href="#/list">
                            <img src="../src/images/user.png" />
                            <div className="my-user">
                                <span>永川"{this.state.give}"</span>
                                <p>3g/17900g</p>
                            </div>
                        </a>
                    </div>
                    <div className={this.state.give} onClick={this.hideClick}>
                        <i>4g</i>
                        <p>
                            <img src="../src/images/er.png" />
                            线下支付
                        </p>
                    </div>
                </div>

                <News />
                <Rank />
                <AddFriend />

                <div className="footer">
                    <p>你每养成一棵树，我们就为你种下一颗真树</p>
                    <p><img src="../src/images/cooper3.png" /></p>
                    <a href="#">了解详情</a>
                </div>
            </div>
        );
    }
});


var AddFriend = React.createClass({
    render: function() {
        return (
            <div>
                <div className="add-friend">
                    <h2>加好友 收能量</h2>
                    <div className="content">
                        <div className="list">
                            <img src="../src/images/user.png" />
                            <p>永生</p>
                            <span>加为好友</span>
                        </div>
                        <div className="list">
                            <img src="../src/images/user.png" />
                            <p>冰粥</p>
                            <span>加为好友</span>
                        </div>
                        <div className="list">
                            <img src="../src/images/user.png" />
                            <p>钟丽曼</p>
                            <span>加为好友</span>
                        </div>
                        <div className="list">
                            <img src="../src/images/user.png" />
                            <p>永生</p>
                            <span>加为好友</span>
                        </div>
                        <div className="list">
                            <img src="../src/images/user.png" />
                            <p>冰粥</p>
                            <span>加为好友</span>
                        </div>
                        <div className="list">
                            <img src="../src/images/user.png" />
                            <p>钟丽曼</p>
                            <span>加为好友</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
var List = React.createClass({
    render: function() {
        return (
            <div>
                <div className="back"><a href="#/">返回首页</a></div>
            </div>
        );
    }
});
//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/list' component={List} />
    </Router>
), document.getElementById('app'));
