webpackJsonp([2],{0:function(e,t,r){e.exports=r(66)},2:function(e,t,r){"use strict";var s=r(1),a={login:function(e,t,r){s.request({url:s.getServerUrl("/user/login.do"),data:e,method:"POST",success:t,error:r})},checkUsername:function(e,t,r){s.request({url:s.getServerUrl("/user/check_valid.do"),data:{type:"username",str:e},method:"POST",success:t,error:r})},checkPhone:function(e,t,r){s.request({url:s.getServerUrl("/user/check_valid.do"),data:{type:"phone",str:e},method:"POST",success:t,error:r})},checkEmail:function(e,t,r){s.request({url:s.getServerUrl("/user/check_valid.do"),data:{type:"email",str:e},method:"POST",success:t,error:r})},register:function(e,t,r){s.request({url:s.getServerUrl("/user/register.do"),data:e,method:"POST",success:t,error:r})},checkLogin:function(e,t){s.request({url:s.getServerUrl("/user/get_user_info.do"),method:"POST",success:e,error:t})},getQuestion:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_get_question.do"),data:{username:e},method:"POST",success:t,error:r})},checkAnswer:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_check_answer.do"),data:e,method:"POST",success:t,error:r})},resetPassword:function(e,t,r){s.request({url:s.getServerUrl("/user/forget_reset_password.do"),data:e,method:"POST",success:t,error:r})},getUserInfo:function(e,t){s.request({url:s.getServerUrl("/user/get_information.do"),method:"POST",success:e,error:t})},updateUserInfo:function(e,t,r){s.request({url:s.getServerUrl("/user/update_information.do"),data:e,method:"POST",success:t,error:r})},updatePassword:function(e,t,r){s.request({url:s.getServerUrl("/user/update_password.do"),data:e,method:"POST",success:t,error:r})},logout:function(e,t){s.request({url:s.getServerUrl("/user/logout.do"),method:"POST",success:e,error:t})}};e.exports=a},3:function(e,t,r){"use strict";var s=r(1),a={getCartCount:function(e,t){s.request({url:s.getServerUrl("/cart/get_cart_product_count.do"),success:e,error:t})},addToCart:function(e,t,r){s.request({method:"post",url:s.getServerUrl("/cart/add.do"),data:e,success:t,error:r})},getCartList:function(e,t){s.request({url:s.getServerUrl("/cart/list.do"),success:e,error:t})},selectProduct:function(e,t,r){s.request({method:"post",url:s.getServerUrl("/cart/select.do"),data:{productId:e},success:t,error:r})},unselectProduct:function(e,t,r){s.request({method:"post",url:s.getServerUrl("/cart/un_select.do"),data:{productId:e},success:t,error:r})},selectAllProduct:function(e,t){s.request({method:"post",url:s.getServerUrl("/cart/select_all.do"),success:e,error:t})},unselectAllProduct:function(e,t){s.request({method:"post",url:s.getServerUrl("/cart/un_select_all.do"),success:e,error:t})},updateProduct:function(e,t,r){s.request({method:"post",url:s.getServerUrl("/cart/update.do"),data:e,success:t,error:r})},deleteProduct:function(e,t,r){s.request({method:"post",url:s.getServerUrl("/cart/delete_product.do"),data:{productIds:e},success:t,error:r})}};e.exports=a},4:function(e,t){},5:function(e,t){},6:function(e,t,r){"use strict";r(4);var s=r(1),a={init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){var e=s.getUrlParam("keyword");e&&$("#search-input").val(e)},bindEvent:function(){var e=this;$("#search-btn").click(function(){e.searchSubmit()}),$("#search-input").keyup(function(t){13===t.keyCode&&e.searchSubmit()})},searchSubmit:function(){var e=$.trim($("#search-input").val());e?window.location.href="./list.html?keyword="+e:s.goHome()}};a.init()},7:function(e,t,r){"use strict";r(5);var s=r(1),a=r(2),o=r(3),n={init:function(){return this.bindEvent(),this.loadUserInfo(),this.loadCartCount(),this},bindEvent:function(){$(".js-login").click(function(){s.doLogin()}),$(".js-register").click(function(){window.location.href="./user-register.html"}),$(".js-logout").click(function(){a.logout(function(e){window.location.reload()},function(e){s.errorTips(e)})})},loadUserInfo:function(){a.checkLogin(function(e){$(".user.not-login").hide().siblings(".user.login").show().find(".username").text(e.username)},function(e){})},loadCartCount:function(){o.getCartCount(function(e){$(".nav .cart-count").text(e||0)},function(e){$(".nav .cart-count").text(0)})}};e.exports=n.init()},8:function(e,t){},9:function(e,t){e.exports='{{#navList}} {{#isActive}} <li class="nav-item active"> {{/isActive}} {{^isActive}} </li><li class=nav-item> {{/isActive}} <a class=link href={{href}}>{{desc}}</a> </li> {{/navList}} '},10:function(e,t,r){"use strict";r(8);var s=r(1),a=r(9),o={option:{name:"",navList:[{name:"user-center",desc:"个人中心",href:"./user-center.html"},{name:"order-list",desc:"我的订单",href:"./order-list.html"},{name:"user-pass-update",desc:"修改密码",href:"./user-pass-update.html"},{name:"about",desc:"关于MMall",href:"./about.html"}]},init:function(e){$.extend(this.option,e),this.renderNav()},renderNav:function(){for(var e=0,t=this.option.navList.length;e<t;e++)this.option.navList[e].name===this.option.name&&(this.option.navList[e].isActive=!0);var r=s.renderHtml(a,{navList:this.option.navList});$(".nav-side").html(r)}};e.exports=o},13:function(e,t,r){"use strict";var s=r(1),a={getProductList:function(e,t){s.request({url:s.getServerUrl("/order/get_order_cart_product.do"),success:e,error:t})},createOrder:function(e,t,r){s.request({method:"post",url:s.getServerUrl("/order/create.do"),data:e,success:t,error:r})},getOrderList:function(e,t,r){s.request({url:s.getServerUrl("/order/list.do"),data:e,success:t,error:r})},getOrderDetail:function(e,t,r){s.request({url:s.getServerUrl("/order/detail.do"),data:{orderNo:e},success:t,error:r})},cancelOrder:function(e,t,r){s.request({method:"post",url:s.getServerUrl("/order/cancel.do"),data:{orderNo:e},success:t,error:r})}};e.exports=a},14:function(e,t){},15:function(e,t){e.exports='<div class=pg-content> {{#pageArray}} {{#disabled}} <span class="pg-item disabled" data-value={{value}}>{{name}}</span> {{/disabled}} {{^disabled}} {{#active}} <span class="pg-item active" data-value={{value}}>{{name}}</span> {{/active}} {{^active}} <span class=pg-item data-value={{value}}>{{name}}</span> {{/active}} {{/disabled}} {{/pageArray}} <span class=pg-total>{{pageNum}} / {{pages}}</span> </div>'},17:function(e,t,r){"use strict";r(14);var s=r(1),a=r(15),o=function(){var e=this;this.defaultOption={container:null,pageNum:1,pageRange:3,onSelectPage:null},$(document).on("click",".pg-item",function(){var t=$(this);t.hasClass("active")||t.hasClass("disabled")||("function"==typeof e.option.onSelectPage?e.option.onSelectPage(t.data("value")):null)})};o.prototype.render=function(e){this.option=$.extend({},this.defaultOption,e),this.option.container instanceof jQuery&&(this.option.pages<=1||this.option.container.html(this.getPaginationHtml()))},o.prototype.getPaginationHtml=function(){var e="",t=this.option,r=[],o=t.pageNum-t.pageRange>0?t.pageNum-t.pageRange:1,n=t.pageNum+t.pageRange<t.pages?t.pageNum+t.pageRange:t.pages;r.push({name:"上一页",value:this.option.prePage,disabled:!this.option.hasPreviousPage});for(var i=o;i<=n;i++)r.push({name:i,value:i,active:i===t.pageNum});return r.push({name:"下一页",value:this.option.nextPage,disabled:!this.option.hasNextPage}),e=s.renderHtml(a,{pageArray:r,pageNum:t.pageNum,pages:t.pages})},e.exports=o},28:function(e,t){},49:function(e,t){e.exports='<table class="order-list-table header"> <tr> <th class="cell cell-img">&nbsp;</th> <th class="cell cell-info">商品信息</th> <th class="cell cell-price">单价</th> <th class="cell cell-count">数量</th> <th class="cell cell-total">小计</th> </tr> </table> {{#list}} <table class="order-list-table order-item"> <tr> <td colspan=5 class=order-info> <span class=order-text> <span>订单号：</span> <a class="link order-num" href="./order-detail.html?orderNumber={{orderNo}}" target=_blank>{{orderNo}}</a> </span> <span class=order-text>{{createTime}}</span> <span class=order-text>收件人：{{receiverName}}</span> <span class=order-text>订单状态：{{statusDesc}}</span> <span class=order-text> <span>订单总价：</span> <span class=order-total>￥{{payment}}</span> </span> <a class="link order-detail" href="./order-detail.html?orderNumber={{orderNo}}" target=_blank>查看详情></a> </td> </tr> {{#orderItemVoList}} <tr> <td class="cell cell-img"> <a href="./detail.html?productId={{productId}}" target=_blank> <img class=p-img src={{imageHost}}{{productImage}} alt={{productName}} /> </a> </td> <td class="cell cell-info"> <a class=link href="./detail.html?productId={{productId}}" target=_blank>{{productName}}</a> </td> <td class="cell cell-price">￥{{currentUnitPrice}}</td> <td class="cell cell-count">{{quantity}}</td> <td class="cell cell-total">￥{{totalPrice}}</td> </tr> {{/orderItemVoList}} </table> {{/list}} {{^list}} <p class=err-tip>您暂时还没有订单</p> {{/list}}'},66:function(e,t,r){"use strict";r(28),r(7),r(6);var s=r(10),a=r(1),o=r(13),n=r(17),i=r(49),c={data:{listParam:{pageNum:1,pageSize:10}},init:function(){this.onLoad()},onLoad:function(){this.loadOrderList(),s.init({name:"order-list"})},loadOrderList:function(){var e=this,t="",r=$(".order-list-con");r.html('<div class="loading"></div>'),o.getOrderList(this.data.listParam,function(s){t=a.renderHtml(i,s),r.html(t),e.loadPagination({hasPreviousPage:s.hasPreviousPage,prePage:s.prePage,hasNextPage:s.hasNextPage,nextPage:s.nextPage,pageNum:s.pageNum,pages:s.pages})},function(e){r.html('<p class="err-tip">加载订单失败，请刷新后重试</p>')})},loadPagination:function(e){var t=this;this.pagination?"":this.pagination=new n,this.pagination.render($.extend({},e,{container:$(".pagination"),onSelectPage:function(e){t.data.listParam.pageNum=e,t.loadOrderList()}}))}};$(function(){c.init()})}});