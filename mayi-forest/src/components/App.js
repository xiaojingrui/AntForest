'use strict';


import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';


var App = React.createClass({
    getInitialState: function() {
        return {
            active: 0             //用于添加class
        }
    },
    hideClick:function(index){
        this.setState({
            active:1
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
                                <span>永川</span>
                                <p>3g/17900g</p>
                            </div>
                        </a>
                    </div>
                    <div className="give" onClick={this.hideClick}>
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
var News = React.createClass({
    render: function() {
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
})
var Rank = React.createClass({
    render: function() {
        return (
            <div>
                <div className="rank">
                    <h2>排行榜</h2>
                    <div className="content">
                        <div className="list-margin">
                            <a href="#/list">
                                <div className="list">
                                    <div className="user-info">
                                        <div className="avatar">
                                            <span><img src="../src/images/king3.png" /></span>
                                            <img src="../src/images/user.png" />
                                        </div>
                                        <div className="user-other">
                                            <b>Arica世龙</b>
                                            <p>以养成2棵树</p>
                                        </div>
                                    </div>
                                    <div className="num">
                                        49.3g
                                    </div>
                                </div>  
                            </a>                        
                        </div>
                        <div className="list-margin">
                            <a href="#/list">
                                <div className="list">
                                    <div className="user-info">
                                        <div className="avatar">
                                             <span><img src="../src/images/king1.png" /></span>
                                            <img src="../src/images/user.png" />
                                        </div>
                                        <div className="user-other">
                                            <b>Arica世龙</b>
                                            <p>以养成2棵树</p>
                                        </div>
                                    </div>
                                    <div className="num">
                                        49.3g
                                    </div>
                                </div>  
                            </a>                        
                        </div>
                        <div className="list-margin">
                            <a href="#/list">
                                <div className="list">
                                    <div className="user-info">
                                        <div className="avatar">
                                             <span><img src="../src/images/king2.png" /></span>
                                            <img src="../src/images/user.png" />
                                        </div>
                                        <div className="user-other">
                                            <b>Arica世龙</b>
                                            <p>以养成2棵树</p>
                                        </div>
                                    </div>
                                    <div className="num">
                                        49.3g
                                    </div>
                                </div>  
                            </a>                        
                        </div>
                        <div className="list-margin">
                            <a href="#/list">
                                <div className="list">
                                    <div className="user-info">
                                        <div className="avatar">
                                             <span>4</span>
                                            <img src="../src/images/user.png" />
                                        </div>
                                        <div className="user-other">
                                            <b>Arica世龙</b>
                                            <p>以养成2棵树</p>
                                        </div>
                                    </div>
                                    <div className="num">
                                        49.3g
                                    </div>
                                </div>  
                            </a>                        
                        </div>

                        <div className="list-margin">
                            <a href="#/list">
                                <div className="list">
                                    <div className="user-info">
                                        <div className="avatar">
                                             <span>5</span>
                                            <img src="../src/images/user.png" />
                                        </div>
                                        <div className="user-other">
                                            <b>Arica世龙</b>
                                            <p>以养成2棵树</p>
                                        </div>
                                    </div>
                                    <div className="num">
                                        49.3g
                                    </div>
                                </div>  
                            </a>                        
                        </div>
                        <div className="list-margin">
                            <a href="#/list">
                                <div className="list">
                                    <div className="user-info">
                                        <div className="avatar">
                                             <span>6</span>
                                            <img src="../src/images/user.png" />
                                        </div>
                                        <div className="user-other">
                                            <b>Arica世龙</b>
                                            <p>以养成2棵树</p>
                                        </div>
                                    </div>
                                    <div className="num">
                                        49.3g
                                    </div>
                                </div>  
                            </a>                        
                        </div>
                        <div className="list-margin">
                            <a href="#/list">
                                <div className="list">
                                    <div className="user-info">
                                        <div className="avatar">
                                             <span>7</span>
                                            <img src="../src/images/user.png" />
                                        </div>
                                        <div className="user-other">
                                            <b>Arica世龙</b>
                                            <p>以养成2棵树</p>
                                        </div>
                                    </div>
                                    <div className="num">
                                        49.3g
                                    </div>
                                </div>  
                            </a>                        
                        </div>
                        <div className="list-margin">
                            <a href="#/list">
                                <div className="list">
                                    <div className="user-info">
                                        <div className="avatar">
                                             <span>8</span>
                                            <img src="../src/images/user.png" />
                                        </div>
                                        <div className="user-other">
                                            <b>Arica世龙</b>
                                            <p>以养成2棵树</p>
                                        </div>
                                    </div>
                                    <div className="num">
                                        49.3g
                                    </div>
                                </div>  
                            </a>                        
                        </div>
                    </div>
                    <div className="more">
                        <a href="#/list">
                            查看更多好友
                        </a>
                    </div>
                </div>
            </div>
        );
    }
})
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
