var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Bengali Sweet", p_image: "images/1.png", p_price: 100},
					{p_id: "2", p_name: "Ghee Mysore", p_image: "images/2.jpeg", p_price: 150},
					{p_id: "3", p_name: "Son Papdi", p_image: "images/3.jpeg", p_price: 200},
					{p_id: "4", p_name: "Milk Mysore", p_image: "images/4.jpeg", p_price: 250},
					{p_id: "5", p_name: "Modhi Laddu", p_image: "images/5.jpeg", p_price: 300},
					{p_id: "6", p_name: "Bhadusa", p_image: "images/6.jpeg", p_price: 350},
					{p_id: "7", p_name: "Milk Bhadusa", p_image: "images/7.jpeg", p_price: 400},
					{p_id: "8", p_name: "Jangerry", p_image: "images/8.jpeg", p_price: 450},
					{p_id: "9", p_name: "Gillabi", p_image: "images/9.jpeg", p_price: 500},
					{p_id: "10", p_name: "Laddu", p_image: "images/10.jpeg", p_price: 550},
					{p_id: "11", p_name: "Milk Burfi", p_image: "images/11.jpeg", p_price: 600},
					{p_id: "12", p_name: "ChandraKala", p_image: "images/12.jpeg", p_price: 650},
					{p_id: "13", p_name: "Booran Puri", p_image: "images/13.jpeg", p_price: 700},
					{p_id: "14", p_name: "Mixture", p_image: "images/14.jpeg", p_price: 750},
					{p_id: "15", p_name: "Sp Mixture", p_image: "images/15.jpeg", p_price: 800},
					{p_id: "16", p_name: "Spicy Balls", p_image: "images/16.jpeg", p_price: 850},
					{p_id: "17", p_name: "Muruku", p_image: "images/17.jpeg", p_price: 900},
					{p_id: "18", p_name: "Spicy Sticks", p_image: "images/18.jpeg", p_price: 950},
					{p_id: "19", p_name: "Achu Muruku", p_image: "images/19.jpeg", p_price: 1000},
					{p_id: "20", p_name: "Mixed Snacks", p_image: "images/20.jpeg", p_price: 1050}
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});