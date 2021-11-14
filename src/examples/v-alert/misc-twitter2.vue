<template>
  <v-app>
    <div id="body1">
      <div class="container1">
        <div class="box">
          <span></span>
          <div class="content">
            <h2>Card one</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a herf="#">Read More</a>
          </div>
        </div>

        <div class="box">
          <span></span>
          <div class="content">
            <h2>Card three</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a herf="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';
export default {
  data() {
    return {
      alert: true,
    }
  },
  mounted() {
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
#body1 {
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

  .box {
    position: relative;
    width: 320px;
    height: 400px;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 20px 30px;
    background: #111;
    &:hover {
      transform: translateY(-20px);
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #ffbc00, #ff0058);
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #ffbc00, #ff0058);
      filter: blur(30px);
    }

      &:nth-child(2) {
			&::before {
				background: linear-gradient(315deg, #4dff03, #00d0ff);
			}
			&::after {
				background: linear-gradient(315deg, #4dff03, #00d0ff);
			}
		}
      span {
			position: absolute;
			top: 6px;
			left: 6px;
			right: 6px;
			bottom: 6px;
			background: rgba(0,0,0,0.6);
			z-index: 2;
      &::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 50%;
				height: 100%;
				background: rgba(255,255,255,0.1);
				pointer-events: none;
			}
        }
		.content {
			position: relative;
			z-index: 10;
			padding: 20px 40px;
			h2 {
				font-size: 2em;
				color: #fff;
				margin-bottom: 10px;
			}
			p {
				font-size: 1.1em;
				color: #fff;
				margin-bottom: 10px;
				line-height: 1.4em;
			}
			a {
				display: inline-block;
				font-size: 1.1em;
				color: #111;
				background: rgba(255,255,255,0.1);
				padding: 10px;
				text-decoration: none;
				font-weight: 700;
			}
		}

  }
}
</style>
