function showmap(){
  var myLatLng = new sogou.maps.Point(13375156,3519531);
      var myOptions = {
            'zoom': 10,
            'center': myLatLng
          };
      $('#map').empty();
      var map = new sogou.maps.Map(document.getElementById("map"), myOptions);
       
      //var destination = new sogou.maps.Point(13006516,4892623);
      var origin = new sogou.maps.Point($('#sogou_x').text(),$('#sogou_y').text()); 
      var request={
           'map':map,      
           'destination': "杭州浙江大学玉泉校区",//destination,
           'origin': origin,
           'tactic':$('#tactic')[0].value       //驾车策略。 0： 距离短；1 ：时间短 默认策略 （不选为1）；2 ：不走高速
       
      }
      //console.log(request.tactic);
  var nav=new sogou.maps.Driving();
  nav.route(request);
  //面板
  $('#result').empty();
  nav.setRenderer(new sogou.maps.DrivingRenderer({'panel':document.getElementById('result')}));
}
