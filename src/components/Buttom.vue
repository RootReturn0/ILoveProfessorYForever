<<template>
    <div id="buttom">
        <!-- footer -->
	<footer>
		<div class="container">
			<div class="agileits-w3layouts-footer-grids">
				<div class="col-md-4 footer-left">
					<h3>
						<a href="index.html">Cat <span>Club</span></a>
					</h3>
					<div class="footer-social-grids">
						<ul>
							<li><a href="https://weibo.com/u/5906341217"><i class="fa fa-weibo"></i></a></li>
							<li><a href="http://47.102.116.29:5050/wexin.jpg" data-lightbox="ss" ><i class="fa fa-weixin"></i></a></li>
							<li><a href="http://47.102.116.29:5050/qq.jpg" data-lightbox="sss"><i class="fa fa-qq"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="col-md-4 footer-left">
					<h4>目录</h4>
					<div class="col-md-6 footer-grid-left">
						<ul>
							<li>
                                    <router-link to="/">主页</router-link>
                                </li>
                                <li>
                                    <router-link to="/About">简介</router-link>
                                </li>
                                <li>
                                    <router-link to="/Cats">领养</router-link>
                                </li>
						</ul>
					</div>
					<div class="col-md-6 footer-grid-left">
						<ul>
							 <li>
                                    <router-link to="/Gallery">相册</router-link>
                                </li>
                                <li>
                                    <router-link to="/Blog">活动</router-link>
                                </li>
                                <li>
                                    <router-link to="/Contact">联系我们</router-link>
                                </li>
						</ul>
					</div>
					<div class="clearfix"> </div>
				</div>
				<div class="col-md-4 footer-left">
					<h4>致谢</h4>
					<p>感谢您对猫咪们的关心以及对猫盟的支持！如果您有任何宝贵的意见或建议，请联系我们！</p>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</footer>
	<!-- footer -->
	<div class="copyright">
		<div class="container">
			<p>© 2019 Cat Club. All rights reserved | Design by 哈哈哈</p>
		</div>
	</div>
    <a href="#" id="toTop" style="display: block;">
        <span id="toTopHover" style="opacity: 0;"></span>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">到达顶点</font>
        </font>
    </a>
    </div>
    </div>
</template>>

<script>
import wxImg from '@/assets/images/WXQR.jpg'
import qqImg from '@/assets/images/QQQR.png'
export default {
  name: "Buttom",
};
</script>