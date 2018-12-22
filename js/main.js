// var prints = [
// 	{
// 		img: "img/bear.jpg",
// 		name: "Bear",
// 		price: 25
// 	},
// 	{
// 		img: "img/octopi.jpg",
// 		name: "Octopi",
// 		price: 12
// 	},
// 	{
// 		img: "img/HDM.jpg",
// 		name: "His Dark Materials",
// 		price: 18
// 	}
// ];

const home = {
	template: '<h1 class="home">This is my Home Page</h1>'
}

const services = {
	template: '<h1 class="services">This is my services Page</h1>'
}

const jobs = {
	template: '<h1 class="jobs">This is my Jobs Page</h1>'
}



const router = new VueRouter({
	routes: [
	{
		path: "/home",
		component: home
	},

	{ 
		path: "/services",
		component: services

	},
	{
		path: "/jobs",
		component: jobs
	}

	]
})
	
	new Vue({
		router,
		el: "#app",
		data: {

		}
	}).$mpount('#app')