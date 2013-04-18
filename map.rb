#!/usr/bin/env ruby
# encoding: utf-8
%w[rubygems sinatra slim json net/http].each{ |gem| require gem }
get('/'){ slim :index }
post '/local_data' do
  #@local_data = JSON.parse(params[:localdata])
  local_data = params["local_data"]
  position, velocity, trans_time = local_data["position"], local_data["velocity"], local_data["transtime"]
  position_lat, position_lng = position["lat"], position["lng"]
  velocity_lat, velocity_lng = velocity["lat"], velocity["lng"]
  #rgeouri = URI("http://api.map.baidu.com/geocoder/v2/\?ak\=AE41c985d0d0771355e6b9c04b4801c4\&output\=json\&location\=#{position_lat},#{position_lng}\&pois\=0")
  rgeouri = URI("http://maps.googleapis.com/maps/api/geocode/json?latlng=#{position_lat},#{position_lng}&sensor=false&language=zh-CN")
  @output = JSON.parse(Net::HTTP.get(rgeouri))
  tranuri = URI("http://api.go2map.com/engine/api/translate/json?points=#{position_lng},#{position_lat}&type=2")
  sogou_coor = JSON.parse(Net::HTTP.get(tranuri))
  #p sogou_coor
  @sogou_y, @sogou_x = sogou_coor["response"]["points"][0]["y"], sogou_coor["response"]["points"][0]["x"]
  #p @sogou_y, @sogou_x
  slim :local
end

