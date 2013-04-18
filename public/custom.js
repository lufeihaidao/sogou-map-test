function randompos(){
  //generate hangzhou latlng, by google map coordinate 
  var position_lng = (Math.floor(Math.random()*236096090)+11834493340)/10e7;
  var position_lat = (Math.floor(Math.random()*137775898)+2918875712)/10e7;
  var velocity_lng = (Math.random()*100).toFixed(8);
  var velocity_lat = (Math.random()*100).toFixed(8);
  var trans_time   = (new Date()).toLocaleString();
  //myJSONString = "{'localdata':{'position':{'lat': "+position_lat+", 'lng': "+position_lng+"}, 'velocity':{'lat': "+velocity_lat+", 'lng': "+velocity_lng+"}, 'transtime': '"+trans_time+"'}}"
  //console.log(myJSONString)
  var myJSONObject = {"local_data":{"position":{"lat":position_lat, "lng":position_lng}, "velocity":{"lat":velocity_lat, "lng":velocity_lng}, "transtime":trans_time}}
  return myJSONObject;
  //$('#display').html(myJSONString);
}
function showrandompos(){
  var pos1 = randompos();
  //var pos2 = randompos();
  var data = '<ul class="left">位置1：' +
    '<li>经度：' + pos1.local_data.position.lng + '</li>' + 
    '<li>纬度：' + pos1.local_data.position.lat + '</li>' +
    '<li>速度经度：' + pos1.local_data.velocity.lng + '</li>' + 
    '<li>速度纬度：' + pos1.local_data.velocity.lat + '</li>' +
    '<li>时间：' + pos1.local_data.transtime + '</li>' +
    '</ul>' + 
    //'<ul style="float:left">位置2：' +
        //'<li>经度：' + pos2.local_data.position.lng + '</li>' + 
        //'<li>纬度：' + pos2.local_data.position.lat + '</li>' +
        //'<li>速度经度：' + pos2.local_data.velocity.lng + '</li>' + 
        //'<li>速度纬度：' + pos2.local_data.velocity.lat + '</li>' +
        //'<li>时间：' + pos2.local_data.transtime + '</li>' +
    //'</ul>';
    '';

  $.ajax({
    type: "POST",
    url: "local_data",
    data: pos1,
    dataType: "html",
    success: function(data){
      $('#backdisp').html(data)
    }
  });
  $('#display').html(data);
}
function backdisp(){
    //ev.preventDefault();
    $.ajax({
      type: "POST",
      url: "local_data",
      data: myJSONObject,
      dataType: "html",
      success: function(data){
        $('#backdisp').html(data)
      }
    })
}

