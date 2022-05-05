var shirt_tag, shoe_tag, shirt_price, total, shoe_price, watch_price, bag_price, bag_tag, watch_tag, shirt_tot, shoe_tot, watch_tot, bag_tot;


shirt_tag = [50];
shoe_tag = [100];
bag_tag = [75];
watch_tag = [150];
shirt_price = [];
shoe_price = [];
bag_price = [];
watch_price = [];
shirt_tot = 0;
shoe_tot = 0;
bag_tot = 0;
watch_tot = 0;
total = 0;


document.getElementById('item1').addEventListener('click', (event) => {
  shirt_price.push(shirt_tag[0]);
  total = shirt_price.reduce((a,b) => a+b, 0);
  let element_shirt_total = document.getElementById('shirt-total');
  element_shirt_total.innerText = total;
  shirt_tot = (typeof shirt_tot === 'number' ? shirt_tot : 0) + 1;
  let element_shirt = document.getElementById('shirt');
  element_shirt.innerText = shirt_tot;

});

document.getElementById('item2').addEventListener('click', (event) => {
  shoe_price.push(shoe_tag[0]);
  total = shoe_price.reduce((a,b) => a+b, 0);
  let element_shoe_total = document.getElementById('shoe-total');
  element_shoe_total.innerText = total;
  shoe_tot = (typeof shoe_tot === 'number' ? shoe_tot : 0) + 1;
  let element_shoes = document.getElementById('shoes');
  element_shoes.innerText = shoe_tot;

});

document.getElementById('item3').addEventListener('click', (event) => {
  bag_price.push(bag_tag[0]);
  total = bag_price.reduce((a,b) => a+b, 0);
  let element_bag_total = document.getElementById('bag-total');
  element_bag_total.innerText = total;
  bag_tot = (typeof bag_tot === 'number' ? bag_tot : 0) + 1;
  let element_bag = document.getElementById('bag');
  element_bag.innerText = bag_tot;

});

document.getElementById('item4').addEventListener('click', (event) => {
  watch_price.push(watch_tag[0]);
  total = watch_price.reduce((a,b) => a+b, 0);
  let element_watch_total = document.getElementById('watch-total');
  element_watch_total.innerText = total;
  watch_tot = (typeof watch_tot === 'number' ? watch_tot : 0) + 1;
  let element_watch = document.getElementById('watch');
  element_watch.innerText = watch_tot;

});