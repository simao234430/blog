<template>
<v-app  >
  <div id="body">
	<div   class="container1">
        <div   class="card">
            <div class="contentBox">
                <h2>01</h2>
                <h3>Design</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ...</p>
                <a href="#"><span>Read More</span></a>
            </div>
        </div>

        <div    class="card">
            <div  class="contentBox">
                <h2>02</h2>
                <h3>Design</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ...</p>
                <a href="#"><span>Read More</span></a>
            </div>
        </div>
	</div>
	</div>
</v-app>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';
  export default {
    data () {
      return {
        alert: true,
      }
    },
        mounted(){
VanillaTilt.init(document.querySelectorAll(".container1 .card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});
    },
  }
</script>

<style lang="scss">

#body:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(#f00, #f0F);
	clip-path: circle(30% at  88% 77%);
}

#body:after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(#2196f3, #e91e63);
	clip-path: circle(20% at 12% 12%);
}
#body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #161624;
}
.container1 {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	z-index: 1;
	.card {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 320px;
		height: 480px;
		margin: 28px;
		flex-wrap: wrap;
		box-shadow: 20px 20px 50px rgba(0,0,0, 0.5);
		border-radius: 15px;
		border-top: 1px solid rgba(255,255,255,0.5);
		border-left: 1px solid rgba(255,255,255,0.5);
		background: rgba(255,255,255,0.1);
		backdrop-filter: blur(5px);
		overflow: hidden;
		.contentBox {
			padding: 20px;
			text-align: center;
			transform: translateY(100px);
			opacity: 0;
			transition: 0.5;
			a {
				position: relative;
				display: inline-block;
				padding: 8px 20px;
				margin-top: 15px;
				background: #fff;
				border-top: 1px solid rgba(255,255,255,0.1);
				border-left: 1px solid rgba(255,255,255,0.1);
				color: #000;
				border-radius: 20px;
				text-decoration: none;
				font-weight: 500;
				box-shadow: 0 5px 15px rgba(0,0,0,0.2);
			}
			p {
				z-index: 12;
				margin: 20px auto 10px;
				position: relative;
				color: #fff;
				span {
					font-weight: 700;
				}
			}
			h3 {
				font-size: 1.8em;
				color: #fff;
				z-index: 1;
			}
			h2 {
				position: absolute;
				top: -120px;
				left: 100px;
				width: 100%;
				font-size: 4em;
				text-transform: uppercase;
				font-weight: 500;
				letter-spacing: 2px;
				color: rgba(0,0,0,0.2);
			}
		}
		&:hover {
			.contentBox {
				transform: translateY(0px);
				opacity: 1;
				transition: 0.5s;
			}
		}
	}
}
</style>
